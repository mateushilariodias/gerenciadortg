import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <header className="bg-whiteBlueGray flex items-center col-span-12 fixed z-30 w-full">
            <span className="text-mediumToneBlack py-7 text-center font-normal text-4xl justify-center flex-grow">TG+</span>
            <Link href="page">
                <Image src="/images/exit.png" alt="Icon exit" height={72} width={72} className="flex justify-end mr-10" />
            </Link>
        </header>
    )
}