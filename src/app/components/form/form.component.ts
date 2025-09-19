import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-form',
  standalone: true,              // se hai creato standalone
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  formData = {
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    messaggio: '',
    honeypot: '' // aggiunto honeypot
  };

  onSubmit(f: NgForm) {
    if (f.invalid) return;
    if (this.formData.honeypot) { // controllo honeypot
      alert('Invio bloccato: comportamento sospetto.');
      return;
    }
    emailjs.send('Form_xxr132', 'template_748ghre', this.formData, 'eKzcsP02sexI8WVmk')
      .then(() => {
        alert('Email inviata');
        f.resetForm();
      })
      .catch(err => alert('Errore: ' + JSON.stringify(err)));
  }
}
