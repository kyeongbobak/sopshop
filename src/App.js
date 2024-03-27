import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import SelectBox from "./components/SelectBox/SelectBox";

function App() {
  const options = [
    { value: "010", label: "010" },
    { value: "011", label: "011" },
    { value: "016", label: "016" },
    { value: "017", label: "017" },
    { value: "018", label: "018" },
    { value: "019", label: "019" },
  ];

  const defaultValue = options[0];

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
        <SelectBox options={options} defaultValue={defaultValue} />
      </BrowserRouter>
    </>
  );
}
export default App;
