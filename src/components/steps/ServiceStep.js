import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ServiceStep({ services, bookingData, setBookingData, nextStep, }) {
    const toggleService = (service) => {
        const exists = bookingData.services.some((item) => item.id === service.id);
        if (exists) {
            setBookingData((prev) => ({
                ...prev,
                services: prev.services.filter((item) => item.id !== service.id),
            }));
        }
        else {
            setBookingData((prev) => ({
                ...prev,
                services: [...prev.services, service],
            }));
        }
    };
    const handleContinue = () => {
        if (!bookingData.services.length) {
            alert("Please select at least one service");
            return;
        }
        nextStep();
    };
    return (_jsxs("div", { children: [_jsx("h3", { className: "mb-4 fw-bold", children: "Select Services" }), _jsx("div", { className: "row g-3", children: services.map((service) => {
                    const selected = bookingData.services.some((item) => item.id === service.id);
                    return (_jsx("div", { className: "col-md-6", children: _jsx("div", { className: `card h-100 border-2 service-card ${selected ? "border-primary bg-primary-subtle" : ""}`, onClick: () => toggleService(service), style: { cursor: "pointer" }, children: _jsx("div", { className: "card-body", children: _jsxs("div", { className: "d-flex justify-content-between align-items-start", children: [_jsxs("div", { children: [_jsx("h5", { className: "fw-semibold mb-1", children: service.name }), service.description && (_jsx("p", { className: "text-muted small mb-2", children: service.description })), _jsxs("small", { className: "text-secondary", children: ["Duration: ", service.duration, " mins"] })] }), _jsxs("span", { className: "badge bg-dark", children: ["\u20B9", service.price] })] }) }) }) }, service.id));
                }) }), _jsx("div", { className: "mt-4 d-flex justify-content-end", children: _jsx("button", { className: "btn btn-primary px-4", onClick: handleContinue, children: "Continue" }) })] }));
}
