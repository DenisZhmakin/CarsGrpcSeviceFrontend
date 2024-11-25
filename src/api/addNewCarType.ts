import transport from "../config/transport.ts";
import {CarTypeServiceClient} from "../libs/CarTypeService.client.ts";
import type {CarTypeResponse} from "../libs/CarTypeService.ts";

export default async function addNewCarType(): Promise<CarTypeResponse> {
    const client = new CarTypeServiceClient(transport);
    const call = await client.addNewCarType({value: "Личный автомобиль"});

    return call.response
}