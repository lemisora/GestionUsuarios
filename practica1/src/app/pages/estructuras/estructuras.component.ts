import { Component } from "@angular/core";

@Component({
  selector: "app-estructuras",
  templateUrl: "./estructuras.component.html",
  styleUrls: ["./estructuras.component.scss"],
  standalone: false,
})
export class EstructurasComponent {

  showInfo = true;
  students = [
    {
      name: 'Ana',
      edad: 21
    },
    {
      name: 'Luis',
      edad: 19
    },
    {
      name: 'Maria',
      edad: 24
    },
    {
      name: 'Consuelo',
      edad: 19
    },
    {
      name: 'Cedillo',
      edad: 100
    }
  ];
  role: string = 'editor | admin | viewer'
}
