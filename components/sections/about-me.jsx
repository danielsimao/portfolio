import { Highlight } from "../highlight";

function AboutMe() {
  return (
    <section>
      <div className="text-left">
        <Highlight className="headline relative z-0 inline-block font-fira text-light text-3xl mb-5">
          About me
        </Highlight>
        <p className="text-light font-roboto text-lg text-bold">
          Simão is a Developer from Portugal, passionated about delivering high
          quality code with resilience. His jam is all kinds of modern stacks.
        </p>
      </div>
    </section>
  );
}

export { AboutMe };
