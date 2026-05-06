import { useState } from "react";
import type { BookingData } from "../types/booking.types";

export const useBookingState = () => {
  const [step, setStep] = useState(1);

  const [bookingData, setBookingData] = useState<BookingData>({
    services: [],
    staff: null,
    date: "",
    slot: null,
    customer: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const nextStep = () => {
    setStep((prev: number) => prev + 1);
  };
  const prevStep = () => setStep((prev: number) => prev - 1);

  const resetBooking = () => {
    setStep(1);
    setBookingData({
      services: [],
      staff: null,
      date: "",
      slot: null,
      customer: {
        name: "",
        email: "",
        phone: "",
      },
    });
  };

  return {
    step,
    bookingData,
    setBookingData,
    nextStep,
    prevStep,
    resetBooking,
  };
};
