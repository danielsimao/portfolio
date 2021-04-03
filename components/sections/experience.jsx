import Image from "next/image";
import { BasicReveal } from "../../utils/reveal";
import { Highlight } from "../highlight";

const data = [
  {
    company: "Via University College",
    position: "Software Technology Engineering",
    time: "2015 - 2019",
    description:
      "Went to Denmark to get a bachelor degree in Software Development, where I had the opportunity to experience a more pratical learning approach. Not only had the opportunity to learn but as well grow as an individual.",
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQEjJW_wMuzRKQ/company-logo_200_200/0/1605792380278?e=1631145600&v=beta&t=tdfyYJzTejKo9LQrT2vrfCkpB_l7vkHAMeST1k2uHeU",
  },
  {
    company: "Sonae",
    position: "Intern/Programmer",
    time: "Jul 2017 - Jul 2018",
    description:
      "Started as an intern but soon was invited to work part-time while studying, where I developed a variety of statistics dashboards in a Product Development and Control platform for the biggest retailer in Portugal",
    image:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQGA0IfRwoUOLQ/company-logo_200_200/0/1519889947158?e=1631145600&v=beta&t=xWVyz6-p2426295o-PmbWJxaqprjio1EalJJLrW9gqM",
  },
  {
    company: "Peliba",
    position: "Intern Fullstack Developer",
    time: "Aug 2018 - Dec 2018",
    description:
      "Intern fullstack developer in a SaaS platform that seeked to provide the best data privacy compliance for their clients. Had the opportunity to learn and implement an event-source system as well as excellent UI.",
    image:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQFI6Ymw8p0b7g/company-logo_200_200/0/1541964675397?e=1631145600&v=beta&t=QDy9JFeIm6Y3vmcfpNrqVl5uOnhJrOzO2kpyPLWBg9M",
  },
  {
    company: "git//scale",
    position: "Junior Fullstack Developer",
    time: "Feb 2019 - Jul 2019",
    description:
      "Junior Fullstack Developer in a start-up based on a platform that aimed to provide an earn layer to github (before GitHub Sponsor appeared) so that OS developers could be rewarded and motivated for their effort.",
    image:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQGvlH1M8RRsVw/company-logo_200_200/0/1541255617982?e=1631145600&v=beta&t=lIbSaj60cHovsdvTBDGS-y1ojCQRFCDkIbAm_ptR2LM",
  },
  {
    company: "Hostelworld",
    position: "Fullstack Developer",
    time: "Jul 2019 - Present",
    description:
      "Fullstack Developer for one of the leading global Online Travel Agency (OTA). Revamped an API, created a React Component Library and a new platform that brings experiences/activities all across world to Hostelworld.",
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQFe6kmieGH7AQ/company-logo_200_200/0/1602166619568?e=1631145600&v=beta&t=rfqrgM9nD7RP5G3g6D5jakxcW0Lsyxq2u6-GKL-akGI",
  },
];

function Experience() {
  return (
    <>
      <section className="z-20" id="experience">
        <Highlight className="text-3xl mb-5">Experience</Highlight>
        <div className="grid grid-flow-row grid-cols-1 gap-4 auto-rows-fr md:grid-cols-4 last:col-span-4">
          {data.map((e, i) => (
            <BasicReveal
              key={i}
              trigger={
                <div className="flex flex-col md:col-span-2 experience-card h-full w-full" />
              }
            >
              <div className="h-full w-full rounded-lg bg-blue-light shadow-md p-4 text-left">
                <div className="inline-flex border-orange border-4 rounded-xl">
                  <Image
                    className="rounded-lg"
                    layout="fixed"
                    width={60}
                    height={60}
                    src={e.image}
                  />
                </div>
                <div className="text-left">
                  <h2 className="text-dark font-fira text-2xl">{e.position}</h2>
                  <h3 className="text-orange font-fira uppercase text-lg">
                    {e.company}
                  </h3>
                  <p className="text-light italic font-fira">{e.time}</p>
                  <p className="text-light font-carrois text-sm">
                    {e.description}
                  </p>
                </div>
              </div>
            </BasicReveal>
          ))}
        </div>
      </section>
      <style jsx>{`
        @media (min-width: 768px) {
          .experience-card:last-of-type {
            grid-column-start: 2;
          }
        }
      `}</style>
    </>
  );
}

export { Experience };
