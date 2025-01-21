import React from 'react'
import krish from "../../../assets/krishIkon.svg"
import heart from "../../../assets/heart.svg"
import karzinka from "../../../assets/karzinka.svg"

function Krish() {
  return (
 <>
<div className=' flex gap-2 items-center mr-5'>
      <img className=' cursor-pointer w-4' src={krish} alt="" />
      <p>Krish</p>
      <img className=' cursor-pointer w-4' src={heart} alt="" />
      <p>Saralanfanlar</p>
      <img className=' cursor-pointer w-5' src={karzinka} alt="" />
      <p>Savat</p>
    </div>
 </>
  )
}

export default Krish
