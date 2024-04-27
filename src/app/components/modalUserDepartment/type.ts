import { User } from "@/app/types/user/user";

export type ModalUserDepartmentType = {
  users: User[];
  isOpen: boolean;
  handleClose: () => void;
};
