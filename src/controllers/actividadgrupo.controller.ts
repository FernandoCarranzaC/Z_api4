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
import {ActividadGrupo} from '../models';
import {ActividadGrupoRepository} from '../repositories';

export class ActividadgrupoController {
  constructor(
    @repository(ActividadGrupoRepository)
    public actividadGrupoRepository : ActividadGrupoRepository,
  ) {}

  @post('/actividadgrupos', {
    responses: {
      '200': {
        description: 'ActividadGrupo model instance',
        content: {'application/json': {schema: getModelSchemaRef(ActividadGrupo)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ActividadGrupo, {
            title: 'NewActividadGrupo',
            exclude: ['id'],
          }),
        },
      },
    })
    actividadGrupo: Omit<ActividadGrupo, 'id'>,
  ): Promise<ActividadGrupo> {
    return this.actividadGrupoRepository.create(actividadGrupo);
  }

  @get('/actividadgrupos/count', {
    responses: {
      '200': {
        description: 'ActividadGrupo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ActividadGrupo) where?: Where<ActividadGrupo>,
  ): Promise<Count> {
    return this.actividadGrupoRepository.count(where);
  }

  @get('/actividadgrupos', {
    responses: {
      '200': {
        description: 'Array of ActividadGrupo model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ActividadGrupo, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ActividadGrupo) filter?: Filter<ActividadGrupo>,
  ): Promise<ActividadGrupo[]> {
    return this.actividadGrupoRepository.find(filter);
  }

  @patch('/actividadgrupos', {
    responses: {
      '200': {
        description: 'ActividadGrupo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ActividadGrupo, {partial: true}),
        },
      },
    })
    actividadGrupo: ActividadGrupo,
    @param.where(ActividadGrupo) where?: Where<ActividadGrupo>,
  ): Promise<Count> {
    return this.actividadGrupoRepository.updateAll(actividadGrupo, where);
  }

  @get('/actividadgrupos/{id}', {
    responses: {
      '200': {
        description: 'ActividadGrupo model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ActividadGrupo, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ActividadGrupo, {exclude: 'where'}) filter?: FilterExcludingWhere<ActividadGrupo>
  ): Promise<ActividadGrupo> {
    return this.actividadGrupoRepository.findById(id, filter);
  }

  @patch('/actividadgrupos/{id}', {
    responses: {
      '204': {
        description: 'ActividadGrupo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ActividadGrupo, {partial: true}),
        },
      },
    })
    actividadGrupo: ActividadGrupo,
  ): Promise<void> {
    await this.actividadGrupoRepository.updateById(id, actividadGrupo);
  }

  @put('/actividadgrupos/{id}', {
    responses: {
      '204': {
        description: 'ActividadGrupo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() actividadGrupo: ActividadGrupo,
  ): Promise<void> {
    await this.actividadGrupoRepository.replaceById(id, actividadGrupo);
  }

  @del('/actividadgrupos/{id}', {
    responses: {
      '204': {
        description: 'ActividadGrupo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.actividadGrupoRepository.deleteById(id);
  }
}
