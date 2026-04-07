import { Controller, Get ,Param} from '@nestjs/common';
import { BooksService } from './books.service';
import { get } from 'axios';

@Controller('books')
export class BooksController {
    constructor(private  booksService: BooksService) {}

    @Get()
    getAllBooks() {
        return this.booksService.getAllBooks();
    }

    // to return by aouther
    @Get('/author/:author')
        getBooksByAuthor(@Param('author') author:string){
            return this.booksService.getBooksByAuthor(String(author));
        }
    
    //to return  by id
    @Get(':id')
    getBook(@Param('id') id:string){
        return this.booksService.getBooksById(Number(id));
    }


}
