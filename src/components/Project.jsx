import PropTypes from 'prop-types';

Project.propTypes = {
    projectNo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    model: PropTypes.object.isRequired,
    isModelFirst: PropTypes.bool
};

export default function Project({ projectNo, title, description, url, color, model, isModelFirst }) {
  const colorClasses = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-500' },
    red: { bg: 'bg-red-500', text: 'text-red-500' },
    yellow: { bg: 'bg-yellow-500', text: 'text-yellow-500' },
    green: { bg: 'bg-green-500', text: 'text-green-500' },
  };

  return (
    <section className="relative w-full h-screen">
      <div className={`sm:px-16 px-6 absolute inset-0 top-[120px] left-[120px] max-w-7xl mx-auto flex sm:flex-row flex-col items-start justify-center gap-5`}>

        {isModelFirst ? model : (
          <div className="mx-auto">
            <div className="flex items-center">
              <div className={`w-16 h-0 border-2 border-black ml-2 mr-4`}></div>
              <p className={`${colorClasses[color].text} font-semibold`}>Project {projectNo}</p>
            </div>
            <h1 className="text-4xl font-semibold text-black my-6">
              {title}
            </h1>
            <p className="text-lg text-gray-500 my-8">
              {description}
            </p>
            <button className={`text-xl text-white-100 ${colorClasses[color].bg} py-4 px-4`}>
              <a href={url} target="_blank" rel="noreferrer">
              View project ⇀
              </a>
            </button>
          </div>
        )}

        {isModelFirst ? (
          <div className="mx-auto">
            <div className="flex items-center">
              <div className={`w-16 h-0 border-2 border-black ml-2 mr-4`}></div>
              <p className={`${colorClasses[color].text} font-semibold`}>Project {projectNo}</p>
            </div>
            <h1 className="text-4xl font-semibold text-black my-6">
              {title}
            </h1>
            <p className="text-lg text-gray-500 my-8">
              {description}
            </p>
            <button className={`text-xl text-white-100 ${colorClasses[color].bg} py-4 px-4`}>
              <a href={url} target="_blank" rel="noreferrer">
              View project ⇀
              </a>
            </button>
          </div>
        ) : model }
        
      </div>
    </section>
  )
}