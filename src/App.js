import { useState } from "react";
import HomeView from "./pages/HomeView";
// import Background from "./svg/Background";

function App() {
  const [generalColor, setGeneralColor] = useState(" #E85382");
  return <HomeView color={generalColor} />;
}

export default App;
