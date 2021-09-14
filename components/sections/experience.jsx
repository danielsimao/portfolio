import Image from 'next/image';
import BasicReveal from '../../utils/reveal';
import Highlight from '../highlight';

const data = [
  {
    company: 'Vertrical',
    position: 'Senior Fullstack Developer',
    time: 'Aug 2021 - Present',
    description:
      'Senior Fullstack Developer for a company that helps fast growing health tech companies deploy microservices that follow best practices in patient data management.',
    image: '/assets/vertrical.jpeg',
  },
  {
    company: 'Hostelworld',
    position: 'Fullstack Developer',
    time: 'Jul 2019 - Ago 2021',
    description:
      'Fullstack Developer for one of the leading global Online Travel Agency (OTA). Revamped an API, created a React Component Library and a new platform that brings experiences/activities all across world to Hostelworld.',
    image: '/assets/hostelworld.jpeg',
  },
  {
    company: 'git//scale',
    position: 'Junior Fullstack Developer',
    time: 'Feb 2019 - Jul 2019',
    description:
      'Junior Fullstack Developer in a start-up based on a platform that aimed to provide an earn layer to github (before GitHub Sponsor appeared) so that OS developers could be rewarded and motivated for their effort.',
    image: '/assets/gitscale.png',
  },
  {
    company: 'Peliba',
    position: 'Intern Fullstack Developer',
    time: 'Aug 2018 - Dec 2018',
    description:
      'Intern fullstack developer in Danish SaaS platform that seeked to provide the best data privacy compliance for their clients. Had the opportunity to learn and implement an event-source system as well as excellent UI.',
    image: '/assets/peliba.png',
  },

  {
    company: 'Sonae',
    position: 'Intern Fullstack Developer',
    time: 'Jul 2017 - Jul 2018',
    description:
      'Started as an intern but soon was invited to work part-time while studying, where I developed a variety of statistics dashboards in a Product Development and Control platform for the biggest retailer in Portugal.',
    image: '/assets/sonae.png',
  },
  {
    company: 'Via University College',
    position: 'Software Technology Engineering',
    time: '2015 - 2019',
    description:
      "Went to Denmark to get a bachelor's degree in Software Development, where I had the opportunity to experience a more practical learning approach. Not only had the opportunity to learn but as well grow as an individual.",
    image: '/assets/via.jpeg',
  },
];

export default function Experience() {
  return (
    <>
      <section className="z-20" id="experience">
        <Highlight className="text-3xl mb-5">Experience</Highlight>
        <div className="grid grid-flow-row grid-cols-1 gap-4 auto-rows-fr md:grid-cols-4">
          {data.map((e) => (
            <BasicReveal
              key={e.company}
              trigger={<div className="flex flex-col md:col-span-2 h-full w-full" />}
            >
              <div className="h-full w-full rounded-lg bg-blue-light shadow-md p-4 text-left">
                <div className="inline-flex border-orange border-4 rounded-xl">
                  <Image
                    alt={e.company}
                    className="rounded-lg"
                    layout="fixed"
                    width={60}
                    height={60}
                    src={e.image}
                  />
                </div>
                <div className="text-left">
                  <h2 className="text-dark font-fira text-2xl">{e.position}</h2>
                  <h3 className="text-orange font-fira uppercase text-lg">{e.company}</h3>
                  <p className="text-light italic font-fira">{e.time}</p>
                  <p className="text-light font-carrois text-sm">{e.description}</p>
                </div>
              </div>
            </BasicReveal>
          ))}
        </div>
      </section>
    </>
  );
}
