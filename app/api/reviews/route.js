import { reviews } from "../../data/reviews";

export async function POST(request) {
  try {
    const newReview = await request.json();
    if (!newReview.bookId || !newReview.content) {
      return new Response(
        JSON.stringify({ error: "Book ID and content are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    newReview.id = reviews.length + 1;
    reviews.push(newReview);

    return new Response(JSON.stringify(newReview), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to add review" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
