export class ShelterResource {
    constructor (
        public id: number,
        public vacancy: number,
        public rating: number,
        public isSafe: boolean,
        public gpsn: number,
        public gpsw: number,
        public city: string,
        public address: string,
        public state: string,
        public name: string,
        public description: string
    ) {}
}