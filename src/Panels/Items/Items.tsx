import ItemGrid from '../../Components/ItemGrid/ItemGrid';
import './Items.css';

const Items = () => {
  return (
    <div id='items-panel'>
      <div id='top-bar'>
        <button className='selector'>L</button>
        <div className='categories'>
          <button className='menu-select'>
            <img src='src/assets/icons/TotK_Armor_Icon.png' alt='' />
          </button>
          <button className='menu-select'>
            <img src='src/assets/icons/TotK_Bows_and_Arrows_Icon.png' alt='' />
          </button>
          <button className='menu-select'>
            <img src='src/assets/icons/TotK_Shields_Icon.png' alt='' />
          </button>
          <button className='menu-select'>
            <img src='src/assets/icons/TotK_Weapons_Icon.png' alt='' />
          </button>
          <button className='menu-select'>
            <img src='src/assets/icons/TotK_Material_Icon.png' alt='' />
          </button>
          <button className='menu-select'>
            <img src='src/assets/icons/TotK_Food_Icon.png' alt='' />
          </button>
          <button className='menu-select'>
            <img src='src/assets/icons/TotK_Zonai_Device_Icon.png' alt='' />
          </button>
          <button className='menu-select'>
            <img src='src/assets/icons/TotK_Key_Items_Icon.png' alt='' />
          </button>
          <button className='menu-select'>
            <img src='src/assets/icons/settings-icon.png' alt='' />
          </button>
        </div>

        <button className='selector'>R</button>
      </div>
      <ItemGrid />
    </div>
  );
};
export default Items;
