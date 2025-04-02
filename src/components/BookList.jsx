import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';
import fantasy from "../data/fantasy.json"; 

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const BookList = () => {
    return (
        <>
            <Navbar className="justify-content-start m-3">
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                            type="text"
                            placeholder="Cerca un Libro..."
                            className=" mr-sm-2"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Cerca</Button>
                        </Col>
                    </Row>
                </Form>
            </Navbar>

            {fantasy.map((book) => (
                <Col key={book.asin} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <SingleBook book={book} />
                </Col>
            ))}
        </>
    );
};

export default BookList;
