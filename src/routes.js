import SearchPage from "./pages/searchPage/searchPage.component";

//Suggested approach for routing
// 1. Create a json file with all the routes
// 2. Create a component for each route
// 3. Create a map with routes <Route />
const routes = [
    {
        path: '/',
        component: <SearchPage />
    }
]

export default routes;