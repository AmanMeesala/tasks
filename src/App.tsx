import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>This is header text</h1>
            <header className="App-header">
                Aman Meesala UD CISC275 with React Hooks and TypeScript
            </header>
            <p>Hello World</p>
            <img src="https://imgs.search.brave.com/BTKrPhmsFPavO4pAsHeQk3X2GB9Vf79xeJnD8Qs4Hxs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI2/Mzg1MjQzNC9waG90/by9mcmVzaGx5LWJh/a2VkLWJyZWFkLW9u/ZS1vZi1saWZlcy1z/aW1wbGVzdC1wbGVh/c3VyZXMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVF5OW1x/N1hub2pGbjRTQWlO/R3N6NVZNcS1DelhK/VzJBc1lMWWVzUy1p/Rjg9"  />
            <p>Nicknames for Cash</p>
                <ol> </ol>
                    <li>Buns</li>
                    <li>Green</li>
                    <li>Dough</li>
            <div><Button onClick={ () => { console.log("I am logged") } }>Click Me</Button></div>
            <p>
            
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
