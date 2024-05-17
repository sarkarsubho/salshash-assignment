import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchPage from '../pages/SearchPage'
import Favorites from '../pages/Favorites'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<SearchPage></SearchPage>}></Route>
        <Route path='/favorites' element={<Favorites></Favorites>}></Route>
    </Routes>
  )
}

export default Allroutes