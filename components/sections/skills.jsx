import Image from 'next/image';
import BasicReveal from '../../utils/reveal';
import Highlight from '../highlight';

const data = [
  { name: 'React', link: 'react' },
  { name: 'Node.js', link: 'nodejs-icon' },
  { name: 'Sass', link: 'sass' },
  { name: 'Next', link: 'nextjs-icon' },
  { name: 'Vercel', link: 'vercel-icon' },
  { name: 'GraphQL', link: 'graphql' },
  { name: 'Web Components', link: 'webcomponents' },
  { name: 'Sentry', link: 'sentry-icon' },
  { name: 'npm', link: 'npm-icon' },
  { name: 'Figma', link: 'figma' },
  { name: 'Docker', link: 'docker-icon' },
  { name: 'Visual Studio', link: 'visual-studio-code' },
  { name: 'Prisma', link: 'prisma' },
  { name: 'Storybook', link: 'storybook-icon' },
  { name: 'Jest', link: 'jest' },
  { name: 'Nest.js', link: 'nestjs' },
  { name: 'Rollup.js', link: 'rollupjs' },
  { name: 'Webpack', link: 'webpack' },
  { name: 'Redux', link: 'redux' },
  { name: 'Typescript', link: 'typescript-icon' },
  { name: 'Stripe', link: 'stripe' },
  { name: 'ESLint', link: 'eslint' },
  { name: 'Prettier', link: 'prettier' },
];

export default function Skills() {
  return (
    <>
      <section className="z-20" id="skills">
        <Highlight className="text-3xl mb-5">Skills</Highlight>
        <BasicReveal trigger={<div />}>
          {data.map((e) => (
            <span
              key={e.name}
              className="inline-flex items-center px-3 py-2 m-1 rounded-full text-light font-roboto bg-dark"
            >
              <span className="inline-flex items-center mr-1">
                <Image
                  alt={e.name}
                  layout="fixed"
                  width={24}
                  height={24}
                  src={`https://cdn.svgporn.com/logos/${e.link}.svg`}
                />
              </span>
              {e.name}
            </span>
          ))}

          <span className="inline-flex items-center px-3 py-2 m-1 rounded-full text-light font-roboto bg-dark">
            <span className="inline-flex items-center mr-1">
              <svg width="24" height="24" id="logo-stencil" viewBox="0 0 512 512">
                <title>Logo Stencil</title>
                <path d="M188.8 334.07h197.33L279.47 448H83.2zM512 199H106.61L0 313h405.39zM232.2 64h196.6L322.62 177.93H125.87z" />
              </svg>
            </span>
            Stencil
          </span>
          <span className="inline-flex items-center px-3 py-2 m-1 rounded-full text-light font-roboto bg-dark">
            <span className="inline-flex items-center mr-1">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -1.7407421375734522 256 97.92674213757344"
              >
                <g fill="none">
                  <path
                    d="M165.35 96.185L204.209 0h-25.761l-26.58 62.157L132.964 0h-19.802L92.868 62.157 78.555 33.833 65.603 73.66l13.15 22.526h25.353l18.34-55.741 17.486 55.741z"
                    fill="#fb8c00"
                  />
                  <path
                    d="M24.393 63.166H40.22c4.795 0 9.064-.535 12.808-1.606l4.094-12.618 11.44-35.264a28.175 28.175 0 0 0-2.986-3.92C59.704 3.253 51.109 0 39.794 0H0v96.185h24.393zm20.95-41.038c2.295 2.31 3.442 5.402 3.442 9.276 0 3.903-1.01 6.998-3.027 9.286-2.212 2.542-6.285 3.813-12.219 3.813h-9.146v-25.84h9.214c5.53 0 9.442 1.155 11.737 3.465zm143.08 56.83l7.395-18.663h21.348l-10.131-28.31L219.707 0 256 96.185h-26.766l-6.201-17.227z"
                    fill="#616161"
                  />
                </g>
              </svg>
            </span>
            PWA
          </span>
          <span className="inline-flex items-center px-3 py-2 m-1 rounded-full text-light font-roboto bg-dark">
            <span className="inline-flex items-center mr-1">
              <Image
                alt="Testing Library"
                layout="fixed"
                width={24}
                height={24}
                src="/assets/octopus.png"
              />
            </span>
            Testing Library
          </span>
        </BasicReveal>
      </section>
      <style jsx>
        {`
          .avatar {
            border-radius: 50%;
          }

          .highlight {
            text-transform: uppercase;
            background: -webkit-linear-gradient(var(--color-orange), #ffc465);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>
    </>
  );
}
