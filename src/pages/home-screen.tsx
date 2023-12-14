import '../app/globals.css';
import Image from "next/image";

export default function HomeScreen() {
  return (
    <div className="grid grid-cols-12">
      <header className="bg-whiteBlueGray flex items-center col-span-12 fixed z-30 w-full">
        <span className="text-mediumToneBlack py-7 text-center font-normal text-4xl justify-center flex-grow">TG+</span>
        <Image src="/images/exit.png" alt="Icon exit" height={72} width={72} className="flex justify-end mr-10" />
      </header>
      <nav className="bg-whiteBlueGray col-span-1 flex flex-col justify-center ga h-screen fixed z-20">
        <Image src="/images/home-sharp.png" alt="Icon home-sharp" height={80} width={80} className="mx-8" />
        <Image src="/images/calendar.png" alt="Icon calendar" height={80} width={80} className="mx-8" />
      </nav>
      <main className="col-span-11 mt-28 ml-72 overflow-auto">
        <div className='max-w-full mr-36 ml-19'>
          <p className="text-center text-mediumToneBlack font-bold text-4.4xl py-16">Trabalhos</p>
        </div>
        <img src="/images/Plus.svg" alt="Icon Plus" className='pb-9' />
        <section className='bg-whiteBlueGray max-w-full mr-36 ml-19 flex justify-between'>
          <div className='align-middle ml-20 text-mediumToneBlack'>
            <p className='pt-11 font-bold text-4.4xl'>Titulo</p>
            <p className='pb-11 font-normal text-3.1xl'>Aluno 1, Aluno 2</p>
          </div>
          <div className='bg-mediumToneBlue p-3 rounded-md h-min w-min my-auto mr-7'>
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
              <g clipPath="url(#clip0_222_443)">
                <path d="M25.2516 9.875C14.835 9.875 5.93913 16.3542 2.33496 25.5C5.93913 34.6458 14.835 41.125 25.2516 41.125C35.6683 41.125 44.5641 34.6458 48.1683 25.5C44.5641 16.3542 35.6683 9.875 25.2516 9.875ZM25.2516 35.9167C19.5016 35.9167 14.835 31.25 14.835 25.5C14.835 19.75 19.5016 15.0833 25.2516 15.0833C31.0016 15.0833 35.6683 19.75 35.6683 25.5C35.6683 31.25 31.0016 35.9167 25.2516 35.9167ZM25.2516 19.25C21.7933 19.25 19.0016 22.0417 19.0016 25.5C19.0016 28.9583 21.7933 31.75 25.2516 31.75C28.71 31.75 31.5016 28.9583 31.5016 25.5C31.5016 22.0417 28.71 19.25 25.2516 19.25Z" fill="#F3F3F3" />
              </g>
              <defs>
                <clipPath id="clip0_222_443">
                  <rect width="50" height="50" fill="white" transform="translate(0.25 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </section>
      </main>
    </div>
  );
}