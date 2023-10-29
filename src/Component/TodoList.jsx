import React,{useState} from 'react'

function TodoList({list,setList,store,setStore}) {
   const id = store.length? store[store.length-1]+1 : 1
    const handleSubmit =()=>{
        setStore([...store,list
        ])
        setList("")
    }
  return (
    <form className="forma" onSubmit={(e)=>e.preventDefault()}>
        <h1>ToDo List</h1>
        <div className='todo'>
        <input
        value={list}
        onChange={(e)=>setList(e.target.value)}
        placeholder='Enter your task'
        type='text'
        ></input>
        <button onClick={()=>handleSubmit()}>Add</button>
        </div>
    </form>
  )
}

export default TodoList
