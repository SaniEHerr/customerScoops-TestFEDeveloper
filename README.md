![Imagen Random](https://i.ibb.co/bRv4FfY/logobg.png) 
# 📧 Prueba tecnica CustomerScoops - Frontend Developer 
**Prueba tecnica realizada por Santiago Herrera**

## Descripción

Este proyecto es una aplicación construida con **React + Vite**. Incluye una interfaz moderna y funcional acorde al Figma otorgado, diseñada con **Styled Components** y **CSS puro**. Se utilizó **Resend** para manejar el envío de correos electrónicos a traves de un script ejecutable y **dotenv** para la configuración de variables de entorno.

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Tecnologias y Dependencias](#tecnologias-y-dependencias)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Maquetación y Estilos](#maquetación-y-estilos)
- [Configuración del Envío de Correos](#configuración-del-envío-de-correos)
- [Detalles Técnicos](#detalles-técnicos)
- [Demo](#demos)
- [Conclusión](#conclusión)

## Requisitos

- **Node.js** v14+ (se recomienda la última versión estable)
- **npm** como gestor de paquetes

## Tecnologias y Dependencias

- **React** `18.3.1`
- **Vite** `5.4.10`
- **TypeScript** `5.6.2`
- **StyledComponents** `6.1.13`
- **Node** `20.11.1`
- **ReSend** `4.0.1`
- **Dotenv** `16.4.5`

## Instalación

1. **Clona este repositorio** en tu máquina local:

   ```bash
   git clone https://github.com/SaniEHerr/customerScoops-TestFEDeveloper.git
2. **Navega a la carpeta front**:

   ```bash
   cd front
3. **Instala las dependencias**:

   ```bash
   npm install
4. **Configura las variables de entorno del proyecto (utilice el arcchivo .env.example como guia):**:

   ```bash
    RESEND_API_KEY
    RESEND_FROM_EMAIL_DEFAULT
## Ejecución

- Para iniciar el proyecto en modo desarrollo:

   ```bash
   npm run dev
## Maquetación y Estilos

La maquetación del proyecto fue desarrollada con Styled Components y CSS puro para lograr un diseño modular y escalable.
- **Styled Components:** Se utilizaron para manejar los estilos específicos de componentes, lo que permite encapsular los estilos y hacerlos más reutilizables.

- **CSS puro:** Algunos estilos globales, variables y personalizaciones específicas de la interfaz fueron realizados con CSS puro para asegurar una rápida carga y flexibilidad en la personalización visual. A su vez se integran animaciones utilizando CSS puro para su facil integración

## Configuración del Envío de Correos

El envío de correos en esta aplicación se implementó usando Resend. Este servicio permite manejar el envío de correos de manera segura y rápida.
### Enfoque de Implementación
1. **Configuración de Resend:** Se creó un archivo `sendEmail.js` que maneja la lógica de envío de correos. En este archivo, se importa la librería `Resend` y se configura la API Key desde las variables de entorno a través del paquete `dotenv`. La API Key se almacena en el archivo `.env` como `RESEND_API_KEY`.

2. **Estructura del Envío de Correo:** El correo se envía con un formato HTML personalizado. Los datos del correo, como el remitente, destinatario y contenido, se definen dentro de un objeto emailData. Se utiliza la variable de entorno `RESEND_FROM_EMAIL_DEFAULT` para manejar desde la misma un correo default, el cual se puede editar a gusto.

3. **Ejecutando el Envío:** El script `sendEmail.js` se puede ejecutar a través de un comando npm. Al correr `npm run send-email`, se ejecuta el script que envía el correo con el template especificado en el archivo.

4. **Manejo de Errores:** Si ocurre algún error durante el proceso de envío del correo, se captura y se muestra en consola para su diagnóstico.

## Especificaciones Técnicos

### Enfoque de Implementación
La estructura de los componentes sigue un enfoque modular. Cada componente es responsable de una función específica y está estilizado usando Styled Components. Algunos de los principales componentes y su funcionalidad son:
- **MultiStep:** gestiona el flujo de navegación entre las diferentes secciones del formulario, añadiendo transiciones animadas entre cada paso para una experiencia de usuario más fluida. Utiliza un `switch` para renderizar dinámicamente los componentes correspondientes a cada `paso`, asegurando que el usuario vea únicamente la sección relevante según el paso en el que se encuentre. Esto permite un flujo de trabajo secuencial e interactivo, optimizando la usabilidad del formulario.

- **ProgressBar:** visualiza el progreso del usuario a través del formulario, ajustando dinámicamente la barra de progreso según el paso actual. Calcula el ancho de la barra en función del paso actual (de 1 a 6), proporcionando una representación visual del avance en el formulario. Este componente mejora la experiencia del usuario al mostrar de manera clara y continua el progreso en su navegación.

- **Pagination:** gestiona la navegación entre los pasos del formulario, permitiendo al usuario avanzar o retroceder a través de las diferentes secciones. Incluye botones de `Anterior` y `Siguiente`, que están habilitados o deshabilitados dependiendo de las condiciones establecidas en cada paso. El botón `Siguiente` solo está disponible cuando el usuario ha completado la información requerida, asegurando un flujo controlado. Los botones de navegación solo se muestran cuando no se está en el primer ni en el último paso, garantizando una interfaz limpia y eficiente.


### Elección y uso de useContext y useState: Justificación y explicación de su Implementación
- **useContext (FormContext) para el formulario:** Utilice useContext para centralizar el estado de las respuestas del usuario a lo largo del formulario. Permite acceder y actualizar las respuestas sin necesidad de crear un estado local en `App.tsx` y pasar props desde este mismo hacia los otros componentes, evitando de esta forma el `prop drilling`. Al envolver la aplicación con el FormProvider, cualquier componente puede leer y modificar las respuestas de manera sencilla y eficiente, facilitando el manejo del estado en toda la aplicación y asegurando que las respuestas se mantengan consistentes a lo largo del formulario.

- **useState para los steps:** Opté por utilizar useState para gestionar el estado de los pasos del formulario con el fin de demostrar mi capacidad para manejar estados de varias formas. Esta funcionalidad podría haberse implementado utilizando un contexto, pero decidí emplear useState como una forma de ilustrar mi enfoque para gestionar la navegación entre los pasos a nivel local. Esta elección permite un control directo del estado dentro del componente App.tsx, lo que facilita; la transición entre las diferentes pasos del formulario, una gestión eficiente del progreso de cada paso y seleccionar el contenido correspondiente a cada etapa del formulario, garantizando una experiencia dinámica y fluida para el usuario.

## Demo

Podes ver una demostración en vivo del proyecto en el siguiente enlace: https://customer-scoops-test-fe-developer.vercel.app/.

## Conclusión

Disfruté enormemente de este proceso. Fueron dos días intensos de desarrollo que resultaron ser muy divertidos y enriquecedores. Fue la primera vez que trabajé en un formulario de tipo Stepper (en pasos), y sin duda me llevo una experiencia positiva y valiosos aprendizajes de esta prueba técnica. Aunque al principio tuve algunos desafíos con la implementación de ReSend, nada que un poco de investigación y documentación no pudiera resolver. En resumen, fue un proceso muy satisfactorio, y estoy muy contento de haber tenido la oportunidad de formar parte de este proyecto.

-
-
-
![Imagen Random](https://i.ibb.co/DYN3WWV/eyes.png)