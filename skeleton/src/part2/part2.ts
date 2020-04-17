/* Question 1 */

export const partition : <T>(pred : (element : T) => boolean, arr : Array<T>) => Array<Array<T>> = 
   <T>(pred : (element : T) => boolean, arr : Array<T>) =>
        [arr.filter(pred), arr.filter((element : T) => !pred(element))]
    

/* Question 2 */
export const mapMat : <T, K>(foo : (element : T) => K, matrix : Array<Array<T>>) => Array<Array<K>> = 
    <T, K> (foo : (element : T) => K, matrix : Array<Array<T>>) : Array<Array<K>> =>
        matrix.map(arr => arr.map(foo))
    

/* Question 3 */
export const composeMany : <T>(functionsArray : Array<(x : T) => T>) => ((x : T) => T) = 
     <T>(functionsArray : Array<(x : T) => T>) : ((x : T) => T) =>
        functionsArray.reduce((acc, curr) => (x => acc(curr(x))) , x => x)
    

/* Question 4 */
interface Languages {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
}

interface Stats {
    HP: number;
    Attack: number;
    Defense: number;
    "Sp. Attack": number;
    "Sp. Defense": number;
    Speed: number;
}

interface Pokemon {
    id: number;
    name: Languages;
    type: string[];
    base: Stats;
}

export const maxSpeed : (pokedex : Pokemon[]) => Pokemon[] = 
     (pokedex : Pokemon[]) : Pokemon[] =>
        pokedex.filter((pokemon) => 
            pokemon.base.Speed === pokedex.reduce((acc, curr) => Math.max(acc, curr.base.Speed), 0))
    

export const grassTypes : (pokedex : Pokemon[]) => string[] = 
    (pokedex : Pokemon[]) : string[] =>
        pokedex
        .filter((pokemon) => pokemon.type.filter(x => x == 'Grass').length > 0)
        .sort((a ,b) => a.name.english > b.name.english ? 1 :
                        b.name.english > a.name.english ? -1 :
                        0
        )
        .map(x => x.name.english)
    

export const uniqueTypes : (pokedex : Pokemon[]) => string[] = 
    (pokedex : Pokemon[]) : string[] =>
        pokedex
        .map(x => x.type)
        .reduce((acc, curr) => acc.concat(curr), [])
        .map(x => [x])
        .reduce((acc, curr) => acc.indexOf(curr[0]) == -1 ? curr.concat(acc) : acc , [])
        .sort((a ,b) => a > b ? 1 :
                        b > a ? -1 :
                        0
        )
    


