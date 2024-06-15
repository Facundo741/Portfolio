import React from 'react';

const data = [
  {
    src: 'https://i.postimg.cc/ZRLnRFSs/alfajores.png',
    title: 'Alfajores del Tucuman',
    description: 'Ecommerce de productos regionales.',
    link: 'https://alfajoresdeltucuman.com.ar',
    repository: '',
    technologyLogo: ['https://cdn.simpleicons.org/react/61DAFB', 'https://cdn.simpleicons.org/mongodb/47A248', 'https://cdn.simpleicons.org/express/000000', 'https://cdn.simpleicons.org/nodedotjs/339933', 'https://cdn.simpleicons.org/bootstrap/7952B3']
  },
  {
    src: 'https://i.postimg.cc/2yc5dk34/rbeer.png',
    title: 'Rolling Beer',
    description: 'Sistema de gestion de pedidos, realizado como proyecto final.',
    link: 'https://main--rollingbeer1.netlify.app',
    repository: 'https://github.com/dani-assa/RollingBeer',
    technologyLogo: ['https://cdn.simpleicons.org/react/61DAFB', 'https://cdn.simpleicons.org/mongodb/47A248', 'https://cdn.simpleicons.org/express/000000', 'https://cdn.simpleicons.org/nodedotjs/339933', 'https://cdn.simpleicons.org/bootstrap/7952B3']
  },
  {
    src: 'https://i.postimg.cc/yxYdSg61/caminando.png',
    title: 'Caminando Horizontes',
    description: 'Blog de viajes, realizado como primer proyecto.',
    link: 'https://caminandohorizontes.netlify.app/',
    repository: 'https://github.com/dani-assa/Caminando-horizontes',
    technologyLogo: ['https://cdn.simpleicons.org/html5/E34F26', 'https://cdn.simpleicons.org/css3/1572B6']
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <div className="w-full max-w-screen-lg mx-auto px-6 py-20 mt-20">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-900 dark:text-white">Mis Proyectos</h1>
        <div className="grid gap-8">
          {data.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mb-8">
              <div className="flex flex-col sm:flex-row">
                <div className="relative group flex-shrink-0 w-full sm:w-2/5 md:w-1/2">
                  <img
                    src={`${item.src}?w=800&fit=crop&auto=format`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visitar sitio
                    </a>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between sm:w-3/5 md:w-1/2">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">{item.title}</h1>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">{item.description}</p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      {item.technologyLogo.map((logo, index) => (
                        <img key={index} src={logo} alt="technology logo" className="w-8 h-8 mb-2" />
                      ))}
                    </div>
                  </div>
                  {item.repository && (
                    <div className="flex items-center">
                      <span className="text-gray-700 dark:text-gray-300">Repositorio: </span>
                      <a
                        href={item.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 ml-2"
                      >
                        <img src="https://skillicons.dev/icons?i=github" alt="github logo" className="w-8 h-8 mr-2"/>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
