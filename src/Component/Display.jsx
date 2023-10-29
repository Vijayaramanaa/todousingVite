import React,{useState} from 'react'

function Display({store,setStore}) {
    const handleDelete = (id)=>{
     const det = store.filter((item)=>{
           item !== id
        })
    setStore(det)
        

    }
    
    const display =  store.map((item,index)=>{
                      return  <div className='mapdiv' key={index}>
                            <li>{item}</li>
                            <button onClick={()=>handleDelete(index)}>X</button>
                            </div>
        })
    
  return (
    <div className='disp'>
      {store.length?  <ul>{display}</ul> :<h1 style={{color:'blue'}}>Add some task</h1> }
    </div>
  )
}

export default Display