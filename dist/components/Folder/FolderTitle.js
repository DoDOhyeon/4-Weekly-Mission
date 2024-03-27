import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import share from "../../assets/icons/share.svg";
import pen from "../../assets/icons/pen.svg";
import trash from "../../assets/icons/trash.svg";
const FolderTitle = ({ titleName, setIsModal }) => {
    return (_jsxs(Container, { children: [_jsx(Title, { children: titleName }), titleName !== "전체" && (_jsxs(OptionBox, { children: [_jsxs(Option, { onClick: () => {
                            setIsModal("공유");
                        }, children: [_jsx(OptionIcon, { src: share }), _jsx(OptionText, { children: "\uACF5\uC720" })] }), _jsxs(Option, { onClick: () => {
                            setIsModal("이름 변경");
                        }, children: [_jsx(OptionIcon, { src: pen }), _jsx(OptionText, { children: "\uC774\uB984 \uBCC0\uACBD" })] }), _jsxs(Option, { onClick: () => {
                            setIsModal("삭제");
                        }, children: [_jsx(OptionIcon, { src: trash }), _jsx(OptionText, { children: "\uC0AD\uC81C" })] })] }))] }));
};
const Container = styled.div `
  width: 1060px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 24px auto;

  @media (max-width: 1124px) {
    width: 704px;
  }
  @media (max-width: 774px) {
    width: 325px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin: 28px auto 20px;
  }
`;
const Title = styled.span `
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;
const OptionBox = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;
const Option = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  &:hover {
    cursor: pointer;
  }
`;
const OptionIcon = styled.img `
  width: 18px;
  height: 18px;
`;
const OptionText = styled.span `
  color: #9fa6b2;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export default FolderTitle;
