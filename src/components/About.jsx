
export default function About() {
  return (
    <>
        <div className="sm:px-16 px-6 border border-secondary w-3/5 mt-8 mx-auto"></div>

      <section className="relative w-full h-screen">
        <div className={`sm:px-16 px-6 absolute inset-0 top-[120px] left-[120px] max-w-7xl mx-auto flex sm:flex-row flex-col items-start justify-start gap-5`}>

          <div className="bg-black w-1/2 p-6">
            <h1 className="text-white-100 text-4xl mb-8">Hi there.</h1>
            <p>
              I’m Theodore, I am a junior full-stack software engineer based in Melbourne. I completed General Assembly's Software Engineering Immersive bootcamp program in September 2023. The software and tools I use for development can be found below. <br /><br />In my spare time I like to boulder, watch tennis and snowboard. Feel free to contact me via email or through LinkedIn! :)
            </p>
            <button className="bg-red-500 py-2 px-4 mt-8">
              <a href="" target="_blank" rel="noreferrer">
              View resume
              </a>
              </button>
          </div>

          <div className="mt-72 ml-8">
            <img src="/src/assets/logo.svg" />
          </div>
          
        </div>
      </section>
  </>
  )
}