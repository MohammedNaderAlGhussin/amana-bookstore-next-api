import { books } from "../../data/books";

export async function GET() {
  return new Response(JSON.stringify(books), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request) {
  try {
    const newBook = await request.json();
    // Basic validation here (e.g., title and author)
    if (!newBook.title || !newBook.author) {
      return new Response(
        JSON.stringify({ error: "Title and author are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    newBook.id = books.length + 1; // simple logic, not persistent
    books.push(newBook);
    return new Response(JSON.stringify(newBook), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to add book" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
