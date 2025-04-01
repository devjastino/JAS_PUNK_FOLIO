import { createSectionData } from "../../../constants/create-section-data";

const CreateSection = () => {
  return (
    <section className="flex-center bg-zinc-950 py-30 text-zinc-50">
      <h1 className="text-center text-[clamp(5rem,5vw,10rem)] font-title leading-[0.8] tracking-tight text-zinc-50 my-10">
        What I Create?
      </h1>
      <div className="flex lg:flex-row flex-col lg:gap-4 gap-10 max-w-7xl m-10">
        {createSectionData.map((res: any) => {
          return (
            <div>
              <h1 className="text-4xl font-title">{res.title}</h1>
              <p className="text-xl text-zinc-300">{res.details}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CreateSection;
