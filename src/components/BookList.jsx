import React, { Component } from 'react';
import { Row, Col, Navbar, Form, Button } from 'react-bootstrap';
import SingleBook from './SingleBook';
import fantasy from "../data/fantasy.json";
import CommentArea from './CommentArea';
import AddComment from './AddComment';

class BookList extends Component {
    state = {
        selectedBook: null,
    };

    handleSelectBook = (asin) => {
        const selectedBook = fantasy.find(book => book.asin === asin);
        this.setState({ selectedBook });
    };

    render() {
        return (
            <>
                <Navbar className="justify-content-start m-3">
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Cerca un Libro..."
                                    className="mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit">Cerca</Button>
                            </Col>
                        </Row>
                    </Form>
                </Navbar>

                <Row>
                    <Col xs={12} md={9}>
                        <Row>
                            {fantasy.map((book) => (
                                <Col key={book.asin} xs={12} sm={6} md={4} lg={4} className="mb-3">
                                    <SingleBook book={book} onSelect={this.handleSelectBook} />
                                </Col>
                            ))}
                        </Row>
                    </Col>

                    <Col xs={12} md={3}>
                        {this.state.selectedBook ? (
                            <>
                                <CommentArea asin={this.state.selectedBook.asin} />
                                <AddComment asin={this.state.selectedBook.asin} />
                            </>
                        ) : (
                            <p className='p-2 bg-white rounded-2 border border-dark border-1'>
                                Seleziona un libro per vedere i commenti.
                            </p>
                        )}
                    </Col>
                </Row>
            </>
        );
    }
}

export default BookList;
