interface Props {
  step: number;
}

const labels = [
  "Services",
  "Staff",
  "Date",
  "Slot",
  "Details",
  "Confirm",
];

export default function StepperHeader({ step }: Props) {
  return (
    <div className="booking-stepper mb-4">
      <div className="d-flex justify-content-between flex-wrap gap-2">
        {labels.map((label, index) => (
          <div
            key={label}
            className={`step-item ${
              step >= index + 1 ? "active" : ""
            }`}
          >
            <span>{index + 1}</span>
            <small>{label}</small>
          </div>
        ))}
      </div>
    </div>
  );
}