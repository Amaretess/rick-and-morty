import Home from "../pages/Home"
import More from "../pages/More"
import About from "../pages/About"
import Docs from "../pages/Docs"
import Details from "../components/Details"


export const routesConfig = [
    {
        id: 1,
        path: "/",
        element: <Home />
    },
    {
        id: 2,
        path: "/more-characters",
        element: <More />
    },
    {
        id: 3,
        path: "/about",
        element: <About />
    },
    {
        id: 4,
        path: "/docs",
        element: <Docs />
    },
    {
        id: 5,
        path: "/details/:id",
        element: <Details />
    }
]
