import styled from "styled-components/native";
import { perfectSize } from "./perfectSize";
interface Props {
  color?: string;
  mt?: number;
  ml?: number;
  pl?: number;
  pr?: number;
  fz?: number;
  align?: string;
  textAlign?: boolean;
  fw?: FontWeight;
}

type FontWeight =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | "bold"
  | "bolder"
  | "lighter"
  | "normal";

export const H1 = styled.Text<Props>`
  font-size: ${perfectSize(30)}px;
  font-family: "bold";
  color: ${({ color }) => (color ? color : "#000")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
`;
export const H2 = styled.Text<Props>`
  font-size: ${perfectSize(28)}px;
  font-family: "bold";
  color: ${({ color }) => (color ? color : "#000")};
  text-align: ${(p) => (p.textAlign ? "center" : "left")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
`;
export const H3 = styled.Text<Props>`
  font-size: ${perfectSize(24)}px;
  font-family: "bold";
  text-align: ${(p) => (p.textAlign ? "center" : "left")};
  color: ${({ color }) => (color ? color : "#000")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
`;
export const Subhead = styled.Text<Props>`
  font-size: ${perfectSize(16)}px;
  /* font-weight: bold; */
  color: ${({ color }) => (color ? color : "#000")};
  text-align: ${(p) => (p.textAlign ? "center" : "left")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  padding-left: ${(p) => (p.pl ? perfectSize(p.ml) : 0)}px;
  padding-right: ${(p) => (p.pr ? perfectSize(p.ml) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
`;
export const Body = styled.Text<Props>`
  font-size: ${perfectSize(14)}px;
  font-family: "medium";
  text-align: ${(p) => (p.textAlign ? "center" : "left")};
  color: ${({ color }) => (color ? color : "#000")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
`;
export const Caption = styled.Text<Props>`
  font-size: ${perfectSize(14)}px;
  font-family: "regular";
  color: ${({ color }) => (color ? color : "#000")};
  text-align: ${(p) => (p.textAlign ? "center" : "left")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
`;
export const NavigationBar = styled.Text<Props>`
  font-size: ${perfectSize(18)}px;
  font-family: "bold";
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
  color: ${({ color }) => (color ? color : "#000")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
`;
export const SmallCaption = styled.Text<Props>`
  font-size: ${perfectSize(11)}px;
  font-family: "regular";
  color: ${(p) => (p.color ? p.color : "#999999")};
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  text-align: ${(p) => (p.textAlign ? "center" : "left")};
`;
export const T14BOLD = styled.Text<Props>`
  font-size: ${perfectSize(14)}px;
  /* font-family: "bold"; */
  font-weight: bold;
  text-align: ${(p) => (p.textAlign ? "center" : "left")};
  color: ${({ color }) => (color ? color : "#000")};
  margin-top: ${(p) => (p.mt ? perfectSize(p.mt) : 0)}px;
  margin-left: ${(p) => (p.ml ? perfectSize(p.ml) : 0)}px;
`;

export const SText = styled(Subhead)<Props>`
  font-size: ${({ fz }) => (fz ? perfectSize(fz) : perfectSize(16))}px;
  font-weight: ${({ fw }) => fw || "normal"};
`;
