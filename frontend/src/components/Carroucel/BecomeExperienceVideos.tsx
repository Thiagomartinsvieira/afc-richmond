import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

interface BecomeExperienceVideosProps {
  url: string
  title: string
}

const BecomeExperienceVideos = (props: BecomeExperienceVideosProps) => {
  const [isHovering, setIsHovering] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      if (isHovering) {
        video.play()
      } else {
        video.pause()
      }
    }
  }, [isHovering])

  return (
    <div
      className="border border-blue-500 rounded md:mx-40 lg:mx-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        className="cursor-pointer rounded opacity-50 hover:opacity-100"
        ref={videoRef}
        src={props.url}
        autoPlay
        muted
        loop
      />
      <div className="flex flex-col items-center bg-blue-600">
        <span className="my-2 font-extrabold">{props.title}</span>
        <Link
          href="/become/register"
          className="border-2 border-yellow-500 rounded-3xl p-1
        mb-4 hover:scale-110 transition transform text-yellow-500"
        >
          Know more
        </Link>
      </div>
    </div>
  )
}

export default BecomeExperienceVideos
