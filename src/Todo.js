import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [data,setData]=useState('');
    const changeHandler=(e)=>{
        setData(e.target.value);
    }
    const getLocal=()=>{
        const getItem=JSON.parse(localStorage.getItem('setting'));
        if(getItem){
            return getItem
        }
        else{
            return []
        }
    }
    const[task,setTask]=useState(getLocal())
    const submitHandler=(e)=>{
        const newTodos=[...task,data];
        setTask(newTodos)
        setData('')
        e.preventDefault();
    }
    const deleteHandler=(index)=>{
        const updatedValues=[...task]
        updatedValues.splice(index,1);
        setTask(updatedValues)
    }
    useEffect(()=>{
        localStorage.setItem('setting',JSON.stringify(task))
    },[task])
  return (
    <center>
    <div>
        <form onSubmit={submitHandler}>
      <h1>TodoList</h1>
      <input type='text' style={{width:'30%',height:'24px'}} onChange={changeHandler}
      name='todo'
      value={data}/>
      <button style={{height:'28px'}}>ADD</button>
      </form>
      {
        task.map((tasks,index)=>{
            return(
            <div key={index}>
            <p>{tasks}</p>
            <button onClick={()=>deleteHandler(index)}>Delete</button>
            </div>
        )})
      }
    </div>
    </center>
  )
}

export default Todo
