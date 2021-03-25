CREATE TABLE "Library" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "LibraryName" varChar,
  "Location" varchar
);

CREATE TABLE "Books" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "Title" varchar NOT NULL,
  "Author" varchar NOT NULL,
  "YearPublished" year,
  "Genre" varchar,
  "Pages" int
);

CREATE TABLE "Library_Books" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "Library_Id" int,
  "Book_Id" int
);

ALTER TABLE "Library_Books" ADD FOREIGN KEY ("Library_Id") REFERENCES "Library" ("id");

ALTER TABLE "Library_Books" ADD FOREIGN KEY ("Book_Id") REFERENCES "Books" ("id");
