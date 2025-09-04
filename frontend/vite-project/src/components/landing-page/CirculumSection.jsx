import React from 'react';

const CirculumSection = () => {
  return (
    <section className="bg-slate-300 min-w-screen py-16">
      <div className="flex flex-col justify-center items-center gap-6 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Why <u>#Students</u>, <u>#CorporateEmployees</u>, <u>#Adults</u> Choose Us?
        </h2>
        <p className="text-lg md:text-xl text-center max-w-4xl">
          We are not just any other institute teaching English. We believe in helping you speak English authentically as yourself, and we achieve this by:
        </p>
        <div className="text-left max-w-3xl">
          <ul className="list-decimal list-inside space-y-3 text-lg md:text-xl">
            <li>Building your confidence</li>
            <li>Letting you explore who you really are</li>
            <li>Teaching you professional English</li>
            <li>Making you not just study but speak English</li>
            <li>Practicing extensively in public: on stage, conferences, mock interviews, and podcasts</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CirculumSection; 