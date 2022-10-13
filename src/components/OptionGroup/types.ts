export type TOptionGroup = {
  id: number;
  title: string;
  body: string;
  footer: string;
};

export type TOptionGroupProps = {
  options: TOptionGroup[];
  defaultValue?: TOptionGroup | null;
  onChange?: (option: TOptionGroup) => void;
};
