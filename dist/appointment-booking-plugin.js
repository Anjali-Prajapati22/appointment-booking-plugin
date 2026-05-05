import { useState as e } from "react";
//#region \0rolldown/runtime.js
var t = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), n = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), r = /* @__PURE__ */ t(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), i = /* @__PURE__ */ t(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === k ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case O: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case _: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function r(e) {
			return "" + e;
		}
		function i(e) {
			try {
				r(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var n = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return n.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), r(e);
			}
		}
		function a(e) {
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function o() {
			var e = A.A;
			return e === null ? null : e.getOwner();
		}
		function s() {
			return Error("react-stack-top-frame");
		}
		function c(e) {
			if (j.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function l(e, t) {
			function n() {
				P || (P = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = t(this.type);
			return F[e] || (F[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function d(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: g,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: u
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function f(e, n, r, a, s, u) {
			var f = n.children;
			if (f !== void 0) if (a) if (M(f)) {
				for (a = 0; a < f.length; a++) p(f[a]);
				Object.freeze && Object.freeze(f);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else p(f);
			if (j.call(n, "key")) {
				f = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				a = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", R[f + a] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", a, f, m, f), R[f + a] = !0);
			}
			if (f = null, r !== void 0 && (i(r), f = "" + r), c(n) && (i(n.key), f = "" + n.key), "key" in n) for (var h in r = {}, n) h !== "key" && (r[h] = n[h]);
			else r = n;
			return f && l(r, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, f, r, o(), s, u);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = n("react"), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), A = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var P, F = {}, I = h.react_stack_bottom_frame.bind(h, s)(), L = N(a(s)), R = {};
		e.Fragment = v, e.jsx = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !1, r ? Error("react-stack-top-frame") : I, r ? N(a(e)) : L);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !0, r ? Error("react-stack-top-frame") : I, r ? N(a(e)) : L);
		};
	})();
})), a = (/* @__PURE__ */ t(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = r() : t.exports = i();
})))(), o = [
	"Services",
	"Staff",
	"Date",
	"Slot",
	"Details",
	"Confirm"
];
function s({ step: e }) {
	return /* @__PURE__ */ (0, a.jsx)("div", {
		className: "booking-stepper mb-4",
		children: /* @__PURE__ */ (0, a.jsx)("div", {
			className: "d-flex justify-content-between flex-wrap gap-2",
			children: o.map((t, n) => /* @__PURE__ */ (0, a.jsxs)("div", {
				className: `step-item ${e >= n + 1 ? "active" : ""}`,
				children: [/* @__PURE__ */ (0, a.jsx)("span", { children: n + 1 }), /* @__PURE__ */ (0, a.jsx)("small", { children: t })]
			}, t))
		})
	});
}
//#endregion
//#region src/hooks/useBookingState.ts
var c = () => {
	let [t, n] = e(1), [r, i] = e({
		services: [],
		staff: null,
		date: "",
		slot: null,
		customer: {
			name: "",
			email: "",
			phone: ""
		}
	});
	return {
		step: t,
		bookingData: r,
		setBookingData: i,
		nextStep: () => n((e) => e + 1),
		prevStep: () => n((e) => e - 1),
		resetBooking: () => {
			n(1), i({
				services: [],
				staff: null,
				date: "",
				slot: null,
				customer: {
					name: "",
					email: "",
					phone: ""
				}
			});
		}
	};
};
//#endregion
//#region src/components/steps/ServiceStep.tsx
function l({ services: e, bookingData: t, setBookingData: n, nextStep: r }) {
	let i = (e) => {
		t.services.some((t) => t.id === e.id) ? n((t) => ({
			...t,
			services: t.services.filter((t) => t.id !== e.id)
		})) : n((t) => ({
			...t,
			services: [...t.services, e]
		}));
	};
	return /* @__PURE__ */ (0, a.jsxs)("div", { children: [
		/* @__PURE__ */ (0, a.jsx)("h3", {
			className: "mb-4 fw-bold",
			children: "Select Services"
		}),
		/* @__PURE__ */ (0, a.jsx)("div", {
			className: "row g-3",
			children: e.map((e) => /* @__PURE__ */ (0, a.jsx)("div", {
				className: "col-md-6",
				children: /* @__PURE__ */ (0, a.jsx)("div", {
					className: `card h-100 border-2 service-card ${t.services.some((t) => t.id === e.id) ? "border-primary bg-primary-subtle" : ""}`,
					onClick: () => i(e),
					style: { cursor: "pointer" },
					children: /* @__PURE__ */ (0, a.jsx)("div", {
						className: "card-body",
						children: /* @__PURE__ */ (0, a.jsxs)("div", {
							className: "d-flex justify-content-between align-items-start",
							children: [/* @__PURE__ */ (0, a.jsxs)("div", { children: [
								/* @__PURE__ */ (0, a.jsx)("h5", {
									className: "fw-semibold mb-1",
									children: e.name
								}),
								e.description && /* @__PURE__ */ (0, a.jsx)("p", {
									className: "text-muted small mb-2",
									children: e.description
								}),
								/* @__PURE__ */ (0, a.jsxs)("small", {
									className: "text-secondary",
									children: [
										"Duration: ",
										e.duration,
										" mins"
									]
								})
							] }), /* @__PURE__ */ (0, a.jsxs)("span", {
								className: "badge bg-dark",
								children: ["₹", e.price]
							})]
						})
					})
				})
			}, e.id))
		}),
		/* @__PURE__ */ (0, a.jsx)("div", {
			className: "mt-4 d-flex justify-content-end",
			children: /* @__PURE__ */ (0, a.jsx)("button", {
				className: "btn btn-primary px-4",
				onClick: () => {
					if (!t.services.length) {
						alert("Please select at least one service");
						return;
					}
					r();
				},
				children: "Continue"
			})
		})
	] });
}
//#endregion
//#region src/components/steps/StaffStep.tsx
function u({ staff: e, bookingData: t, setBookingData: n, nextStep: r, prevStep: i, allowAnyStaff: o = !0 }) {
	let s = (e) => {
		n((t) => ({
			...t,
			staff: e
		}));
	};
	return /* @__PURE__ */ (0, a.jsxs)("div", { children: [
		/* @__PURE__ */ (0, a.jsx)("h3", {
			className: "mb-4 fw-bold",
			children: "Select Staff"
		}),
		/* @__PURE__ */ (0, a.jsxs)("div", {
			className: "row g-3",
			children: [o && /* @__PURE__ */ (0, a.jsx)("div", {
				className: "col-md-4",
				children: /* @__PURE__ */ (0, a.jsx)("div", {
					className: `card h-100 text-center border-2 ${t.staff === null ? "border-primary bg-primary-subtle" : ""}`,
					onClick: () => s(null),
					style: { cursor: "pointer" },
					children: /* @__PURE__ */ (0, a.jsxs)("div", {
						className: "card-body",
						children: [/* @__PURE__ */ (0, a.jsx)("h5", {
							className: "fw-semibold",
							children: "Any Staff"
						}), /* @__PURE__ */ (0, a.jsx)("p", {
							className: "text-muted small mb-0",
							children: "Assign automatically"
						})]
					})
				})
			}), e.map((e) => /* @__PURE__ */ (0, a.jsx)("div", {
				className: "col-md-4",
				children: /* @__PURE__ */ (0, a.jsx)("div", {
					className: `card h-100 text-center border-2 ${t.staff?.id === e.id ? "border-primary bg-primary-subtle" : ""}`,
					onClick: () => s(e),
					style: { cursor: "pointer" },
					children: /* @__PURE__ */ (0, a.jsxs)("div", {
						className: "card-body",
						children: [
							/* @__PURE__ */ (0, a.jsx)("img", {
								src: e.image || "https://via.placeholder.com/80",
								alt: e.name,
								className: "rounded-circle mb-3",
								width: 80,
								height: 80
							}),
							/* @__PURE__ */ (0, a.jsx)("h5", {
								className: "fw-semibold mb-1",
								children: e.name
							}),
							e.role && /* @__PURE__ */ (0, a.jsx)("p", {
								className: "text-muted small mb-0",
								children: e.role
							})
						]
					})
				})
			}, e.id))]
		}),
		/* @__PURE__ */ (0, a.jsxs)("div", {
			className: "mt-4 d-flex justify-content-between",
			children: [/* @__PURE__ */ (0, a.jsx)("button", {
				className: "btn btn-outline-secondary",
				onClick: i,
				children: "Back"
			}), /* @__PURE__ */ (0, a.jsx)("button", {
				className: "btn btn-primary px-4",
				onClick: () => {
					if (!t.staff && !o) {
						alert("Please select a staff member");
						return;
					}
					r();
				},
				children: "Continue"
			})]
		})
	] });
}
//#endregion
//#region src/components/steps/DateStep.tsx
function d({ bookingData: e, setBookingData: t, nextStep: n, prevStep: r }) {
	let i = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
	return /* @__PURE__ */ (0, a.jsxs)("div", { children: [
		/* @__PURE__ */ (0, a.jsx)("h3", {
			className: "mb-4 fw-bold",
			children: "Select Appointment Date"
		}),
		/* @__PURE__ */ (0, a.jsxs)("div", {
			className: "card p-4",
			children: [/* @__PURE__ */ (0, a.jsx)("label", {
				className: "form-label fw-medium",
				children: "Choose Date"
			}), /* @__PURE__ */ (0, a.jsx)("input", {
				type: "date",
				className: "form-control",
				min: i,
				value: e.date,
				onChange: (e) => t((t) => ({
					...t,
					date: e.target.value
				}))
			})]
		}),
		/* @__PURE__ */ (0, a.jsxs)("div", {
			className: "mt-4 d-flex justify-content-between",
			children: [/* @__PURE__ */ (0, a.jsx)("button", {
				className: "btn btn-outline-secondary",
				onClick: r,
				children: "Back"
			}), /* @__PURE__ */ (0, a.jsx)("button", {
				className: "btn btn-primary px-4",
				onClick: () => {
					if (!e.date) {
						alert("Please select a date");
						return;
					}
					n();
				},
				children: "Continue"
			})]
		})
	] });
}
//#endregion
//#region src/components/steps/SlotStep.tsx
function f({ slots: e, bookingData: t, setBookingData: n, nextStep: r, prevStep: i }) {
	return /* @__PURE__ */ (0, a.jsxs)("div", { children: [
		/* @__PURE__ */ (0, a.jsx)("h3", {
			className: "mb-4 fw-bold",
			children: "Select Time Slot"
		}),
		/* @__PURE__ */ (0, a.jsx)("div", {
			className: "row g-3",
			children: e.map((e) => /* @__PURE__ */ (0, a.jsx)("div", {
				className: "col-6 col-md-4 col-lg-3",
				children: /* @__PURE__ */ (0, a.jsx)("button", {
					className: `btn w-100 py-3 border-2 ${t.slot?.id === e.id ? "btn-primary" : e.available ? "btn-outline-primary" : "btn-light text-muted"}`,
					disabled: !e.available,
					onClick: () => n((t) => ({
						...t,
						slot: e
					})),
					children: e.time
				})
			}, e.id))
		}),
		/* @__PURE__ */ (0, a.jsxs)("div", {
			className: "mt-4 d-flex justify-content-between",
			children: [/* @__PURE__ */ (0, a.jsx)("button", {
				className: "btn btn-outline-secondary",
				onClick: i,
				children: "Back"
			}), /* @__PURE__ */ (0, a.jsx)("button", {
				className: "btn btn-primary px-4",
				onClick: () => {
					if (!t.slot) {
						alert("Please select a time slot");
						return;
					}
					r();
				},
				children: "Continue"
			})]
		})
	] });
}
//#endregion
//#region src/components/steps/UserDetailsStep.tsx
function p({ bookingData: t, setBookingData: n, nextStep: r, prevStep: i }) {
	let [o, s] = e({}), c = () => {
		let e = {};
		return t.customer.name.trim() || (e.name = "Name is required"), t.customer.email.trim() ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.customer.email) || (e.email = "Invalid email") : e.email = "Email is required", t.customer.phone.trim() ? /^[0-9]{10}$/.test(t.customer.phone) || (e.phone = "Phone must be 10 digits") : e.phone = "Phone is required", s(e), Object.keys(e).length === 0;
	}, l = () => {
		c() && r();
	}, u = (e, t) => {
		n((n) => ({
			...n,
			customer: {
				...n.customer,
				[e]: t
			}
		}));
	};
	return /* @__PURE__ */ (0, a.jsxs)("div", { children: [
		/* @__PURE__ */ (0, a.jsx)("h3", {
			className: "mb-4 fw-bold",
			children: "Your Details"
		}),
		/* @__PURE__ */ (0, a.jsxs)("div", {
			className: "card p-4",
			children: [
				/* @__PURE__ */ (0, a.jsxs)("div", {
					className: "mb-3",
					children: [
						/* @__PURE__ */ (0, a.jsx)("label", {
							className: "form-label",
							children: "Full Name"
						}),
						/* @__PURE__ */ (0, a.jsx)("input", {
							type: "text",
							className: `form-control ${o.name ? "is-invalid" : ""}`,
							value: t.customer.name,
							onChange: (e) => u("name", e.target.value)
						}),
						o.name && /* @__PURE__ */ (0, a.jsx)("div", {
							className: "invalid-feedback",
							children: o.name
						})
					]
				}),
				/* @__PURE__ */ (0, a.jsxs)("div", {
					className: "mb-3",
					children: [
						/* @__PURE__ */ (0, a.jsx)("label", {
							className: "form-label",
							children: "Email"
						}),
						/* @__PURE__ */ (0, a.jsx)("input", {
							type: "email",
							className: `form-control ${o.email ? "is-invalid" : ""}`,
							value: t.customer.email,
							onChange: (e) => u("email", e.target.value)
						}),
						o.email && /* @__PURE__ */ (0, a.jsx)("div", {
							className: "invalid-feedback",
							children: o.email
						})
					]
				}),
				/* @__PURE__ */ (0, a.jsxs)("div", {
					className: "mb-3",
					children: [
						/* @__PURE__ */ (0, a.jsx)("label", {
							className: "form-label",
							children: "Phone Number"
						}),
						/* @__PURE__ */ (0, a.jsx)("input", {
							type: "tel",
							className: `form-control ${o.phone ? "is-invalid" : ""}`,
							value: t.customer.phone,
							onChange: (e) => u("phone", e.target.value)
						}),
						o.phone && /* @__PURE__ */ (0, a.jsx)("div", {
							className: "invalid-feedback",
							children: o.phone
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, a.jsxs)("div", {
			className: "mt-4 d-flex justify-content-between",
			children: [/* @__PURE__ */ (0, a.jsx)("button", {
				className: "btn btn-outline-secondary",
				onClick: i,
				children: "Back"
			}), /* @__PURE__ */ (0, a.jsx)("button", {
				className: "btn btn-primary px-4",
				onClick: l,
				children: "Continue"
			})]
		})
	] });
}
//#endregion
//#region src/components/steps/ConfirmStep.tsx
function m({ bookingData: t, prevStep: n, onComplete: r }) {
	let [i, o] = e(!1), s = async () => {
		try {
			o(!0), await r(t);
		} catch (e) {
			console.error("Booking failed:", e), alert("Something went wrong while confirming booking.");
		} finally {
			o(!1);
		}
	}, c = t.services.reduce((e, t) => e + t.price, 0), l = t.services.reduce((e, t) => e + t.duration, 0);
	return /* @__PURE__ */ (0, a.jsxs)("div", { children: [
		/* @__PURE__ */ (0, a.jsx)("h3", {
			className: "mb-4 fw-bold",
			children: "Confirm Appointment"
		}),
		/* @__PURE__ */ (0, a.jsxs)("div", {
			className: "card p-4",
			children: [
				/* @__PURE__ */ (0, a.jsx)("h5", {
					className: "mb-3",
					children: "Booking Summary"
				}),
				/* @__PURE__ */ (0, a.jsxs)("div", {
					className: "mb-3",
					children: [/* @__PURE__ */ (0, a.jsx)("strong", { children: "Services:" }), /* @__PURE__ */ (0, a.jsx)("ul", {
						className: "mb-0 mt-2",
						children: t.services.map((e) => /* @__PURE__ */ (0, a.jsxs)("li", { children: [
							e.name,
							" — ₹",
							e.price
						] }, e.id))
					})]
				}),
				/* @__PURE__ */ (0, a.jsxs)("p", { children: [
					/* @__PURE__ */ (0, a.jsx)("strong", { children: "Staff:" }),
					" ",
					t.staff?.name || "Any Staff"
				] }),
				/* @__PURE__ */ (0, a.jsxs)("p", { children: [
					/* @__PURE__ */ (0, a.jsx)("strong", { children: "Date:" }),
					" ",
					t.date
				] }),
				/* @__PURE__ */ (0, a.jsxs)("p", { children: [
					/* @__PURE__ */ (0, a.jsx)("strong", { children: "Time:" }),
					" ",
					t.slot?.time
				] }),
				/* @__PURE__ */ (0, a.jsxs)("p", { children: [
					/* @__PURE__ */ (0, a.jsx)("strong", { children: "Name:" }),
					" ",
					t.customer.name
				] }),
				/* @__PURE__ */ (0, a.jsxs)("p", { children: [
					/* @__PURE__ */ (0, a.jsx)("strong", { children: "Email:" }),
					" ",
					t.customer.email
				] }),
				/* @__PURE__ */ (0, a.jsxs)("p", { children: [
					/* @__PURE__ */ (0, a.jsx)("strong", { children: "Phone:" }),
					" ",
					t.customer.phone
				] }),
				/* @__PURE__ */ (0, a.jsx)("hr", {}),
				/* @__PURE__ */ (0, a.jsxs)("p", { children: [
					/* @__PURE__ */ (0, a.jsx)("strong", { children: "Total Duration:" }),
					" ",
					l,
					" mins"
				] }),
				/* @__PURE__ */ (0, a.jsxs)("p", { children: [
					/* @__PURE__ */ (0, a.jsx)("strong", { children: "Total Price:" }),
					" ₹",
					c
				] })
			]
		}),
		/* @__PURE__ */ (0, a.jsxs)("div", {
			className: "mt-4 d-flex justify-content-between",
			children: [/* @__PURE__ */ (0, a.jsx)("button", {
				className: "btn btn-outline-secondary",
				onClick: n,
				children: "Back"
			}), /* @__PURE__ */ (0, a.jsx)("button", {
				className: "btn btn-success px-4",
				onClick: s,
				disabled: i,
				children: i ? "Confirming..." : "Confirm Appointment"
			})]
		})
	] });
}
//#endregion
//#region src/components/AppointmentBooking.tsx
function h({ services: e, staff: t, slots: n, onComplete: r, allowAnyStaff: i = !0 }) {
	let { step: o, bookingData: h, setBookingData: g, nextStep: _, prevStep: v } = c();
	return /* @__PURE__ */ (0, a.jsxs)("div", {
		className: "appointment-booking-plugin card shadow p-4",
		children: [
			/* @__PURE__ */ (0, a.jsx)(s, { step: o }),
			o === 1 && /* @__PURE__ */ (0, a.jsx)(l, {
				services: e,
				bookingData: h,
				setBookingData: g,
				nextStep: _
			}),
			o === 2 && /* @__PURE__ */ (0, a.jsx)(u, {
				staff: t,
				bookingData: h,
				setBookingData: g,
				nextStep: _,
				prevStep: v,
				allowAnyStaff: i
			}),
			o === 3 && /* @__PURE__ */ (0, a.jsx)(d, {
				bookingData: h,
				setBookingData: g,
				nextStep: _,
				prevStep: v
			}),
			o === 4 && /* @__PURE__ */ (0, a.jsx)(f, {
				slots: n,
				bookingData: h,
				setBookingData: g,
				nextStep: _,
				prevStep: v
			}),
			o === 5 && /* @__PURE__ */ (0, a.jsx)(p, {
				bookingData: h,
				setBookingData: g,
				nextStep: _,
				prevStep: v
			}),
			o === 6 && /* @__PURE__ */ (0, a.jsx)(m, {
				bookingData: h,
				prevStep: v,
				onComplete: r
			})
		]
	});
}
//#endregion
export { h as AppointmentBooking };
