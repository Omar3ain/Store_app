import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { storeModel } from 'src/app/models/storeDataModel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsList : storeModel[] = []

  constructor(private getData : GetDataService) {
   }

  ngOnInit(): void {
    this.getData.getData().subscribe({
      next:(res) => {
        this.productsList = res;
        console.log(this.productsList)
      },
      error :(error) => {
        console.log(error)
      }
    })
    

  }

}
