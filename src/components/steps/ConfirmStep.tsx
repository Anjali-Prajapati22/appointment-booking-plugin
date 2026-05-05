import { useState } from "react";
import type { BookingData } from "../../types/booking.types";

interface Props {
  bookingData: BookingData;
  prevStep: () => void;
  onComplete: (data: BookingData) => Promise<void> | void;
}

export default function ConfirmStep({
  bookingData,
  prevStep,
  onComplete,
}: Props) {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);
      await onComplete(bookingData);
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Something went wrong while confirming booking.");
    } finally {
      setLoading(false);
    }
  };

  const totalPrice = bookingData.services.reduce(
    (sum, service) => sum + service.price,
    0
  );

  const totalDuration = bookingData.services.reduce(
    (sum, service) => sum + service.duration,
    0
  );

  return (
    <div>
      <h3 className="mb-4 fw-bold">Confirm Appointment</h3>

      <div className="card p-4">
        <h5 className="mb-3">Booking Summary</h5>

        <div className="mb-3">
          <strong>Services:</strong>
          <ul className="mb-0 mt-2">
            {bookingData.services.map((service) => (
              <li key={service.id}>
                {service.name} — ₹{service.price}
              </li>
            ))}
          </ul>
        </div>

        <p>
          <strong>Staff:</strong> {bookingData.staff?.name || "Any Staff"}
        </p>

        <p>
          <strong>Date:</strong> {bookingData.date}
        </p>

        <p>
          <strong>Time:</strong> {bookingData.slot?.time}
        </p>

        <p>
          <strong>Name:</strong> {bookingData.customer.name}
        </p>

        <p>
          <strong>Email:</strong> {bookingData.customer.email}
        </p>

        <p>
          <strong>Phone:</strong> {bookingData.customer.phone}
        </p>

        <hr />

        <p>
          <strong>Total Duration:</strong> {totalDuration} mins
        </p>

        <p>
          <strong>Total Price:</strong> ₹{totalPrice}
        </p>
      </div>

      <div className="mt-4 d-flex justify-content-between">
        <button className="btn btn-outline-secondary" onClick={prevStep}>
          Back
        </button>

        <button
          className="btn btn-success px-4"
          onClick={handleConfirm}
          disabled={loading}
        >
          {loading ? "Confirming..." : "Confirm Appointment"}
        </button>
      </div>
    </div>
  );
}