import { Status } from "../types";

export type Device = {
    uId: string;
    vendor: string;
    updatedAt: Date;
    status: Status
}
