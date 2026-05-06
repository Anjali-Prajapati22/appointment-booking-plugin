import React from "react";
import type { BookingData } from "../../types/booking.types";
interface Props {
    bookingData: BookingData;
    setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;
    nextStep: () => void;
    prevStep: () => void;
}
export default function DateStep({ bookingData, setBookingData, nextStep, prevStep, }: Props): any;
export {};
