import styled from "styled-components/native";

interface Props {
  ph?: number;
  bg?: string;
}

export const Container = styled.View.attrs(({ ph }: Props) => ({
  paddingHorizontal: ph,
}))<Props>`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: ${({ bg }) => (bg ? bg : "#fff")};
`;
