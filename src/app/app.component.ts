import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    //Muestra el mensaje de cada cuando se ira actualizando
    public mensaje : string  = '';
    public actualizar(tiempo: number) : void {
        this.mensaje = tiempo + ' (se actualiza cada 10 segundos)';
    }
}
