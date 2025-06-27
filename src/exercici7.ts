type BookInfo = {
    title: string;
    author: string;
    isbn: string;
};

type ExtendedBookInfo = BookInfo & {
    genre: string;
    totalPages: number;
}

type Book = BookInfo | ExtendedBookInfo

function isExtendedBookInfo(book: Book): book is ExtendedBookInfo{
    const property: keyof ExtendedBookInfo = "totalPages"
   return  property in book
}

function displayBookDetails(book: Book): void {
    if(isExtendedBookInfo(book)){
        console.log(book.totalPages)
    }

    console.log(book.isbn)
}