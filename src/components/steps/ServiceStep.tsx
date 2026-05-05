import React from "react";
import type {
  BookingData,
  Service,
} from "../../types/booking.types";

interface Props {
  services: Service[];
  bookingData: BookingData;
  setBookingData: React.Dispatch<
    React.SetStateAction<BookingData>
  >;
  nextStep: () => void;
}

export default function ServiceStep({
  services,
  bookingData,
  setBookingData,
  nextStep,
}: Props) {
  const toggleService = (service: Service) => {
    const exists = bookingData.services.some(
      (item) => item.id === service.id
    );

    if (exists) {
      setBookingData((prev) => ({
        ...prev,
        services: prev.services.filter(
          (item) => item.id !== service.id
        ),
      }));
    } else {
      setBookingData((prev) => ({
        ...prev,
        services: [...prev.services, service],
      }));
    }
  };

  const handleContinue = () => {
    if (!bookingData.services.length) {
      alert("Please select at least one service");
      return;
    }

    nextStep();
  };

  return (
    <div>
      <h3 className="mb-4 fw-bold">Select Services</h3>

      <div className="row g-3">
        {services.map((service) => {
          const selected = bookingData.services.some(
            (item) => item.id === service.id
          );

          return (
            <div className="col-md-6" key={service.id}>
              <div
                className={`card h-100 border-2 service-card ${
                  selected ? "border-primary bg-primary-subtle" : ""
                }`}
                onClick={() => toggleService(service)}
                style={{ cursor: "pointer" }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 className="fw-semibold mb-1">
                        {service.name}
                      </h5>

                      {service.description && (
                        <p className="text-muted small mb-2">
                          {service.description}
                        </p>
                      )}

                      <small className="text-secondary">
                        Duration: {service.duration} mins
                      </small>
                    </div>

                    <span className="badge bg-dark">
                      ₹{service.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 d-flex justify-content-end">
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