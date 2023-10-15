import { technologies } from "../constants";

export default function Tech() {
  return (
    <>
      <section className="relative w-full h-screen bg-[#11151c]">
        <div className="sm:px-16 absolute inset-0 left-16 sm:left-[120px] max-w-7xl mx-auto flex md:flex-row flex-col items-start justify-start gap-5">
          <div className='sm:px-16 px-6 flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
              <div className='w-28 h-28 bg-gray-500 rounded-full p-6' key={technology.name}>
                <img src={technology.icon} />
              </div>
            ))}
          </div>
        </div>
      </section>
  </>
  );
};