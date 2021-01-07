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
import {ListaCalif} from '../models';
import {ListaCalifRepository} from '../repositories';

export class ListacalifController {
  constructor(
    @repository(ListaCalifRepository)
    public listaCalifRepository : ListaCalifRepository,
  ) {}

  @post('/listacalifs', {
    responses: {
      '200': {
        description: 'ListaCalif model instance',
        content: {'application/json': {schema: getModelSchemaRef(ListaCalif)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaCalif, {
            title: 'NewListaCalif',
            exclude: ['id'],
          }),
        },
      },
    })
    listaCalif: Omit<ListaCalif, 'id'>,
  ): Promise<ListaCalif> {
    return this.listaCalifRepository.create(listaCalif);
  }

  @get('/listacalifs/count', {
    responses: {
      '200': {
        description: 'ListaCalif model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ListaCalif) where?: Where<ListaCalif>,
  ): Promise<Count> {
    return this.listaCalifRepository.count(where);
  }

  @get('/listacalifs', {
    responses: {
      '200': {
        description: 'Array of ListaCalif model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ListaCalif, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ListaCalif) filter?: Filter<ListaCalif>,
  ): Promise<ListaCalif[]> {
    return this.listaCalifRepository.find(filter);
  }

  @patch('/listacalifs', {
    responses: {
      '200': {
        description: 'ListaCalif PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaCalif, {partial: true}),
        },
      },
    })
    listaCalif: ListaCalif,
    @param.where(ListaCalif) where?: Where<ListaCalif>,
  ): Promise<Count> {
    return this.listaCalifRepository.updateAll(listaCalif, where);
  }

  @get('/listacalifs/{id}', {
    responses: {
      '200': {
        description: 'ListaCalif model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ListaCalif, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ListaCalif, {exclude: 'where'}) filter?: FilterExcludingWhere<ListaCalif>
  ): Promise<ListaCalif> {
    return this.listaCalifRepository.findById(id, filter);
  }

  @patch('/listacalifs/{id}', {
    responses: {
      '204': {
        description: 'ListaCalif PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaCalif, {partial: true}),
        },
      },
    })
    listaCalif: ListaCalif,
  ): Promise<void> {
    await this.listaCalifRepository.updateById(id, listaCalif);
  }

  @put('/listacalifs/{id}', {
    responses: {
      '204': {
        description: 'ListaCalif PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() listaCalif: ListaCalif,
  ): Promise<void> {
    await this.listaCalifRepository.replaceById(id, listaCalif);
  }

  @del('/listacalifs/{id}', {
    responses: {
      '204': {
        description: 'ListaCalif DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.listaCalifRepository.deleteById(id);
  }
}
