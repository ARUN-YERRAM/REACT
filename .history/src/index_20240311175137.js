// const root = document.getElementById('root')

// const p  =  document.createElement('p')

// p.innerText = "Hello from Arun";

// root.appendChild(p)




// Components basically are regular functions that return react elements.........

import React from 'react'
import ReactDOM from 'react-dom/client';

// const child2 = React.createElement('p',{},"I am Child2")
// const child1 = React.createElement('p',{},"I am Child1")
// const div = React.createElement('div',{className:'text'},[child1,child2]);

const apiData = "hello 1";
const MorningText = false;
const afterText = "afternoon user";

const MorningElement = <div>{apiData} it is 8am</div>
const afternoonElement = <div>{afterText} it is 8 pm</div>

const div = MorningText?MorningElement:afternoonElement

console.log(div)

const Component = () => {
    return <>
        {div} i am inside component
    </>
}
console.log(Component)

// const div = <div className="text">{MorningText?apiData:afterText}</div>
// console.log(div)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Component/>)



