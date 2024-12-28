//公開
export function getRange(min, max) {
    return range(min, max);
}
//内部
function range(min, max) {
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}
