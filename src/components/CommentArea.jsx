import React, { Component } from 'react';
import { Container, ListGroup, Spinner, Alert } from 'react-bootstrap';
import AddComment from './AddComment';


class CommentArea extends Component {
    state = {
        commenti: [],
        isLoading: true,
        isError: false,
    };

    getComments = () => {
        const CommentsUrl = `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`;


        fetch(CommentsUrl, { 
            method: "GET",  
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlOGEyOTk0OTJlNDAwMTVlN2M2ZjQiLCJpYXQiOjE3NDM2ODYxODUsImV4cCI6MTc0NDg5NTc4NX0.1BBxF9QeQezyGSqI7tN8qblLiWRKNbCxrLxt-LQt45M" 
            }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Errore Durante l'esecuzione della Fetch");
            }
        })
        .then((data) => {
            console.log("Commenti", data);
            this.setState({
                commenti: data,
                isLoading: false
            });
        })
        .catch((err) => {
            console.log("Errore:", err);
            this.setState({
                isLoading: false,
                isError: true,
            });
        });
    };

    componentDidMount = () => {
        this.getComments();
    };

    render() {
        return (
            <Container>
                <h3>Commenti Su Questo Libro</h3>
                {this.state.isLoading && <Spinner animation="border" variant="primary" />}
                {this.state.isError && <Alert variant="danger">Errore nel caricamento dei commenti</Alert>}
                <ListGroup>
                    {this.state.commenti.length > 0 ? (
                        this.state.commenti.map((commento, index) => (
                            <ListGroup.Item key={index}>
                                <strong>{commento.author}</strong>: {commento.comment} | {commento.rate}/5
                            </ListGroup.Item>
                        ))
                    ) : (
                        !this.state.isLoading && <p>Nessun commento disponibile.</p>
                    )}
                </ListGroup>
            </Container>
        );
    }
}

export default CommentArea;
