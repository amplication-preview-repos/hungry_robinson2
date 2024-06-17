import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContentWhereInput = {
  additionalText?: StringNullableFilter;
  headline?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  owner?: StringNullableFilter;
  video?: StringNullableFilter;
};
