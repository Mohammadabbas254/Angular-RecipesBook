import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPuh5-mItCuAUBX7APK67gk4N3adkajqKzBw&usqp=CAU'),
   
    new Recipe('A Test Recipe', 'This is a simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPuh5-mItCuAUBX7APK67gk4N3adkajqKzBw&usqp=CAU')
  ];

  constructor() { }

  ngOnInit() {
  }
}
