export interface UserResult {
  address: Address;
  email: string;
  id: number;
  phone: string;
  website: string;
  totalItems: number;
  name: string;
}

export interface Address {
  city: string;
  street: string;
}
export interface User {
  email: string;
  id: number;
  phone: string;
  website: string;
  city: string;
  street: string;
  name: string;
}

export type UserView = { name: string; id: number };
