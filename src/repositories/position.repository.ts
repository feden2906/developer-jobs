import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IPosition } from '../interfaces';
import { IPositionRepository } from './interfaces';

@Injectable()
export class PositionRepository implements IPositionRepository {
  constructor(
    @InjectModel('Position')
    private readonly positionModel: Model<IPosition>,
  ) {}

  public async create(dto) {
    return this.positionModel.create(dto);
  }

  public async find() {
    return this.positionModel.find();
  }
}
