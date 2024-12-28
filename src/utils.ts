//公開
export class User{
    private _name:string;   //名前
    private _age :number;   //年齢

    private _price = 100; //金額 
    private _childDiscountRate = 0.5;   //子供割引率

    get name():string{
        return this._name;
    }

    get age():number{
        return this._age;        
    }

    constructor(name:string, age :number){
        this._name = name;
        this._age = age;
    }

    public isAdult():boolean{
        return this.age >= 20;
    }

    public getPrice():number{
        return this.getChildFiltering(); 
    }

    //子供割引判定
    protected getChildFiltering():number{
        if( this.isAdult() == false ){
            return Math.floor(this._price * this._childDiscountRate);
        }
        return this._price;
    }
}

export class PremiumUser extends User{
    private  _discountRate:number = 0.8;    //プレミアム割り

    public override getPrice():number{
        const ret:number = this.getChildFiltering();
        return ret * this._discountRate;  
    }
}


//内部
function range(min:number, max:number):number[]{
    const result:number[] = [];
    for (let i = min; i <= max; i++){
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