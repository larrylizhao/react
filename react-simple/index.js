import React from './react';
import ReactDOM from './react-dom';

const ele = (
    <div className='active' title='123'>
        Hello <span>React</span>
    </div>
);

ReactDOM.render(ele, document.querySelector('#root'));
//ReactDOM.render('react', document.querySelector('#root'));

console.log(ele);
