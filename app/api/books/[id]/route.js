import { NextResponse } from "next/server";
import { books as booksData } from "../../../data/books";

/**
 * GET /api/books/[id]
 * Returns a single book by id.
 */
export async function GET(request, { params }) {
  const id = params.id;

  // support both shapes: booksData could be an array OR an object { books: [...] }
  const list = Array.isArray(booksData) ? booksData : (booksData?.books ?? []);

  const book = list.find((b) => String(b.id) === String(id));

  if (!book) {
    return NextResponse.json(
      { success: false, message: "Book not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, book }, { status: 200 });
}
