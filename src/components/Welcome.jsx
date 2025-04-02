import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/Welcome.css"

const Welcome = () => {
  return (
    <> 
    <div className="welcomeContainer p-2 w-25 mb-5 ">
     <h1 className="text-center">Benvenuto Nella Nostra Libreria !</h1>
    </div>
  
    <h2 className="text-center">I Nostri Libri:</h2>
    </>
  )
}

export default Welcome;