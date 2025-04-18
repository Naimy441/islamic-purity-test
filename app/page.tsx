import Link from "next/link";
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-left text-4xl sm:text-8xl font-extrabold leading-snug">
        Islamic<br />Purity<br />Test
      </div>
      <div className="px-18">
        <Link
          href="/test"
          className="flex text-2xl px-6 py-4 sm:text-3xl sm:px-6 sm:py-4 items-center gap-5 self-start rounded-lg bg-blue-500 font-medium text-white transition-colors hover:bg-blue-400"
        >
          <span>Start</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </div>
    </div>
  );
}
