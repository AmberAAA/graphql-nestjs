
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Word {
    id: number;
    word: string;
    phonetic: string;
    translate?: Nullable<string>;
    phrase?: Nullable<string>;
    samples?: Nullable<string>;
    source?: Nullable<number>;
}

export abstract class IQuery {
    abstract word(id: number): Nullable<Word> | Promise<Nullable<Word>>;
}

type Nullable<T> = T | null;
