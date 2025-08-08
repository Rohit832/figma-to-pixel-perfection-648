import React from 'react';
import { ImpactCard } from './ImpactCard';

const impactData = [
  {
    id: 1,
    image: "https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/23095aa2247f11d957a13ee12cfd604a4bbe90a6?placeholderIfAbsent=true",
    text: "Employees report lower stress in just 1 session",
    imageAlt: "Employee stress reduction icon"
  },
  {
    id: 2,
    image: "https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/149d8e2337e67e75abc4ef2b51d48dce6f5c706d?placeholderIfAbsent=true",
    text: "HRs see fewer CTC & tax queries",
    imageAlt: "HR efficiency improvement icon"
  },
  {
    id: 3,
    image: "https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/e83a8b332d7a16b503349c755088ad70d858394f?placeholderIfAbsent=true",
    text: "Managers notice better focus & morale",
    imageAlt: "Manager productivity improvement icon"
  },
  {
    id: 4,
    image: "https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/b4aacace6525212b5015f8792a9ce810c2dc3c78?placeholderIfAbsent=true",
    text: "Organisations retain happier, loyal talent",
    imageAlt: "Employee retention icon"
  }
];

export const ImpactSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-16 px-4 max-w-7xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-black text-5xl font-bold leading-loose max-md:max-w-full max-md:text-[40px]">
          The Finsage Impact
        </h1>
        <h2 className="text-black text-xl font-medium text-center mt-[5px]">
          Real relief. Real results.
        </h2>
      </header>
      
      <div className="self-stretch w-full mt-[50px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {impactData.map((impact) => (
            <div key={impact.id} className="w-3/12 max-md:w-full max-md:ml-0">
              <ImpactCard
                image={impact.image}
                text={impact.text}
                imageAlt={impact.imageAlt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
