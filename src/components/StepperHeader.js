import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const labels = [
    "Services",
    "Staff",
    "Date",
    "Slot",
    "Details",
    "Confirm",
];
export default function StepperHeader({ step }) {
    return (_jsx("div", { className: "booking-stepper mb-4", children: _jsx("div", { className: "d-flex justify-content-between flex-wrap gap-2", children: labels.map((label, index) => (_jsxs("div", { className: `step-item ${step >= index + 1 ? "active" : ""}`, children: [_jsx("span", { children: index + 1 }), _jsx("small", { children: label })] }, label))) }) }));
}
