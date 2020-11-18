export class UserOrder{
    constructor(
        public userId:string= "",
        public cartInProducts:any =[],
        public totlePrice:number = 0
    ){}
}