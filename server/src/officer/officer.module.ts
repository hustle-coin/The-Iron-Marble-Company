import { Module } from '@nestjs/common';
import { OfficerController } from './officer.controller';
import { UserModule } from '../user/user.module';
import { ArgsModule } from '../args/args.module';
import { EventModule } from '../event/event.module';

@Module({
  imports: [UserModule, ArgsModule, EventModule],
  controllers: [OfficerController],
})
export class OfficerModule {}
