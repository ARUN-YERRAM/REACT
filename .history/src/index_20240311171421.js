// const root = document.getElementById('root')

// const p  =  document.createElement('p')

// p.innerText = "Hello from Arun";

// root.appendChild(p)






import React from 'react'
import ReactDOM from 'react-dom';

const child2 = React.createElement('p',{},"I am Child2")
const child1 = React.createElement('p',{},"I am Child1")
const div = React.createElement('div',{className:'text'},[child1,child2]);
console.log(div)

// const div = <div className="text">Hello</div>
console.log(div)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(div)



