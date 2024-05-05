import MyComponent from "./MyComponent";
import { MyContext } from "./MyContext";
import { useState, react } from "react";

export function ContextApp() {
  const [text, setText] = useState("");
  return (
    <diV>
      <h1>Context Example</h1>

      <MyContext.Provider value={{ text, setText }}>
        <MyComponent />
      </MyContext.Provider>
    </diV>
  );
}
