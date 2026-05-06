import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import StepperHeader from "./StepperHeader";
import { useBookingState } from "../hooks/useBookingState";
import ServiceStep from "./steps/ServiceStep";
import StaffStep from "./steps/StaffStep";
import DateStep from "./steps/DateStep";
import SlotStep from "./steps/SlotStep";
import UserDetailsStep from "./steps/UserDetailsStep";
import ConfirmStep from "./steps/ConfirmStep";
export default function AppointmentBooking({ services, staff, slots, onComplete, allowAnyStaff = true, }) {
    const { step, bookingData, setBookingData, nextStep, prevStep, } = useBookingState();
    return (_jsxs("div", { className: "appointment-booking-plugin card shadow p-4", children: [_jsx(StepperHeader, { step: step }), step === 1 && (_jsx(ServiceStep, { services: services, bookingData: bookingData, setBookingData: setBookingData, nextStep: nextStep })), step === 2 && (_jsx(StaffStep, { staff: staff, bookingData: bookingData, setBookingData: setBookingData, nextStep: nextStep, prevStep: prevStep, allowAnyStaff: allowAnyStaff })), step === 3 && (_jsx(DateStep, { bookingData: bookingData, setBookingData: setBookingData, nextStep: nextStep, prevStep: prevStep })), step === 4 && (_jsx(SlotStep, { slots: slots, bookingData: bookingData, setBookingData: setBookingData, nextStep: nextStep, prevStep: prevStep })), step === 5 && (_jsx(UserDetailsStep, { bookingData: bookingData, setBookingData: setBookingData, nextStep: nextStep, prevStep: prevStep })), step === 6 && (_jsx(ConfirmStep, { bookingData: bookingData, prevStep: prevStep, onComplete: onComplete }))] }));
}
