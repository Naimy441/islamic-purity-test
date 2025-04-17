import Image from "next/image";
import { Button } from "@/app/ui/button";
import Link from "next/link";
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const startTest = () => {
    console.log("Started.");
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-left text-8xl font-extrabold leading-snug">
        Islamic<br />Purity<br />Test
      </div>
      <div className="px-18">
        <Link
          href="/test"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-8 py-6 text-3xl font-medium text-white transition-colors hover:bg-blue-400"
        >
          <span>Start</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </div>
    </div>
  );
}
