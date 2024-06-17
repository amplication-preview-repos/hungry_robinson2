import { Content as TContent } from "../api/content/Content";

export const CONTENT_TITLE_FIELD = "headline";

export const ContentTitle = (record: TContent): string => {
  return record.headline?.toString() || String(record.id);
};
