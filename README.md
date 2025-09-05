# Gestión de usuarios (Proyecto en Angular)
## Dependencias para desarrollo
  ### Nix
   - Se recomienda usar [Nix](https://nixos.org/download.html) para instalar todas las dependencias de desarrollo.
  ### Instalar dependencias de JS con Devenv y Direnv
  - Si no tienes Nix ni deseas usar Nix entonces procede a instalar las dependencias manualmente.
  - Se tiene preparado un entorno con devenv y direnv para facilitar la instalación de dependencias y configuración de entorno.
  Seguir las instrucciones para instalar devenv y direnv en el repositorio de [devenv](https://github.com/cachix/devenv).
  Con direnv instalado solo falta cambiarse al directorio del proyecto y ejecutar el comando `direnv allow`, esto activará el entorno de desarrollo, y cada vez que cambies de directorio se activará/desactivará automáticamente.
  - Se instalan todas las dependencias de desarrollo con `devenv tasks run project:setup-dev`.
  ### Node
  - Para este proyecto se usa Node 18+, el entorno de desarrollo de devenv ya lo tiene instalado. Se recomienda usar el devenv. Si no las dependencias deberás instalarlas manualmente.
  ### Angular
  - Se necesita Angular 16+ para este proyecto, en el devenv se puede instalar fácilmente, sino instalarlo manualmente.
  ### Tailwind
  - Se usa Tailwind 3.4+ para este proyecto, se tiene como dependencia en el package.json por lo que con un simple `npm install` dentro del devenv debería bastar, si no la instalas manualmente.
