import "bootstrap/dist/css/bootstrap.css"
import Nav from 'react-bootstrap/Nav';

function MyNav() {
  return (
      <Nav
        className="bg-secondary"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
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
}

export default MyNav;