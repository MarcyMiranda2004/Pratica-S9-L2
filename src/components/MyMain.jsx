import { Container, Row} from 'react-bootstrap';
import Welcome from './Welcome';
import BookList from './BookList';
import React, { Component } from 'react';

class MyMain extends Component {

    render() {
        return (
            <main className='d-flex flex-column align-items-center'>
                <Welcome />
                <Container>
                    <Row>
                        <BookList /> 
                    </Row>
                </Container>
            </main>
        )
    }
}

export default MyMain;
