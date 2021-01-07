import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Personal extends Entity {
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
  clavePers: string;

  @property({
    type: 'string',
    required: true,
  })
  nombrePers: string;

  @property({
    type: 'number',
    required: true,
  })
  idDepto: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Personal>) {
    super(data);
  }
}

export interface PersonalRelations {
  // describe navigational properties here
}

export type PersonalWithRelations = Personal & PersonalRelations;
