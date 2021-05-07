import React,{ useState } from  "react";
import './App.css';
import Area from "./Area";
import Navbar from "./Navbar";
import Note from "./Note";


function App() {

  const [notes, setNotes] = useState([])

  function AddNote(newNotes){
    setNotes(prevNotes =>{
     return [...prevNotes, newNotes];
    })
  }
  function DeleteNote(id){
      setNotes(prevNotes =>{
         return prevNotes.filter((noteItems, index) =>{
            return index !== id;
        })
      })
  }


  return (
    <div className="App">
      <Navbar />
      <Area onAdd={AddNote} />
      {notes.map((noteItems, index) => {
        return <Note key={index} id={index} title={noteItems.title} content={noteItems.content} onDelete={DeleteNote}/>
      })}
    </div>
  );
}

export default App;
