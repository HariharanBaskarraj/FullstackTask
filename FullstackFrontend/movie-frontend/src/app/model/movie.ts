export class Movie {
    constructor(
        public movieId:number,
        public movieName:string,
        public synopsis:string,
        public releaseDate:Date,
        public runtime:number,
        public genre:string, 
        public leadActor:string, 
        public leadActress:string, 
        public director:string, 
        public writer:string,
        public productionHouse:string,
        public composer:string,
        public distributor:string,
        public editor:string,
        public budget:number,
        public collection:number,
        public criticRatings:number,
        public cbfcCertificate:string, 
        public awardCount:number,
        public basis:string,
        public audienceRatings:number
    ){}
}
