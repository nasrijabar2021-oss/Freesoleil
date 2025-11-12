
export interface Author {
  name: string;
  avatarUrl: string;
}

export interface Category {
  name: string;
  imageUrl: string;
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: Author;
  date: string;
  category: string;
  tags: string[];
}
