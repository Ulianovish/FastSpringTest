import React from 'react';
import './msg.css';
interface MessageProps {
  img: string;
  msg: string;
  showModal: boolean;
  type: string;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Message = ({ img, msg, showModal, type, closeModal }: MessageProps) => {
  return (
    <div className={`black-scree ${showModal && 'show'}`}>
      <div className="message-box">
        <img src={img} alt="" />
        <p className={type}>{msg}</p>
        <button onClick={() => closeModal(false)}>Ok</button>
      </div>
    </div>
  );
};

export default Message;
