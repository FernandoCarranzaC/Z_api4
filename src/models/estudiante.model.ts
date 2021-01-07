import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Estudiante extends Entity {
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
    type: 'string',
    required: true,
  })
  nombreEst: string;

  @property({
    type: 'string',
    required: true,
  })
  carreraEst: string;

  @property({
    type: 'number',
    required: true,
  })
  idDepto: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Estudiante>) {
    super(data);
  }
}

export interface EstudianteRelations {
  // describe navigational properties here
}

export type EstudianteWithRelations = Estudiante & EstudianteRelations;
