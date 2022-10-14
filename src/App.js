import { createContext, useState } from "react";
import Sub from "./Sub";
import "./dark.scss";

const DarkTheme = createContext();
export { DarkTheme }; //다른파일에서 할경우는 export를 해줘야함
const App = () => {
  const [dark, setDark] = useState(false);
  return (
    <div className={`App ${dark ? "dark" : ""}`}>
      <DarkTheme.Provider value={{ dark, setDark }}>
        <Sub />
      </DarkTheme.Provider>
    </div>
  );
};
export default App;
