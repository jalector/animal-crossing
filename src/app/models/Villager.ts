export class Villager{

    constructor(
        public id:number = null,
        public name: string = null,
        public personality:  string = null,
        public birthdayText:  string = null,
        public species:  string = null,
        public gender:  string = null,
        public subtype:  string = null,
        public hobby:  string = null,
        public phrase:  string = null,
        public icon:  string = null,
        public image:  string = null,
        public bubble:  string = null,
        public text:  string = null,
        public saying:  string = null,
    ){}

    public static fromJSON(json: any): Villager{
        let villager = new Villager(
            json.id,
            json.name["name-EUes"],
            json.personality,
            json.birthdayText,
            json.species,
            json.gender,
            json.subtype,
            json.hobby,
            json['catch-translations']["catch-EUes"],
            json.icon_uri,
            json.image_uri,
            json.bubble,
            json.text,
            json.saying,
        );

        return villager;
    } 

    public static fromJSONCollection(json: any) : Villager[]{
        let villagers: Villager[] = [];
        
        for(let rawVillager of json){
            villagers.push(Villager.fromJSON(rawVillager));
        }

        return villagers;
    }
}