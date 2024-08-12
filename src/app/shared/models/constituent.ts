import { ConstituentAddress } from "./constituent-address";
import { ConstituentBirthday } from "./constituent-birthday";
import { ConstituentEmail } from "./constituent-email";

export interface Constituent {
  id: string;
  type: string;
  lookup_id: string;
  first_name: string;
  last_name: string;
  name: string;
  age: number;
  gender: string;
  title: string;
  income: string;
  birthdate: ConstituentBirthday;
  address: ConstituentAddress;
  email: ConstituentEmail;
}
