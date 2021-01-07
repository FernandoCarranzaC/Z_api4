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
import {Personal} from '../models';
import {PersonalRepository} from '../repositories';

export class PersonalController {
  constructor(
    @repository(PersonalRepository)
    public personalRepository : PersonalRepository,
  ) {}

  @post('/personals', {
    responses: {
      '200': {
        description: 'Personal model instance',
        content: {'application/json': {schema: getModelSchemaRef(Personal)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personal, {
            title: 'NewPersonal',
            exclude: ['id'],
          }),
        },
      },
    })
    personal: Omit<Personal, 'id'>,
  ): Promise<Personal> {
    return this.personalRepository.create(personal);
  }

  @get('/personals/count', {
    responses: {
      '200': {
        description: 'Personal model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Personal) where?: Where<Personal>,
  ): Promise<Count> {
    return this.personalRepository.count(where);
  }

  @get('/personals', {
    responses: {
      '200': {
        description: 'Array of Personal model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Personal, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Personal) filter?: Filter<Personal>,
  ): Promise<Personal[]> {
    return this.personalRepository.find(filter);
  }

  @patch('/personals', {
    responses: {
      '200': {
        description: 'Personal PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personal, {partial: true}),
        },
      },
    })
    personal: Personal,
    @param.where(Personal) where?: Where<Personal>,
  ): Promise<Count> {
    return this.personalRepository.updateAll(personal, where);
  }

  @get('/personals/{id}', {
    responses: {
      '200': {
        description: 'Personal model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Personal, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Personal, {exclude: 'where'}) filter?: FilterExcludingWhere<Personal>
  ): Promise<Personal> {
    return this.personalRepository.findById(id, filter);
  }

  @patch('/personals/{id}', {
    responses: {
      '204': {
        description: 'Personal PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personal, {partial: true}),
        },
      },
    })
    personal: Personal,
  ): Promise<void> {
    await this.personalRepository.updateById(id, personal);
  }

  @put('/personals/{id}', {
    responses: {
      '204': {
        description: 'Personal PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() personal: Personal,
  ): Promise<void> {
    await this.personalRepository.replaceById(id, personal);
  }

  @del('/personals/{id}', {
    responses: {
      '204': {
        description: 'Personal DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.personalRepository.deleteById(id);
  }
}
