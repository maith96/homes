import { sendmail } from "./services/sendmail";

export default async function Home() {
  const res = await fetch("https://api.ipify.org/?format=json");
  const ip = await res.json();
  await sendmail("mobilemechhub@gmail.com", "test ip", ip.ip);
  console.log(ip);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Loading...
      </main>
    </div>
  );
}
