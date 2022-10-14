
// import { AddNote } from "./addNote";
import NoteContext from '../context/notes/noteContext'
import Notesitem from './Notesitem';
import { useContext, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

function Notes() {
    let navigate = useNavigate();
    const context = useContext(NoteContext)
    const { notes, getNotes } = context
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();
        }
        else{
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [])

    // const ref = useRef(null)
    // const refClose = useRef(null)
    // const[note, setNote] = useState({id:"", etitle:""})


    // const updateNote = (currentNote) => {
    //     ref.current.click()
    //     setNote({id: currentNote._id, etitle: currentNote.title})
    // }


    // const handleClick = (e) =>{
    //     console.log("note is updating " , note);
    //     refClose.current.click();
    //     editNote(note.id, note.etitle);
    // }
    // const onChange = (e) =>{
    //     setNote({...note, [e.target.name]: e.target.value})
    // }
    return <div className='w-full flex flex-col justify-center '>
            <div className=" flex justify-center w-full">
        <div className='lg:grid grid-cols-3 gap-3 sm:grid-cols-3 w-5/6'>
            {notes.lenght===0 && "No Notes to display"}
            {
                notes.map((notes) => {
                    return <Notesitem key={notes._id}  note={notes} />
                })
            }
        </div>;
        </div>
    </div>
}

export default Notes;



