import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ContentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="additionalText" source="additionalText" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="headline" source="headline" />
        <TextField label="ID" source="id" />
        <TextField label="image" source="image" />
        <TextField label="owner" source="owner" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="video" source="video" />
      </SimpleShowLayout>
    </Show>
  );
};
