<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  </div>

  <h3 align="center">SaludTotal - Un Sistema de Gestión de Salud</h3>
</div>

## 📋 <a name="table">Tabla de Contenidos</a>

1. 🤖 [Introducción](#introduccion)
2. ⚙️ [Stack Tecnológico](#tech-stack)
3. 🔋 [Características](#caracteristicas)
4. 🤸 [Inicio Rápido](#quick-start)


## <a name="introduccion">🤖 Introducción</a>

Una aplicación de gestión de pacientes de atención médica que permite a los pacientes registrarse fácilmente, reservar y gestionar sus citas con doctores, con herramientas administrativas para programar, confirmar y cancelar citas, junto con notificaciones SMS, todo construido usando Next.js.


## <a name="tech-stack">⚙️ Stack Tecnológico</a>

- Next.js
- Appwrite
- Typescript
- TailwindCSS
- ShadCN
- Twilio

## <a name="caracteristicas">🔋 Características</a>

👉 **Registrarse como Paciente**: Los usuarios pueden registrarse y crear un perfil personal como paciente.

👉 **Reservar una Nueva Cita con Doctor**: Los pacientes pueden programar citas con doctores a su conveniencia y pueden reservar múltiples citas.

👉 **Gestionar Citas desde el Lado Administrativo**: Los administradores pueden ver y manejar eficientemente todas las citas programadas.

👉 **Confirmar/Programar Cita desde el Lado Administrativo**: Los administradores pueden confirmar y establecer horarios de citas para asegurar que estén correctamente programadas.

👉 **Cancelar Cita desde el Lado Administrativo**: Los administradores tienen la capacidad de cancelar cualquier cita según sea necesario.

👉 **Enviar SMS al Confirmar Cita**: Los pacientes reciben notificaciones SMS para confirmar los detalles de su cita.

👉 **Responsividad Completa**: La aplicación funciona perfectamente en todos los tipos de dispositivos y tamaños de pantalla.

👉 **Subida de Archivos usando Appwrite Storage**: Los usuarios pueden subir y almacenar archivos de forma segura dentro de la aplicación usando los servicios de almacenamiento de Appwrite.

👉 **Gestionar y Rastrear el Rendimiento de la Aplicación usando Sentry**: La aplicación usa Sentry para monitorear y rastrear su rendimiento y detectar cualquier error.

y muchas más, incluyendo arquitectura de código y reutilización

## <a name="quick-start">🤸 Inicio Rápido</a>

Sigue estos pasos para configurar el proyecto localmente en tu máquina.

**Prerrequisitos**

Asegúrate de tener lo siguiente instalado en tu máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Clonando el Repositorio**

```bash
git clone https://github.com/fernandogbz/saludTotal.git
cd saludTotal
```

**Instalación**

Instala las dependencias del proyecto usando npm:

```bash
npm install
```

**Configurar Variables de Entorno**

Crea un nuevo archivo llamado `.env.local` en la raíz de tu proyecto y agrega el siguiente contenido:

```env
#APPWRITE
NEXT_PUBLIC_ENDPOINT=https://nyc.cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=111111
```

Reemplaza los valores de marcador de posición con tus credenciales reales de Appwrite. Puedes obtener estas credenciales registrándote en el [sitio web de Appwrite](https://appwrite.io/).

**Ejecutando el Proyecto**

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el proyecto.
