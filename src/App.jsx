import { useState } from "react";

function App() {
  const [bgcolor, setBgcolor] = useState("white");
  const changeColor = () => {
    const colors=["red","orange","yellow","green","blue"];
    const random=colors[Math.floor(Math.random()*colors.length)];
    setBgcolor(random)
  };
  return (
    <div style={{backgroundColor:bgcolor,height:"100vh"}}>
      <p>Change Background</p>
      <button onClick={changeColor}>Change Background</button>
    </div>
    
  );
}

export default App;