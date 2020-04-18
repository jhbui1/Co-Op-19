export class HealthResource {
    constructor (
        public id: number,
        public resourceId: number,
        public serviceName: string,
        public serviceDesc: string,
        public providesTests: boolean,
        public estCost: number,
        public gpsn: number,
        public gpsw: number,
        public city: string,
        public address: string,
        public state: string,
        public name: string,
        public description: string,
        public testPrice?: any,
        public avgWaitHours?: any
    ) {}
}