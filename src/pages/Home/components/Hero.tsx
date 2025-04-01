import { FaArrowCircleRight } from "react-icons/fa";
const Hero = () => {
  return (
    <main className="hero">
      <div className="flex-center text-center max-w-7xl mx-auto">
        <h1 className="text-9xl font-title leading-[0.8] tracking-tight text-zinc-50">
          Code Anarchy in Motion
        </h1>
        <p className="text-2xl font-display mb-6">
          Welcome to JAS, where code meets chaos and creativity knows no limits.
          This isn’t just development—it’s a rebellion. I craft digital
          experiences that defy expectations, blending tech, art, and raw
          innovation into something untamed.
        </p>
        <button type="button" className="btn-lm">
          Learn More
          <span>
            <FaArrowCircleRight />
          </span>
        </button>
      </div>
    </main>
  );
};

export default Hero;
