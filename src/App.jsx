import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import CreateDuel from "./pages/CreateDuel";
import Arena from "./pages/Arena";
import Verdict from "./pages/Verdict";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={<Landing />} />
        <Route path="/create"  element={<CreateDuel />} />
        <Route path="/arena"   element={<Arena />} />
        <Route path="/verdict" element={<Verdict />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
