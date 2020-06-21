export class User {
    constructor(
        public id : number = 0,
        public Username : string = "",
        public password : string = "",
        public FName : string = "",
        public LName : string = "",
        public Phone : Number = 0,
        public Email : string = "",
        public gpsn : Number = 0,
        public gpsw : Number = 0,
        public isAdmin: boolean = false
    ) {}
    
}