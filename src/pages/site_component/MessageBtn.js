import React from 'react';
import { Carousel } from 'react-bootstrap';

const MessageBtn = () => {

// const [isFormVisible, setIsFormVisible] = useState(true);

  // Define the closeMessage function
  const openMessage = () => {
    // setIsFormVisible(false);  // This will hide the message form
    document.getElementById('message_form').classList.remove('b-none')
  };

  return (
    <div class="leave_a_message" onClick={openMessage}>
        <i class="far fa-envelope-open"></i>
    </div>
  );
};



export default MessageBtn;
