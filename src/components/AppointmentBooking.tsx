import StepperHeader from "./StepperHeader";
import { useBookingState } from "../hooks/useBookingState";

import ServiceStep from "./steps/ServiceStep";
import StaffStep from "./steps/StaffStep";
import DateStep from "./steps/DateStep";
import SlotStep from "./steps/SlotStep";
import UserDetailsStep from "./steps/UserDetailsStep";
import ConfirmStep from "./steps/ConfirmStep";
import type { AppointmentBookingProps } from "../types/booking.types";


export default function AppointmentBooking({
  services,
  staff,
  slots,
  onComplete,
  allowAnyStaff = true,
}: AppointmentBookingProps) {
  const {
    step,
    bookingData,
    setBookingData,
    nextStep,
    prevStep,
  } = useBookingState();

  return (
    <div className="appointment-booking-plugin card shadow p-4">
      <StepperHeader step={step} />

      {step === 1 && (
        <ServiceStep
          services={services}
          bookingData={bookingData}
          setBookingData={setBookingData}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <StaffStep
          staff={staff}
          bookingData={bookingData}
          setBookingData={setBookingData}
          nextStep={nextStep}
          prevStep={prevStep}
          allowAnyStaff={allowAnyStaff}
        />
      )}

      {step === 3 && (
        <DateStep
          bookingData={bookingData}
          setBookingData={setBookingData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 4 && (
        <SlotStep
          slots={slots}
          bookingData={bookingData}
          setBookingData={setBookingData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 5 && (
        <UserDetailsStep
          bookingData={bookingData}
          setBookingData={setBookingData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 6 && (
        <ConfirmStep
          bookingData={bookingData}
          prevStep={prevStep}
          onComplete={onComplete}
        />
      )}
    </div>
  );
}