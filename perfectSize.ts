import { create } from "react-native-pixel-perfect";

const designResolution = {
  width: 414,
  height: 896,
}; //this size is the size that your design is made for (screen size)
export const perfectSize = create(designResolution);
