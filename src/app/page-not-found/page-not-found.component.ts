import { Component } from '@angular/core';
import {MatChip} from '@angular/material/chips';
import {MatBadge} from '@angular/material/badge';

@Component({
  selector: 'app-page-not-found',
  imports: [
    MatChip,
    MatBadge
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
