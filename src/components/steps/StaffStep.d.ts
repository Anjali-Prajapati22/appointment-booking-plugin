import React from "react";
import type { BookingData, Staff } from "../../types/booking.types";
interface Props {
    staff: Staff[];
    bookingData: BookingData;
    setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;
    nextStep: () => void;
    prevStep: () => void;
    allowAnyStaff?: boolean;
}
export default function StaffStep({ staff, bookingData, setBookingData, nextStep, prevStep, allowAnyStaff, }: Props): any;
export {};
