import React from 'react';

function Transition1(props) {
  // Define state and other hooks if needed
//   const [state, setState] = React.useState(initialState);

  // Define any functions or event handlers
  function handleClick() {
    // Logic for the event handler
  }

  // Render the component
  return (
    <div className='transition_element'>
      <h1>{props.title}</h1>
      <p>This is a simple React component.</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

// Export the component to use it in other parts of your app
export default Transition1;
