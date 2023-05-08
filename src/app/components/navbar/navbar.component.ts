import { Component } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    subNav = [
        { icon: 'phone', info: '(210) 367-2945' },
        { icon: 'email', info: 'info@yourtimehomeinspections.com' },
        { icon: 'star', info: 'TREC#21507 Inspector James Williams' },
        { icon: 'star', info: 'TPCL #877175' }
    ]
}