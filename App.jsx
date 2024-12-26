import React, { useState } from 'react'
import './App.css';
import { useRef } from 'react';
import Todolist from './components/Todolist';

function App () {
  const[name,SetName]=useState("")
  const fileRef=useRef("");
  
  
  return (
    <>
    <Todolist/>
    </>
  )
}

export default App