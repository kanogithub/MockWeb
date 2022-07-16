import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* TODO learn more about react router dom Route */}
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
