import React from 'react';
const BentoGrid = dynamic(
  () => import('./ui/BentoGrid').then((mod) => mod.BentoGrid),
  { ssr: false }
);
const BentoGridItem = dynamic(
  () => import('./ui/BentoGrid').then((mod) => mod.BentoGridItem),
  { ssr: false }
);
import { gridItems } from '@/data';
import dynamic from 'next/dynamic';

function Grid() {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
}

export default Grid;
