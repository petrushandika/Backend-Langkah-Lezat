import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { MenuModule } from './menu/menu.module';
import { OrderModule } from './order/order.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { PaymentModule } from './payment/payment.module';
import { HistoryModule } from './history/history.module';
import { MidtransModule } from './midtrans/midtrans.module';

@Module({
  imports: [PrismaModule, UserModule, RoleModule, AuthModule, CategoryModule, MenuModule, OrderModule, OrderDetailModule, PaymentModule, HistoryModule, MidtransModule],
})
export class AppModule {}
