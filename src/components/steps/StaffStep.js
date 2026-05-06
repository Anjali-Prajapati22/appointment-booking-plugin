import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function StaffStep({ staff, bookingData, setBookingData, nextStep, prevStep, allowAnyStaff = true, }) {
    const selectStaff = (selectedStaff) => {
        setBookingData((prev) => ({
            ...prev,
            staff: selectedStaff,
        }));
    };
    const handleContinue = () => {
        if (!bookingData.staff && !allowAnyStaff) {
            alert("Please select a staff member");
            return;
        }
        nextStep();
    };
    return (_jsxs("div", { children: [_jsx("h3", { className: "mb-4 fw-bold", children: "Select Staff" }), _jsxs("div", { className: "row g-3", children: [allowAnyStaff && (_jsx("div", { className: "col-md-4", children: _jsx("div", { className: `card h-100 text-center border-2 ${bookingData.staff === null
                                ? "border-primary bg-primary-subtle"
                                : ""}`, onClick: () => selectStaff(null), style: { cursor: "pointer" }, children: _jsxs("div", { className: "card-body", children: [_jsx("h5", { className: "fw-semibold", children: "Any Staff" }), _jsx("p", { className: "text-muted small mb-0", children: "Assign automatically" })] }) }) })), staff.map((member) => {
                        const selected = bookingData.staff?.id === member.id;
                        return (_jsx("div", { className: "col-md-4", children: _jsx("div", { className: `card h-100 text-center border-2 ${selected ? "border-primary bg-primary-subtle" : ""}`, onClick: () => selectStaff(member), style: { cursor: "pointer" }, children: _jsxs("div", { className: "card-body", children: [_jsx("img", { src: member.image ||
                                                "https://via.placeholder.com/80", alt: member.name, className: "rounded-circle mb-3", width: 80, height: 80 }), _jsx("h5", { className: "fw-semibold mb-1", children: member.name }), member.role && (_jsx("p", { className: "text-muted small mb-0", children: member.role }))] }) }) }, member.id));
                    })] }), _jsxs("div", { className: "mt-4 d-flex justify-content-between", children: [_jsx("button", { className: "btn btn-outline-secondary", onClick: prevStep, children: "Back" }), _jsx("button", { className: "btn btn-primary px-4", onClick: handleContinue, children: "Continue" })] })] }));
}
