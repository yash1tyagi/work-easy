import React, { useContext , useState } from 'react';
import { Adddata } from './adddata';
import { Dataitem } from './dataitem';
import { useEffect } from 'react';
import NoteContextTwo from '../context2/notes2/notecontext'
import { useParams } from "react-router-dom"
import { LessData } from './lessData';
// import { Navigate } from 'react-router-dom';

export default function Data() {
    const context = useContext(NoteContextTwo)
    const { notes, getData } = context
    let { id } = useParams();
    useEffect(() => {
        getData(id);

        //eslint-disable-next-line
    }, [])
    console.log(notes)
    const sumall = notes.map(item => item.title).reduce((prev, curr) => prev + curr, 0);
    // console.log(sumall);
    const sumLess = notes.map(item => item.titleLess).reduce((prev, curr) => prev + curr, 0);
    // console.log(sumLess);
    let total = sumall - sumLess
    const [show , setShow]= useState(false)

    const [less , setless]= useState(false)

    return (
        <div div className=''>
        
        <div className='w-full flex flex-row justify-center'>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 h-10 mt-5"  onClick={()=>{setShow(!show)}}  >Add</button>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 h-10 mt-5"  onClick={()=>{setless(!less)}}  >Less</button>
            </div>  



         { show ? <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <Adddata />
            </div>
          </div> : null}

          { less ? <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <LessData />
            </div>
          </div> : null}
        {/* </div> */}
            
  
         
           


<div className='flex flex-row justify-around my-5'>
    <div className='text-2xl'>{sumall}</div>
    <div className='text-2xl'>Avaliable  {total}</div>
    <div className='text-2xl'>{sumLess}</div>
</div> 
<div className="overflow-y-auto overflow-x-auto h-80 relative flex justify-center">
    <table className="w-5/6 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Date
                </th>
                <th scope="col" className="py-3 px-6">
                    Add
                </th>
                <th scope="col" className="py-3 px-6">
                    Less
                </th>
                <th scope="col" className="py-3 px-6">
                    Remark
                </th>
                <th scope="col" className="py-3 px-6">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
        {
                notes.map((notes) => {
                    // return <li>{notes.title}</li>
                    return <Dataitem key={notes._id} note={notes} />
                })
         }
        </tbody>
        
    </table>
</div>

            </div>
    )
}