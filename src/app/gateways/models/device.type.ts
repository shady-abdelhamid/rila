import { Status } from "../types";

export type Device = {
    uid?: string;
    vendor: string;
    updatedAt: Date;
    status: Status
}
