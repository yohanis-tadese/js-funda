const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*

const books = getBooks();
console.log(books);

const book = getBook(1);

// const title = book.title;
// const author = book.author;

////Object Destructuring
const { title, author, publicationDate, genres, hasMovieAdaptation, pages } =
  book;

console.log(title, author, publicationDate, genres);

// const primaryG = book.genres[0];
// const secondaryG = book.genres[1];

////Array Destructuring
const [primaryG, secondaryG, ...otherG] = genres;
console.log(primaryG, secondaryG, otherG);

////Array spread operator
const newG = [...genres, "hello ethio"];
console.log(...newG);

////Object spread operator
const updateBook = {
  ...book,
  //Add new property
  moviePublicationDate: "2024-01-02",

  //Overwrite existing property
  pages: 230,
};
console.log(updateBook);

////Arrow function
// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

////Template literal
const summary = `Hello this is ${title} of book and ${pages} number of pages and the author of the book is ${author} and  publication date in  ${getYear(
  publicationDate
)}.`;

console.log(summary);

////Ternaries operator.
const pagesRange =
  pages > 1000 ? "The page is over 1000" : "The page is under 1000";

console.log(pagesRange);

////Short-Circuiting And Logical Operators: &&, ||, ??

//False value, 0, null, undefined, ""
let count = book.reviews.librarything.reviewsCount && "no data";
console.log("For && operator: ", count);

//&& operator return second value only first value is true
count = book.reviews.librarything.reviewsCount || "no data";
console.log("For || operator: ", count);

//Nullish coalescing Operator only return second value for null, and undefined.
count = book.reviews.librarything.reviewsCount ?? "no data";
console.log("For ?? operator: ", count);

////Optional Chaining
const getTotalReviewCount = (book) => {
  const goodreads = book.reviews?.goodreads?.ratingsCount ?? 0;
  const librarything = book.reviews?.librarything?.ratingsCount ?? 0;
  return goodreads + librarything;
};

console.log(getTotalReviewCount(book));

*/

/*
////Array map methods
const book = getBooks();

const getTotalReviewCount = (book) => {
  const goodreads = book.reviews?.goodreads?.ratingsCount ?? 0;
  const librarything = book.reviews?.librarything?.ratingsCount ?? 0;
  return goodreads + librarything;
};

const product = [2, 4, 6, 8].map((el) => el * 2);
console.log(...product);

const title = book.map((book) => book.title);
console.log(...title);

const essencialData = book.map((book) => {
  return {
    title: book.title,
    author: book.author,
    totalReviewCount: getTotalReviewCount(book),
  };
});

console.log(...essencialData);

////Array Filter methods
const longBooksWithMovies = book
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation)
  .map((book) => ({
    title: book.title,
    page: book.pages,
  }));
console.log(...longBooksWithMovies);

const adventureBooks = book
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);

////Array Reduce methods
const pagesAllBooks = book.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesAllBooks);

////Array Sort methods
const arr = [3, 5, 6, 9, 2, 8];
const sorted = arr.slice().sort((a, b) => a - b);
console.log(sorted);
console.log(arr);

const BooksSortedByPages = book.slice().sort((a, b) => b.pages - a.pages);
console.log(BooksSortedByPages);

////Working with emutable arrays

// 1) Add Book object to array
const newBook = {
  id: 6,
  title: "The theory of mind !!!",
  author: "Jhon-t",
};

const booksAfterAdd = [...book, newBook];
console.log(booksAfterAdd);

// 2) Delete Book object from array
const booksAfterDelete = booksAfterAdd.filter(
  (book) => book.id !== 3 && book.id !== 4
);
console.log(booksAfterDelete);

// 3) Update book object from an array
const boksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 4, publicationDate: "2024-1-2" } : book
);

console.log(boksAfterUpdate);

*/

/*
////Working with Promise
fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
  res.json().then((data) => console.log(data))
);

console.log("Yohanis tadese");

////Working with asncy/await
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
  return data;
}

console.log("YT");
*/
