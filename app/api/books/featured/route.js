import { books } from "../../../data/books";

export async function GET() {
  const featuredBooks = books.filter((book) => book.featured === true);

  return new Response(JSON.stringify(featuredBooks), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
