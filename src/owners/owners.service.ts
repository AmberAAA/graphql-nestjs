import { Injectable } from '@nestjs/common';
import { Owner } from '../graphql.schema';

@Injectable()
export class OwnersService {
  private readonly owners: Owner[] = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Bill', age: 25 },
    { id: 3, name: 'Joe', age: 20 },
  ];

  findAll(): Owner[] {
    return this.owners;
  }

  findOne(id: number): Owner {
    return this.owners.find((owner) => owner.id === id);
  }
}
