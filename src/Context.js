import { createContext, useContext, useState } from "react";
//1.createContext를 impor함
const light = createContext(); //console.log(light);
//2.Context api를 사용하겠다고 정의한것

const ThedeepSub = () => {
  //받아오기
  //const real_dark = useContext(light);
  const { state, setState } =
    useContext(light); /**Provider 비구조할당 - 객체 */
  //4. useContext을 사용해 받아올곳에 useContext(Context이름)으로 가져옴
  //console.log(real_dark);
  return (
    <>
      {/* sunny {real_dark} */}
      sunny {state}
      <button onClick={() => setState("프론트엔드")}>전직 GO!</button>
    </>
  );
};

const DeepSub = ({ state, setState }) => {
  return (
    <>
      <ThedeepSub />
    </>
  );
};

const Sub = ({ state, setState }) => {
  return (
    <>
      <DeepSub />
    </>
  );
};

function App() {
  const [state, setState] = useState("퍼블리셔");
  return (
    <>
      {/* 3.넘겨줄곳에 Context이름.Provider로 감싼 후 value 값주기 */}
      <light.Provider value={{ state, setState }}>
        <Sub />
      </light.Provider>
    </>
  );
}

export default App;
/*
  context를 사용하면 중간에 있는 엘리먼트들에게 props를 넘겨주지 않아도 됩니다.
  context의 주된 용도는 다양한 레벨에 네스팅된 많은 컴포넌트에게 데이터를 전달하는 것입니다. context를 사용하면 컴포넌트를 재사용하기가 어려워지므로 꼭 필요할 때만 쓰세요.
  context는 React 컴포넌트 트리 안에서 전역적(global)이라고 볼 수 있는 데이터를 공유할 수 있도록 고안된 방법입니다. 
  러한 데이터로는 현재 로그인한 유저, 테마, 선호하는 언어 등이 있습니다
*/
