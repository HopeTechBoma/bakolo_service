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
    <div className='section7 transition_element t2_control'>
      
      <div className='video-bg'>
        <div className='vid_text_section'>
        <h1>{props.title}</h1>
      <p>C'est maintenant la revolution numérique</p>
      <button onClick={handleClick}>En Savoir Plus</button>
        </div>
        <div className='overlaybd'></div>
        <div>
        <video
          width="100%"
          height="100%"
          autoPlay
          muted
          controls
          loop
          playsInline
          id="myVideo"
        >
          <source src="/videos/vid_transition1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      </div>
    </div>
  );
}

// Export the component to use it in other parts of your app
export default Transition1;
