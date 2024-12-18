import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";

// function createNotes(noteItems){
//     return(
//         <Note
//         key={noteItems.key}
//         title={noteItems.title}
//         content={noteItems.content}
//         />
//     );
// }
// function App(){
//     return (
//         <div>
//             <Header/>
//             {notes.map( noteItems =>(
    
//         <Note
//         key={noteItems.key}
//         title={noteItems.title}
//         content={noteItems.content}
//         />
//             )

// )}
//             <Footer/>
//         </div>
        

//     )
// }

function App() {
    const [notes,setNotes]=useState([]);
    function addNote(newNote){
        setNotes(prevNotes=>{
            return [...prevNotes,newNote];
        });
    }
    function deleteNote(id){
        setNotes(prevNotes =>{
            return prevNotes.filter((noteItem,index)=>{
                return index!==id;
            })
        })
    }
    return (
      <div>
        <Header />
        <CreateArea 
        onAdd={addNote}
        />
        {notes.map((noteItem,index) => {
            return <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            />
        })}
        {/* <Note key={1} title="Note title" content="Note content" /> */}
        <Footer />
      </div>
    );
  }
export default App;