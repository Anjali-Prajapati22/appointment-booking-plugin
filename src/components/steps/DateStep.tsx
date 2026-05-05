import React from "react";
import type { BookingData } from "../../types/booking.types";

interface Props {
  bookingData: BookingData;
  setBookingData: React.Dispatch<
    React.SetStateAction<BookingData>
  >;
  nextStep: () => void;
  prevStep: () => void;
}

export default function DateStep({
  bookingData,
  setBookingData,
  nextStep,
  prevStep,
}: Props) {
  const today = new Date().toISOString().split("T")[0];

  const handleContinue = () => {
    if (!bookingData.date) {
      alert("Please select a date");
      return;
    }

    nextStep();
  };

  return (
    <div>
      <h3 className="mb-4 fw-bold">Select Appointment Date</h3>

      <div className="card p-4">
        <label className="form-label fw-medium">
          Choose Date
        </label>

        <input
          type="date"
          className="form-control"
          min={today}
          value={bookingData.date}
          onChange={(e) =>
            setBookingData((prev) => ({
              ...prev,
              date: e.target.value,
            }))
          }
        />
      </div>

      <div className="mt-4 d-flex justify-content-between">
        <button
          className="btn btn-outline-secondary"
          onClick={prevStep}
        >
          Back
        </button>

        <button
          className="btn btn-primary px-4"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}