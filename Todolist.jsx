import React, { useState } from 'react'
import'./Todolist.css'
const Todolist = () => {
    const[activity,setActivity]=useState("")
    const[listData,setlistData]=useState([])
    function addActivity(){
    //    setlistData([...listData,activity])
    //    console.log(listData)
    setlistData((listData)=>{
        const updatedList=[...listData,activity]
        setActivity("");
        return updatedList
        
    })
    }
    function removeActiivity(i){
     const updatedListData=listData.filter((Element,id)=>{
        return i!=id;
     })
     setlistData(updatedListData);
    }
    function removeAll(){
        setlistData([])
    }
  return (
    <div className='Main'>
       <div className='Header'>
        <h1>TODO LIST</h1>
       </div>
       <div className="Content">
        <input type="text" placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
        <button className='Button' onClick={addActivity}>Add</button>
        <h3 className='listheading'>Here is your list😊</h3>
        {listData!=[] && listData.map((data,i)=>{
            return(
                <>
                <p key={i}>
                    <div className='listdata'><h3>{data}</h3></div>
                    
                    <button className='Remove' onClick={()=>removeActiivity(i)}>Delete</button>
                </p>
                </>
            )
        })}
        {listData.length>=1 && 
        <button onClick={removeAll} className='Removeall'>RemoveAll</button>}
        
       </div>
    </div>
  )
}

export default Todolist