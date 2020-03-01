

describe('operation', () => {
    function add(a, b) {
        return a + b 
    }
    
    function subtract(a, b) {
        return a - b; 
    }
    
    function divide(a, b) {
        return a / b; 
    }
    
    function multiply(a, b) {
        return a * b; 
    }

  
    test('add function', () => {
      expect(add(3, 4)).toBe(7);
    });
  
    test('subtract function', () => {
        expect(subtract(3, 4)).toBe(-1);
    });
  
    test('divide function', () => {
        expect(add(4, 2)).toBe(2);
    });

    test('multiply function', () => {
        expect(multiply(3, 4)).toBe(12);
      });
  });