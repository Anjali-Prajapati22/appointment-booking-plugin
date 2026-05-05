import AppointmentBooking from "./components/AppointmentBooking";

const services = [
  {
    id: 1,
    name: "Hair Cut",
    price: 499,
    duration: 30,
    description: "Professional haircut service",
  },
  {
    id: 2,
    name: "Facial",
    price: 999,
    duration: 45,
    description: "Relaxing facial treatment",
  },
];
const staff = [
  {
    id: 1,
    name: "Anjali",
    role: "Senior Stylist",
    image: "/staff/anjali.jpg",
  },
  {
    id: 2,
    name: "Abhay",
    role: "Hair Specialist",
    image: "/staff/abhay.jpg",
  },
  {
    id: 3,
    name: "Megha",
    role: "Facial Expert",
    image: "/staff/megha.jpg",
  },
];

const slots = [
  { id: 1, time: "09:00 AM", available: true },
  { id: 2, time: "09:30 AM", available: false },
  { id: 3, time: "10:00 AM", available: true },
  { id: 4, time: "10:30 AM", available: true },
  { id: 5, time: "11:00 AM", available: false },
];
function App() {

  return (
    <div className="container py-5">
      <AppointmentBooking
        services={services}
        staff={staff}
        slots={slots}
        onComplete={(data) => console.log(data)}
      />
    </div>
  );
}

export default App;
