import React from 'react'
import {BsSearch} from "react-icons/bs"
import "./SearchPage.css"

export default function SearchPage() {

  return (
    <>

    <div className="searchBoxContainer">

      <div className="searchboxWrapper">
        <div className="serchBox">
          <input type="text" placeholder='جستجو...' />
          <button className='searchBtn'><BsSearch className='searchBtnIcon' /></button>
        </div>
      </div>
      
    </div>

    </>
  )

}
