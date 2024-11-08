
/*
  - **Template for From with Validation**
  - Create Form with Zod Validation
  - Create TypeScript Interface for Form Definition
  - Create Zod Validation Schema
  - Create Re-usable <CustomInput @params: control, name, label, placeholder, type />
  - Import Re-usable <CustomInput /> to Form
  - Test the validations
*/

import FormComponent from "@/components/FormComponent";

export default function Home() {
  return (
    <div>
      <FormComponent />
    </div>
  );
}
