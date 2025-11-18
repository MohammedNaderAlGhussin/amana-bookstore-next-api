import { books } from "../../../data/books";

export async function GET() {
  const topBooks = books
    .map((book) => ({ ...book, score: book.rating * book.reviewCount }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  return new Response(JSON.stringify(topBooks), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
