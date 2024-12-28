//公開
export function getRange(min:number, max:number):number[]
{
    return range(min,max);
}


//内部
function range(min:number, max:number):number[]
{
    const result:number[] = [];
    for (let i = min; i <= max; i++)
    {
        result.push(i);
    }
    return result;
}