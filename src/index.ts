
import { User, PremiumUser } from "./utils.js";

const userList:User[] = [];     //ユーザーリスト

//ユーザー登録
userList.push(new User("Ichiro", 24));      //大人, 普通
userList.push(new PremiumUser("Jiro", 23)); //大人, プレミアム
userList.push(new User("Saburo", 19));      //子供, 普通
userList.push(new PremiumUser("Shiro", 18));    //子供, プレミアム


//リスト表示
userList.forEach(user =>{
    console.log(`Name: ${user.name}, Age: ${user.age}, Price:${user.getPrice()}`);
})


//クラス運用チェック
// const ichiro = new User("Ichiro", 24);
// const jiro = new User("Jiro", 19);

// //注意：シングルクォートではなくバッククォートで囲む
// console.log(`Name:${ichiro.name}, Age:${ichiro.age}, Adult:${ichiro.isAdult()}`);
// console.log(`Name:${jiro.name}, Age:${jiro.age}, Adult:${jiro.isAdult()}`);

//関数インポート, コールチェック
// import { getRange } from "./utils.js"

// const min:number = 1;
// const max:number = 3;

// console.log( getRange(min,max));


//Hello, World
// const message: string = "Hello, World!";
// console.log(message);

