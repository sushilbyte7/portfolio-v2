import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found" aria-labelledby="not-found-heading">
      <p className="not-found__eyebrow">404 / Page not found</p>
      <h1 id="not-found-heading">This page took a wrong turn.</h1>
      <p className="not-found__message">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link className="button button--primary" href="/">
        Back to Home
      </Link>
    </main>
  );
}
