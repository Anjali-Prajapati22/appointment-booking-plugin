import type { BookingData } from "../../types/booking.types";
interface Props {
    bookingData: BookingData;
    prevStep: () => void;
    onComplete: (data: BookingData) => Promise<void> | void;
}
export default function ConfirmStep({ bookingData, prevStep, onComplete, }: Props): any;
export {};
