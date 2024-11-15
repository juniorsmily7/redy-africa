import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <section className=" h-screen flex justify-center items-center">
      <div className=" text-center">
        <p>
          <code>An error as occurred</code>
        </p>
        <Link
          to="/"
          className="border-2 mt-3 rounded-md px-3  font-bold border-GRAY_06"
        >
          go back
        </Link>
      </div>
    </section>
  );
}
