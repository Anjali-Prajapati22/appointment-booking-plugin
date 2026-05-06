import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function SlotStep({ slots, bookingData, setBookingData, nextStep, prevStep, }) {
    const handleContinue = () => {
        if (!bookingData.slot) {
            alert("Please select a time slot");
            return;
        }
        nextStep();
    };
    return (_jsxs("div", { children: [_jsx("h3", { className: "mb-4 fw-bold", children: "Select Time Slot" }), _jsx("div", { className: "row g-3", children: slots.map((slot) => {
                    const selected = bookingData.slot?.id === slot.id;
                    return (_jsx("div", { className: "col-6 col-md-4 col-lg-3", children: _jsx("button", { className: `btn w-100 py-3 border-2 ${selected
                                ? "btn-primary"
                                : slot.available
                                    ? "btn-outline-primary"
                                    : "btn-light text-muted"}`, disabled: !slot.available, onClick: () => setBookingData((prev) => ({
                                ...prev,
                                slot,
                            })), children: slot.time }) }, slot.id));
                }) }), _jsxs("div", { className: "mt-4 d-flex justify-content-between", children: [_jsx("button", { className: "btn btn-outline-secondary", onClick: prevStep, children: "Back" }), _jsx("button", { className: "btn btn-primary px-4", onClick: handleContinue, children: "Continue" })] })] }));
}
