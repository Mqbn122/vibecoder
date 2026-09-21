import { BookCard } from "@/app/components/BookCard";
import { books } from "@/app/data/books";
export default function BooksPage() {
  return (
    <section>
      <p className="eyebrow">CATALOG</p>
      <h1>All Books</h1>
      <p>Манай статик номын жагсаалт.</p>
      <div className="book-grid">
        {books.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </section>
  );
}