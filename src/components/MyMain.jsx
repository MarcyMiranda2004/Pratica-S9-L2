import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from './Welcome';
import BookList from './BookList';

const MyMain = () => {
    return (
        <main className='d-flex flex-column align-items-center'>
            <Welcome />
            <Container>
                <Row>
                    <BookList /> 
                </Row>
            </Container>
        </main>
    );
}

export default MyMain;
