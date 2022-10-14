import { useState } from "react";

const ThedeepSub = ({ state, setState }) => {
  return (
    <>
      {state}
      프론트엔드
      <button onClick={() => setState("성공")}>GO!</button>
    </>
  );
};

const DeepSub = ({ state, setState }) => {
  return (
    <>
      <ThedeepSub state={state} setState={setState} />
    </>
  );
};

const Sub = ({ state, setState }) => {
  //const { state } = props;
  return (
    <>
      {/* {console.log(props)} */}
      {/* {state} */}
      <DeepSub state={state} setState={setState} />
    </>
  );
};

function App() {
  const [state, setState] = useState("sunny");
  return (
    <>
      <Sub state={state} setState={setState} />
    </>
  );
}

export default App;
