import React from "react";
import type { BookingData, Slot } from "../../types/booking.types";
interface Props {
    slots: Slot[];
    bookingData: BookingData;
    setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;
    nextStep: () => void;
    prevStep: () => void;
}
export default function SlotStep({ slots, bookingData, setBookingData, nextStep, prevStep, }: Props): any;
export {};
