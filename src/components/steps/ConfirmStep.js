import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function ConfirmStep({ bookingData, prevStep, onComplete, }) {
    const [loading, setLoading] = useState(false);
    const handleConfirm = async () => {
        try {
            setLoading(true);
            await onComplete(bookingData);
        }
        catch (error) {
            console.error("Booking failed:", error);
            alert("Something went wrong while confirming booking.");
        }
        finally {
            setLoading(false);
        }
    };
    const totalPrice = bookingData.services.reduce((sum, service) => sum + service.price, 0);
    const totalDuration = bookingData.services.reduce((sum, service) => sum + service.duration, 0);
    return (_jsxs("div", { children: [_jsx("h3", { className: "mb-4 fw-bold", children: "Confirm Appointment" }), _jsxs("div", { className: "card p-4", children: [_jsx("h5", { className: "mb-3", children: "Booking Summary" }), _jsxs("div", { className: "mb-3", children: [_jsx("strong", { children: "Services:" }), _jsx("ul", { className: "mb-0 mt-2", children: bookingData.services.map((service) => (_jsxs("li", { children: [service.name, " \u2014 \u20B9", service.price] }, service.id))) })] }), _jsxs("p", { children: [_jsx("strong", { children: "Staff:" }), " ", bookingData.staff?.name || "Any Staff"] }), _jsxs("p", { children: [_jsx("strong", { children: "Date:" }), " ", bookingData.date] }), _jsxs("p", { children: [_jsx("strong", { children: "Time:" }), " ", bookingData.slot?.time] }), _jsxs("p", { children: [_jsx("strong", { children: "Name:" }), " ", bookingData.customer.name] }), _jsxs("p", { children: [_jsx("strong", { children: "Email:" }), " ", bookingData.customer.email] }), _jsxs("p", { children: [_jsx("strong", { children: "Phone:" }), " ", bookingData.customer.phone] }), _jsx("hr", {}), _jsxs("p", { children: [_jsx("strong", { children: "Total Duration:" }), " ", totalDuration, " mins"] }), _jsxs("p", { children: [_jsx("strong", { children: "Total Price:" }), " \u20B9", totalPrice] })] }), _jsxs("div", { className: "mt-4 d-flex justify-content-between", children: [_jsx("button", { className: "btn btn-outline-secondary", onClick: prevStep, children: "Back" }), _jsx("button", { className: "btn btn-success px-4", onClick: handleConfirm, disabled: loading, children: loading ? "Confirming..." : "Confirm Appointment" })] })] }));
}
