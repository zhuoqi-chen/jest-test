import moduleA from '../src/moduleA';
describe('moduleA', () => {
    it('moduleA shouldexport {a:"a}', () => {
        expect(moduleA).toEqual({a:'a'})
    });
});