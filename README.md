# Prueba Técnica React

### Este es un proyecto de ejemplo que utiliza **React**, **Vite** y **TailwindCSS**.

## Consigna de la Prueba Técnica
* Objetivo:
Crear una aplicación en React que permita a los usuarios agregar elementos a una lista y eliminarlos, con funcionalidades adicionales para confirmar la eliminación y resaltar visualmente elementos seleccionados.

* Requerimientos:
Campo de Texto y Botón de Añadir:

1. Implementar un campo de texto donde el usuario pueda escribir.
Al presionar el botón "Añadir" o la tecla "Enter", el texto debe agregarse a una lista visible en la aplicación.
Si el campo de texto está vacío, no se debe agregar nada a la lista.
Visualización de la Lista:

2. Mostrar la lista de elementos agregados debajo del campo de texto.
Cada elemento de la lista debe incluir un texto y un mensaje que indique que el elemento se puede eliminar si es tocado.
Eliminación de Elementos:

3. Al hacer clic en un elemento de la lista, debe aparecer una alerta de confirmación preguntando si el usuario está seguro de eliminar dicho elemento.
Si el usuario confirma, el elemento se debe eliminar de la lista.
Cambio de Color en Elementos Seleccionados:

4. Permitir que un elemento de la lista cambie de color cuando el usuario interactúe con él (por ejemplo, al pasar el cursor sobre el elemento).
Persistencia de Datos:

5. Los elementos de la lista deben guardarse en localStorage para que al recargar la página, la lista mantenga los elementos previamente agregados.


### Instalación

Para instalar y ejecutar el proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/nicking94/random-list.git
   ```
2. Instala las dependencias:
   ```bash
   cd prueba-tecnica-1
   npm install
   ```
3. Inicia la aplicación:
   ```bash
   npm run dev
   ```

### Link al demo

https://random-list-nk.netlify.app/
