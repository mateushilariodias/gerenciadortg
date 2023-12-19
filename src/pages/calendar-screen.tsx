import '../app/globals.css';
import Header from '@/components/Header';
import Image from "next/image";

export default function CalendarScreen() {
    return (
        <div>
            <Header></Header>
            <nav className="bg-whiteBlueGray col-span-1 flex flex-col justify-center gap-36 h-screen fixed z-20">
                <Image src="/images/home-sharp.png" alt="Icon home-sharp" height={80} width={80} className="mx-8" />
                <Image src="/images/calendar.png" alt="Icon calendar" height={80} width={80} className="mx-8" />
            </nav>
            <main className="col-span-11 pt-28 pl-72 overflow-auto">
                <section className='bg-whiteBlueGray rounded-lg max-w-xs h-full'>
                    <p className='bg-mediumToneBlue rounded-t-lg text-center text-whiteBlueGray pt-1 pb-2 px-16'>Programação</p>
                    <p className='text-mediumToneBlack font-medium text-1.5xl pt-4 pl-4'>25/11/2023</p>
                    <p className='text-mediumToneBlack font-normal text-1.5xl pt-3 pl-4'>Banca TG -  Dupla 4</p>
                </section>
            </main>
        </div>
    )
}
