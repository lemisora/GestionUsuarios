import { Component } from "@angular/core";

export interface NavElement {
  title: string;
  link: string;
}

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  standalone: false,
})
export class NavbarComponent {
  // Estado del menú móvil
  public isMobileMenuOpen: boolean = false;

  // Elementos que deben mostrarse en la barra de navegación
  public elements: NavElement[] = [
    { title: "Inicio", link: "/pages/home" },
    { title: "Estructuras", link: "/pages/estructuras" },
    { title: "Documentación", link: "/pages/documentacion" },
    { title: "Usuarios", link: "/pages/usuarios" },
    { title: "Perfil", link: "/pages/perfil" },
  ];

  /**
   * Alterna el estado del menú móvil
   */
  public toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  /**
   * Cierra el menú móvil
   */
  public closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
