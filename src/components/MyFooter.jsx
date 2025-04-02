import "bootstrap/dist/css/bootstrap.css";

const MyFooter = () => {
  return (
    <footer className="bg-secondary p-3 d-flex flex-column align-items-center mt-auto">
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
  );
}

export default MyFooter;
