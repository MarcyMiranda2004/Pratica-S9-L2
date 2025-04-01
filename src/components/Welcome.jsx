import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

function Welcome() {
  useEffect(() => {
    alert("Benvenuto Nella Nostra Libreria !");
  }); 

  return <h2 className="text-center">I Nostri Libri:</h2>;
}

export default Welcome;