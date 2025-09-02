import React from 'react'
import Card1 from '../Components/Card1'
import Card2 from '../Components/Card2'
import Card3 from '../Components/Card3'
import Card4 from '../Components/Card4'
import Card5 from '../Components/Card5'

function Body() {
  return (
    <>
      <div className='pt-[50px] pl-[72px] flex flex-col justify-items-start'>
        <h1 className='text-2xl font-semibold'>Dashboard</h1>
        <Card1></Card1>
        <Card2></Card2>
        <Card3></Card3>
        <Card4></Card4>
        <Card5></Card5>
      </div>
    </>
  )
}

export default Body
