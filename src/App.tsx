import { useState } from 'react'
import './App.css'
import { Routes, Route }  from "react-router"
import MainScreen from './screens/MainScreen/MainScreen'
import TaskDetailsScreen from './screens/TaskDetailsScreen/TaskDetailsScreen'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainScreen />}></Route>
        <Route path='/task/:id' element={<TaskDetailsScreen />}></Route>
      </Routes>
    </>
  )
}

export default App
