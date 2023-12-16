import Link from 'next/link';
import { ReactNode } from 'react';

interface IButtonProps {
    children: ReactNode;
    className?: string;
    href: string;
}

export default function Button({children, className, href}: IButtonProps): JSX.Element {
    return(
        <Link href={href} className={"font-inter text-2xl lg:text-3.1xl bg-mediumToneBlue text-whiteBlueGray rounded-10rem font-bold w-auto flex justify-center" + className}>
            {children}
        </Link>
    )
}