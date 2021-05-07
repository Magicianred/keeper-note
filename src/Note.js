import React from "react";

const Note = (props) =>{
    function HandleClick(){
        props.onDelete(props.id)
    }
    return( 
         <div className="note">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <button onClick={HandleClick} className="button">Delete</button>
        </div>
    )
}

export default Note;