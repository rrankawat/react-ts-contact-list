import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ContactList from './components/ContactList'
import AddContact from './components/AddContact'

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add" element={<AddContact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
