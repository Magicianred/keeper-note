import React, { useState } from 'react'

function Area(props) {
    const [note, setNote] = useState({
        title : "",
        content:""
    })
    function HandleChange(event){
        const { name, value} = event.target;
        setNote((prevNote) =>{
            return{
                ...prevNote,
                [name] : value
            }
        })
    }

    function SubmitNote(event){
        event.preventDefault();

        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        if(note.title === ""  &&  note.content === ""){
            alert("enter anythink");
            note.title="default title";
            note.content = "default content";
        }
    }
    return (
        <div className="container">
            <form className="form">
                <input className="input" name="title" value={note.title} onChange={HandleChange} placeholder="Title"/>
                <textarea className="text-area" name="content" value={note.content} onChange={HandleChange} placeholder="Take a note " rows="3"  />
                <button className="btn" onClick={SubmitNote}>Add</button>
            </form>
        </div>
    )
}

export default Area
