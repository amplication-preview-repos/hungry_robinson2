import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  createdAt?: SortOrder;
  fileName?: SortOrder;
  fileSize?: SortOrder;
  fileType?: SortOrder;
  fileUrl?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
