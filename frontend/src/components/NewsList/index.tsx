import { newsData } from '@/data/newsData'
import NewsCard from '../Card/NewsCard'
import { useWindowSize } from 'react-use'

interface NewsCardProps {
  imageUrl: string
  article: string
}

const NewsList = () => {
  const chunckArray = (array: NewsCardProps[], chunkSize: number) => {
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

  const newsRows = chunckArray(newsData, newsCardPerLine)

  return (
    <div>
      {newsRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((news, colIndex) => (
            <NewsCard
              key={colIndex}
              imageUrl={news.imageUrl}
              article={news.article}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default NewsList
