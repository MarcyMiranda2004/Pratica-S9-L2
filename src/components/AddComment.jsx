import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

class AddComment extends Component {
    state = {
        comment: '',
        rating: 1,
        successMessage: '',
        errorMessage: '',
    };

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.addComment();
    };

    addComment = () => {
        const CommentsUrl = "https://striveschool-api.herokuapp.com/api/comments/";

        const newComment = {
            comment: this.state.comment, 
            rate: parseInt(this.state.rating), 
            elementId: this.props.asin, 
        };

        fetch(CommentsUrl, {
            method: "POST",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlOGEyOTk0OTJlNDAwMTVlN2M2ZjQiLCJpYXQiOjE3NDM2ODYxODUsImV4cCI6MTc0NDg5NTc4NX0.1BBxF9QeQezyGSqI7tN8qblLiWRKNbCxrLxt-LQt45M", 
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newComment)
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Errore durante l'aggiunta del commento");
            }
        })
        .then((data) => {
            this.setState({
                comment: '',
                rating: 1,
                successMessage: "Commento aggiunto con successo!",
                errorMessage: ''
            });
        })
        .catch((err) => {
            this.setState({
                successMessage: '',
                errorMessage: "Errore durante l'invio del commento!"
            });
        });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Scrivi un commento</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="comment"
                        value={this.state.comment}
                        onChange={this.handleInputChange}
                        placeholder="Inserisci il tuo commento..."
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Vota questo libro da 1 a 5</Form.Label>
                    <Form.Select
                        name="rating"
                        value={this.state.rating}
                        onChange={this.handleInputChange}
                        required
                    >
                        {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Invia Commento
                </Button>

                {this.state.successMessage && (
                    <Alert variant="success" className="mt-3">{this.state.successMessage}</Alert>
                )}
                {this.state.errorMessage && (
                    <Alert variant="danger" className="mt-3">{this.state.errorMessage}</Alert>
                )}
            </Form>
        );
    }
}

export default AddComment;
