import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/Table'
import Form from './components/Form'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
