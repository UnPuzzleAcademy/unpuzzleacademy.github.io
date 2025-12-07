import { createBrowserRouter } from "react-router";
import Pages from './Pages';

export let router = createBrowserRouter([
    {
    path: "/",
    Component: Pages.Home
  },
])