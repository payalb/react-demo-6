npx create-react-app .
npx: package runner which gets installed when we install node.

npm i create-react-app -g
create-react-app .

Using arrow functions:
function hello(props){
		return <h1>{props.name}</h1>
	}
is equivalent to 
const hello = (props)=> <h1>{props.name}</h1>
