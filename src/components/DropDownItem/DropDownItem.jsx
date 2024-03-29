export default function DropDownItem({ value, setPhoneIdentify, setIsOpen, isOpen }) {
  const ValueClick = () => {
    setPhoneIdentify(value);
    setIsOpen(!isOpen);
  };
  return <li onClick={ValueClick}>{value}</li>;
}
