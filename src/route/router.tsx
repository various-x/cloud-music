import { lazy } from "react";
import { RouteObject } from "react-router-dom";

//使用懒加载实现分包处理，提高页面加载速度
const Discover = lazy(() => import("@/views/discover"));
const Download = lazy(() => import("@/views/download"));
const Focus = lazy(() => import("@/views/focus"));
const Mime = lazy(() => import("@/views/mime"));
import App from "@/App";
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
