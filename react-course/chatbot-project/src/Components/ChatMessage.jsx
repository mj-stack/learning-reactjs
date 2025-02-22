import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;

  // if(sender === 'robot') {
  //   return(
  //     <div>
  //       <img src='robot.png' alt="profile pic" width="50px"/>
  //       {message}
  //     </div>
  //   );
  // }

    return(
      <div className={ sender === 'user' ? 'chat-message-user' : 'chat-message-robot' }>
        { sender === 'robot' && <img className="chat-message-profile" src={RobotProfileImage} alt="profile pic" /> }
        <div className="chat-message-text"> {message} </div>
        { sender === 'user' && <img className="chat-message-profile" src={UserProfileImage} alt="profile pic" /> }
      </div>
    );
}