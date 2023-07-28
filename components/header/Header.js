import react from "react";
import styles from './Header.module.css';

export default function Header({ title }) {
  return(
    <>
     <div className={styles.header}>
      <div className={styles.logoBox}>Image
        <div>
        {/* <img src="logofurniture2" alt="Logo" className={styles.logo} />
          Image<Image src="/logofurniture2.jpg"/> */}
          {/* <img src="/logofurniture2.jpg"/> */}
        </div>

        
      </div>
      <div><h3>GrovNest</h3></div>

      <div className={styles.search_box}>
        <input className={styles.searchInput} type='text' placeholder='Search items'></input>
        {/* <span className={styles.searchIcon}><FaSearch /></span> */}
        <button type='button' className={styles.btn}>Search</button>
      </div>
      <div>        
        <button type='button' className={styles.btn}>Home</button>
      </div>
      <div>        
        <button type='button' className={styles.btn}>About</button>
      </div>
      <div>        
        <button type='button' className={styles.btn}>Contact</button>
      </div>
      <div>        
        <button type='button' className={styles.btn}>Services</button>
      </div>
      <div>        
        <button type='button' className={styles.btn}>Profile</button>
      </div>

      
{/* 
      <div className={styles.cart_icons}>
        <div className={styles.menuItem}><a><FcHome /> Home</a></div>
        <div className={styles.menuItem}><a><CgProfile />Product</a></div>
        <div className={styles.menuItem}><a><CgProfile />Profile</a></div>
        <div className={styles.menuItem}><a><AiOutlineShoppingCart />Cart</a></div>
      </div> */}
    
    </div>
    </>
  ) 
}
