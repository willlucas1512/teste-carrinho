import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaInicial from "./TelaInicial";
import Carrinho from "./Carrinho";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route
          path="/acima"
          element={<Carrinho url={"produtosAcima.json"} />}
        />
        <Route
          path="/abaixo"
          element={<Carrinho url={"produtosAbaixo.json"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
