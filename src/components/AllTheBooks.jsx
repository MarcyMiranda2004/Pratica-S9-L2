import { Card, Container, Row, Col } from "react-bootstrap";
import books from "../books/fantasy.json";

function AllTheBooks() {
  return (
    <Container className="mt-4">
      <Row>
        {books.map((book, index) => (
          <Col key={index} md={3} sm={6} className="mb-3">
            <Card>
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;