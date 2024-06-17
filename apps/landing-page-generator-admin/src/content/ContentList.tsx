import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ContentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Contents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="additionalText" source="additionalText" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="headline" source="headline" />
        <TextField label="ID" source="id" />
        <TextField label="image" source="image" />
        <TextField label="owner" source="owner" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="video" source="video" />
      </Datagrid>
    </List>
  );
};
