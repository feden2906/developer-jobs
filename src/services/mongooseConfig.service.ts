import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

import { EnvConfigService } from './envConfig.service';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  private readonly dbHost: string;
  private readonly dbName: string;
  private readonly dbUser: string;
  private readonly dbPassword: string;
  private configService: EnvConfigService = new EnvConfigService();

  constructor() {
    this.dbHost = this.configService.get('MONGOOSE_HOST');
    this.dbName = this.configService.get('MONGO_DB_NAME');
    this.dbUser = this.configService.get('MONGO_ROOT_USERNAME');
    this.dbPassword = this.configService.get('MONGO_ROOT_PASSWORD');
  }

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: `mongodb://${this.dbUser}:${this.dbPassword}@${this.dbHost}/${this.dbName}?authSource=admin`,
      useNewUrlParser: true,
    };
  }
}
