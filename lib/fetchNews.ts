// import { categories } from "./../constants";
import { gql } from "graphql-request";
import sortByImage from "./sortByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  //graphql query
  const query = gql`
  query MyQuery   {(
    $access_key: String!
    $categories: String!
    &keywords: String
  ){
    myQuery (
        access_key: $access_key
        categories: $categories
        countries: 'gb'
        sort: 'published_desc'
        keywords: $keywords
    ) {
      data {
        url
        title
        source
        published_at
        language
        image
        description
        country
        category
        author
      }
      pagination {
        count
        limit
        offset
        total
      }
    }
  }
`;
  //fetch function with next.js13
  const res = await fetch(
    // "https://baracoa.stepzen.net/api/peddling-lightningbug/__graphql",
    "https://xihe.stepzen.net/api/hissing-quokka/_graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_APIKEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIA_STACK_APIKEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  const newsResponse = await res.json();

  //sort by images vs not images
  const news = sortByImage(newsResponse.data.myQuery);

  //return results
  return news;
};

export default fetchNews;

// stepzen import curl 'http://api.mediastack.com/v1/news?access_key=78e10dc740283497a44456b66ffcacc5&sources=cnn&categories=business,sports&countries=us,au&languages=en&keywords=virus&sort=published_desc&offset=0&limit=100'
