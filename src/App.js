import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";

function App() {
  const Contents = styled.p`
    font-size: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    color: red;
  `;

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}
export default App;
