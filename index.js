const inquirer=require('inquirer')

const Circle=require('./lib/circle')
const Square=require('./lib/square')
const Triangle=require('./lib/triangle')

const fs=require('fs')

inquirer.prompt([{
        type:'input',
        message:"Enter 3 or less characters text:",
        validate:(text)=>text.length <= 3 || 'Text must be 3 characters or less.',
        name: 'text'
    },
    {
        type:'input',
        message:'Enter a text color:',
        name:'textColor'
    },
    {
        type:'list',
        message:'Choose a shape:',
        name:'shape',
        choices:['circle','triangle','square']
    },
    {
        type:'input',
        message:'Enter a shape color or a hexadecimal number:',
        name:'shapeColor'
    }
])

.then(res => {

    let content=''
    let filename='./examples/logo.svg'
    
    if (res.shape==='circle') {
        const circle=new Circle(res.text, res.textColor, res.shapeColor)
        content=circle.render()
    } else if (res.shape==='triangle') {
        const triangle=new Triangle(res.text, res.textColor, res.shapeColor)
        content =triangle.render()
    } else if (res.shape==='square') {
        const square=new Square(res.text, res.textColor, res.shapeColor)
        content=square.render()
    }

    fs.writeFile(filename,content,(err) => err ?console.log(err) : console.log('Success...'))
})