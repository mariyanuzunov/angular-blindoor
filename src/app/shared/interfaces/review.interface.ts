export interface IReview {
  _id: string | null;
  author: { _id: string; firstName: string; lastName: string } | null;
  product: { _id: string; title: string; imgUrl: string } | null;
  content: string | null;
  createdAt: string | null;
}
