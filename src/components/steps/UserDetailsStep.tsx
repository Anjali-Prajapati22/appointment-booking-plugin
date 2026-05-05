import React, { useState } from "react";
import type { BookingData, Customer } from "../../types/booking.types";

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
}

interface Props {
  bookingData: BookingData;
  setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;
  nextStep: () => void;
  prevStep: () => void;
}

export default function UserDetailsStep({
  bookingData,
  setBookingData,
  nextStep,
  prevStep,
}: Props) {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validate = () => {
    const newErrors: ValidationErrors = {};

    if (!bookingData.customer.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!bookingData.customer.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingData.customer.email)
    ) {
      newErrors.email = "Invalid email";
    }

    if (!bookingData.customer.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(bookingData.customer.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (!validate()) return;
    nextStep();
  };

  const handleChange = (
    field: keyof Customer,
    value: string
  ) => {
    setBookingData((prev) => ({
      ...prev,
      customer: {
        ...prev.customer,
        [field]: value,
      },
    }));
  };

  return (
    <div>
      <h3 className="mb-4 fw-bold">Your Details</h3>

      <div className="card p-4">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={bookingData.customer.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={bookingData.customer.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            value={bookingData.customer.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone}</div>
          )}
        </div>
      </div>

      <div className="mt-4 d-flex justify-content-between">
        <button className="btn btn-outline-secondary" onClick={prevStep}>
          Back
        </button>

        <button className="btn btn-primary px-4" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}