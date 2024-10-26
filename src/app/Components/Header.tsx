import React from 'react'

const Header = () => {
  return (
   
      <div className=' flex items-center justify-around text-white p-5'>

        <div className='flex items-center'>
        <img src="Images/logos_figma.png" alt="" ></img>
        
       <h1 className='font-bold text-4xl'>Figma</h1>
       </div>

<div>
<ul className='flex gap-11' >
    <li>Products</li>
    <li>Solutions</li>
    <li>Pricing</li>
    <li>Resources</li>
    </ul>
</div>

<div>
    <img src='Images/Frame 11.png' alt=''></img>
</div>

      </div>

  )
}



export default Header