import { useContext } from 'react';
import { Link } from "react-router-dom";
import NoteContext from '../context/notes/noteContext'
function Notesitem(props) {
  const context = useContext(NoteContext)
  const {deleteNote} = context
    const {note} = props

  return <div className="p-6 max-w-sm bg-slate-500 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-2 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
        <div className='flex flex-row justify-around'>
       <i className="fas fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>    
    <Link className="btn btn-primary" to={"/data/"+note._id }role="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512 "className='w-5 h-5'><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Link>
    </div>
</div>

}

export default Notesitem;
