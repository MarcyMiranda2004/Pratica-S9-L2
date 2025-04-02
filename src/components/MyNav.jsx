import "bootstrap/dist/css/bootstrap.css";
import Nav from "react-bootstrap/Nav";
import MyLogo from "../assets/img/logo.png";

const MyNav = () => {
  return (
    <Nav
      className="bg-secondary d-flex align-items-center"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <img src={MyLogo} alt="logo" width={120} />
      <Nav.Item>
        <Nav.Link href="/home" className="text-white">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#" className="text-white">Browse</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#" className="text-white">Link</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default MyNav;
