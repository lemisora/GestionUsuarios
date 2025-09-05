import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PerfilComponent } from "./perfil/perfil.component";
import { EstructurasComponent } from "./estructuras/estructuras.component";
import { DocumentacionComponent } from "./documentacion/documentacion.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent,
    PerfilComponent,
    EstructurasComponent,
    DocumentacionComponent,
    UsuariosComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, RouterModule, SharedModule],
})
export class PagesModule {}
