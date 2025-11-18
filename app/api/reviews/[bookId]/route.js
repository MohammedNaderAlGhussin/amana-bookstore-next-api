import { reviews } from "../../../data/reviews";

export async function GET(request, { params }) {
  const bookId = await params.bookId;
  console.log(bookId);
  const bookReviews = reviews.filter((review) => review.bookId == bookId);

  return new Response(JSON.stringify(bookReviews), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
