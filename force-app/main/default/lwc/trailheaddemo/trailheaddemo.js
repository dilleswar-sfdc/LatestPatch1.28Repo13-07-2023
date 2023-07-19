import { LightningElement } from 'lwc';

export default class Trailheaddemo extends LightningElement {
    greeting = 'World';
  changeHandler(event) {
    this.greeting = event.target.value;
  }

}