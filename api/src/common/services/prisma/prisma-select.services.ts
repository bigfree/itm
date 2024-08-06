import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql/type';

export const prismaSelect = (info: GraphQLResolveInfo) => {
    return new PrismaSelect(info).value.select;
};
