import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  completed?: boolean | null;
  text?: string;
  uid?: UserWhereUniqueInput | null;
};
