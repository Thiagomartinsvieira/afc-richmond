import { newsData } from '@/data/newsData'
import NewsCard, { NewsCardProps } from '../Card/NewsCard'

const NewsList = () => {
  const chunckArray = (array: NewsCardProps[], chunkSize: number) => {
    const result = []
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize))
    }
    return result
  }

  const newsRows = chunckArray(newsData, 3)

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
