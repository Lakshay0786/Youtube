import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { toggleMenu, openMenu } from '../utils/appSlice';


//icons 
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


import { Link, Outlet } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from '../constants';
import { cacheResults } from '../utils/searchSlice';




const Head = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search)


  useEffect(() => {

    const timer = setTimeout(() => {

      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getSearchSuggestions()
      }
    }, 200)

    return () => {
      clearTimeout(timer);
    };

  }, [searchQuery])






  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json();
    setSuggestions(json[1])

    dispatch(cacheResults({
      [searchQuery]: json[1],
    }))
  }


  //Changing States
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  const menuClickHandle = () => {
    dispatch(openMenu());
  }



  return (
    <>
      <div className='grid grid-flow-col py-5 m-2 '>

        <div className='flex items-center ml-10  '>
          <MenuIcon className='cursor-pointer' onClick={() => {
            return toggleMenuHandler();
          }} />
          <Link to="/">
            <img onClick={menuClickHandle} className=' cursor-pointer ml-8 h-6' src='https://www.freepnglogos.com/uploads/youtube-logo-png/new-youtube-logo-icon-update-youtube-issue-fortawesome-font-3.png'
              alt="logo" />
          </Link>

        </div>

        <div className='col-span-10 text-center'>
          <div className=''>
            <input className='w-1/2 border-2 p-2 px-5 rounded-full' type="text" value={searchQuery} onChange={(e) =>
              setSearchQuery(e.target.value)
            }
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              placeholder='Search' />

            <button className='border-gray-200 ml-2 p-2'><SearchIcon /></button>
            <div className='flex justify-center '>
              {showSuggestions && (
                <div className=' rounded-lg   border-gray-200 drop-shadow-md  px-5 absolute w-[38rem] bg-white'>
                  <ul className='text-left'>
                    {suggestions.map((s) => (
                      <li key={s} className='drop-shadow-md hover:bg-gray-100 py-1'>{s}</li>
                    ))
                    }
                  </ul>
                </div>

              )}

            </div>

          </div>
        </div>

        <div className='col-span-1 flex items-center justify-center'>
          <AccountCircleIcon />
        </div>
      </div>
      <Outlet />

    </>
  )
}

export default Head