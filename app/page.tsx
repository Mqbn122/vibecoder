import Image from "next/image";
import Link from "next/link";
import { books } from "@/data/books";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">ONLINE BOOK STORE</p>
          <h1>Learn. Build. Create.</h1>
          <p>Programming болон web development номыг нэг дороос.</p>
          <Link className="button" href="/books">Browse Books</Link>
        </div>
      </section>

      <section>
        <h2>Featured Books</h2>
        <div className="book-grid">
          {books.map((book) => (
            <article className="book-card" key={book.id}>
              <Image src={book.image} alt={book.title} width={220} height={330} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <strong>{book.price.toLocaleString()} ₮</strong>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
