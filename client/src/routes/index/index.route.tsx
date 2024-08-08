import { FC, Fragment, FunctionComponent, lazy, LazyExoticComponent, ReactElement, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

type IndexRouteProps = NonNullable<unknown>;

const CreateNote: LazyExoticComponent<FunctionComponent> = lazy(
    () => import('@components/create-note/create-note.component.tsx'),
);

const IndexRoute: FC<IndexRouteProps> = (): ReactElement => {
    return (
        <Fragment>
            <Suspense fallback={null}>
                <CreateNote />
            </Suspense>
            <Outlet />
            {/*<Suspense fallback={null}>*/}
            {/*    <Board />*/}
            {/*</Suspense>*/}
        </Fragment>
    );
};

export default IndexRoute;
