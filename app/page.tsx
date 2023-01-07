import { categories } from "../constants"
import fetchNews from "../lib/fetchNews"


const Homepage =  () => {
  //fetch news data
  const news: NewsResponse =  fetchNews(categories.join(','))

  console.log(news)
  return (
    <div>
      {/* NewsList */}
      </div>
  )
}

export default Homepage