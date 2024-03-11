// const root = document.getElementById('root')

// const p  =  document.createElement('p')

// p.innerText = "Hello from Arun";

// root.appendChild(p)
const child = React.createElement('p',{},"I am Child")
const child = React.createElement('p',{},"I am Child")
const div = React.createElement('div',{className:'text'},"hello from arun");
console.log(div)
// const div = <div className="text">Hello</div>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(div)