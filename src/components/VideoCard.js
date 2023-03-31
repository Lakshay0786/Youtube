import React from 'react'

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className='m-auto p-2 m-2 w-full flex flex-col hover:shadow-md'>
      <img className='rounded-lg ' src={thumbnails.medium.url} alt="thumbnail" />
      <h2 className='font-bold'>{title}</h2>
      <ul className='py-2'>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard


