import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    sererName = 'Server-1';
    allowNewSerevr = false;
    primaryClicked = false;
    servers = ['server-1', 'server-2', 'server-3'];

    constructor() {
        setTimeout(() => {
            this.allowNewSerevr = true;
        }, 2000);
    }

    ongetText(event: Event) {
        this.sererName = (event.target as HTMLInputElement).value;
    }
    onClick(event: Event) {
        console.log('Signed up');
        console.log('Hello  ' + (event.target as HTMLElement).nodeName);
    }

    clickPrimary() {
        console.log('Primary clicked');
        this.primaryClicked = true;
    }

    clickSecondary() {
        console.log('Secondary clicked');
    }

    clickSuccess() {
        console.log('Success clicked');
    }
}
