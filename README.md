// COMMANDS
tsc index.ts 
node index.js 
// or 
ts-node index.ts 
// to use TypeScipt in a browser
npm install -g parcel-bundler

// Type annotations: 
Developers tell TypeScipt the type.
// Type inference: 
TypeScript guesses the type.

let apples: number = 5    ===    let apples = 5 
// using annotations            // using inference
NOTE: Inference only works if variabe declaration and variable initialization
      are done on the same line. Below won't be infered : 
      
      let apples;
      apples = 5;

// WHEN TO USE ANNOTATIONS ? 
> When we declare a variable in one line and initialize it later.
> When we want a variable to have a type that cannot be inferred.
> When a function returns "any" type and we need to clarify the value.

// WHEN TO USE INFERENCE ? 
> ALWAYS! 

// ALWAYS USE ANNOTAIONS WITH FUNCTIONS 
      