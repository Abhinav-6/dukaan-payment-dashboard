import { useEffect, useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  const [isNavBarOpen, setNavBarOpen] = useState(false);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    if (width < 1024) {
      setNavBarOpen(false);
    }
  }, [width]);

  function openNavBar() {
    setNavBarOpen(true);
  }
  function closeNavBar() {
    setNavBarOpen(false);
  }

  return (
    <>
      <Navbar isOpen={isNavBarOpen} closeNavBar={closeNavBar} />
      <Main setNavBarOpen={openNavBar} />
    </>
  );
}

export default App;
