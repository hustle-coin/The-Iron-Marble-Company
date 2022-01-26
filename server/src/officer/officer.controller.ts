import { Body, CacheInterceptor, CacheTTL, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { Public, RequiredPermissions } from '../login/login.decorator';
import { EnableUserDto } from './dto/user.enable.dto';
import { CompanyUserDto } from './dto/user.company.dto';
import { Permission, UserWithPermissions } from '@The-Iron-Marble-Company/model';

@Controller('/api/officer')
@RequiredPermissions(Permission.OFFICER)
@UseInterceptors(CacheInterceptor)
export class OfficerController {
  constructor(private userService: UserService, private officerService: OfficerService) {}

  @Get('/users')
  async getAllUsers(): Promise<UserWithPermissions[]> {
    return this.userService.findAllWithPermissions();
  }

  @Post('/users/enable')
  async setEnabled(@Body() body: EnableUserDto): Promise<void> {
    if (body.enabled) {
      await this.userService.setPermission(body.userId, Permission.ENABLED);
    } else {
      await this.userService.removePermission(body.userId, Permission.ENABLED);
    }
  }

  @Post('/users/company')
  async setCompany(@Body() body: CompanyUserDto): Promise<void> {
    if (body.company) {
      await this.userService.setPermission(body.userId, Permission.COMPANY);
    } else {
      await this.userService.removePermission(body.userId, Permission.COMPANY);
    }
  }

}
