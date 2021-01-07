import {DefaultCrudRepository} from '@loopback/repository';
import {Jefe, JefeRelations} from '../models';
import {DbLocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class JefeRepository extends DefaultCrudRepository<
  Jefe,
  typeof Jefe.prototype.id,
  JefeRelations
> {
  constructor(
    @inject('datasources.DBLocal') dataSource: DbLocalDataSource,
  ) {
    super(Jefe, dataSource);
  }
}
