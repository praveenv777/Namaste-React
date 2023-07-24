/**
 * Hot Module Replacement (HMR).
 * file Watcher Algorithm -C++
 * BUNDLING
 * MINIFY
 * Clean Console
 * Dev and Production Build
 * Super fast build algorithm
 * Image Optimization
 * Caching while Development
 * Compression
 * Compatiable with older versions of browsers
 * HTTPS on dev
 * Zero Config
 * transitive dependencies 
 * 
 * 
 * tree shanking Removing unwanted code
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement('h1', {
    id: 'title',
    key: "h1",
}, 'Heading1.from parcel react');

//JSX USED TO CREATE AN ELEMENT 
// JSX IS NOT HTML INSIDE JAVASCRIPT BUT IT IS HTML TYPE SYNTAX..
// jsx execution => JSX =>React.createElement => Object => HTML(Dom)
// jsx uses react.creatElement then converted to object and then into htmlDom
// Sanitization is done by jsx 
// const Heading3 = () => (
//     <h1 id='title' key= 'h3'>
//         Namaste React
//     </h1>
// )
const heading3 = (
    <h1 id='title' key= 'h3'>
        Namaste React
    </h1>
)
console.log(heading3);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading3)


//root.render(heading)
//Components in React are functions that return JSX
// Functional Components -- New way of writing components
// Class Components -- Old way of writing components
//functional component start with Captial letter / Not manadatory
//return should have paranthesis if we are returning multiple lines or less not required
// to render a jsx or functional component inside another functional component. {heading3}, <Heading3/>, {Heading3()}
// {} any javascript code can be written inside this brackets {1+2+3+4} addition ,console.log, log the variable , and many more
// {} any javascript api call will be secure through jsx inside brackets


const HeaderComponent= () =>{

    return( <div>
        <h1>Namaste From React Component</h1>
                <h2>This is Heading 2</h2></div>
    );
}
/*const HeaderComponent1= () =>
    ( <div><h1>Namaste From React Component</h1>
                <h2>This is Heading 2</h2></div>
    );*/ // this is also valid same as above

    root.render(<HeaderComponent/>);
// <Heading3/> is also called as Component Composition if we are using it inside another component