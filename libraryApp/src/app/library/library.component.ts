import { Component, OnInit } from "@angular/core";

import { BookService } from '../services/book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-library",
  templateUrl: "library.component.html",
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  books:any = [];
  constructor(private bookService:BookService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(){
      this.bookService.getAllBooks().subscribe(result=>{
          console.log(result);
          this.books = result.body;
          console.log(this.books);
      })
  }

  goToDetail(id){
    this.router.navigate(["../book-detail/" + id ],{relativeTo: this.route}) 
  }

}
