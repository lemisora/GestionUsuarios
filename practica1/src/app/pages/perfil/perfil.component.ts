import { Component } from "@angular/core";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  birthDate: Date;
}

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styleUrls: ["./perfil.component.scss"],
  standalone: false,
})
export class PerfilComponent {
  constructor() {}

  // Ejemplo para un solo perfil
  public profileObj: User = {
    id: 1,
    name: "Juan",
    email: "juan@gmail.com",
    phone: "123456789",
    address: "Calle 123, 123 Piso 123",
    birthDate: new Date("1990-01-01"),
  };
}
