import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { prismaSelect } from '../services/prisma/prisma-select.services';

const PrismaSelect = createParamDecorator((_data: any, ctx: ExecutionContext) => {
    const gqlCtx = GqlExecutionContext.create(ctx);
    const info = gqlCtx.getInfo();

    return prismaSelect(info);
});

export default PrismaSelect;
