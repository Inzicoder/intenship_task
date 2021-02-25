import React, { useState,useEffect } from 'react'
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import "bootswatch/dist/lux/bootstrap.min.css";
import Header from "./components/Header";
import Home from './components/screens/Home'
import Notes from './components/screens/Notes';
import Create from './components/screens/Create';

function App() {
  const[notes,setNotes]=useState([])

  useEffect(() => {
    console.log(notes);
  }, [notes])

  
  return (
    <div>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/notes">
        <Notes setNotes={setNotes} notes={notes}/>
      </Route>
      <Route path="/create">
        <Create setNotes={setNotes} />
      </Route>
    </div>
  );
}

export default App;
