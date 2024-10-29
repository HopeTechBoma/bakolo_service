import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase'; // Import Firestore from your firebase.js file

const MessageForm = () => {
  const [prenom, setPrenom] = useState('');
  const [telephon, setTelephon] = useState('');

  const closeMessage = () => {
    document.getElementById('message_form').classList.add('b-none');
  };

  const saveMessageInformation = async () => {
    try {
      // Add document to the 'messages' collection
      await addDoc(collection(db, 'messages'), {
        prenom: prenom,
        telephon: telephon,
      });
      console.log('Message saved successfully');
      alert('Message saved successfully');
    } catch (error) {
      console.error('Error saving message: ', error);
      alert('Failed to save message');
    }
  };

  return (
    <div className="message_form" id="message_form">
      <div className="close_message_section b_helper" onClick={closeMessage}>X</div>
      <div className="message_form_content">
        <form id="message_form">
          <div>
            <input
              className="msg_input"
              type="text"
              id="prenom"
              placeholder="Votre Prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
          </div>
          <div>
            <input
              className="msg_input"
              type="text"
              id="telephon"
              placeholder="Votre numero de Téléphone"
              value={telephon}
              onChange={(e) => setTelephon(e.target.value)}
            />
          </div>
          <div>
            <button className="form_validation" type="button" onClick={saveMessageInformation}>
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageForm;
