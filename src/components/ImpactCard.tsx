import React from 'react';

interface ImpactCardProps {
  image: string;
  text: string;
  imageAlt: string;
}

export const ImpactCard: React.FC<ImpactCardProps> = ({ image, text, imageAlt }) => {
  return (
    <article className="bg-white border flex grow flex-col items-stretch text-[22px] text-black font-medium text-center w-full px-[34px] py-[66px] rounded-[19px] border-black border-solid transition-all duration-300 hover:shadow-lg hover:scale-105 focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 max-md:mt-[23px] max-md:px-5">
      <img
        src={image}
        alt={imageAlt}
        className="aspect-[1] object-contain w-[118px] self-center max-w-full"
        loading="lazy"
      />
      <p className="mt-[30px] max-md:mt-6">
        {text}
      </p>
    </article>
  );
};
