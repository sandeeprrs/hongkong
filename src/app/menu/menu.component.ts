import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes:Dish[];

  dish:Dish;
  selectedDish:Dish;
  constructor(private dishService:DishService) { }
  onSelect(dish:Dish){
   
    this.selectedDish=dish;
   
  }
  

  ngOnInit() {
    this.dishes=this.dishService.getDishes();
  }

}
