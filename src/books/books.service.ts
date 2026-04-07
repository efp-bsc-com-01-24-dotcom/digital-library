import { Injectable } from '@nestjs/common';

@Injectable()
   
export class BooksService {
    private books = [
        { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937},
        { id: 2, title: '1984', author: 'George Orwell', year: 1949},
        { id: 3, title: 'Harry Potter', author: 'J.K. Rowling', year: 1997 },
        { id: 4, title: 'The Alchemist', author: 'Paulo Coelho', year: 1988 },
        ];

        getAllBooks() {// Method to retrieve all books
            return this.books;
        }
        getBooksById(id:number){
            return this.books.find(book=>book.id===id);
        }
        getBooksByAuthor(author:string){
            const results = this.books.filter(
                book=>book.author.toLowerCase()===author.toLowerCase()
            );
            if(results.length===0){
                return `No books found by author ${author}`;
            }
            return results;

        }
    }


