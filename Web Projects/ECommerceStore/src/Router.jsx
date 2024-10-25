import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' Component={Home} ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
