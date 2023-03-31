import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_LINK } from '../constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const VideosData = await fetch(YOUTUBE_API_LINK);
    const json = await VideosData.json();

    setVideos(json.items);
  }


  return (
    <div className='ml-10 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {videos.map(video => (
        <Link to={"/watch?v=" + video.id} key={video.id} className="hover:scale-105 transition-all">
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  )
}

export default VideoContainer


// flex flex - wrap flex - grow - 0 ml - 8