import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Facebook, Apple } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaXTwitter } from 'react-icons/fa6';

const GasolinerECLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  // Validación de email
  const validateEmail = (emailValue) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  // Validar formulario
  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    if (!email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Por favor ingresa un correo válido';
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'La contraseña es requerida';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simular llamada a API
    setTimeout(() => {
      console.log('✅ Login exitoso:', { email, password });
      alert(`¡Bienvenido ${email}!`);
      setIsLoading(false);
      // Aquí iría la redirección: navigate('/dashboard');
    }, 2000);
  };

  // Manejar login social
  const handleSocialLogin = (provider) => {
    console.log(`Login con ${provider}`);
    alert(`Login con ${provider} - Funcionalidad en desarrollo`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Fondo con patrón de circuitos */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <circle cx="90" cy="10" r="2" fill="currentColor" />
              <circle cx="10" cy="90" r="2" fill="currentColor" />
              <circle cx="90" cy="90" r="2" fill="currentColor" />
              <line x1="10" y1="10" x2="90" y2="10" stroke="currentColor" strokeWidth="0.5" />
              <line x1="90" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="0.5" />
              <line x1="90" y1="90" x2="10" y2="90" stroke="currentColor" strokeWidth="0.5" />
              <line x1="10" y1="90" x2="10" y2="10" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="1000" height="1000" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Contenedor principal */}
      <div className="w-full max-w-md relative z-10">
        {/* Logo y título */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative w-24 h-24">
              {/* Shield con logo */}
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                {/* Escudo exterior */}
                <path
                  d="M50 10 L80 25 L80 50 Q80 75 50 90 Q20 75 20 50 L20 25 Z"
                  stroke="#333333"
                  strokeWidth="3"
                  fill="none"
                />
                {/* Mitad izquierda - Naranja */}
                <path
                  d="M50 15 L75 28 L75 50 Q75 72 50 85 Q50 72 50 50 Z"
                  fill="#D84315"
                />
                {/* Mitad derecha - Verde */}
                <path
                  d="M50 15 L25 28 L25 50 Q25 72 50 85 Q50 72 50 50 Z"
                  fill="#4CAF50"
                />
                {/* Icono de gasolina (izquierda) */}
                <g transform="translate(35, 40)">
                  <rect x="2" y="8" width="8" height="12" fill="white" rx="1" />
                  <path d="M6 0 L6 8" stroke="white" strokeWidth="1.5" />
                  <circle cx="6" cy="2" r="1.5" fill="white" />
                </g>
                {/* Icono de ojo (derecha) */}
                <g transform="translate(55, 40)">
                  <ellipse cx="6" cy="6" rx="4" ry="3" fill="none" stroke="white" strokeWidth="1" />
                  <circle cx="6" cy="6" r="1.5" fill="white" />
                </g>
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">SmartFuel</h1>
          <p className="text-gray-500 text-sm">Gestión inteligente de combustible</p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          {/* Campo Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Correo Electrónico
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                placeholder="Ingresa tu correo electrónico"
                className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                  errors.email
                    ? 'border-red-500 focus:border-red-600'
                    : 'border-gray-300 focus:border-primary'
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                <span>⚠</span> {errors.email}
              </p>
            )}
          </div>

          {/* Campo Contraseña */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: '' });
                }}
                placeholder="Ingresa tu contraseña"
                className={`w-full pl-12 pr-12 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                  errors.password
                    ? 'border-red-500 focus:border-red-600'
                    : 'border-gray-300 focus:border-primary'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                <span>⚠</span> {errors.password}
              </p>
            )}
          </div>

          {/* Enlace Olvidé contraseña */}
          <div className="text-right">
            <button
              type="button"
              onClick={() => console.log('Recuperar contraseña')}
              className="text-sm text-primary hover:text-orange-700 font-medium transition-colors bg-none border-none cursor-pointer p-0"
            >
              ¿Olvidaste tu Contraseña?
            </button>
          </div>

          {/* Botón Ingresar */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg font-bold text-white text-lg transition-all duration-300 ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-primary hover:bg-orange-700 active:scale-95'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Ingresando...
              </span>
            ) : (
              'INGRESAR'
            )}
          </button>
        </form>

        {/* Registro */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            ¿No tienes una cuenta?{' '}
            <button
              type="button"
              onClick={() => console.log('Ir a registro')}
              className="text-primary font-bold hover:text-orange-700 transition-colors bg-none border-none cursor-pointer p-0"
            >
              Regístrate aquí
            </button>
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">O inicia sesión con:</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={() => handleSocialLogin('Facebook')}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            title="Facebook"
          >
            <Facebook className="w-6 h-6 text-blue-600" />
          </button>
          <button
            type="button"
            onClick={() => handleSocialLogin('Google')}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            title="Google"
          >
            <FcGoogle className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={() => handleSocialLogin('Twitter')}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            title="Twitter"
          >
            <FaXTwitter className="w-6 h-6 text-black" />
          </button>
          <button
            type="button"
            onClick={() => handleSocialLogin('Apple')}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            title="Apple"
          >
            <Apple className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GasolinerECLogin;
