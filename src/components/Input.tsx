import { ReactNode } from 'react';

interface IInputProps {
    className?: string;
    type: string;
    name: string;
    id: string;
}

export default function Input({className, type, name, id}: IInputProps): JSX.Element{
    return(
        <input type={type} name={name} id={id} className={"px-8 py-4 rounded-10rem w-full " + className}/>
    )
}