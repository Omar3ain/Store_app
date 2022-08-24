import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { storeModel } from 'src/app/models/storeDataModel';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {
  id : number = 5;
  product : storeModel = {
    id: 0,
    name: '',
    price:0,
    url: '',
    description: ''
  }
  constructor(private getdata :GetDataService ,private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!
    this.getdata.getData().subscribe({
      next:(res) => {
        this.product = res[this.id-1] 
      }
    })
  }

}
