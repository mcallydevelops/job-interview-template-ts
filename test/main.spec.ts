import { sum } from "../src/main"

describe("Main", () => { 
    it('should sum 1 + 2', () => {
        expect(sum(1,2)).toEqual(3);
    })
})