
::::::vitacora de gestion documental ui::::::::

crear la estructura del proyecto en angular 
en vs code

para angular instalaremos algunas dependencias 
para que nuestro desarrollo sea mas fluido

-angular eseentials(lenaguejs service , sippets, soporte para templates etc)-> jhon papa
-angular lenguaje service(automcompletado y soporte para templates en html)->
-path intellisense(autocompleta rutas de archivos , util para importar componentes)
-autoimport( te sugiere imports que necesites automaticamente)

extensiones para tailwind 

-tailwind css intellisense(te muestra sugerencias de clases y te avsa si hay errores en tus utilidades)
-prettier code-formatier(mantiene el codigo limpio y formato uniforme)
-(opcional) live server si quieres abriri un html fuera de angular 

verificar si tenemos instlado node.js
 node -v
 npm -v

instalar cli(consola) de angular
npm install -g @angular/cli

PS C:\Users\cristian>  npm install -g @angular/cli
>>

added 268 packages in 21s

51 packages are looking for funding
  run `npm fund` for details
npm notice
npm notice New major version of npm available! 10.8.2 -> 11.6.2
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.6.2
npm notice To update run: npm install -g npm@11.6.2
npm notice
PS C:\Users\cristian> 

ahora crearemos el nuevo proyecto
ng new gestion-documental-ui

nos pedira confirmacion para 
compartir datos de deasarrollo
 
 luego tenemos la seleccion del css
 u otras herramientas
 
 ahora tenemos 
 la eleccion si necesitamos renderizar 
 laspaginas en el servidor antes de enviarlas al navegandor
 mejorando el ceo , por el momento
 vamos aprescindir de esto 
 
 ahora instalaremos tailwind css con npm
 
# Creamos el proyecto Angular: 
ng new gestion-documental-ui

# Instalamos las dependencias compatibles: 
npm install -D tailwindcss@3 postcss@8 autoprefixer@10

# Creamos el archivo tailwind.config.js en la raíz del proyecto.

# Creamos el archivo postcss.config.js en la raíz del proyecto.

# Agregamos las directivas de Tailwind en src/styles.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

## para levantar el servidor 
PS C:\fullstack_dev\gestion-documental-ui> ng serve

## creando componentes




# 🧾 Bitácora de Desarrollo – Semana 2

## 🎯 Objetivo
Implementar un formulario funcional para crear nuevos documentos dentro del sistema, aplicando **validaciones dinámicas** mediante **Angular y TypeScript**, utilizando **binding bidireccional (ngModel)** y componentes independientes.

---

## ⚙️ Desarrollo

1. **Creación del componente**
   - Se generó el componente `NuevoDocumentoComponent` usando Angular CLI.
   - Este componente es *standalone*, lo que permite importar directamente `CommonModule` y `FormsModule` sin necesidad de declararlo en un módulo global.
ng generate component nuevo-documento

salida:

PS C:\fullstack_dev\gestion-documental-ui> ng generate component nuevo-documento
CREATE src/app/nuevo-documento/nuevo-documento.component.html (31 bytes)
CREATE src/app/nuevo-documento/nuevo-documento.component.spec.ts (672 bytes)
CREATE src/app/nuevo-documento/nuevo-documento.component.ts (260 bytes)     
CREATE src/app/nuevo-documento/nuevo-documento.component.css (0 bytes)      
PS C:\fullstack_dev\gestion-documental-ui> 

2. **Estructura HTML**
   - Se diseñó un formulario responsivo utilizando **Tailwind CSS**, con los siguientes campos:
     - Combo box (`select`) para elegir el tipo de documento.
     - Área de texto para descripción.
     - Campo de fecha oficial (`input type="date"`).
     - Campo para subir archivo PDF.

3. **Lógica y validaciones**
   - Las validaciones se implementaron directamente en el método `guardarDocumento()`, verificando:
     - Campos vacíos.
     - Formato correcto del archivo (solo `.pdf`).
   - Se muestran mensajes personalizados según el resultado:
     - Alerta de error con ícono ⚠️ si hay campos inválidos.
     - Confirmación de éxito con ícono ✅ cuando el documento se guarda correctamente.

4. **Interactividad**
   - Se utilizó **binding bidireccional (`[(ngModel)]`)** para enlazar los valores del formulario con las propiedades del componente.
   - Se añadió el método `onFileChange()` para capturar el archivo seleccionado desde el input.
   - Se agregó `limpiarMensaje()` para borrar mensajes cuando el usuario modifica algún campo.

---

## 🧩 Tecnologías aplicadas
- **Angular 17+**
- **TypeScript**
- **Tailwind CSS**
- **FormsModule (ngModel)** para data binding
- **Validaciones dinámicas** con control lógico en el componente

---

## 💡 Reflexión
El uso de Angular para manejar formularios ofrece una estructura mucho más clara y escalable que el uso de JavaScript puro.  
Permite mantener la lógica de validación dentro del componente, mejorar la reutilización del código y aplicar buenas prácticas como el *data binding* y la separación entre vista y lógica.

Además, con Tailwind CSS se logra un diseño limpio y responsivo sin depender de frameworks externos como Bootstrap.

---

## ✅ Resultado
Formulario completamente funcional con validaciones dinámicas, manejo de mensajes y compatibilidad total con Angular.  
Listo para integrarse al flujo principal del sistema de gestión documental.
