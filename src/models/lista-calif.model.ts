import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ListaCalif extends Entity {
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
    type: 'string',
    required: true,
  })
  califEst: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ListaCalif>) {
    super(data);
  }
}

export interface ListaCalifRelations {
  // describe navigational properties here
}

export type ListaCalifWithRelations = ListaCalif & ListaCalifRelations;
