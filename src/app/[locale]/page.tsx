'use client'
import { useTranslations } from 'next-intl';
import Section from '@/components/section';


export default function HomePage() {
  const t = useTranslations('HomePage');


  return (
    <section className='py-24 md:py-44 items-center justify-between  md:px-20 flex flex-col md:flex-row'>
      <article className='flex flex-col items-center md:items-start'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[7rem] font-bold text-custom-400'>{t('title')}</h1>
        <h2 className='text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl text-custom-300'>{t('subtitle')}</h2>
        <button className='text-custom-400 hover:text-custom-300 hover:border-custom-300 font-bold text-xl rounded-full border-2 transition-all duration-500
        border-custom-400 px-4 py-2 mt-4' onClick={() => window.location.href = '/portfolio'}>{t('button')}</button>
      </article>
      <img src='/code.svg' alt='hero' className='w-60 sm:w-80  lg:w-[500px] ' />
    </section>
  )
}

