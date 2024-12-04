import { getTranslations } from 'next-intl/server';
type Props = {
  params: Promise<{ locale: string }>;
};
export default async function Portifolio({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  const t = await getTranslations('HomePage');

  return (
    <div title={t('title')}>
      <div className="">
        <h1 className='text-7xl font-bold uppercase text-center'>POrtifolio</h1>
      </div>
    </div>
  );
}