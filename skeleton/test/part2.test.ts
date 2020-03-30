import { expect } from "chai";
import {partition, mapMat, composeMany} from "../src/part2/part2"

describe("Assignment 1 Part 2", () => {
    it("part an array", () => {
        expect(partition(x => x % 2 == 0, [1, 2, 3, 4, 5, 6, 7, 8])).to.deep.equal([[2,4,6,8],[1,3,5,7]])
    }),
    it("map a matrix", () => {
        expect(mapMat<number, number>(x => x * x, [[1, 2, 3],[4, 5, 6],[7, 8, 9]])).to.deep.equal([[1, 4, 9],[16, 25, 36],[49, 64, 81]])
    }),
    it("compose functions", () => {
        expect(composeMany<number>([x => x / 2, x => x * x])(5)).to.deep.equal(12.5)
    })
});
