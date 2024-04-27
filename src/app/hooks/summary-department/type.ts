import { User } from "@/app/types/user/user";

export interface DepartmentSummary {
  [key: string]: {
    male: number;
    female: number;
    ageRange: string;
    hair: { [color: string]: number };
    addressUser: { [name: string]: string };
    users: User[];
  };
}
