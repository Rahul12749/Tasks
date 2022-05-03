import React from 'react'
import DataApi from './DataApi'
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const HomePage = () => {
  
    return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="allTodo" element={<DataApi />} />
          </Route>
        </Routes>
      </BrowserRouter>  
    
  )
}

export default HomePage