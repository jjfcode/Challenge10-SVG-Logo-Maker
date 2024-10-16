const Square = require('./square')

describe('Square',()=>{

    describe('text',()=>{
        it('test text',()=>{
            const square = new Square('JJF','yellow','blue')
            expect(square.text).toEqual('JJF')
        })
    })

    describe('textColor',()=>{
        it('test textColor',()=>{
            const square = new Square('JJF','yellow','blue')
            expect(square.textColor).toEqual('yellow')
        })
    })

    describe('shapeColor',()=>{
        it('test shapeColor',()=>{
            const square = new Square('JJF','yellow','blue')
            expect(square.shapeColor).toEqual('blue')
        }) 
    })

    describe('render',()=>{
        it ('test square svg logo', ()=>{
            const square = new Square('JJF','yellow','blue')
            expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300"><rect x="10" y="10" width="300" height="300" fill="${square.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${square.textColor}">${square.text}</text></svg>`)
        }) 
    })

})