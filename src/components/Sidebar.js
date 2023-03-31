import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
const Sidebar = () => {

  //Reading the States 
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  //early Return
  if (!isMenuOpen) return null;

  return (


    <div className='p-5 shadow-lg w-56 '>
      <ul className='border-b-2 pb-2'>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>

      <ul className='pt-2 '>
        <li>Library</li>
        <li>history</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>

      <h1 className='font-bold pt-5'>Subscription</h1>

      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Learning</li>
      </ul>
    </div>
  )
}

export default Sidebar