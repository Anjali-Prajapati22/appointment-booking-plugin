import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function DateStep({ bookingData, setBookingData, nextStep, prevStep, }) {
    const today = new Date().toISOString().split("T")[0];
    const handleContinue = () => {
        if (!bookingData.date) {
            alert("Please select a date");
            return;
        }
        nextStep();
    };
    return (_jsxs("div", { children: [_jsx("h3", { className: "mb-4 fw-bold", children: "Select Appointment Date" }), _jsxs("div", { className: "card p-4", children: [_jsx("label", { className: "form-label fw-medium", children: "Choose Date" }), _jsx("input", { type: "date", className: "form-control", min: today, value: bookingData.date, onChange: (e) => setBookingData((prev) => ({
                            ...prev,
                            date: e.target.value,
                        })) })] }), _jsxs("div", { className: "mt-4 d-flex justify-content-between", children: [_jsx("button", { className: "btn btn-outline-secondary", onClick: prevStep, children: "Back" }), _jsx("button", { className: "btn btn-primary px-4", onClick: handleContinue, children: "Continue" })] })] }));
}
