import { createBrowserRouter } from "react-router";
import Pages from './Pages';

export let router = createBrowserRouter([
    {
        path: "/",
        Component: Pages.AppLayout,
        children:[
            {index:true, Component:Pages.Home},
            {path:"courses", Component:Pages.Courses},
            {path:"resources", Component:Pages.Resources},
            {path:"course/:courseId", Component:Pages.Course},
            {path:"unit/:courseId/:moduleId/:unitId", Component:Pages.Unit}
        ]
    }
])