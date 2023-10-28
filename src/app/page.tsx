import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-8xl mb-10 uppercase tracking-wider font-bold leading-none">
        SAHAM AI
      </h1>
      <Link href="/tickers">
        <Button>Lihat Saham</Button>
      </Link>
    </main>
  )
}
