/* Question 1 */

export const partition = 
    function partition<T> (pred : (element : T) => boolean, arr : Array<T>) : Array<Array<T>>{
        return [arr.filter(pred), arr.filter((element : T) => !pred(element))]
    }

/* Question 2 */
export const mapMat = 
    function mapMat<T, K> (foo : (element : T) => K, matrix : Array<Array<T>>) : Array<Array<K>>{
        return matrix.map(arr => arr.map(foo))
    }

/* Question 3 */
export const composeMany = 
    function composeMany<T> (functionsArray : Array<(x : T) => T>){
        return functionsArray.reduce((acc, curr) => (x => acc(curr(x))) , x => x)
    }

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

export const maxSpeed = undefined;

export const grassTypes = undefined;

export const uniqueTypes = undefined;


