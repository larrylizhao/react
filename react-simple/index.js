import React from './react';
import ReactDOM from './react-dom';

const ele = (
    <div className='active' title='123'>
        Hello <span>React</span>
    </div>
);

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
const title = 'title'
console.log(<home name={title}/>);

ReactDOM.render(<homt name={title}/>, document.querySelector('#root'));
//ReactDOM.render('react', document.querySelector('#root'));

console.log(ele);
