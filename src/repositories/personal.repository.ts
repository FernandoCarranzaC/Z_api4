import {DefaultCrudRepository} from '@loopback/repository';
import {Personal, PersonalRelations} from '../models';
import {DbLocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PersonalRepository extends DefaultCrudRepository<
  Personal,
  typeof Personal.prototype.id,
  PersonalRelations
> {
  constructor(
    @inject('datasources.DBLocal') dataSource: DbLocalDataSource,
  ) {
    super(Personal, dataSource);
  }
}
