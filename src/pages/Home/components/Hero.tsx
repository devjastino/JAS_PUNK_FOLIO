import { FaArrowCircleRight } from "react-icons/fa";
const Hero = () => {
  return (
    <main className="hero">
      <div className="flex-center max-w-7xl m-10 py-50">
        <h1 className="text-center text-[clamp(5rem,7vw,10rem)] font-title leading-[0.8] tracking-tight text-zinc-50">
          Code Anarchy in Motion
        </h1>
        <p className="text-center text-[clamp(1.5rem,1.3vw,4rem)] font-display mb-6">
          Welcome to JAS, where code meets chaos and creativity knows no limits.
          This isn’t just development—it’s a rebellion. I craft digital
          experiences that defy expectations, blending tech, art, and raw
          innovation into something untamed.
        </p>
        <button type="button" className="btn-lm">
          Learn More
          <span>
            <FaArrowCircleRight size={20} />
          </span>
        </button>
      </div>
    </main>
  );
};

export default Hero;
