/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()
const SignupIndexLazyImport = createFileRoute('/signup/')()
const MeetingRoomsIndexLazyImport = createFileRoute('/meetingRooms/')()
const OrganizationsOrganizationIdIndexLazyImport = createFileRoute(
  '/organizations/$organizationId/',
)()
const SearchResultQueryIndexLazyImport = createFileRoute(
  '/SearchResult/$query/',
)()
const ReservationSpaceIdIndexLazyImport = createFileRoute(
  '/Reservation/$spaceId/',
)()
const OrganizationsOrganizationIdOpenIndexLazyImport = createFileRoute(
  '/organizations/$organizationId/open/',
)()
const OrganizationsOrganizationIdEditIndexLazyImport = createFileRoute(
  '/organizations/$organizationId/edit/',
)()
const ReservationSpaceIdStateIndexLazyImport = createFileRoute(
  '/Reservation/$spaceId/state/',
)()
const OrganizationsOrganizationIdSpaceEditSpaceIdIndexLazyImport =
  createFileRoute('/organizations/$organizationId/spaceEdit/$spaceId/')()
const SearchResultQueryOrganizationsOrganizationIdIndexLazyImport =
  createFileRoute('/SearchResult/$query/organizations/$organizationId/')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SignupIndexLazyRoute = SignupIndexLazyImport.update({
  id: '/signup/',
  path: '/signup/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/signup/index.lazy').then((d) => d.Route))

const MeetingRoomsIndexLazyRoute = MeetingRoomsIndexLazyImport.update({
  id: '/meetingRooms/',
  path: '/meetingRooms/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/meetingRooms/index.lazy').then((d) => d.Route),
)

const OrganizationsOrganizationIdIndexLazyRoute =
  OrganizationsOrganizationIdIndexLazyImport.update({
    id: '/organizations/$organizationId/',
    path: '/organizations/$organizationId/',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/organizations/$organizationId/index.lazy').then(
      (d) => d.Route,
    ),
  )

const SearchResultQueryIndexLazyRoute = SearchResultQueryIndexLazyImport.update(
  {
    id: '/SearchResult/$query/',
    path: '/SearchResult/$query/',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/SearchResult/$query/index.lazy').then((d) => d.Route),
)

const ReservationSpaceIdIndexLazyRoute =
  ReservationSpaceIdIndexLazyImport.update({
    id: '/Reservation/$spaceId/',
    path: '/Reservation/$spaceId/',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/Reservation/$spaceId/index.lazy').then((d) => d.Route),
  )

const OrganizationsOrganizationIdOpenIndexLazyRoute =
  OrganizationsOrganizationIdOpenIndexLazyImport.update({
    id: '/organizations/$organizationId/open/',
    path: '/organizations/$organizationId/open/',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/organizations/$organizationId/open/index.lazy').then(
      (d) => d.Route,
    ),
  )

const OrganizationsOrganizationIdEditIndexLazyRoute =
  OrganizationsOrganizationIdEditIndexLazyImport.update({
    id: '/organizations/$organizationId/edit/',
    path: '/organizations/$organizationId/edit/',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/organizations/$organizationId/edit/index.lazy').then(
      (d) => d.Route,
    ),
  )

const ReservationSpaceIdStateIndexLazyRoute =
  ReservationSpaceIdStateIndexLazyImport.update({
    id: '/Reservation/$spaceId/state/',
    path: '/Reservation/$spaceId/state/',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/Reservation/$spaceId/state/index.lazy').then(
      (d) => d.Route,
    ),
  )

const OrganizationsOrganizationIdSpaceEditSpaceIdIndexLazyRoute =
  OrganizationsOrganizationIdSpaceEditSpaceIdIndexLazyImport.update({
    id: '/organizations/$organizationId/spaceEdit/$spaceId/',
    path: '/organizations/$organizationId/spaceEdit/$spaceId/',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import(
      './routes/organizations/$organizationId/spaceEdit/$spaceId/index.lazy'
    ).then((d) => d.Route),
  )

const SearchResultQueryOrganizationsOrganizationIdIndexLazyRoute =
  SearchResultQueryOrganizationsOrganizationIdIndexLazyImport.update({
    id: '/SearchResult/$query/organizations/$organizationId/',
    path: '/SearchResult/$query/organizations/$organizationId/',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import(
      './routes/SearchResult/$query/organizations/$organizationId/index.lazy'
    ).then((d) => d.Route),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/meetingRooms/': {
      id: '/meetingRooms/'
      path: '/meetingRooms'
      fullPath: '/meetingRooms'
      preLoaderRoute: typeof MeetingRoomsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/signup/': {
      id: '/signup/'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/Reservation/$spaceId/': {
      id: '/Reservation/$spaceId/'
      path: '/Reservation/$spaceId'
      fullPath: '/Reservation/$spaceId'
      preLoaderRoute: typeof ReservationSpaceIdIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/SearchResult/$query/': {
      id: '/SearchResult/$query/'
      path: '/SearchResult/$query'
      fullPath: '/SearchResult/$query'
      preLoaderRoute: typeof SearchResultQueryIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/organizations/$organizationId/': {
      id: '/organizations/$organizationId/'
      path: '/organizations/$organizationId'
      fullPath: '/organizations/$organizationId'
      preLoaderRoute: typeof OrganizationsOrganizationIdIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/Reservation/$spaceId/state/': {
      id: '/Reservation/$spaceId/state/'
      path: '/Reservation/$spaceId/state'
      fullPath: '/Reservation/$spaceId/state'
      preLoaderRoute: typeof ReservationSpaceIdStateIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/organizations/$organizationId/edit/': {
      id: '/organizations/$organizationId/edit/'
      path: '/organizations/$organizationId/edit'
      fullPath: '/organizations/$organizationId/edit'
      preLoaderRoute: typeof OrganizationsOrganizationIdEditIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/organizations/$organizationId/open/': {
      id: '/organizations/$organizationId/open/'
      path: '/organizations/$organizationId/open'
      fullPath: '/organizations/$organizationId/open'
      preLoaderRoute: typeof OrganizationsOrganizationIdOpenIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/SearchResult/$query/organizations/$organizationId/': {
      id: '/SearchResult/$query/organizations/$organizationId/'
      path: '/SearchResult/$query/organizations/$organizationId'
      fullPath: '/SearchResult/$query/organizations/$organizationId'
      preLoaderRoute: typeof SearchResultQueryOrganizationsOrganizationIdIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/organizations/$organizationId/spaceEdit/$spaceId/': {
      id: '/organizations/$organizationId/spaceEdit/$spaceId/'
      path: '/organizations/$organizationId/spaceEdit/$spaceId'
      fullPath: '/organizations/$organizationId/spaceEdit/$spaceId'
      preLoaderRoute: typeof OrganizationsOrganizationIdSpaceEditSpaceIdIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutLazyRoute
  '/meetingRooms': typeof MeetingRoomsIndexLazyRoute
  '/signup': typeof SignupIndexLazyRoute
  '/Reservation/$spaceId': typeof ReservationSpaceIdIndexLazyRoute
  '/SearchResult/$query': typeof SearchResultQueryIndexLazyRoute
  '/organizations/$organizationId': typeof OrganizationsOrganizationIdIndexLazyRoute
  '/Reservation/$spaceId/state': typeof ReservationSpaceIdStateIndexLazyRoute
  '/organizations/$organizationId/edit': typeof OrganizationsOrganizationIdEditIndexLazyRoute
  '/organizations/$organizationId/open': typeof OrganizationsOrganizationIdOpenIndexLazyRoute
  '/SearchResult/$query/organizations/$organizationId': typeof SearchResultQueryOrganizationsOrganizationIdIndexLazyRoute
  '/organizations/$organizationId/spaceEdit/$spaceId': typeof OrganizationsOrganizationIdSpaceEditSpaceIdIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutLazyRoute
  '/meetingRooms': typeof MeetingRoomsIndexLazyRoute
  '/signup': typeof SignupIndexLazyRoute
  '/Reservation/$spaceId': typeof ReservationSpaceIdIndexLazyRoute
  '/SearchResult/$query': typeof SearchResultQueryIndexLazyRoute
  '/organizations/$organizationId': typeof OrganizationsOrganizationIdIndexLazyRoute
  '/Reservation/$spaceId/state': typeof ReservationSpaceIdStateIndexLazyRoute
  '/organizations/$organizationId/edit': typeof OrganizationsOrganizationIdEditIndexLazyRoute
  '/organizations/$organizationId/open': typeof OrganizationsOrganizationIdOpenIndexLazyRoute
  '/SearchResult/$query/organizations/$organizationId': typeof SearchResultQueryOrganizationsOrganizationIdIndexLazyRoute
  '/organizations/$organizationId/spaceEdit/$spaceId': typeof OrganizationsOrganizationIdSpaceEditSpaceIdIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutLazyRoute
  '/meetingRooms/': typeof MeetingRoomsIndexLazyRoute
  '/signup/': typeof SignupIndexLazyRoute
  '/Reservation/$spaceId/': typeof ReservationSpaceIdIndexLazyRoute
  '/SearchResult/$query/': typeof SearchResultQueryIndexLazyRoute
  '/organizations/$organizationId/': typeof OrganizationsOrganizationIdIndexLazyRoute
  '/Reservation/$spaceId/state/': typeof ReservationSpaceIdStateIndexLazyRoute
  '/organizations/$organizationId/edit/': typeof OrganizationsOrganizationIdEditIndexLazyRoute
  '/organizations/$organizationId/open/': typeof OrganizationsOrganizationIdOpenIndexLazyRoute
  '/SearchResult/$query/organizations/$organizationId/': typeof SearchResultQueryOrganizationsOrganizationIdIndexLazyRoute
  '/organizations/$organizationId/spaceEdit/$spaceId/': typeof OrganizationsOrganizationIdSpaceEditSpaceIdIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/meetingRooms'
    | '/signup'
    | '/Reservation/$spaceId'
    | '/SearchResult/$query'
    | '/organizations/$organizationId'
    | '/Reservation/$spaceId/state'
    | '/organizations/$organizationId/edit'
    | '/organizations/$organizationId/open'
    | '/SearchResult/$query/organizations/$organizationId'
    | '/organizations/$organizationId/spaceEdit/$spaceId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/meetingRooms'
    | '/signup'
    | '/Reservation/$spaceId'
    | '/SearchResult/$query'
    | '/organizations/$organizationId'
    | '/Reservation/$spaceId/state'
    | '/organizations/$organizationId/edit'
    | '/organizations/$organizationId/open'
    | '/SearchResult/$query/organizations/$organizationId'
    | '/organizations/$organizationId/spaceEdit/$spaceId'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/meetingRooms/'
    | '/signup/'
    | '/Reservation/$spaceId/'
    | '/SearchResult/$query/'
    | '/organizations/$organizationId/'
    | '/Reservation/$spaceId/state/'
    | '/organizations/$organizationId/edit/'
    | '/organizations/$organizationId/open/'
    | '/SearchResult/$query/organizations/$organizationId/'
    | '/organizations/$organizationId/spaceEdit/$spaceId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutLazyRoute: typeof AboutLazyRoute
  MeetingRoomsIndexLazyRoute: typeof MeetingRoomsIndexLazyRoute
  SignupIndexLazyRoute: typeof SignupIndexLazyRoute
  ReservationSpaceIdIndexLazyRoute: typeof ReservationSpaceIdIndexLazyRoute
  SearchResultQueryIndexLazyRoute: typeof SearchResultQueryIndexLazyRoute
  OrganizationsOrganizationIdIndexLazyRoute: typeof OrganizationsOrganizationIdIndexLazyRoute
  ReservationSpaceIdStateIndexLazyRoute: typeof ReservationSpaceIdStateIndexLazyRoute
  OrganizationsOrganizationIdEditIndexLazyRoute: typeof OrganizationsOrganizationIdEditIndexLazyRoute
  OrganizationsOrganizationIdOpenIndexLazyRoute: typeof OrganizationsOrganizationIdOpenIndexLazyRoute
  SearchResultQueryOrganizationsOrganizationIdIndexLazyRoute: typeof SearchResultQueryOrganizationsOrganizationIdIndexLazyRoute
  OrganizationsOrganizationIdSpaceEditSpaceIdIndexLazyRoute: typeof OrganizationsOrganizationIdSpaceEditSpaceIdIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutLazyRoute: AboutLazyRoute,
  MeetingRoomsIndexLazyRoute: MeetingRoomsIndexLazyRoute,
  SignupIndexLazyRoute: SignupIndexLazyRoute,
  ReservationSpaceIdIndexLazyRoute: ReservationSpaceIdIndexLazyRoute,
  SearchResultQueryIndexLazyRoute: SearchResultQueryIndexLazyRoute,
  OrganizationsOrganizationIdIndexLazyRoute:
    OrganizationsOrganizationIdIndexLazyRoute,
  ReservationSpaceIdStateIndexLazyRoute: ReservationSpaceIdStateIndexLazyRoute,
  OrganizationsOrganizationIdEditIndexLazyRoute:
    OrganizationsOrganizationIdEditIndexLazyRoute,
  OrganizationsOrganizationIdOpenIndexLazyRoute:
    OrganizationsOrganizationIdOpenIndexLazyRoute,
  SearchResultQueryOrganizationsOrganizationIdIndexLazyRoute:
    SearchResultQueryOrganizationsOrganizationIdIndexLazyRoute,
  OrganizationsOrganizationIdSpaceEditSpaceIdIndexLazyRoute:
    OrganizationsOrganizationIdSpaceEditSpaceIdIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/meetingRooms/",
        "/signup/",
        "/Reservation/$spaceId/",
        "/SearchResult/$query/",
        "/organizations/$organizationId/",
        "/Reservation/$spaceId/state/",
        "/organizations/$organizationId/edit/",
        "/organizations/$organizationId/open/",
        "/SearchResult/$query/organizations/$organizationId/",
        "/organizations/$organizationId/spaceEdit/$spaceId/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/meetingRooms/": {
      "filePath": "meetingRooms/index.lazy.tsx"
    },
    "/signup/": {
      "filePath": "signup/index.lazy.tsx"
    },
    "/Reservation/$spaceId/": {
      "filePath": "Reservation/$spaceId/index.lazy.tsx"
    },
    "/SearchResult/$query/": {
      "filePath": "SearchResult/$query/index.lazy.tsx"
    },
    "/organizations/$organizationId/": {
      "filePath": "organizations/$organizationId/index.lazy.tsx"
    },
    "/Reservation/$spaceId/state/": {
      "filePath": "Reservation/$spaceId/state/index.lazy.tsx"
    },
    "/organizations/$organizationId/edit/": {
      "filePath": "organizations/$organizationId/edit/index.lazy.tsx"
    },
    "/organizations/$organizationId/open/": {
      "filePath": "organizations/$organizationId/open/index.lazy.tsx"
    },
    "/SearchResult/$query/organizations/$organizationId/": {
      "filePath": "SearchResult/$query/organizations/$organizationId/index.lazy.tsx"
    },
    "/organizations/$organizationId/spaceEdit/$spaceId/": {
      "filePath": "organizations/$organizationId/spaceEdit/$spaceId/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
