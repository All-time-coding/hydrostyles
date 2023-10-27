import styled from "styled-components/native";
import { perfectSize } from "./perfectSize";

interface Props {
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  aic?: boolean;
  justify?: string;
  row?: boolean;
  width?: number | string;
  height?: number | string;
  pr?: number;
  pl?: number;
  pt?: number;
  pb?: number;
  wrap?: boolean;
  bg?: string;
  br?: number;
  fix?: boolean;
}

export const Stack = styled.View<Props>`
  width: ${(p) =>
    p.fix && p.width
      ? p.width + "px"
      : typeof p.width === "string"
      ? p.width
      : perfectSize(p.width) || "auto"};
  height: ${(p) =>
    p.fix && p.height
      ? p.height + "px"
      : typeof p.height === "string"
      ? p.height
      : perfectSize(p.height) || "auto"};
  align-items: ${(p) => (p.aic ? "center" : "flex-start")};
  flex-direction: ${(p) => (p.row ? "row" : "column")};
  justify-content: ${(p) => p.justify || "flex-start"};
  margin-top: ${(p) => perfectSize(p.mt) || 0}px;
  margin-left: ${(p) => perfectSize(p.ml) || 0}px;
  padding-top: ${(p) => perfectSize(p.pt) || 0}px;
  padding-bottom: ${(p) => perfectSize(p.pb) || 0}px;
  padding-left: ${(p) => perfectSize(p.pl) || 0}px;
  padding-right: ${(p) => perfectSize(p.pr) || 0}px;
  flex-wrap: ${(p) => (p.wrap ? "wrap" : "nowrap")};
  background-color: ${(p) => p.bg || "transparent"};
  border-radius: ${({ br }) => perfectSize(br) || 0}px;
`;

export const TouchableStack = styled.TouchableOpacity<Props>`
  width: ${(p) =>
    p.fix && p.width
      ? p.width + "px"
      : typeof p.width === "string"
      ? p.width
      : perfectSize(p.width) || "auto"};
  height: ${(p) =>
    p.fix && p.height
      ? p.height + "px"
      : typeof p.height === "string"
      ? p.height
      : perfectSize(p.height) || "auto"};
  align-items: ${(p) => (p.aic ? "center" : "flex-start")};
  flex-direction: ${(p) => (p.row ? "row" : "column")};
  justify-content: ${(p) => p.justify || "flex-start"};
  margin-top: ${(p) => perfectSize(p.mt) || 0}px;
  margin-left: ${(p) => perfectSize(p.ml) || 0}px;
  padding-top: ${(p) => perfectSize(p.pt) || 0}px;
  padding-bottom: ${(p) => perfectSize(p.pb) || 0}px;
  padding-left: ${(p) => perfectSize(p.pl) || 0}px;
  padding-right: ${(p) => perfectSize(p.pr) || 0}px;
  flex-wrap: ${(p) => (p.wrap ? "wrap" : "nowrap")};
  background-color: ${(p) => p.bg || "transparent"};
  border-radius: ${({ br }) => perfectSize(br) || 0}px;
`;
