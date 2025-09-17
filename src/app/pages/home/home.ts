import { Component } from '@angular/core';
import {Gallery} from '../../components/gallery/gallery';
import {Contact} from '../../components/contact/contact';
import {Products} from '../../components/products/products';
import {About} from '../../components/about/about';
import {Start} from '../../components/start/start';


@Component({
  selector: 'app-home',
  imports: [
    Gallery,
    Contact,
    Products,
    About,
    Start
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
