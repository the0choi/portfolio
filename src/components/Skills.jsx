import { technologies } from "../constants";

export default function Skills() {
  const randomDuration = () => {
    return Math.random() * 4 + 2; // Generate a random duration between 1 and 5 seconds
  };

  return (
    <>
      <section className="relative w-full h-[400px] sm:h-screen xs:h-[900px] bg-[#11151c]">
        <div className="sm:px-16 absolute inset-0 max-w-7xl mx-auto mt-36 flex md:flex-row flex-col items-start justify-start gap-5">
          <div className='sm:px-16 px-6 flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
              <div 
                className='w-28 h-28 bg-white-100 rounded-full p-6 z-30 skills-effect' 
                key={technology.name}
                style={{ '--glow-duration': `${randomDuration()}s`, '--float-duration': `${randomDuration() * 2}s` }}
              >
                <img src={technology.icon} draggable="false" />
              </div>
            ))}
          </div>
        </div>
      </section>
  </>
  );
}