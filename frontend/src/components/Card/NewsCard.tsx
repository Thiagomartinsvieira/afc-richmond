import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface NewsCardProps {
  article: string
  imageUrl: string
  id: number
  title?: string | undefined
}

const NewsCard = (props: NewsCardProps) => {
  return (
    <div className="flex flex-col mt-10 mx-auto">
      <div className="m-2 flex flex-col">
        <div className="flex" style={{ width: '310px' }}>
          <Link href={`/news/${props.id}`}>
            <Image
              src={`/${props.imageUrl}`}
              alt={`image of ${props.imageUrl}`}
              width={400}
              height={400}
              objectFit="cover"
              className="opacity-60 hover:opacity-100 rounded cursor-pointer"
            />
          </Link>
        </div>
        <div style={{ width: '310px' }} className="mx-auto mt-2">
          <p className="text-xs my-4 text-center overflow-hidden">
            {props.article}
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
