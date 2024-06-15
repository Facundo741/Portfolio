import {useState, useEffect} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [darkMode] = useState(false); 

  const [values, setValues] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    message: false
  });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: false
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateFields()) {
      setLoading(true);

      emailjs
        .sendForm(
          'service_4fe3n6h',
          'template_xobet0a',
          e.target,
          'Yo_m98AJHfyDLsv1O'
        )
        .then(() => {
          setValues({
            fullName: '',
            email: '',
            message: ''
          });
          setSubmitStatus('success');
          setLoading(false);
        })
        .catch(() => {
          setSubmitStatus('error');
          setLoading(false);
        });
    }
  };

  const validateFields = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (values.fullName.trim() === '') {
      newErrors.fullName = true;
      isValid = false;
    } else {
      newErrors.fullName = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      newErrors.email = true;
      isValid = false;
    } else {
      newErrors.email = false;
    }

    if (values.message.trim() === '' || values.message.length > 200) {
      newErrors.message = true;
      isValid = false;
    } else {
      newErrors.message = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSubmitStatus(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [submitStatus]);

  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-neutral-900 dark:text-white">
      <div className="w-full max-w-full sm:max-w-md">
        <h4 className="text-2xl mb-4 text-center">Formulario de Contacto</h4>
        <form
          onSubmit={sendEmail}
          className="flex flex-col items-center w-full px-4"
        >
          <input
            type="text"
            placeholder="Nombre y Apellido"
            className={`w-full border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 mb-3 focus:outline-none ${
              darkMode ? 'text-white bg-gray-900' : 'text-black bg-white'
            }`}
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mb-3">Campo requerido</p>
          )}
          <input
            type="email"
            placeholder="Correo Electrónico"
            className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 mb-3 focus:outline-none ${
              darkMode ? 'text-white bg-gray-900' : 'text-black bg-white'
            }`}
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-3">Correo electrónico inválido</p>
          )}
          <textarea
            placeholder="Mensaje"
            className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 mb-3 focus:outline-none ${
              darkMode ? 'text-white bg-gray-900' : 'text-black bg-white'
            }`}
            rows={4}
            name="message"
            value={values.message}
            onChange={handleChange}
            maxLength={200}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mb-3">Campo requerido y máximo 200 caracteres</p>
          )}
          {submitStatus === 'error' && (
            <div className="w-full mt-2">
              <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md">
                Hubo un error al enviar el formulario.
              </p>
            </div>
          )}
          {submitStatus === 'success' && (
            <div className="w-full mt-2">
              <p className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-md">
                ¡El formulario se envió correctamente!
              </p>
            </div>
          )}
          <div className="relative flex justify-center mt-3 mb-2">
            <button
              type="submit"
              className={`bg-teal-200 text-black px-4 py-2 rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V2.5A9.5 9.5 0 002.5 12H4zm2 8a8 8 0 008-8h2.5A9.5 9.5 0 0112.5 20V17z"
                  />
                </svg>
              ) : (
                'Enviar'
              )}
            </button>
          </div>
          <div className="mt-4 text-center">
            <h6 className="text-xl mb-2 ">También puedes contactarme por LinkedIn:</h6>
            <a
              href="https://www.linkedin.com/in/fnsantillan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-200"
            >
              Mi Perfil de LinkedIn
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
