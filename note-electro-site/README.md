# NoteElectro - Landing Page

Una landing page moderna y profesional para NoteElectro, empresa de electricidad de Francisco Fernández, montador electricista e industrial.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y minimalista con animaciones suaves
- **Totalmente Responsivo**: Optimizado para todos los dispositivos
- **Animaciones**: Transiciones fluidas con Framer Motion
- **SEO Optimizado**: Meta tags y estructura semántica
- **Accesibilidad**: Navegación por teclado y lectores de pantalla

## 🎨 Diseño

### Colores
- **Azul eléctrico**: `#3B82F6` (blue-500)
- **Gris oscuro**: `#1F2937` (gray-800)
- **Blanco**: `#FFFFFF`
- **Amarillo/Naranja**: `#F59E0B` (orange-500)

### Tipografía
- **Fuente principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800, 900

## 📱 Secciones

1. **Header**: Logo y navegación fija
2. **Hero**: Sección principal con call-to-action
3. **Servicios**: 4 servicios principales con iconos
4. **Sobre mí**: Información de Francisco Fernández
5. **Trabajos**: Galería de proyectos y testimonios
6. **Contacto**: Formulario y información de contacto
7. **Footer**: Logo y copyright

## 🛠️ Tecnologías

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd note-electro-site
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── ui/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── About.tsx
│       ├── Work.tsx
│       └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🎯 Funcionalidades

### Header
- Logo con rayo y enchufe
- Navegación fija con scroll suave
- Menú responsive (pendiente de implementar)

### Hero Section
- Fondo degradado industrial
- Título principal con animaciones
- Botón call-to-action
- Indicador de scroll

### Servicios
- 4 tarjetas con iconos
- Efectos hover
- Animaciones de entrada

### Sobre Mí
- Foto profesional (placeholder)
- Información de experiencia
- Estadísticas destacadas

### Trabajos
- Galería de proyectos
- Testimonios de clientes
- Logos de empresas

### Contacto
- Formulario funcional
- Información de contacto
- Horarios de atención

## 🔧 Personalización

### Cambiar colores
Editar las clases de Tailwind en los componentes:
- `blue-500` para azul eléctrico
- `orange-500` para naranja/amarillo
- `gray-800` para gris oscuro

### Agregar contenido
1. Modificar los arrays de datos en cada componente
2. Actualizar textos en los archivos TSX
3. Reemplazar placeholders con imágenes reales

### Configurar formulario
El formulario de contacto está listo para integrar con:
- EmailJS
- Netlify Forms
- API personalizada

## 📈 SEO

- Meta tags optimizados
- Estructura semántica HTML5
- Títulos descriptivos
- Descripción y keywords

## 🚀 Despliegue

### Netlify
1. Conectar repositorio
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Importar proyecto
2. Framework preset: Vite
3. Deploy automático

## 📞 Contacto

- **Francisco Fernández**
- **WhatsApp**: +54 9 11 1234-5678
- **Email**: francisco@notelectro.com

## 📄 Licencia

© NoteElectro 2025 – Todos los derechos reservados.
