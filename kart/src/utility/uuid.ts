import { v4, NIL, validate } from "uuid";
export type Uuid = string & { readonly __brand: "uuid" };

export const getUuid = (): Uuid => v4() as Uuid;
export const NIL_UUID = NIL as Uuid;
export const isUuid = (uuid: string): uuid is Uuid => validate(uuid);
