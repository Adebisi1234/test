import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskWhereInput = {
  completed?: BooleanNullableFilter;
  id?: StringFilter;
  text?: StringFilter;
  uid?: UserWhereUniqueInput;
};
