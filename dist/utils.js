//公開
export class User {
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    constructor(name, age) {
        this._price = 100; //金額 
        this._childDiscountRate = 0.5; //子供割引率
        this._name = name;
        this._age = age;
    }
    isAdult() {
        return this.age >= 20;
    }
    getPrice() {
        return this.getChildFiltering();
    }
    //子供割引判定
    getChildFiltering() {
        if (this.isAdult() == false) {
            return Math.floor(this._price * this._childDiscountRate);
        }
        return this._price;
    }
}
export class PremiumUser extends User {
    constructor() {
        super(...arguments);
        this._discountRate = 0.8; //プレミアム割り
    }
    getPrice() {
        const ret = this.getChildFiltering();
        return ret * this._discountRate;
    }
}
//内部
function range(min, max) {
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}
//old
// export function getRange(min:number, max:number):number[]
// {
//     return range(min,max);
// }
// export class User{
//     private _name:string;
//     private _age :number;
//     get name():string{
//         return this._name;
//     }
//     get age():number{
//         return this._age;        
//     }
//     constructor(name:string, age :number){
//         this._name = name;
//         this._age = age;
//     }
//     isAdult():boolean{
//         return this.age >= 20;
//     }
// }
