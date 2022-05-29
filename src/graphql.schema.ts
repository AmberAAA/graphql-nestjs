
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class AddAuthorCommand {
    name: string;
    description?: Nullable<string>;
}

export class ModfyAuthorCommand {
    id: number;
    name: string;
    description?: Nullable<string>;
}

export class Author {
    id: number;
    name: string;
    description?: Nullable<string>;
}

export class Book {
    id: number;
    name: string;
    authorId: number;
}

export abstract class IQuery {
    abstract authors(): Author[] | Promise<Author[]>;

    abstract books(): Book[] | Promise<Book[]>;

    abstract author(id: number): Nullable<Author> | Promise<Nullable<Author>>;

    abstract book(): Nullable<Book> | Promise<Nullable<Book>>;
}

export abstract class IMutation {
    abstract addAuthor(cmd: AddAuthorCommand): Author | Promise<Author>;

    abstract modfyAuthor(cmd: ModfyAuthorCommand): Author | Promise<Author>;

    abstract deleteAuthor(id: number): boolean | Promise<boolean>;
}

type Nullable<T> = T | null;
