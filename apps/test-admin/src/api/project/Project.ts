import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  owner?: User;
  startDate: Date | null;
  updatedAt: Date;
};
