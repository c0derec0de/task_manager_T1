import './App.css'
import { Routes, Route  }  from "react-router"
import { TaskProvider } from './context/TaskContext'
import MainScreen from './screens/MainScreen/MainScreen'
import TaskDetailsScreen from './screens/TaskDetailsScreen/TaskDetailsScreen'

function App() {
  return (
    <>
      <TaskProvider>
        <Routes>
          <Route path='/' element={<MainScreen />}></Route>
          <Route path='/task/:id' element={<TaskDetailsScreen />}></Route>
        </Routes>
        </TaskProvider>
    </>
  )
}

export default App
