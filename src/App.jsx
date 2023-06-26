import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import { useState } from "react";
import { Dashboard } from "./pages/Dashboard";
import { RootLayout } from "./layouts/RootLayout";
import { Create } from "./pages/Create";
import { Profile } from "./pages/Profile";
import { Klasemen } from "./pages/Klasemen";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="ramal" element={<Create />} />
            <Route path="klasemen" element={<Klasemen />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
