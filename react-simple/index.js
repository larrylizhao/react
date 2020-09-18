import React from './react';
import ReactDOM from './react-dom';

// 1. JSX
const ele = (
    <div className='active' title='123'>
        Hello <span>React</span>
    </div>
);

// 2. 函数组件
const elef = () => {
    return (
        <div className='active' title='123'>
            Hello <span>React</span>
        </div>
    )
}


function home() {
    return (
        <div className='active' title='123'>
            Hello <span>React</span>
        </div>
    )
}

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

const title = 'title'
console.log(<home name={title}/>);


/*
    ReactDOM.render可接收：
    1. String, Number
    2. JSX: 被babel转译为JS Object
    3. 函数组件
    4. 类组件
 */
ReactDOM.render(<home name={title}/>, document.querySelector('#root'));
//ReactDOM.render('react', document.querySelector('#root'));

console.log(ele);
