import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products";
import Branches from "./pages/Branches/Branches";
import AboutFomo from "./pages/AboutFomo/AboutFomo";
import SearchPage from "./pages/SearchPage/SearchPage";
import MenuPage from "./pages/MenuPage/MenuPage";

let routes = [
    { path: '/', element:<Home /> },
    { path: '/products', element:<Products /> },
    { path: '/branches', element:<Branches /> },
    { path: '/About', element:<AboutFomo /> },
    { path: '/search', element:<SearchPage /> },
    { path: '/menu', element:<MenuPage /> },
]

export default routes;