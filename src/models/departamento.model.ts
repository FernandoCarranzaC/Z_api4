import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Departamento extends Entity {
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
  claveDepto: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreDepto: string;

  @property({
    type: 'string',
    required: true,
  })
  subdireccionDepto: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Departamento>) {
    super(data);
  }
}

export interface DepartamentoRelations {
  // describe navigational properties here
}

export type DepartamentoWithRelations = Departamento & DepartamentoRelations;
