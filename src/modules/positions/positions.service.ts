import { Injectable } from '@nestjs/common';

import { CreatePositionDto, UpdatePositionDto } from './dto';

@Injectable()
export class PositionsService {
  create(createPositionDto: CreatePositionDto) {
    return 'This action adds a new position';
  }

  findAll() {
    return `This action returns all positions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} position`;
  }

  update(id: number, updatePositionDto: UpdatePositionDto) {
    return `This action updates a #${id} position`;
  }

  remove(id: number) {
    return `This action removes a #${id} position`;
  }
}
