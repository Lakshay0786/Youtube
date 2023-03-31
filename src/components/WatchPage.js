import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import { COMMENTS_API } from '../constants';
const WatchPage = () => {

  const [searchParam] = useSearchParams()
  const { id } = useParams();


  const videoid = searchParam.get("v");
  useEffect(() => {
    getCommentsData()

  }, [])

  const getCommentsData = async () => {
    const data = await fetch(COMMENTS_API + videoid);
    const json = await data.json();
    console.log(json);
  }
  console.log(COMMENTS_API + videoid)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu())
  }, []);


  console.log(searchParam.get("v"))
  return (
    <div className='flex flex-col'>

      <div className='m-10'>
        <iframe autoplay width="1000" height="600" src={"https://www.youtube.com/embed/" + searchParam.get("v") + "?autoplay=1"}
          title="Videos"
          frameborder="0"
          allow="accelerometer *; autoplay *; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <CommentsContainer />
    </div>
  )
}

export default WatchPage