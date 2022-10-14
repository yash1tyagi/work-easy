import NoteContextTwo  from "./notecontext";
import { useState } from 'react'
const port = process.env.PORT || 5000

const NoteStateTwo = (props)=>{
  const host = `http://localhost:${port}`
  const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)
    const getData = async(id)=>{
      // get a note 
        const response = await fetch(`${host}/api/data/fetchalldata/${id}`, {
          method: 'GET',
          headers:{
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
    
          },
        //  body: JSON.stringify({title,description, tag})
    
        })
        const json = await response.json();
        // console.log("Feacthing Data"+ id);
        // console.log(json);
        setNotes(json);
      }
    // Add data 
    const addData = async( title, titleLess, id ,remark)=>{
      const response = await fetch(`${host}/api/data/adddata/${id}`, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
  
        },
        body: JSON.stringify({title, titleLess ,remark })
  
      })
      console.log("Adding Data"+ id);
      const note = await response.json();
      setNotes(notes.concat(note))
    }
        // Delete a note
        const deleteNote = async (id)=>{
          const response = await fetch(`${host}/api/data/deletedata/${id}`, {
            method: 'DELETE',
            headers:{
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
      
            }
          });
          const json = await response.json();
          console.log(json)
          // console.log("Deleting notes"+ id);
          const newNote = notes.filter((note)=>{return note._id!==id})
          setNotes(newNote)
        }

return(
          <NoteContextTwo.Provider value = {{notes, setNotes, addData, deleteNote, getData }}>
        {props.children}
    </NoteContextTwo.Provider>
)
}

export default NoteStateTwo 