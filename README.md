# GasolinerEC Login - React Component

Componente de login pixel-perfect basado en el diseño de Figma de GasolinerEC.

##  Características

 **Diseño Pixel-Perfect**: Replica exacta del diseño de Figma
 **Responsivo**: Se adapta a móvil y escritorio
 **Validaciones**: Email y contraseña con mensajes de error
 **Visibilidad de Contraseña**: Toggle de ojo para mostrar/ocultar
 **Estado de Carga**: Simulación de API con spinner
 **Social Login**: Botones para Facebook, Google, Twitter, Apple
 **Accesibilidad**: Etiquetas, placeholders y ARIA labels

##  Stack Tecnológico

- **React 18** - Functional Components + Hooks
- **Tailwind CSS** - Estilos utilitarios
- **Lucide React** - Iconos SVG
- **React Icons** - Iconos adicionales (Google, Twitter)

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start

# Compilar para producción
npm build
```

## Funcionalidades Implementadas

### 1. Gestión de Estado
- `email`: Captura el correo electrónico
- `password`: Captura la contraseña
- `showPassword`: Toggle para mostrar/ocultar contraseña
- `isLoading`: Estado de carga durante el login
- `errors`: Objeto con errores de validación

### 2. Validaciones
- ✓ Email con formato válido (regex)
- ✓ Contraseña no vacía y mínimo 6 caracteres
- ✓ Mensajes de error en rojo debajo de inputs
- ✓ Limpieza de errores al escribir

### 3. Interacción
- ✓ Botón deshabilitado durante carga
- ✓ Spinner animado en estado de carga
- ✓ Simulación de API con setTimeout (2 segundos)
- ✓ Consola log con datos de login exitoso
- ✓ Alert de bienvenida

### 4. Visibilidad de Contraseña
- ✓ Icono de ojo para toggle
- ✓ Cambio entre input type="password" y type="text"

##  Paleta de Colores

- **Primario**: #D84315 (Naranja/Rojo)
- **Secundario**: #4CAF50 (Verde)
- **Texto Oscuro**: #333333
- **Gris Claro**: #F5F5F5
- **Borde Gris**: #E0E0E0

##  Responsividad

El componente es completamente responsivo:
- **Móvil**: Padding ajustado, fuentes legibles
- **Tablet**: Layout centrado con max-width
- **Escritorio**: Diseño completo con sombras y efectos

## Seguridad

 **Nota**: Este es un componente de demostración. Para producción:
- Implementar HTTPS
- Validar en backend
- Usar JWT o sesiones seguras
- Implementar rate limiting
- Sanitizar inputs

##  Uso

```jsx
import GasolinerECLogin from './components/GasolinerECLogin';

function App() {
  return <GasolinerECLogin />;
}

export default App;
```

##  Próximas Mejoras

- [ ] Integración con API real
- [ ] Autenticación OAuth
- [ ] Recuperación de contraseña
- [ ] Registro de usuario
- [ ] Tema oscuro
- [ ] Internacionalización (i18n)

## 📄 Licencia

Daniela Cáceres
