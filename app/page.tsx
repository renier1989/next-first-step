import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-4xl font-semibold">

      Primera pagina con Next.js

      <div className="text-lg text-rose-700 flex items-center justify-center">
        <Link href={'/about'}>Go to About Page</Link>
      </div>

    </div>
  );
}
