import {DefaultCrudRepository} from '@loopback/repository';
import {ListaAsist, ListaAsistRelations} from '../models';
import {DbLocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ListaAsistRepository extends DefaultCrudRepository<
  ListaAsist,
  typeof ListaAsist.prototype.id,
  ListaAsistRelations
> {
  constructor(
    @inject('datasources.DBLocal') dataSource: DbLocalDataSource,
  ) {
    super(ListaAsist, dataSource);
  }
}
