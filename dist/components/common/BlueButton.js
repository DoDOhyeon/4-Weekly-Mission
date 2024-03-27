import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from "styled-components";
import { COLORS } from "../../constants/colors";
export const BlueButton = ({ text, width, height, margin, padding, fontSize, radius, onBtnHandle, }) => {
    return (_jsx(Button, { width: width, height: height, margin: margin, padding: padding, color: COLORS.White, fontSize: fontSize, radius: radius, onClick: () => (onBtnHandle ? onBtnHandle() : null), children: text }));
};
const Button = styled.button `
  display: block;
  width: ${({ width }) => width || "auto"};
  min-width: max-content;
  height: ${({ height }) => height || "auto"};
  border: 0px;
  border-radius: ${({ radius }) => radius || "0px"};
  margin: ${({ margin }) => margin || "auto"};
  padding: ${({ padding }) => padding || "auto"};
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  cursor: pointer;

  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  font-weight: 600;
  line-height: 21.6px;
`;