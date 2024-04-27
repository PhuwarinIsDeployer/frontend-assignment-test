import { User } from "@/app/types/user/user";

export interface DepartmentSummary {
  [departmentName: string]: {
    male: number;
    female: number;
    ageRange: string;
    hair: { [color: string]: number };
    addressUser: { [name: string]: string };
    users: User[];
  };
}
