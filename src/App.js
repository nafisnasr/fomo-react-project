import React from 'react'
import TopBar from './component/TopBar/TopBar'
import "./App.css"
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Footer from './component/Footer/Footer'
export default function App() {

  let router = useRoutes(routes)
  return (
    <>
      <TopBar />
      {router}
      <Footer/>
    </>
  )
}
