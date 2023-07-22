import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./static/sass/index.sass";
import Cards from "./pages/Cards";
import DeckBuilder from "./pages/DeckBuilder";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MyDeck from "./pages/MyDecks";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/deck-builder" element={<DeckBuilder />} />
        <Route path="/my-decks" element={<MyDeck />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}


