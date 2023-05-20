import React, { useState } from 'react'
import ItemHeader from "../../component/ItemHeader/ItemHeader"
import { allBranches } from '../../Data'
import "./Branches.css"

export default function Branches() {

  const [headerData, setHeaderData] = useState({
    title: 'شعبه های فومو',
    route: 'شعبات',
    link: '/branches'
  })

  const [branchData, setBranchData] = useState(allBranches)


  return (
    <>
      {/* barnches page */}
      <ItemHeader {...headerData} />


      <div className="branchesContainer">

        <div className="branchesWrapper container">

          <h3 className='branchesTitle'>شعبه های فومو</h3>

          {branchData.map(item => (
            <div className="branchItem" key={item.id}>
              <div className="branchImgBox">
                <img src={item.img} alt="Fomo Branches" className='branchesImg img-fluid' />
              </div>
              <span className="address">آدرس: {item.address}</span>
              <span className="phone">تلفن: {item.number}</span>
            </div>
          ))}

        </div>

      </div>

    </>
  )
}
