export class ConsumableResource {
    constructor (
        public id: number,
        public resourceId: number,
        public quantity: number,
        public gpsn: number,
        public gpsw: number,
        public city: string,
        public address: string,
        public name: string,
        public description: string,
        public state: string,
        public dateModified: Date,
        public consumableViewResources: any[],
        public recName?: any,
        public price?: any
    ) {}
}