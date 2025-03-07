export interface Author {
  id: string
  name: string
  avatar: string
}
export interface Article {
  id: number;
  title: string;
  url: string;
  description: string | null;
  createdAt: Date;
  categoryId: number | null;
  categoryName: string | null;
}