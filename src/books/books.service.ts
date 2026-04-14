import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
constructor(
@InjectRepository(Book)
private booksRepository: Repository<Book>,
) {}
// private books = [
// { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937},
// { id: 2, title: '1984', author: 'George Orwell', year: 1949},
// { id: 3, title: 'Harry Potter', author: 'J.K. Rowling', year: 1997 },
// { id: 4, title: 'The Alchemist', author: 'Paulo Coelho', year: 1988 },
// ];
// CREATE — saves a new book to the database
async create(createBookDto: CreateBookDto): Promise<Book> {
const book = this.booksRepository.create(createBookDto);
return await this.booksRepository.save(book);
}
// READ ALL — fetches every row from the books table
async findAll(): Promise<Book[]> {
return await this.booksRepository.find();
}
// READ ONE — fetches a single book by its primary key
async findOne(id: number): Promise<Book> {
const book = await this.booksRepository.findOne({ where: { id } });
if (!book) throw new NotFoundException(`Book with id ${id} not found`);
return book;
}
// UPDATE — changes specific fields on an existing book
async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
await this.findOne(id);
await this.booksRepository.update(id, updateBookDto);
return await this.findOne(id);
}
// DELETE — removes a book row from the database
async remove(id: number): Promise<{ message: string }> {
await this.findOne(id);
await this.booksRepository.delete(id);
return { message: `Book ${id} deleted successfully` };
}
}