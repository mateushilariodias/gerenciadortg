import '../app/globals.css';
import Image from "next/image";

export default function HomeScreen() {
  return (
    <div className='grid grid-rows-6 grid-cols-12 h-screen'>
      <header className="bg-whiteBlueGray flex items-center col-span-12 row-span-1">
        <span className="text-mediumToneBlack py-7 text-center font-normal text-4xl justify-center flex-grow">TG+</span>
        <Image src="/images/exit.png" alt="Icon exit" height={72} width={72} className="py-4 flex justify-end" />
      </header>
      <nav className='bg-whiteBlueGray col-span-1 row-span-5 flex flex-col justify-evenly pb-24'>
        <Image src="/images/home-sharp.png" alt="Icon home-sharp" height={80} width={80} className="mx-auto" />
        <Image src="/images/calendar.png" alt="Icon calendar" height={80} width={80} className="mx-auto" />
      </nav>
      <main className='col-span-11 row-span-5'>
        <p className="">Trabalhos</p>
      </main>
    </div>
  );
}
