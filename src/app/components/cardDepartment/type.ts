import { User } from "@/app/types/user/user";

export interface CardDepartmentType {
  departmentName: string;
  details: {
    male: number;
    female: number;
    ageRange: string;
    hair: {
      [color: string]: number;
    };
    addressUser: {
      [name: string]: string;
    };
    users: User[];
  };
  handleOpen: (user: User[]) => void;
  handleClose: () => void;
  isOpenModal: boolean;
  selectedUser: User[];
}
