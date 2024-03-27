import Select from "react-select";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "blue" : "white",
    color: state.isSelected ? "white" : "black",
    "&:hover": {
      backgroundColor: "lightblue",
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    overflowY: "auto", // 스크롤 가능하도록 설정
    maxHeight: "200px", // 최대 높이 설정
  }),
};

const SelectBox = ({ options, defaultValue }) => {
  return <Select options={options} styles={customStyles} defaultValue={defaultValue} />;
};

export default SelectBox;
