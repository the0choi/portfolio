
export default function Contact() {
  return (
    <>
      <div className="h-80 w-full bg-gradient-to-b from-[#11151c] via-[#807e7e] to-transparent"></div>
      <section className="relative w-full h-[600px] bg-transparent">
        <div className={`sm:px-16 absolute inset-0 top-[120px] left-16 sm:left-[120px] max-w-7xl mx-auto flex md:flex-row flex-col items-start justify-start gap-5`}>

          <div className="bg-white-100 w-4/5 md:w-1/2 p-6">
            <h1 className="text-black-100 text-4xl font-semibold mb-8 z-30 relative">Let's connect.</h1>
            <p className="text-black-100 z-10 z-30 relative">
              Shoot me an email, and you can also find me on Linkedin.
            </p>
            <button className="bg-[#049b9b] py-2 px-4 mt-8 rounded-xl">
              <a href="mailto:theodore.choi07@gmail.com" target="_blank" rel="noreferrer" className="z-30 relative">
              theodore.choi07@gmail.com
              </a>
              </button>
          </div>
          
        </div>
      </section>
  </>
  )
}