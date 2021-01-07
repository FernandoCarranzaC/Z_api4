import {DefaultCrudRepository} from '@loopback/repository';
import {ActividadGrupo, ActividadGrupoRelations} from '../models';
import {DbLocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ActividadGrupoRepository extends DefaultCrudRepository<
  ActividadGrupo,
  typeof ActividadGrupo.prototype.id,
  ActividadGrupoRelations
> {
  constructor(
    @inject('datasources.DBLocal') dataSource: DbLocalDataSource,
  ) {
    super(ActividadGrupo, dataSource);
  }
}
