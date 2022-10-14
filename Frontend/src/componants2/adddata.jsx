import { useContext, useState } from 'react';

import NoteContextTwo from '../context2/notes2/notecontext'

import { useParams } from "react-router-dom"

export const Adddata = () => {
    const ContextTwo = useContext(NoteContextTwo)
    const { addData } = ContextTwo
    const [note, setNote] = useState({title:"", titleLess:"" , remark : ""})
    const { id } = useParams();
    const handleClick = (e) =>{
        e.preventDefault();
        let a = 0
        const int = parseFloat(note.title)|| (isNaN(a))
        const intLess = parseFloat(note.titleLess)|| (isNaN(a))
        const remark = note.remark
        addData(int, intLess, id , remark);
        setNote({title:"", titleLess:"", remark : ""})
         
    }
    
    const onChange = (e) =>{
        setNote({...note, [e.target.name] : e.target.value})
    }
    return <div className=''>
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add</label>
            <input type="number" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={onChange} name = "title" required  value={note.title}/>
          
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remark</label>
            <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={onChange} name = "remark" value={note.remark} required/>
            
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 h-10 mt-5" onClick={handleClick} >Add</button>
      
    </div>;
};
