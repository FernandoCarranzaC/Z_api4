import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ActividadGrupo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  claveGrpo: string;

  @property({
    type: 'number',
    required: true,
  })
  idCat: number;

  @property({
    type: 'number',
    required: true,
  })
  idDepto: number;

  @property({
    type: 'string',
    required: true,
  })
  nombreAct: string;

  @property({
    type: 'number',
    required: true,
  })
  idPers: number;

  @property({
    type: 'string',
    required: true,
  })
  horarioAct: string;

  @property({
    type: 'string',
    required: true,
  })
  periodoAct: string;

  @property({
    type: 'string',
    required: true,
  })
  aperturaAct: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ActividadGrupo>) {
    super(data);
  }
}

export interface ActividadGrupoRelations {
  // describe navigational properties here
}

export type ActividadGrupoWithRelations = ActividadGrupo & ActividadGrupoRelations;
