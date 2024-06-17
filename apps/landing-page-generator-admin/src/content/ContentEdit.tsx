import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ContentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="additionalText" multiline source="additionalText" />
        <TextInput label="headline" source="headline" />
        <TextInput label="image" source="image" />
        <TextInput label="owner" source="owner" />
        <TextInput label="video" source="video" />
      </SimpleForm>
    </Edit>
  );
};
