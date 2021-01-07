import {DefaultCrudRepository} from '@loopback/repository';
import {ListaCalif, ListaCalifRelations} from '../models';
import {DbLocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ListaCalifRepository extends DefaultCrudRepository<
  ListaCalif,
  typeof ListaCalif.prototype.id,
  ListaCalifRelations
> {
  constructor(
    @inject('datasources.DBLocal') dataSource: DbLocalDataSource,
  ) {
    super(ListaCalif, dataSource);
  }
}
