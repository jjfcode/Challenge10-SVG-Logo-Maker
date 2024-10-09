const Triangle = require('./triangle')

describe('Triangle',()=>{

    describe('text',()=>{
        it('test text',()=>{
            const triangle = new Triangle('JJF','yellow','blue')
            expect(triangle.text).toEqual('JJF')
        })
    })

    describe('textColor',()=>{
        it('test textColor',()=>{
            const triangle = new Triangle('JJF','yellow','blue')
            expect(triangle.textColor).toEqual('yellow')
        }) 
    })

    describe('shapeColor',()=>{
        it('test shapeColor',()=>{
            const triangle = new Triangle('JJF','yellow','blue')
            expect(triangle.shapeColor).toEqual('blue')
        }) 
    })

    describe('render',()=>{
        it ('test triangle svg logo', ()=>{
            const triangle = new Triangle('JJF','yellow','blue')
            expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="${triangle.shapeColor}"/><$ x="150" y="125" font-size="60" text-anchor="middle" fill="${triangle.textColor}">SVG</${triangle.text}></svg>`)
        }) 
    })
})