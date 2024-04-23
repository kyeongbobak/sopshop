import DaumPostcode from "react-daum-postcode";
import { DaumPostcodeBack } from "./AdressSearchModalStyle";

export default function AdressSearchModal(props) {
  const completeHandler = (data) => {
    props.onComplete(data);
  };

  return (
    <>
      <DaumPostcodeBack>
        <DaumPostcode onComplete={completeHandler}></DaumPostcode>
      </DaumPostcodeBack>
    </>
  );
}
