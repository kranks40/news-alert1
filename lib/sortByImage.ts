export default function sortByImage(news: NewsResponse) {
  const newsWithImage = news.data.filter((item) => item.image !== null);
  const newsWithoutImage = news.data.filter((item) => item.image == null);

  const sorted = {
    pagination: news.pagination,
    data: [...newsWithImage, ...newsWithoutImage],
  };

  return sorted;
}
