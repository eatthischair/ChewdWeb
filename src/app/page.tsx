import Image from 'next/image';
export default function Home() {
  return (
    <div className="flex items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="border-2 w-100 h-100"></div>
        <a
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid "
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
      </main>
    </div>
  );
}
