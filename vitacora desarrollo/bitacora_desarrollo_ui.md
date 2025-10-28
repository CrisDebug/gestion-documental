
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
