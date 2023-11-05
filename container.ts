import { Keyboard} from "react-native";
import styled from "styled-components/native";

interface Props {
  ph?: number;
  bg?: string;
}
const keyboardDismiss = () => {
  Keyboard.dismiss();
  return false;
};


export const Container = styled.View.attrs(({ ph }: Props) => ({
  paddingHorizontal: ph,
  onStartShouldSetResponder: keyboardDismiss,
}))<Props>`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: ${({ bg }) => (bg ? bg : "#fff")};
`;
