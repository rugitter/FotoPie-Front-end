import { FC } from "react";
import TextField from "@mui/material/TextField";
import  InputLabel  from "@mui/material/InputLabel";
import { FieldError, useFormContext } from "react-hook-form";
import InputAdornment from '@mui/material/InputAdornment'

interface IFormTextFieldProps {
  label: string;
  name: string;
  id: string;
  type?: string;
  autoComplete?: string;
  InputProps?: any;


}


const FormTextField: FC<IFormTextFieldProps> = ({
  label,
  name,
  id,
  type,
  InputProps,
  
  
}: IFormTextFieldProps) => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (

  
    <>
      
      {/* <InputLabel htmlFor={id}>{label} </InputLabel> */}
      <TextField
        label={label}
        id={id}
        error={!!errors[name]}
        helperText={(errors[name] as FieldError)?.message ?? ""}
        type={type}
        disabled={isSubmitting}
        fullWidth
        margin="normal"
        variant="outlined"
        autoFocus
        {...register(name)}
        InputProps={InputProps}
       
       
      />
     
    </>
  );
};

export default FormTextField;
