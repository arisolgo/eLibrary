import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  bookId:any;
  book:any = {}
  constructor(private activatedRoute: ActivatedRoute, private bookService:BookService) { }

  ngOnInit() {
    this.bookId = this.activatedRoute.snapshot.paramMap.get("id");
    this.getBook();
  }

  getBook(){
      this.bookService.getBookById(this.bookId).subscribe(result=>{
          this.book = result;
         // console.log(this.book);
      })
  }
}
