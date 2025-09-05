import { Component, OnInit } from "@angular/core";
import { UsuariosService, User } from "src/app/core/usuarios.service";

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.scss"],
  standalone: false,
})

export class UsuariosComponent implements OnInit{
  users: User[] = [];
  loading = true;
  error = '';

  constructor( private usuariosSvc: UsuariosService ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.usuariosSvc.getUsers().subscribe({
      next: (data) => {
        setTimeout( () => {
          this.users = data;
          this.loading = false;
        }, 5000);
      },
      error: (err) => {
        this.error = 'Error al cargar usuarios';
        console.error(err);
        this.loading = false;
      }
    });
  }

  trackById(index: number, user: User){
    return user.id;
  }
}
