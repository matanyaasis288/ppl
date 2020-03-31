import { expect } from "chai";
import {partition, mapMat, composeMany, maxSpeed, grassTypes, uniqueTypes} from "../src/part2/part2"

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

let pikacho : Pokemon = {
    id : 1,
    name : {
        english : 'pikacho',
        japanese: 'pikacho',
        chinese: 'pikacho',
        french: 'pikacho'
    },
    type : ['Grass', 'Normal', 'Land'],
    base: {
        HP: 70,
        Attack: 58,
        Defense: 80,
        "Sp. Attack": 10,
        "Sp. Defense": 9,
        Speed: 4
    }
}

let balbazor : Pokemon = {
    id : 2,
    name : {
        english : 'balbazor',
        japanese: 'balbazor',
        chinese: 'balbazor',
        french: 'balbazor'
    },
    type : ['Grass', 'Normal', 'Water'],
    base: {
        HP: 75,
        Attack: 65,
        Defense: 88,
        "Sp. Attack": 10,
        "Sp. Defense": 10,
        Speed: 8
    }
}

let charizard : Pokemon = {
    id : 3,
    name : {
        english : 'charizard',
        japanese: 'charizard',
        chinese: 'charizard',
        french: 'charizard'
    },
    type : ['Grass', 'Normal', 'Fire', 'Water'],
    base: {
        HP: 96,
        Attack: 90,
        Defense: 70,
        "Sp. Attack": 10,
        "Sp. Defense": 10,
        Speed: 9
    }
}
;

describe("Assignment 1 Part 2", () => {
    it("part an array", () => {
        expect(partition(x => x % 2 == 0, [1, 2, 3, 4, 5, 6, 7, 8])).to.deep.equal([[2,4,6,8],[1,3,5,7]])
    }),
    it("map a matrix", () => {
        expect(mapMat<number, number>(x => x * x, [[1, 2, 3],[4, 5, 6],[7, 8, 9]])).to.deep.equal([[1, 4, 9],[16, 25, 36],[49, 64, 81]])
    }),
    it("compose functions", () => {
        expect(composeMany<number>([x => x / 2, x => x * x])(5)).to.deep.equal(12.5)
    }),
    it("fastest pokemons", () => {
        expect(maxSpeed([pikacho, balbazor, charizard])).to.deep.equal([charizard])
    })
    it("grass types", () => {
        expect(grassTypes([pikacho, balbazor, charizard])).to.deep.equal(['balbazor', 'charizard', 'pikacho'])
    }),
    it("unique types", () => {
        expect(uniqueTypes([pikacho, balbazor, charizard])).to.deep.equal(['Fire','Grass', 'Land', 'Normal', 'Water'])
    })
});


