export interface Service {
  id: number;
  name: string;
  price: number;
  duration: number;
  description?: string;
}

export interface Staff {
  id: number;
  name: string;
  role?: string;
  image?: string;
}

export interface Slot {
  id: number;
  time: string;
  available: boolean;
}

export interface Customer {
  name: string;
  email: string;
  phone: string;
}

export interface BookingData {
  services: Service[];
  staff: Staff | null;
  date: string;
  slot: Slot | null;
  customer: Customer;
}

export interface AppointmentBookingProps {
  services: Service[];
  staff: Staff[];
  slots: Slot[];
  onComplete: (data: BookingData) => Promise<void> | void;
  allowAnyStaff?: boolean;
}