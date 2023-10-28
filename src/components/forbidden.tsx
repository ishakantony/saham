import { Button } from "@/components/ui/button";
import { Ban } from "lucide-react";
import Link from "next/link";

export default function Forbidden() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <h1 className="text-8xl uppercase tracking-wider font-bold leading-none">
        <Ban width={200} height={200} />
      </h1>
      <p className="text-center text-xl text-gray-800 my-5">Bentar boss, kalau mau liat harus punya akun dulu.</p>
      <Link href="/api/auth/signin">
        <Button>Login</Button>
      </Link>
    </main>
  )
}
