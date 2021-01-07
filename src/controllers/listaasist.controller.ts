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
import {ListaAsist} from '../models';
import {ListaAsistRepository} from '../repositories';

export class ListaasistController {
  constructor(
    @repository(ListaAsistRepository)
    public listaAsistRepository : ListaAsistRepository,
  ) {}

  @post('/listaasist', {
    responses: {
      '200': {
        description: 'ListaAsist model instance',
        content: {'application/json': {schema: getModelSchemaRef(ListaAsist)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaAsist, {
            title: 'NewListaAsist',
            exclude: ['id'],
          }),
        },
      },
    })
    listaAsist: Omit<ListaAsist, 'id'>,
  ): Promise<ListaAsist> {
    return this.listaAsistRepository.create(listaAsist);
  }

  @get('/listaasist/count', {
    responses: {
      '200': {
        description: 'ListaAsist model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ListaAsist) where?: Where<ListaAsist>,
  ): Promise<Count> {
    return this.listaAsistRepository.count(where);
  }

  @get('/listaasist', {
    responses: {
      '200': {
        description: 'Array of ListaAsist model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ListaAsist, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ListaAsist) filter?: Filter<ListaAsist>,
  ): Promise<ListaAsist[]> {
    return this.listaAsistRepository.find(filter);
  }

  @patch('/listaasist', {
    responses: {
      '200': {
        description: 'ListaAsist PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaAsist, {partial: true}),
        },
      },
    })
    listaAsist: ListaAsist,
    @param.where(ListaAsist) where?: Where<ListaAsist>,
  ): Promise<Count> {
    return this.listaAsistRepository.updateAll(listaAsist, where);
  }

  @get('/listaasist/{id}', {
    responses: {
      '200': {
        description: 'ListaAsist model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ListaAsist, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ListaAsist, {exclude: 'where'}) filter?: FilterExcludingWhere<ListaAsist>
  ): Promise<ListaAsist> {
    return this.listaAsistRepository.findById(id, filter);
  }

  @patch('/listaasist/{id}', {
    responses: {
      '204': {
        description: 'ListaAsist PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaAsist, {partial: true}),
        },
      },
    })
    listaAsist: ListaAsist,
  ): Promise<void> {
    await this.listaAsistRepository.updateById(id, listaAsist);
  }

  @put('/listaasist/{id}', {
    responses: {
      '204': {
        description: 'ListaAsist PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() listaAsist: ListaAsist,
  ): Promise<void> {
    await this.listaAsistRepository.replaceById(id, listaAsist);
  }

  @del('/listaasist/{id}', {
    responses: {
      '204': {
        description: 'ListaAsist DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.listaAsistRepository.deleteById(id);
  }
}
