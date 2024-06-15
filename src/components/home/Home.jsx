import React from 'react';

const Home = () => {
  
  const downloadCV = () => {
    const url = 'https://drive.google.com/uc?export=download&id=1qbSZWdLIlfgZ8IwxLkh1Ol6ZlKbZHs63';
    const fileName = 'CV_Facundo_Santillan.pdf';
    
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
  };

  return (
    <div className="bg-teal-500 dark:bg-neutral-900 dark:text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-20 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="text-center md:text-left">
            <img
              src="https://i.postimg.cc/vB8XGk9m/3fe76e5a-dc5e-40b3-88c3-f74bc1e8eb7d.webp"
              alt="Tu Nombre"
              className="w-60 h-60 md:w-72 md:h-72 mx-auto md:mx-0 rounded-full"
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-white mb-4">Facundo Nahuel Santillan</h1>
            <p className="text-lg text-white mb-4">
              Estudiante de Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional.
            </p>
            <p className="text-lg text-white mb-4">
  <a
    href="https://certs.rollingcodeschool.com//c2FudGlsbGFuZmFjdW5kbzQzQGdtYWlsLmNvbQ==-1716235917244-1.png"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-teal-200 cursor-pointer"
  >
    Curso completado
  </a>{' '}
  de Desarrollador Full Stack MERN en Rolling Code School.
</p>

          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white mb-4 mt-10">Tecnologías:</h2>
          <div className="grid grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-6">
            <div className="flex flex-col items-center">
              <img src="https://cdn.simpleicons.org/git/F05032" alt="git logo" className="icon" style={{ width: '40px', height: '40px' }} />
              <span className="text-sm text-gray-300 mt-2">Git</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://cdn.simpleicons.org/html5/E34F26" alt="html5 logo" className="icon" style={{ width: '40px', height: '40px' }} />
              <span className="text-sm text-gray-300 mt-2">HTML5</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://cdn.simpleicons.org/css3/1572B6" alt="css3 logo" className="icon" style={{ width: '40px', height: '40px' }} />
              <span className="text-sm text-gray-300 mt-2">CSS3</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://cdn.simpleicons.org/bootstrap/7952B3" alt="bootstrap logo" className="icon" style={{ width: '40px', height: '40px' }} />
              <span className="text-sm text-gray-300 mt-2">Bootstrap</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://cdn.simpleicons.org/mui/007FFF" alt="materialui logo" className="icon" style={{ width: '40px', height: '40px' }} />
              <span className="text-sm text-gray-300 mt-2">Material UI</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="javascript logo" className="icon" style={{ width: '40px', height: '40px' }} />
              <span className="text-sm text-gray-300 mt-2">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://cdn.simpleicons.org/react/61DAFB" alt="react logo" className="icon" style={{ width: '40px', height: '40px' }} />
              <span className="text-sm text-gray-300 mt-2">React</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://cdn.simpleicons.org/mongodb/47A248" alt="mongodb logo" className="icon" style={{ width: '40px', height: '40px' }} />
              <span className="text-sm text-gray-300 mt-2">MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://cdn.simpleicons.org/express/000000" alt="express logo" className="icon" style={{ width: '40px', height: '40px' }} />
              <span className="text-sm text-gray-300 mt-2">Express</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="nodejs logo" className="icon" style={{ width: '40px', height: '40px' }} />
              <span className="text-sm text-gray-300 mt-2">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="typescript logo" className="icon" style={{ width: '40px', height: '40px' }} />
              <span className="text-sm text-gray-300 mt-2">TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="tailwindcss logo" className="icon" style={{ width: '40px', height: '40px' }} />
              <span className="text-sm text-gray-300 mt-2">Tailwind CSS</span>
            </div>
          </div>
          <div className="mt-8">
            <button
              onClick={downloadCV}
              className="bg-teal-700 hover:bg-teal-600 text-white mt-8 py-2 px-4 rounded-md shadow-lg focus:outline-none"
            >
              Descargar CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
