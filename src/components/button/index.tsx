import { StyledButton } from "./styled";

export const Button = ({
  text,
  color,
  setAction,
}: {
  text: string;
  color: string;
  setAction: any;
}) => {
  return (
    <StyledButton onClick={setAction} color={color}>
      {text}
    </StyledButton>
  );
};
