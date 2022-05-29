import { ParseIntPipe } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AddAuthorCommand, Author } from '../graphql.schema';

const list: Author[] = [
  { id: 1, name: 'John', description: 'A' },
  { id: 2, name: 'Time', description: 'Hw. ltc' },
  { id: 3, name: 'Jon', description: 'Jon. ltc' },
  { id: 4, name: 'Hllo', description: 'Hllo. ltc' },
  { id: 5, name: 'Locat', description: 'Locat. ltc' },
];

@Resolver('Author')
export class AuthorResolver {
  @Query('authors')
  public async authors(): Promise<Author[]> {
    return list;
  }

  @Query('author')
  public async author(
    @Args('id', ParseIntPipe) id: number,
  ): Promise<Author | null> {
    return list.find((item) => item.id === id);
  }

  @Mutation('addAuthor')
  public async addAuthor(@Args('cmd') cmd: AddAuthorCommand): Promise<Author> {
    list.push({
      id: list.length + 1,
      ...cmd,
    });
    return list[list.length - 1];
  }

  @Mutation('modfyAuthor')
  public async modfyAuthor(@Args('cmd') cmd: Author): Promise<Author | null> {
    const index = list.findIndex((it) => it.id === cmd.id);
    if (index === -1) {
      return null;
    } else {
      list[index] = cmd;
      return list[index];
    }
  }

  @Mutation('deleteAuthor')
  public async delete(@Args('id', ParseIntPipe) id: number): Promise<boolean> {
    const index = list.findIndex((it) => it.id === id);
    if (index === -1) {
      return false;
    } else {
      list.splice(index, 1);
      return true;
    }
  }
}
