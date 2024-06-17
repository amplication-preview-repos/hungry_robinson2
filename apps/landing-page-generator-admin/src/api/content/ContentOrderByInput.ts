import { SortOrder } from "../../util/SortOrder";

export type ContentOrderByInput = {
  additionalText?: SortOrder;
  createdAt?: SortOrder;
  headline?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  owner?: SortOrder;
  updatedAt?: SortOrder;
  video?: SortOrder;
};
