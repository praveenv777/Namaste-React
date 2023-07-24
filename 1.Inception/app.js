// code written using javascript to manipulate the dom
/*const heading = document.createElement("h1");

heading.innerHTML = 'Namaste Everyone!';

const root = document.getElementById("root")

root.appendChild(heading)*/

// code using react and reactDOM to manipulate the dom
        // const heading = React.createElement('h1', {
        //     id: 'title',
        //     className: 'header',
        // }, 'Namaste React!');
        const heading = React.createElement('h1', {
            id: 'title',
        }, 'Heading1.');
        const heading2 = React.createElement('h2', {
            id: 'title',
        }, 'Heading2.!');

        const container = React.createElement(
            "div", {
            id: 'container',
        }, [heading, heading2]
        );
        console.log(heading);
        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(container);
