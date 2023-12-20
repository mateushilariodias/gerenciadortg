import Header from '@/components/Header';
import Input from '@/components/Input';
import Button from '@/components/Button';
import '../app/globals.css';
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

export default function HomeScreen() {

  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModallView, setOpenModallView] = useState(false);

  const openToModalCreate = () => (
    setOpenModalCreate(true)
  )

  const closeModalCreate = () => (
    setOpenModalCreate(false)
  )

  const openToModalView = () => (
    setOpenModallView(true)
  )

  const closeModalView = () => (
    setOpenModallView(false)
  )

  return (
    <div className="grid grid-cols-12">
      <Header></Header>
      <nav className="bg-whiteBlueGray col-span-1 flex flex-col justify-center gap-36 h-screen fixed z-20">
        <Image src="/images/home-sharp.png" alt="Icon home-sharp" height={80} width={80} className="mx-8" />
        <Link href="calendar-screen">
        <Image src="/images/calendar.png" alt="Icon calendar" height={80} width={80} className="mx-8" />
        </Link>
      </nav>
      <main className="col-span-11 mt-28 ml-72 overflow-auto">
        <div className='max-w-full mr-36 ml-19'>
          <p className="text-center text-mediumToneBlack font-bold text-4.4xl py-16">Trabalhos</p>
        </div>
        <img src="/images/Plus.svg" alt="Icon Plus" className='pb-9' onClick={openToModalCreate} />
        <section className='bg-whiteBlueGray max-w-full mr-36 ml-19 flex justify-between'>
          <div className='align-middle ml-20 text-mediumToneBlack'>
            <p className='pt-11 font-bold text-4.4xl'>Titulo</p>
            <p className='pb-11 font-normal text-3.1xl'>Aluno 1, Aluno 2</p>
          </div>
           <img src="/images/Remove-red-eye.svg" alt="Remove red eye" className='bg-mediumToneBlue p-3 rounded-md h-min w-min my-auto mr-7' onClick={openToModalView}/>
        </section>
        {openModalCreate && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <section className='bg-whiteBlueGray max-w-3.5xl pb-12 rounded-10rem'>
                <p className='text-5xl text-center font-bold pt-20 pb-10'>Informações básicas</p>
                <div className='mx-16'>
                  <label htmlFor="title" className='font-bold text-2xl'>Título do trabalho</label><br />
                  <Input type="text" name="title" id="title" className='mt-2 mb-5' />
                </div>
                <div className='mx-16'>
                  <label htmlFor="firstStudent" className='font-bold text-2xl'>Nome do aluno 1</label><br />
                  <Input type="text" name="firstStudent" id="firstStudent" className='mt-2 mb-5' />
                </div>
                <div className='mx-16'>
                  <label htmlFor="secondStudent" className='font-bold text-2xl'>Nome do aluno 2</label><br />
                  <Input type="text" name="secondStudent" id="secondStudent" className='mt-2 mb-5' />
                </div>
                <div className='mx-16'>
                  <label htmlFor="goal" className='font-bold text-2xl'>Objetivo</label><br />
                  <Input type="text" name="goal" id="goal" className='mt-2 mb-5' />
                </div>
                <div className='mx-16 mb-9'>
                  <label htmlFor="" className='font-bold text-2xl'>Estimativa de prazo</label>
                  <div className='flex flex-row gap-5 mt-2'>
                    <Input type="text" name="initialDate" id="initialDate" />
                    <Input type="text" name="finalDate" id="finalDate" />
                  </div>
                </div>
                <Button href='' className='mx mx-16'>
                  <span className='inline-flex mx-auto py-6' onClick={closeModalCreate} >Cadastrar</span>
                </Button>
              </section>
            </div>
          </div>
        )}
        {openModallView && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <section className='bg-whiteBlueGray max-w-3.5xl pb-12 rounded-10rem px-12'>
                <p className='pt-14 pb-4 font-bold text-2.1xl text-mediumToneBlack'>Título</p>
                <p className='pb-4 font-semibold text-base2'>Aluno 1, Aluno 2</p>
                <p className='pb-4 font-normal text-base2'>Objetivo</p>
                <p className='pb-5 font-normal text-base2'>15/06/2023 · 15/06/2024</p>
                <div className='flex flex-row pb-5'>
                  <div className='py-1 px-3 bg-mediumToneWhite rounded-10rem mr-3'>
                    <p>Marcelo</p>
                  </div>
                  <div className='py-1 px-3 bg-mediumToneWhite rounded-10rem mr-3'>
                    <p>Adriana</p>
                  </div>
                  <div className='py-1 px-3 bg-mediumToneWhite rounded-10rem'>
                    <p>Claudio</p>
                  </div>
                </div>
                <div className='h-1 bg-primaryDarkBlue'>
                </div>
                <div className='pt-6 pb-5 flex flex-row justify-between'>
                  <span>Ver mais detalhes...</span>
                  <img src="/images/Expand-more.svg" alt="Expand more" />
                </div>
                <div className='flex justify-end' onClick={closeModalView}>
                  <Link href='' className='flex justify-center gap-1 bg-mediumToneBlue rounded-10rem py-2 px-8 items-center'>
                    <img src="/images/Print.svg" alt="Print" />
                    <span className='font-medium text-1.5xl text-whiteBlueGray '>Exportar</span>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
