import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import{ MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-ejemplo-amaterial',
  standalone: true,
  imports: [MatDivider, MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './ejemplo-amaterial.component.html',
  styleUrl: './ejemplo-amaterial.component.css'
})
export class EjemploAmaterialComponent {

}
