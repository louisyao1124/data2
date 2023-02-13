import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'all';

  disciplines2 = [{
    "name": "ACLS",
    "courses": "aa"
  }, {
    "name": "BLS",
    "courses": "bb"
  }];

  	//checkAllCheckBox(ev) { // Angular 9
    checkAllCheckBox(ev: any) { // Angular 13
      this.products.forEach(x => x.checked = ev.target.checked)
    }
  
    isAllCheckBoxChecked() {
      return this.products.every(p => p.checked);
    }

  products: Product[] = [
    {
      "id": 1,
      name: "aa",
      code: "aa",
      price: 10,
      checked: false
    },   {
      "id": 2,
      name: "ba",
      code: "ba",
      price: 12,
      checked: false
    },  {
      "id": 3,
      name: "aa3",
      code: "aa3",
      price: 15,
      checked: false
    },  {
      "id": 4,
      name: "aa4",
      code: "aa4",
      price: 12,
      checked: false
    },  {
      "id": 5,
      name: "aa5",
      code: "aa5",
      price: 50,
      checked: false
    }

  ];




}


export interface Product {
  id?: number;
  name: string;
  code: string;
  price: number;
  checked?: boolean;
}