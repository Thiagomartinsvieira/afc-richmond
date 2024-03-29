import React from 'react'
import { newsData } from '@/data/newsData'
import NewsCard from '../Card/NewsCard'
import { useWindowSize } from 'react-use'

interface NewsCardProps {
  imageUrl: string
  article: string
  title?: string | undefined
  id?: number | undefined
}

interface NewsListProps {
  searchQuery: string
}

const NewsList = (props: NewsListProps) => {
  const chunkArray = (array: NewsCardProps[], chunkSize: number) => {
    const result = []
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize))
    }
    return result
  }

  const { width } = useWindowSize()

  let newsCardPerLine: number

  if (width < 640) {
    newsCardPerLine = 1
  } else if (width < 1024) {
    newsCardPerLine = 2
  } else {
    newsCardPerLine = 3
  }

  const filteredNewsData = newsData.filter((news) =>
    news.article.toLowerCase().includes(props.searchQuery.toLowerCase()),
  )

  const newsRows = chunkArray(filteredNewsData, newsCardPerLine)

  if (filteredNewsData.length === 0 && props.searchQuery.trim() !== '') {
    return (
      <div className="flex my-10 mx-auto space-x-2">
        <p className="font-semibold">No results for:</p>{' '}
        <p className="font-medium">{props.searchQuery}</p>
      </div>
    )
  }

  return (
    <div>
      {newsRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap justify-center">
          {row.map((news, colIndex) => (
            <NewsCard
              key={news.id}
              imageUrl={news.imageUrl}
              article={news.article}
              id={news.id !== undefined ? news.id : 0}
              title={news.title}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default NewsList
