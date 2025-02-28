import React from 'react'
import HomeCard from './HomeCard';
const  carArray = [
  {id:1},
  {id:8},
  {id:7},
  {id:6},
  {id:5},
  {id:4},
  {id:3},
  {id:2},
]

const Portfoliohiliths = () => {
  return (
    <div className="py-20 space-y-8 xl:px-0 px-8">
            <h2 className="md:text-4xl text-2xl font-semibold text-center">My portfolio highlights</h2>
            <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
             {
              carArray.map(item =>  <li key={item.id}>  <HomeCard/></li>)
             }
            </ul>
       </div>
  )
}

export default Portfoliohiliths;
