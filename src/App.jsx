import { useEffect } from "react";

function App() {
  useEffect(()=>{
    console.log(import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID)
  })
  return (
    <>
      <p className="bg-red-500">hello world</p>
    </>
  );
}

export default App;
