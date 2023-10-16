import { SnowboardCanvas } from './canvas';

export default function About() {
  return (
    <>
      <div className="h-80 w-full bg-gradient-to-b from-transparent via-[#807e7e] to-[#11151c]"></div>
      <section className="relative w-full h-screen bg-[#11151c]">
        <div className={`sm:px-16 absolute inset-0 top-[120px] left-16 sm:left-[120px] max-w-7xl mx-auto flex md:flex-row flex-col items-start justify-start gap-5`}>

          <div className="bg-white-100 w-4/5 md:w-1/2 p-8 rounded-xl">
            <h1 className="text-black-100 text-4xl font-semibold mb-8 z-30 relative">Hi there.</h1>
            <p className="text-black-100 z-10 z-30 relative">
              I’m Theodore, I am a junior full-stack software engineer based in Melbourne. I completed General Assembly's Software Engineering Immersive bootcamp program in September 2023. The software and tools I use for development can be found below. <br /><br />In my spare time I like to boulder, watch tennis and snowboard. Feel free to connect with me 🔗
            </p>
            <button className="bg-[#049b9b] py-2 px-4 mt-8 rounded-xl">
              <a href="https://drive.google.com/file/d/1XpKTT3y580CgI3dwwYRoEgaVnJbIsy0z/view?usp=drive_link" target="_blank" rel="noreferrer" className="z-30 relative">
              View resume ⇀
              </a>
              </button>
          </div>

          <div className="relative mt-72 ml-8 md:flex hidden">
            <SnowboardCanvas />
            <h1 className="lg:flex hidden absolute z-10 text-white text-[80px] ml-48 mt-16 font-bold transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center -rotate-90">"snowboard"</h1>

          </div>
          
        </div>
      </section>
  </>
  )
}