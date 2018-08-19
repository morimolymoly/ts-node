import hello from '../src/hello'

describe('hello', () => {
    it('hello("mori") to be "Hello, mori!"', () => {
        expect(hello("mori")).toBe("Hello, mori!")
    })
})
