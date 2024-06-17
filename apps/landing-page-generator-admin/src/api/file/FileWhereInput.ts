import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FileWhereInput = {
  fileName?: StringNullableFilter;
  fileSize?: IntNullableFilter;
  fileType?: StringNullableFilter;
  fileUrl?: StringNullableFilter;
  id?: StringFilter;
};
