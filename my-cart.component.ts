import { Component } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  standalone: true,
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})

export class MyCartComponent {
  imageUrl1: string = 'assets/cloth.jpg'; // Adjust the path based on your project structure
  imageUrl2: string = 'assets/shoes1.jpg';
  imageUrl3: string = 'assets/accessories.jpg'
}
