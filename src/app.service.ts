import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello() {
    return 'Hello';
  }

  getNotifications(data) {
    console.log(`[${new Date().getTime()}]-sv___1:`, data);

    return { ...data, status: 'SV_1' };
  }
}
