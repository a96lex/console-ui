interface IField {
  type:
    | "input"
    | "date"
    | "textarea"
    | "select"
    | "checkbox"
    | "radio"
    | "file"
    | "autocomplete";
  name: string;
  value?: any;
  label: string;
  description?: string;
  messages?: any;
  extra?: any;
  validation?: any;
  required?: boolean;
  maxLen?: number;
}
