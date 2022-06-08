const Calculator = require('./calculator');

describe('calculator', () => {
    test(`sum a + b`, () => {
        expect(new Calculator(1,2).add()).toBe(3);
        expect(new Calculator(5,8).add()).toBe(13);
        expect(new Calculator(17,71).add()).toBe(88);        
    });

    test(`subtract a - b`, () => {
        expect(new Calculator(5,2).subtract()).toBe(3);
        expect(new Calculator(15,7).subtract()).toBe(8);
        expect(new Calculator(71,17).subtract()).toBe(54);        
    });

    test(`divide a / b`, () => {
        expect(new Calculator(16,4).divide()).toBe(4);
        expect(new Calculator(9,3).divide()).toBe(3);
        expect(new Calculator(49,7).divide()).toBe(7);        
    });
    
    test(`multiply a * b`, () => {
        expect(new Calculator(9,3).multiply()).toBe(27);
        expect(new Calculator(5,5).multiply()).toBe(25);
        expect(new Calculator(4,3).multiply()).toBe(12);
    });    
});