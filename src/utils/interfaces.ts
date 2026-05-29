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
  id: number;
  uuidColumn?: string;
  cityBirth: string | null;
  pensionEntity: PensionEntity | number;
  financialEntity: FinancialEntity | number;
  firstName: string;
  secondName: string | null;
  lastName: string;
  mothersLastName: string;
  surnameHusband: string | null;
  identityCard: string;
  dueDate: Date | null;
  isDuedateUndefined: boolean | null;
  gender: string;
  civilStatus: string;
  birthDate: Date | string;
  dateDeath: Date | null;
  deathCertificateNumber: string | null;
  reasonDeath: string | null;
  phoneNumber: string | null;
  cellPhoneNumber: string | null;
  nua: number | null;
  accountNumber: string | null;
  sigepStatus: string | null;
  idPersonalSenasir: number | null;
  dateLastContribution: Date | string | null; //Eliminar
  createdAt: Date | string | null;
  updatedAt: Date | string | null;
  deletedAt: Date | string | null;

  personAffiliate?: PersonAffiliate[];
}

export interface FinancialEntity {
  id: number;
  name: string;
  serviceStatus: boolean | null;
}

export interface PensionEntity {
  id: number;
  type: string;
  name: string;
  isActive: boolean;
}

export interface PersonAffiliate {
  typeId: number;
  kinship: Kinship;
  state?: boolean;
}

export interface Kinship {
  id: number;
  name: string;
}

export interface CityBirth {
  id: number | null;
  name: string | null;
  firstShortened: string | null;
  serviceStatus: boolean | null;
}
