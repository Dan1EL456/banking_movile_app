import { useState } from "react";
import Splash from "./src/screens/Splash";

export default function App() {
  const [showSplash, setShowPlash] = useState(true);

  if(showSplash){
    return <Splash onFinish={() => setShowPlash(false)} />
  }
}