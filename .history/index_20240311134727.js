// const root = document.getElementById('root')

// const p  =  document.createElement('p')

// p.innerText = "Hello from Arun";

// root.appendChild(p)

const child = Reacr.createElement()
const div = React.createElement('div',{className:'text',onClick},"hello from arun");
console.log(div)
// const div = <div className="text">Hello</div>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(div)