import { useState } from "react";
export const useBookingState = () => {
    const [step, setStep] = useState(1);
    const [bookingData, setBookingData] = useState({
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
        setStep((prev) => prev + 1);
    };
    const prevStep = () => setStep((prev) => prev - 1);
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
