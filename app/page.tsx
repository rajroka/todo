"use client"
import React, { FormEvent, useState } from 'react'

const page = () => {

const[tasks,setTasks] = useState(["apple",'banana','orange'])

const[newTask, setNewTask] = useState("");

const handleNewTask = (event: { target: { value: React.SetStateAction<string>; }; }) =>{
  setNewTask(event?.target.value)
}




  function handleSubmit(event: FormEvent<HTMLInputElement>): void {
    console.log(newTask);
    setTasks([...tasks , newTask]);
    event.preventDefault();
  }

  

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, taskIndex) => taskIndex !== index)); // Filter out the task by index
  };

  return (
    <div className='w-screen h-screen items-center   '>
      <h1 className='h1 mt-[100px]  text-center'>Todo Lists </h1>
      <form className='flex gap-2 mt-[50px]  justify-center rounded  ' onSubmit={handleSubmit}>
        <input type="text" value={newTask}  className='border-2 border-black  py-2 ' placeholder='Enter a task '  onChange={handleNewTask}/>
        <button className=' bg-green-700  py-2 px-4  rounded add-button ' type='submit'> Add </button>
      </form>

     <ol className="mt-5 space-y-2 items-center w-[300px] ol " >
      {tasks.map((task, index)=>
      <li key={index}  className='flex items-center justify-between px-4 py-2 bg-gray-100 border border-gray-300 rounded shadow '>
        <span>{task}</span> 
        <button onClick={()=>deleteTask(index)} className='px-4 py-2 bg-red-600 rounded '>Delete </button></li>  )}
     </ol>
      
      
    </div>
  )
}

export default page
