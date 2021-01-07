import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Estudiante} from '../models';
import {EstudianteRepository} from '../repositories';

export class EstudianteController {
  constructor(
    @repository(EstudianteRepository)
    public estudianteRepository : EstudianteRepository,
  ) {}

  @post('/estudiantes', {
    responses: {
      '200': {
        description: 'Estudiante model instance',
        content: {'application/json': {schema: getModelSchemaRef(Estudiante)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estudiante, {
            title: 'NewEstudiante',
            exclude: ['id'],
          }),
        },
      },
    })
    estudiante: Omit<Estudiante, 'id'>,
  ): Promise<Estudiante> {
    return this.estudianteRepository.create(estudiante);
  }

  @get('/estudiantes/count', {
    responses: {
      '200': {
        description: 'Estudiante model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Estudiante) where?: Where<Estudiante>,
  ): Promise<Count> {
    return this.estudianteRepository.count(where);
  }

  @get('/estudiantes', {
    responses: {
      '200': {
        description: 'Array of Estudiante model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Estudiante, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Estudiante) filter?: Filter<Estudiante>,
  ): Promise<Estudiante[]> {
    return this.estudianteRepository.find(filter);
  }

  @patch('/estudiantes', {
    responses: {
      '200': {
        description: 'Estudiante PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estudiante, {partial: true}),
        },
      },
    })
    estudiante: Estudiante,
    @param.where(Estudiante) where?: Where<Estudiante>,
  ): Promise<Count> {
    return this.estudianteRepository.updateAll(estudiante, where);
  }

  @get('/estudiantes/{id}', {
    responses: {
      '200': {
        description: 'Estudiante model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Estudiante, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Estudiante, {exclude: 'where'}) filter?: FilterExcludingWhere<Estudiante>
  ): Promise<Estudiante> {
    return this.estudianteRepository.findById(id, filter);
  }

  @patch('/estudiantes/{id}', {
    responses: {
      '204': {
        description: 'Estudiante PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estudiante, {partial: true}),
        },
      },
    })
    estudiante: Estudiante,
  ): Promise<void> {
    await this.estudianteRepository.updateById(id, estudiante);
  }

  @put('/estudiantes/{id}', {
    responses: {
      '204': {
        description: 'Estudiante PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() estudiante: Estudiante,
  ): Promise<void> {
    await this.estudianteRepository.replaceById(id, estudiante);
  }

  @del('/estudiantes/{id}', {
    responses: {
      '204': {
        description: 'Estudiante DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.estudianteRepository.deleteById(id);
  }
}
