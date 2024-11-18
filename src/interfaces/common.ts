import { IconType } from "react-icons";

export interface InputFieldProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  icon?: IconType;
  iconClassName?: string;
  containerClassName?: string;
  inputClassName?: string;
}

export interface FileUploadProps {
  label?: string;
  description?: string;
  acceptedFormats?: string;
  maxSizeText?: string;
  onFileSelect?: (file: File | null) => void;
  containerClassName?: string;
  labelClassName?: string;
}

export interface SingleDatePickerProps {
  name: string;
  label?: string;
  placeholder?: string;
  containerClassName?: string;
  inputClassName?: string;
  [key: string]: any;
}


export interface ConsentCheckboxProps {
  name: string;
  label: string;
}
