import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class EnvConfigService {
  private readonly env: string = '';
  private readonly config: { key: string };

  constructor() {
    if (process.env.NODE_ENV) this.env = process.env.NODE_ENV;
    this.config = dotenv.parse(fs.readFileSync(`configs/${this.env}.env`));
  }

  public get(key: string): string {
    return this.config[key];
  }
}
