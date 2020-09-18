import React from './react';
import ReactDOM from './react-dom';

const title = 'title'

// 1. JSX
const ele = (
    <div className='active' title='123'>
        Hello <span>React</span>
    </div>
);
console.log(ele);

// 2. 函数组件
const Elef = () => {
    return (
        <div className='active' title='123'>
            Hello <span>React</span>
        </div>
    )
}
console.log(<Elef title={title}/>);
//React.createElement(Elef, { title: title });

function Homef() {
    return (
        <div className='active' title='123'>
            Hello <span>React</span>
        </div>
    )
}
console.log(<Homef title={title}/>)
//React.createElement(Homef, { title: title });

// 3. 类组件
class Home {
    render() {
        return (
            <div className='active' title='123'>
                Hello <span>React</span>
            </div>
        );
    }
}
console.log(<Home title={title}/>);
//React.createElement(Home, { title: title });

/*
    ReactDOM.render可接收：
    1. String, Number
    2. JSX: 被babel转译为JS Object
    3. 函数组件
    4. 类组件
 */
ReactDOM.render(ele, document.querySelector('#root'));
//ReactDOM.render('react', document.querySelector('#root'));
