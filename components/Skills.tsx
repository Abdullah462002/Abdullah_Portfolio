import React from 'react';
import { companies } from '@/data';

const Skills = () => {
  return (
    <div
      className="py-20 flex flex-col items-center justify-center"
      id="skills"
    >
      <h1 className="heading">
        Let Me Show You What I'm <span className="text-purple">Great At</span>
      </h1>
      <div className="flex flex-col mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-40 gap-2">
              {img && <img src={img} alt={name} className="md:w-10 w-5" />}
              {nameImg && (
                <img src={nameImg} alt={name} className="md:w-24 w-20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
