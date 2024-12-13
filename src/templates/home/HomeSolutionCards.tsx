import { Button } from '@/components/ui';

import { HomeSolutionCardData } from '@/types/home';

function HomeSolutionCard({ cardData }: { cardData: HomeSolutionCardData }) {
  const { bgClassName, description, title } = cardData;

  return (
    <div
      className={`min-w-[280px] min-h-[280px] bg-right-bottom bg-no-repeat border border-[#EEEEEE] rounded-[30px] px-6 pt-[34px] ${bgClassName}`}>
      <div className='text-[24px] leading-[36px] font-bold'>{title}</div>
      <div className='text-[16px] leading-[24px] mt-[10px]'>{description}</div>
    </div>
  );
}

interface HomeSolutionCardsProps {
  title: string;
  cardsData: HomeSolutionCardData[];
}

export function HomeSolutionCards({ cardsData, title }: HomeSolutionCardsProps) {
  return (
    <div className='flex flex-col gap-[30px] items-center'>
      <div className='font-bold text-center text-[24px] leading-[32px] md:text-[32px] md:leading-[44.16px]'>
        {title}
      </div>
      <div className='flex w-full gap-[10px] overflow-x-auto scrollbar-hide'>
        {cardsData.map((cardData, idx) => {
          return <HomeSolutionCard key={idx} cardData={cardData} />;
        })}
      </div>
      <Button buttonData={{ text: '솔루션 더보기', href: '/' }} />
    </div>
  );
}