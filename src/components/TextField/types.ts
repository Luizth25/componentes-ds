export type TTextFieldProps = {
  label: string;
  value: string;
  type?: 'text' | 'email' | 'password' | 'date';
  onChange: (value: string) => void;
};
