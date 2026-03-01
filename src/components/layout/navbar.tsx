"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "../ui/container";
import { cn } from "@/lib/utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const listener = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all",
        scrolled ? "bg-white/80 backdrop-blur border-b" : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex justify-between py-4">
          <Link href="/" className="font-serif text-xl">
            LA DONG
          </Link>

          <nav className="flex gap-6">
            <Link href="/menu">Menu</Link>
            <Link href="/about">About</Link>
            <Link href="/reservation">Reserve</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
