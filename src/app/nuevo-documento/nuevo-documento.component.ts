// Importamos los módulos esenciales de Angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Decorador @Component: define el componente Angular
@Component({
  selector: 'app-nuevo-documento',               // Nombre del selector HTML <app-nuevo-documento>
  standalone: true,                              // Componente independiente (sin necesidad de módulo)
  imports: [CommonModule, FormsModule],          // Módulos necesarios: directivas comunes y ngModel
  templateUrl: './nuevo-documento.component.html', // Vincula al archivo HTML
  styleUrls: ['./nuevo-documento.component.css']   // Vincula a los estilos del componente
})
export class NuevoDocumentoComponent {

  // --- 🧩 VARIABLES DEL FORMULARIO ---
  nombreDocumento = '';           // Almacena el valor del combo de nombre
  descripcion = '';               // Guarda la descripción escrita por el usuario
  fechaOficial = '';              // Fecha seleccionada en el campo date
  archivoPdf: File | null = null; // Archivo PDF subido por el usuario

  // --- 💬 VARIABLES PARA MENSAJES DE USUARIO ---
  mensaje = '';                   // Texto que mostrará mensajes de éxito o error
  tipoMensaje: 'exito' | 'error' | '' = '';  // Tipo de mensaje para aplicar estilos condicionales

  // --- 📥 MÉTODO PRINCIPAL: GUARDAR DOCUMENTO ---
  guardarDocumento() {
    const errores: string[] = []; // Arreglo donde acumulamos los errores encontrados

    // Validaciones básicas de los campos
    if (!this.nombreDocumento) errores.push('El nombre del documento es obligatorio.');
    if (!this.descripcion.trim()) errores.push('La descripción es obligatoria.');
    if (!this.fechaOficial) errores.push('La fecha oficial es obligatoria.');

    // Validación del archivo PDF
    if (!this.archivoPdf) {
      errores.push('Debes subir un archivo PDF.');
    } else if (!this.archivoPdf.name.toLowerCase().endsWith('.pdf')) {
      errores.push('El archivo debe tener formato .pdf.');
    }

    // Si hay errores, mostramos los mensajes
    if (errores.length > 0) {
      this.mensaje = '⚠️ Errores encontrados:\n' + errores.join('\n');
      this.tipoMensaje = 'error';
      return;
    }

    // Si todo está correcto, mostramos mensaje de éxito
    this.mensaje = `✅ Documento "${this.nombreDocumento}" guardado con éxito.\n📎 Archivo: ${this.archivoPdf?.name}`;
    this.tipoMensaje = 'exito';

    // Limpiamos los campos para volver a usar el formulario
    this.nombreDocumento = '';
    this.descripcion = '';
    this.fechaOficial = '';
    this.archivoPdf = null;
  }

  // --- 📂 CAPTURA DEL ARCHIVO SELECCIONADO ---
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.archivoPdf = input.files && input.files.length > 0 ? input.files[0] : null;
  }

  // --- 🧹 LIMPIA MENSAJES CUANDO EL USUARIO MODIFICA CAMPOS ---
  limpiarMensaje() {
    this.mensaje = '';
    this.tipoMensaje = '';
  }
}
