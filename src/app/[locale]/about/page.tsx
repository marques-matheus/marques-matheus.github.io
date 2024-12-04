import { getTranslations } from 'next-intl/server';
import Heading from '@/components/heading';
import DataCard from '@/components/dataCard';
import Skills from '@/components/skills';
type Props = {
  params: Promise<{ locale: string }>;
};

export default async function About() {
  // Enable static rendering
  const t = await getTranslations('About');

  const experiences = [
    { key: 'bendev', title: t('experiences.bendev.title'), company: t('experiences.bendev.company'), date: t('experiences.bendev.date'), description: t('experiences.bendev.description') },
    { key: 'freelancer', title: t('experiences.freelancer.title'), company: t('experiences.freelancer.company'), date: t('experiences.freelancer.date'), description: t('experiences.freelancer.description') },
  ];

  const educations = [
    { key: 'unopar', title: t('education.unopar.title'), institution: t('education.unopar.institution'), date: t('education.unopar.date'), description: t('education.unopar.description') },
    { key: 'gran', title: t('education.gran.title'), institution: t('education.gran.institution'), date: t('education.gran.date'), description: t('education.gran.description') },
    { key: 'gran2', title: t('education.gran2.title'), institution: t('education.gran2.institution'), date: t('education.gran2.date'), description: t('education.gran2.description') },
  ];

  return (
    <section className="flex flex-col lg:flex-row py-8 px-10 lg:py-16 lg:px-20 justify-between space-y-5">
      <div className='lg:w-1/2 space-y-5'>
        <article className=" items-center flex flex-col">
          <Heading >{t('title')}</Heading>
          <p className="text-lg lg:text-2xl xl:text-3xl text-custom-300">{t('content')}</p>
        </article>
        <article className=" items-center flex flex-col">
          <Skills title={t('skills.title')}/>
        </article>
      </div>
      <div className="lg:w-2/5 space-y-5">
        <article className="w-full mb-5 flex flex-col items-center" >
          <Heading>{t('experiences.title')}</Heading>
          {experiences.map((experience) => (
            <DataCard key={experience.key} card={experience} />
          ))}
        </article>
        <article className="w-full flex flex-col items-center text-custom-300">
          <Heading>{t('education.title')}</Heading>
          {educations.map((education) => (
            <DataCard key={education.key} card={education} />
          ))}
        </article>
      </div>
    </section>
  );
}