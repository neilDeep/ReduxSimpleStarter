// React Displays Components //
// React Diverges into 2 Separate Libraries: //
  // 1. React Library: knows how to render & nest components //
  // 2. ReactDOM Library: knows how to render components into DOM //

// Components are JavaScript Snippets that produce HTML (via JSX) //
// Components are Classes, there can be many instances of a Component //
// 2 Types of Components: //
  // 1. Functional Component //
  // 2. Class-Based Component //
// RULE: ALWAYS 1 COMPONENT PER component.js //

// To make an instance of an Component, wrap it in a JSX tag //
// i.e. ReactDOM.render(<Component />, targetElementInDOM) //

// Handling Events in React has 2 Steps: //
  // 1. Declare an Event Handler, which is a fn that runs whenver an event occurs. //
  // 2. Pass the Event Handler into the element that we wish to listen for events. //

// React's State: //
  // State is a plain JavaScript Object that records & reacts to events //
  // render() is run on State change //
  // *NOTE* ONLY Class-Based Components have State! //


// "const": ES6 syntax that declares "constant variables", or variables who's final value will NEVER change.
// "() =>": ES6 syntax that replicates function().