type DataEntry = {
  authur: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  sources: string;
  title: string;
  url: string;
};

type Pagination = {
  count: Int;
  limit: INt;
  offset: Int;
  total: Int;
};

type NewsResponse = {
  pagination: Pagination;
  data: DataEntry[];
};

type Category =
  | "general"
  | "business"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology";
