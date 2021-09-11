import { Rectangle } from 'electron'

export type ElectronRectangle = Rectangle

export interface _Headers {
    [key: string]: string
}

export enum IpcType {
    SEND_MSG = "SEND_MSG",
    CREATE_WIN = "CREATE_WIN",
    CREATE_VIEW = "CREATE_VIEW",
    API_REQUEST = "API_REQUEST"
}

export type IpcData =
    { key: string, data?: { type: string, paylaod: any } } |
    { key: string, loadUrl: string, position?: Rectangle } |
    { url: string, params?: Buffer | string, headers?: _Headers, method?: "GET" | "POST" }