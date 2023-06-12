import { useState } from 'react';
import Modifiers from '../../Components/Modifiers/Modifiers';
import './Player.css';

const Player = () => {
  const [hearts, setHearts] = useState(30);
  return (
    <div id='player-container'>
      <div id='hearts'>
        {[...Array(hearts)].map((value: undefined, index: number) => (
          <img
            className='heart'
            src='/src/assets/icons/heart.png'
            alt=''
            width={50}
            height={50}
            key={index}
          />
        ))}
      </div>
      <div id='rupees'>
        <img
          className='rupee'
          src='/src/assets/icons/TotK_Rupee_Icon.png'
          alt=''
          width={50}
          height={50}
        />
        <h3 className='rupee-count'>63</h3>
      </div>

      <div id='stamina'>
        <img src='/src/assets/icons/stamina.png' alt='' />
        <div id='modTime'>
          <img
            src='/src/assets/icons/atkup.png'
            width={50}
            height={50}
            alt=''
          />
          Attack Up 01:31
        </div>
      </div>
      <div id='temp'>
        <img src='/src/assets/icons/temp_icon.png' alt='' />
      </div>
      <div id='modifiers'>
        <Modifiers />
      </div>

      <div id='battery'>
        <img src='/src/assets/icons/battery.png' alt='' />
        <img src='/src/assets/icons/battery.png' alt='' />
        <img src='/src/assets/icons/battery.png' alt='' />
        <img src='/src/assets/icons/battery.png' alt='' />
        <img src='/src/assets/icons/battery.png' alt='' />
        <img src='/src/assets/icons/battery.png' alt='' />
        <img src='/src/assets/icons/battery.png' alt='' />
        <img src='/src/assets/icons/battery.png' alt='' />
      </div>
      <div id='description'>
        <h2>Sleepover Ticket</h2>
      </div>
    </div>
  );
};
export default Player;
