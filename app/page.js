"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
      router.push("/dashboard");
  }, []);

  return (
    <main>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black">
        <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-white"></div>
      </div>
    </main>
  )
}
