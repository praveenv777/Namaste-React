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
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement('h1', {
    id: 'title',
}, 'Heading1.from parcel react');
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