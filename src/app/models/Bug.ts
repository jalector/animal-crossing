export class Bug{

    constructor(
        public id:number, 
        public name:string, 
        public price:number, 
        public priceFlick:number, 
        public catchPhrase:string, 
        public museumPhrase:string, 
        public image:string, 
        public icon:string, 
    ){}


    public static fromJSON(json: any): Bug {
        return new Bug(
            json["id"],
            json["name"]["name-USes"],
            json["price"],
            json["price-flick"],
            json["catch-phrase"],
            json["museum-phrase"],
            json["image_uri"],
            json["icon_uri"],
        );
    }

    public static fromJSONCollection(json: any) : Bug[]{
        let bugs: Bug[] = [];
        
        for(let rawVillager of json){
            bugs.push(Bug.fromJSON(rawVillager));
        }

        return bugs;
    }
}