// const root = document.getElementById('root')

// const p  =  document.createElement('p')

// p.innerText = "Hello from Arun";

// root.appendChild(p)

const div = React.createElement('div',{class},"hello from arun");
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(div)