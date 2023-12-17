import Link from "next/link";

export default function Home() {

  return (
    <main>
      <h1 className="text-xl font-bold underline">
        Project Roadmap
      </h1>

      <Link href="/dashboard">
        Dashboard
        </Link> 
    </main>
  )
}
