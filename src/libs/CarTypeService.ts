// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "CarTypeService.proto" (syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message CarTypeRequest
 */
export interface CarTypeRequest {
    /**
     * @generated from protobuf field: string value = 1;
     */
    value: string;
}
/**
 * @generated from protobuf message CarTypeResponse
 */
export interface CarTypeResponse {
    /**
     * @generated from protobuf field: int64 id = 1;
     */
    id: bigint;
    /**
     * @generated from protobuf field: string value = 2;
     */
    value: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class CarTypeRequest$Type extends MessageType<CarTypeRequest> {
    constructor() {
        super("CarTypeRequest", [
            { no: 1, name: "value", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CarTypeRequest>): CarTypeRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.value = "";
        if (value !== undefined)
            reflectionMergePartial<CarTypeRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CarTypeRequest): CarTypeRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string value */ 1:
                    message.value = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CarTypeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string value = 1; */
        if (message.value !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CarTypeRequest
 */
export const CarTypeRequest = new CarTypeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CarTypeResponse$Type extends MessageType<CarTypeResponse> {
    constructor() {
        super("CarTypeResponse", [
            { no: 1, name: "id", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "value", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CarTypeResponse>): CarTypeResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = 0n;
        message.value = "";
        if (value !== undefined)
            reflectionMergePartial<CarTypeResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CarTypeResponse): CarTypeResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 id */ 1:
                    message.id = reader.int64().toBigInt();
                    break;
                case /* string value */ 2:
                    message.value = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CarTypeResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 id = 1; */
        if (message.id !== 0n)
            writer.tag(1, WireType.Varint).int64(message.id);
        /* string value = 2; */
        if (message.value !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CarTypeResponse
 */
export const CarTypeResponse = new CarTypeResponse$Type();
/**
 * @generated ServiceType for protobuf api CarTypeService
 */
export const CarTypeService = new ServiceType("CarTypeService", [
    { name: "AddNewCarType", options: {}, I: CarTypeRequest, O: CarTypeResponse }
]);