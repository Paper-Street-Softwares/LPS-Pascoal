import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/utilities.css";
import "./index.css";

import Index from "./pages/Index.jsx";

import { useColorMode } from "./context/UseContextArchive.jsx";
import { ColorModeProvider } from "./context/UseContextArchive.jsx";
import GlobalClickEvent from "./context/GlobalClickEvent.jsx";
import AppForm from "./pages/FormSectionRota.jsx";
import Sucesso from "./pages/FormSucesso.jsx";

// Altere aqui para "LP" ou "site"
const mode = "LP"; // só muda isso e o resto se adapta

ReactDOM.createRoot(document.getElementById("root")).render(
  <ColorModeProvider>
    <GlobalClickEvent />{" "}
    <Router>
      <Routes>
        {/* <Route path="/" element={<Index mode={mode} />} /> */}
        <Route path="/" element={<AppForm mode={mode} />} />
        <Route path="/sucesso" element={<Sucesso mode={mode} />} />
      </Routes>
    </Router>
  </ColorModeProvider>,
);
