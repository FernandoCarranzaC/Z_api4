import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ListaAsist extends Entity {
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
  numControl: string;

  @property({
    type: 'number',
    required: true,
  })
  idEst: number;

  @property({
    type: 'string',
    required: true,
  })
  nombreEst: string;

  @property({
    type: 'number',
    required: true,
  })
  idGrpo: number;

  @property({
    type: 'string',
    required: true,
  })
  nombrePers: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreAct: string;

  @property({
    type: 'number',
    required: true,
  })
  asistEst: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ListaAsist>) {
    super(data);
  }
}

export interface ListaAsistRelations {
  // describe navigational properties here
}

export type ListaAsistWithRelations = ListaAsist & ListaAsistRelations;
