import React from 'react';
import ShimerButton from './ui/ShimerButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <footer className="w-full pt-20 mb-[100px] md:mb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:9-w-[45vw]">
          Ready to <span className="text-purple">finish your</span> Works
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how i can help you to
          achieve your goal.
        </p>
        <a href="mailto:abdul95972@gmail.com">
          <ShimerButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <div className="flex items-center mg:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a href={profile.link} target="_blank" key={profile.id}>
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img
                  src={profile.img}
                  alt={profile.img}
                  width={20}
                  height={20}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
