import { lazy } from "react";
import { RouteObject } from "react-router-dom";
//使用懒加载实现分包处理，提高页面加载速度
const Discover = lazy(() => import("@/views/discover"));
const Download = lazy(() => import("@/views/download"));
const Focus = lazy(() => import("@/views/focus"));
const Mime = lazy(() => import("@/views/mime"));
const App = lazy(() => import("@/App"));
const Recommend = lazy(() => import("@/views/discover/subPages/recommand"));
const Ranking = lazy(() => import("@/views/discover/subPages/ranking"));
const DjRadio = lazy(() => import("@/views/discover/subPages/djradio"));
const Artist = lazy(() => import("@/views/discover/subPages/artist"));
const Album = lazy(() => import("@/views/discover/subPages/album"));
const routers: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Discover />,
      },
      {
        path: "/discover",
        element: <Discover />,
        children: [
          {
            path: "/discover",
            element: <Recommend />,
          },
          {
            path: "/discover/recommend",
            element: <Recommend />,
          },
          {
            path: "/discover/ranking",
            element: <Ranking />,
          },
          {
            path: "/discover/djradio",
            element: <DjRadio />,
          },
          {
            path: "/discover/artist",
            element: <Artist />,
          },
          {
            path: "/discover/album",
            element: <Album />,
          },
        ],
      },
      {
        path: "/download",
        element: <Download />,
      },
      {
        path: "/focus",
        element: <Focus />,
      },
      {
        path: "/mime",
        element: <Mime />,
      },
    ],
  },
];

export default routers;
