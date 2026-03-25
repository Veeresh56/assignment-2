// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Dashboard from './pages/Dashboard'
import CounterApp from './components/CounterApp'
import SearchBar from './components/SearchBar'
import SecretMessage from './components/SecretMessage'
import TodoList from './components/TodoList'
import MyForm from './components/MyForm'
function App() {

  return(<>
  <Dashboard/>
  <CounterApp/>
  <SearchBar/>
  <SecretMessage/> 
  <TodoList/>
  <MyForm/>
  </>)

}

export default App
