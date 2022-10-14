import React, { useContext } from 'react';
import NoteContextTwo from '../context2/notes2/notecontext'

export const Dataitem = (props) => {
  const {note} = props
  const context = useContext(NoteContextTwo)
  const {deleteNote} = context
  const strDate = note.date.slice(0 , 10)
  return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {strDate }
                </th>
                <td className="py-4 px-6">
                    {note.title}
                </td>
                <td className="py-4 px-6">
                    {note.titleLess}
                </td>
                <td className="py-4 px-6">
                    {note.remark}
                </td>
                <td className="py-4 px-6">
                {/* <button  className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 h-10 mt-5" onClick={()=>{deleteNote(note._id)}} >Delete</button> */}
                <i className="fas fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i> 
                </td>
            </tr>
        
  
};
