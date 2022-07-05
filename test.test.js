import {suma} from './components/suma'

describe('hola jeje',()=> {
    test('adds 1 + 2 to equal 3', () => {
        expect(suma(1, 2)).toBe(3);
    });
    
    test('adds 1 + 4 to equal 5', () => {
        expect(suma(1, 4)).toBe(5);
    });
    test('adds 0 + 0 to equal 0', () => {
        expect(suma(0, 0)).toBe(0);
    });
})
