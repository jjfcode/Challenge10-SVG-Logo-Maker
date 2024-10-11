const Shape = require('./shapes.js')

describe('Shape',()=>{

    describe('text',()=>{
        it('test text',()=>{
            const shape = new Shape('JJF','yellow','blue')
            expect(shape.text).toEqual('JJF')
        })
    })

    describe('textColor',()=>{
        it('test textColor',()=>{
            const shape = new Shape('JJF','yellow','blue')
            expect(shape.textColor).toEqual('yellow')
        }) 
    })

    describe('shapeColor',()=>{
        it('test shapeColor',()=>{
            const shape = new Shape('JJF','yellow','blue')
            expect(shape.shapeColor).toEqual('blue')
        }) 
    })

    describe('render',()=>{
        it ('test shape svg logo', ()=>{
            const shape = new Shape('JJF','yellow','blue')
            expect(shape.render()).toEqual('Child is required to use its own render()')
        })
    })
})