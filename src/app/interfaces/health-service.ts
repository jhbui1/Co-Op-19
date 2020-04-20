export class HealthService {
    constructor (
        public serviceName: string,
        public serviceDesc: string,
        public avgWaitHours?: any
    ) {}
}