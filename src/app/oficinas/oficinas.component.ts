import { Component } from '@angular/core';
interface Office {
  name: string;
  location: string;
}


@Component({
  selector: 'app-oficinas',
  templateUrl: './oficinas.component.html',
  styleUrls: ['./oficinas.component.css']
})
export class OficinasComponent {
  

  reservedOffices: Office[] = [];
  availableOffices: any;
  office!: Office;

  reserveOffice(office: Office): void {
    this.availableOffices = this.availableOffices.filter((o: Office) => o !== office);
    this.reservedOffices.push(office);
  }

  cancelReservation(office: Office): void {
    this.reservedOffices = this.reservedOffices.filter(o => o !== office);
    this.availableOffices.push(office);
  }
}

