import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import searchIcon from "../../assets/icons/icon_search.png";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";
const Input = ({ setInputValue, inputValue, onEnterButtonHandle }) => {
    const onClickDeleteButtonHandle = () => {
        setInputValue("");
    };
    const onKeyPressHandle = (e) => {
        if (e.key === "Enter") {
            onEnterButtonHandle();
        }
    };
    return (_jsxs("div", { id: "search-bar", children: [_jsx("img", { src: searchIcon, alt: "searchIcon" }), _jsx("input", { type: "text", placeholder: "\uB9C1\uD06C\uB97C \uAC80\uC0C9\uD574 \uBCF4\uC138\uC694.", value: inputValue, onChange: (e) => setInputValue(e.target.value), onKeyDown: onKeyPressHandle }), _jsx(DeleteAllButton, { onClick: () => onClickDeleteButtonHandle(), children: _jsx(Delete, {}) })] }));
};
const DeleteAllButton = styled.button `
  width: 25px;
  height: 25px;
  border-radius: 999px;
  border: none;
  background-color: #ccd5e3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  @media (max-width: 767px) {
    width: 29px;
    height: 25px;
  }
`;
export default Input;