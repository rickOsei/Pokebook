import { useState } from "react";
import HomeView from "./pages/HomeView";
import Router from "./Router";

function App() {
  const [generalColor, setGeneralColor] = useState(" #E85382");
  const [search, setSearch] = useState("");
  return <Router />;
}

export default App;
