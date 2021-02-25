import React, { useState, useEffect } from 'react';
import { Form, Card, Container } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import trashBin from '@iconify/icons-ion/trash-bin';
import editFilled from '@iconify-icons/ant-design/edit-filled';
import BootstrapDate from './Date';
import NoteSearch from './Searchbar'
import Sort from './Sort';


const Notes = ({ notes, setNotes, text, key }) => {
  const [displayModal, setDisplayModal] = useState('none')
  const [form, setForm] = useState({ title: '', text: '', data: '' });
  const [editId, setEditId] = useState("");

  function deleteNotes(id) {
    setNotes(notes.filter(n => n.id !== id))
  }


  function handleChange(event) {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value })
    console.log(form)
  }

  function editNotes(id) {
    setDisplayModal('block')
    setEditId(id)
    // console.log(notes, id);
    notes.map(note => {
      if (note.id === id) {
        console.log(note.id + " " + note)
        setForm(note)
      }
    })

  }

  useEffect(() => {
    console.log(form);
  }, [form])

  useEffect(() => {
    console.log(notes);
  }, [notes])

  function updateNotes() {
      setNotes(notes.map(note => note.id === editId ? { ...note, title: form.title, text: form.text, date: form.date } : note))
      setDisplayModal('none')
    
  }

  return (
    <Container className="mt-4">
      <NoteSearch notes={notes} />
      {notes && notes.map(note => (
        <Card key={note.id} style={{ width: '18rem' }}>
          <Card.Body>
            <Icon onClick={() => editNotes(note.id)} style={{ float: "right" }} icon={editFilled} />
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>
              {note.text}
            </Card.Text>
            <Icon style={{ float: "right" }} icon={trashBin} onClick={() => deleteNotes(note.id)} />
            <Card.Text>
              {note.data}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}

      <Form className="mt-3" style={{ display: displayModal }}>
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
      <button onClick={updateNotes}>Updates Notes</button>
      {/* <Sort /> */}
    </Container>


  )
}

export default Notes
