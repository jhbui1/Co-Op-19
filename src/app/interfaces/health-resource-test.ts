import { HealthService } from './health-service'

export class HealthResourceTest {
    constructor (
        public id: number,
        public resourceId: number,
        public providesTests: boolean,
        public gpsn: number,
        public gpsw: number,
        public city: string,
        public address: string,
        public state: string,
        public name: string,
        public description: string,
        public services: HealthService[]|null,
        public testPrice?: number,
        public avgWaitHours?: number
    ) {}
}