import React from "react";
import type { BookingData, Service } from "../../types/booking.types";
interface Props {
    services: Service[];
    bookingData: BookingData;
    setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;
    nextStep: () => void;
}
export default function ServiceStep({ services, bookingData, setBookingData, nextStep, }: Props): any;
export {};
