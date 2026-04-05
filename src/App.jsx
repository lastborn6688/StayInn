import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

const App = () => {
  const isOwnerPath = useLocation().pathname === "owner";

  return (
    <div>

      {/*Authentication Header*/}
      <header>
        <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>


      {!isOwnerPath && <Navbar />}
      <div className="min-h-[70vh">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
