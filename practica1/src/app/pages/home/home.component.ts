import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: false,
})
export class HomeComponent implements OnInit {
  rutas = [
    {
      name: "Estructuras",
      path: "/pages/estructuras",
    },
    {
      name: "Documentación",
      path: "/pages/documentacion",
    },
    {
      name: "Usuarios",
      path: "/pages/usuarios",
    },
    {
      name: "Perfil",
      path: "/pages/perfil",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
