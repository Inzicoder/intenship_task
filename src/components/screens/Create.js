import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import uniqid from 'uniqid'
import BootstrapDate from './Date';

const Create = ({ setNotes }) => {
    //   const items = props.items;
    const [form, setForm] = useState({ title: 'note 1', text: 'text 1', data: '2021-03-03' });
    const [id, setId] = useState(uniqid())
    // const[selectedDate,setSelectedDate]=useState(null)

    function handleChange(event) {
        const { value, name } = event.target;
        setForm({ ...form, [name]: value, id })
        console.log(form)
    }


    function addNotes() {
        setId(uniqid())
        setNotes(note => [...note, form])
        setForm({ title: '', text: '', data: '' })
    }

    return (
        <Container>
            <Form className="mt-3">
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={handleChange} value={form.title} name="title" type="text" placeholder="Enter Title" />
                </Form.Group>

                <Form.Group controlId="formBasicText">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control onChange={handleChange} value={form.text} name="text" as="textarea" type="text" placeholder="Enter Notes" />
                </Form.Group>
                <Form.Group controlId="formBasicText">
                    <Form.Label>Date</Form.Label>
                    <Form.Control onChange={handleChange} value={form.date} type="date" name="date" placeholder="Select Date" />
                </Form.Group>
            </Form>
            <button onClick={addNotes}>Add Notes</button>

        </Container>
    )
}

export default Create
