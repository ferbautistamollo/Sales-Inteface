export interface ResponseData {
  error: boolean;
  message: string;
  [key: string]: any;
}
export interface User {
  id: string;
  name: string;
  username: string;
  identityCard?: string;
  position?: string;
}

export interface Person {
  id: string;
  uuidColumn?: string;
  fullName: string;
  identityCard: string;
  nup: string | undefined;
  isPolice: boolean;
}

export interface Parameters {
  id: string;
  maxProducts: number;
  maxAmountProduct: number;
  currencySymbol: string;
}

export interface PaymentType {
  id: string;
  name: string;
  description: string;
  shortened: string;
  component: PaymentComponent;
}

type PaymentComponent = "cash" | "qr" | "bank" | "bankTransfer";

export interface FinancialEntities {
  id: string;
  name: string;
  code?: string;
  isActive?: boolean;
}

export interface Products {
  id: number;
  name: string;
  code: string;
  price: string;
}

export interface SaleProduct extends Omit<Products, "id"> {
  productId: number;
  amount: number;
}

export interface Voucher {
  customer: string;
  identityCardCustomer: string;
  paymentLocationId: string;
  depositDate: string;
}

export interface Groups {
  id: string;
  name: string;
  description: string;
}
