import { User } from "../user/User";

export type Task = {
  completed: boolean | null;
  createdAt: Date;
  id: string;
  text: string;
  uid?: User | null;
  updatedAt: Date;
};
