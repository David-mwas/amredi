import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DownloadApp from './pages/DownloadApp';
import Homepage from './pages/Homepage';



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/DownloadApp" element={<DownloadApp />} />
          </Routes>
</Router>
  )
}

export default App