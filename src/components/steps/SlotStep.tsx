import React from "react";
import type {
  BookingData,
  Slot,
} from "../../types/booking.types";

interface Props {
  slots: Slot[];
  bookingData: BookingData;
  setBookingData: React.Dispatch<
    React.SetStateAction<BookingData>
  >;
  nextStep: () => void;
  prevStep: () => void;
}

export default function SlotStep({
  slots,
  bookingData,
  setBookingData,
  nextStep,
  prevStep,
}: Props) {
  const handleContinue = () => {
    if (!bookingData.slot) {
      alert("Please select a time slot");
      return;
    }

    nextStep();
  };

  return (
    <div>
      <h3 className="mb-4 fw-bold">Select Time Slot</h3>

      <div className="row g-3">
        {slots.map((slot) => {
          const selected = bookingData.slot?.id === slot.id;

          return (
            <div
              className="col-6 col-md-4 col-lg-3"
              key={slot.id}
            >
              <button
                className={`btn w-100 py-3 border-2 ${
                  selected
                    ? "btn-primary"
                    : slot.available
                    ? "btn-outline-primary"
                    : "btn-light text-muted"
                }`}
                disabled={!slot.available}
                onClick={() =>
                  setBookingData((prev) => ({
                    ...prev,
                    slot,
                  }))
                }
              >
                {slot.time}
              </button>
            </div>
          );
        })}
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