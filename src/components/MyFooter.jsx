import "bootstrap/dist/css/bootstrap.css";

function MyFooter() {
  return (
    <>
      <footer className="bg-secondary position-fixed bottom-0 vw-100 p-3 d-flex flex-column align-items-center">
        <div>
          <h3 className="text-white">Contatti</h3>
      <ul className="list-unstyled">
        <li className="text-white">
            Telefono: 000 000 0000 
        </li>
              
        <li className="text-white">
            Email: email@dominio.com
        </li>
              
        <li className="text-white">
            Fax: 000 000 0000
        </li>
      </ul>
        </div>
      </footer>
    </>
  );
}

export default MyFooter