import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
    //Es el inicio el cual va a generar el segundo donde va a iniciar el cronometro
    public segundo : number = 0;
    @Input() public inicio : number = 0;
    @Output() public multiplo10 = new EventEmitter();

    ngOnInit(): void {
        this.segundo = this.inicio;
        setInterval(this.actualizarSegundo.bind(this), 1000);
    }
    //Genera el inicio y ira incrementando por segundo
    private actualizarSegundo() : void {
        this.segundo++;
        if (this.segundo % 10 === 0) {
            this.emitirMultiplo10();
        }
    }
    //Emite el multiplo de 10 para notificar cada cuando se ira actualizando el cronometro
    private emitirMultiplo10() : void {
        this.multiplo10.emit(this.segundo);
    }
}
