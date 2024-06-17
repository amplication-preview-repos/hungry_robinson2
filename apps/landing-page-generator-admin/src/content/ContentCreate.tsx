import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ContentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="additionalText" multiline source="additionalText" />
        <TextInput label="headline" source="headline" />
        <TextInput label="image" source="image" />
        <TextInput label="owner" source="owner" />
        <TextInput label="video" source="video" />
      </SimpleForm>
    </Create>
  );
};
