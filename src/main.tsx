import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.tsx";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {CarTypeRequest, CarTypeResponse} from "./libs/CarTypeService_pb.js";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {CarTypeServiceClient} from "./libs/CarTypeService_grpc_web_pb";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomePage/>
        }
    ]
)


const client = new CarTypeServiceClient('http://localhost:9090', null, null);

const request = new CarTypeRequest();
request.setValue("Личная");

client.addNewCarType(request, {}, () => {})



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
