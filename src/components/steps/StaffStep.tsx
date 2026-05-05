import React from "react";
import type {
  BookingData,
  Staff,
} from "../../types/booking.types";

interface Props {
  staff: Staff[];
  bookingData: BookingData;
  setBookingData: React.Dispatch<
    React.SetStateAction<BookingData>
  >;
  nextStep: () => void;
  prevStep: () => void;
  allowAnyStaff?: boolean;
}

export default function StaffStep({
  staff,
  bookingData,
  setBookingData,
  nextStep,
  prevStep,
  allowAnyStaff = true,
}: Props) {
  const selectStaff = (selectedStaff: Staff | null) => {
    setBookingData((prev) => ({
      ...prev,
      staff: selectedStaff,
    }));
  };

  const handleContinue = () => {
    if (!bookingData.staff && !allowAnyStaff) {
      alert("Please select a staff member");
      return;
    }

    nextStep();
  };

  return (
    <div>
      <h3 className="mb-4 fw-bold">Select Staff</h3>

      <div className="row g-3">
        {allowAnyStaff && (
          <div className="col-md-4">
            <div
              className={`card h-100 text-center border-2 ${
                bookingData.staff === null
                  ? "border-primary bg-primary-subtle"
                  : ""
              }`}
              onClick={() => selectStaff(null)}
              style={{ cursor: "pointer" }}
            >
              <div className="card-body">
                <h5 className="fw-semibold">Any Staff</h5>
                <p className="text-muted small mb-0">
                  Assign automatically
                </p>
              </div>
            </div>
          </div>
        )}

        {staff.map((member) => {
          const selected = bookingData.staff?.id === member.id;

          return (
            <div className="col-md-4" key={member.id}>
              <div
                className={`card h-100 text-center border-2 ${
                  selected ? "border-primary bg-primary-subtle" : ""
                }`}
                onClick={() => selectStaff(member)}
                style={{ cursor: "pointer" }}
              >
                <div className="card-body">
                  <img
                    src={
                      member.image ||
                      "https://via.placeholder.com/80"
                    }
                    alt={member.name}
                    className="rounded-circle mb-3"
                    width={80}
                    height={80}
                  />

                  <h5 className="fw-semibold mb-1">
                    {member.name}
                  </h5>

                  {member.role && (
                    <p className="text-muted small mb-0">
                      {member.role}
                    </p>
                  )}
                </div>
              </div>
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