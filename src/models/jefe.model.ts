import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Jefe extends Entity {
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
  claveJefe: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreJefe: string;

  @property({
    type: 'number',
    required: true,
  })
  idDepto: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Jefe>) {
    super(data);
  }
}

export interface JefeRelations {
  // describe navigational properties here
}

export type JefeWithRelations = Jefe & JefeRelations;
