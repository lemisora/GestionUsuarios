import { Component } from "@angular/core";

interface Tecnologia {
  nombre: string;
  img: string;
  url: string;
}

@Component({
  selector: "app-documentacion",
  templateUrl: "./documentacion.component.html",
  styleUrls: ["./documentacion.component.scss"],
  standalone: false,
})
export class DocumentacionComponent {
  tecnologias: Tecnologia[] = [
    {
      nombre: "NodeJS",
      img: "assets/img/nodejs.png",
      url: "https://nodejs.org/docs/latest/api/",
    },
    {
      nombre: "TypeScript",
      img: "assets/img/typescript.png",
      url: "https://www.typescriptlang.org/docs/",
    },
    {
      nombre: "Angular",
      img: "assets/img/angular.png",
      url: "https://angular.dev/overview",
    },
    {
      nombre: "Ionic",
      img: "assets/img/ionic.png",
      url: "https://ionicframework.com/docs",
    },
    {
      nombre: "NPM",
      img: "assets/img/npm.png",
      url: "https://docs.npmjs.com/",
    },
    {
      nombre: "Tailwind CSS",
      img: "assets/img/tailwindcss.png",
      url: "https://tailwindcss.com/docs/installation/framework-guides/angular",
    },
  ];

  index = 0;

  siguiente() {
    this.index = (this.index + 1) % this.tecnologias.length;
  }

  anterior() {
    this.index =
      (this.index - 1 + this.tecnologias.length) % this.tecnologias.length;
  }

  abrir(url: string) {
    window.open(url, "_blank");
  }
}
