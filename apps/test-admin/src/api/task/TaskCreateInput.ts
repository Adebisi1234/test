import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  completed?: boolean | null;
  text: string;
  uid?: UserWhereUniqueInput | null;
};
