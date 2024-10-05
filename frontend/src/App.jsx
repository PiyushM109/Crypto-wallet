import Home from "./pages/home";
import CreateKeys from "./pages/CreateKeys";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/create_keys" element={<CreateKeys />}/>
      </Routes>
    </div>
  );
}

export default App;
