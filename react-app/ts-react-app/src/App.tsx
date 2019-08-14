import * as React from 'react';
const useState = React.useState;

function App () {
    const [count, setCount] = useState(0);

    const a = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e);
        setCount(count + 1);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={a}>
                Click me
            </button>
        </div>
    );
}

export default App;
