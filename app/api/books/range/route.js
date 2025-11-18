import { books } from "../../../data/books";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  if (!start || !end) {
    return new Response(
      JSON.stringify({ error: "Missing start or end date" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const filteredBooks = books.filter((book) => {
    const pubDate = new Date(book.datePublished);
    return pubDate >= new Date(start) && pubDate <= new Date(end);
  });

  return new Response(JSON.stringify(filteredBooks), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
