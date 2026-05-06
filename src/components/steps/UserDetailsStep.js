import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function UserDetailsStep({ bookingData, setBookingData, nextStep, prevStep, }) {
    const [errors, setErrors] = useState({});
    const validate = () => {
        const newErrors = {};
        if (!bookingData.customer.name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!bookingData.customer.email.trim()) {
            newErrors.email = "Email is required";
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingData.customer.email)) {
            newErrors.email = "Invalid email";
        }
        if (!bookingData.customer.phone.trim()) {
            newErrors.phone = "Phone is required";
        }
        else if (!/^[0-9]{10}$/.test(bookingData.customer.phone)) {
            newErrors.phone = "Phone must be 10 digits";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleContinue = () => {
        if (!validate())
            return;
        nextStep();
    };
    const handleChange = (field, value) => {
        setBookingData((prev) => ({
            ...prev,
            customer: {
                ...prev.customer,
                [field]: value,
            },
        }));
    };
    return (_jsxs("div", { children: [_jsx("h3", { className: "mb-4 fw-bold", children: "Your Details" }), _jsxs("div", { className: "card p-4", children: [_jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Full Name" }), _jsx("input", { type: "text", className: `form-control ${errors.name ? "is-invalid" : ""}`, value: bookingData.customer.name, onChange: (e) => handleChange("name", e.target.value) }), errors.name && (_jsx("div", { className: "invalid-feedback", children: errors.name }))] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Email" }), _jsx("input", { type: "email", className: `form-control ${errors.email ? "is-invalid" : ""}`, value: bookingData.customer.email, onChange: (e) => handleChange("email", e.target.value) }), errors.email && (_jsx("div", { className: "invalid-feedback", children: errors.email }))] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Phone Number" }), _jsx("input", { type: "tel", className: `form-control ${errors.phone ? "is-invalid" : ""}`, value: bookingData.customer.phone, onChange: (e) => handleChange("phone", e.target.value) }), errors.phone && (_jsx("div", { className: "invalid-feedback", children: errors.phone }))] })] }), _jsxs("div", { className: "mt-4 d-flex justify-content-between", children: [_jsx("button", { className: "btn btn-outline-secondary", onClick: prevStep, children: "Back" }), _jsx("button", { className: "btn btn-primary px-4", onClick: handleContinue, children: "Continue" })] })] }));
}
