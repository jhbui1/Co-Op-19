export class HealthService {
    constructor (
        public id: number,
        public serviceName: string,
        public serviceDesc: string,
        public estCost: number,
        public testPrice?: number,
        public avgWaitHours?: number
    ) {}
}