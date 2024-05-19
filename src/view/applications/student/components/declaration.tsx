import CheckboxField from "../../components/checkboxField";

const Declaration: React.FC = () => {
  return (
    <CheckboxField
      name="agreement"
      label="Agreement and Acknowledgement"
      description=" We confirm that to the best of our knowledge the information provided
          by us in this form is correct and complete."
      isRequired
    />
  );
};

export default Declaration;
