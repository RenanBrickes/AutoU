import * as Styled from "./styled";
export const Input = ({
  placeholder,
  title,
  type,
  value,
  setValue,
}: {
  placeholder: string;
  title: string;
  type?: "password" | "text";
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <Styled.Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Styled.Title>{title}</Styled.Title>
    </>
  );
};
