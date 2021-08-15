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

export interface UserView {
  name: string;
  id: number;
}

export interface UserPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}
