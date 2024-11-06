import { OnGatewayInit } from '@nestjs/websockets';
import { Server } from 'ws';
import { Trader } from './trader/trader/trader';
export declare class ApiGateway implements OnGatewayInit {
    private readonly trader;
    server: Server;
    constructor(trader: Trader);
    afterInit(): void;
    findAll(data: any): import("rxjs").Observable<{
        event: string;
        data: {
            status: string;
            alive: boolean;
        } | {
            status: string;
            alive: boolean;
        };
    }>;
}
