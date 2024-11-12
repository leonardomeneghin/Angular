import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  http = inject(HttpClient);
  products : any = []
  ngOnInit(){
    this.http.get<any>('/api/products').subscribe(
      (_products: any)=>{
      this.products = _products
    })
  }
}
