import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
public person = {
  name:'Kostya',
  age:32,
  country: 'Ukraine'
}
}
