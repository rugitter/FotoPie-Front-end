import { FC } from "react";
import TextField from "@mui/material/TextField";
import { FieldError, useFormContext } from "react-hook-form";

interface IFormTextFieldProps {
  label: string;
  name: string;
  id: string;
}

const FormTextField: FC<IFormTextFieldProps> = ({
  label,
  name,
  id,
}: IFormTextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <TextField
        label={label}
        id={id}
        error={!!errors[name]}
        helperText={(errors[name] as FieldError)?.message ?? ""}
        fullWidth
        margin="normal"
        variant="outlined"
        {...register(name)}
      />
    </>
  );
};

export default FormTextField;
