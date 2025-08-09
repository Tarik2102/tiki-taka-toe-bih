import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <nav className="flex gap-4 p-4">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        <Link to="/game" className="text-blue-500 hover:underline">Game</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}
