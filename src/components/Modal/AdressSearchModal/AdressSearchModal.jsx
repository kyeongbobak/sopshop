// import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { DaumPostcodeBack } from "./AdressSearchModalStyle";

export default function AdressSearchModal() {
  // props
  // const [zipCode, setZipCode] = useState("");
  // const [adress, setAdress] = useState("");
  // const [isOpen, setIsOpen] = useState(false);

  // const completeHandler = (data) => {
  //   const { adress, zipcode } = data;
  //   props.setAdress(adress);
  //   props.setZipCode(zipcode);
  // };

  // const closeHandler = (state) => {
  //   if (state === "FORCE_CLOSE") {
  //     setIsOpen(false);
  //   } else if (state === "COMPlETE_CLOSE") {
  //     setIsOpen(false);
  //   }
  // };

  // onComplete={() => completeHandler()} onClose={closeHandler()}

  return (
    <>
      <DaumPostcodeBack>
        <DaumPostcode></DaumPostcode>
      </DaumPostcodeBack>
    </>
  );
}
