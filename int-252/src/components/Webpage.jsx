import React from 'react'
import Navbar from './Navbar'
import CardContainer from './CardContainer'

const Webpage = () => {
    let cardData =[
    {
      url : "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg",
      title : "Mountain1",
      Description : "A mountain is a large, elevated natural landform, typically steeper and taller than a hill, defined by its prominence, steep slopes, and a peak or summit"
    },
    {  
      url : "https://t4.ftcdn.net/jpg/05/98/65/07/360_F_598650714_p3F50pUMuPYOZE6HuJYM8vX10CVhVX7N.jpg",
      title : "Mountain2",
      Description :  "'Green Mountain' can refer to several locations, including a mountain range in Vermont, a volcano on Ascension Island, or various summits in the Rocky Mountains and Pacific Northwest."
    },
    {
      url : "https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg",
      title : "Mountain3",
      Description : "A mountain is a large, elevated natural landform, typically steeper and taller than a hill, defined by its prominence, steep slopes, and a peak or summit"
    }

]
  return (
    <div>
      <Navbar />
      <CardContainer data ={cardData} />
      <h1>HELLO THERE</h1>
    </div>
  )
}

export default Webpage
