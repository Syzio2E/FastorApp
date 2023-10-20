import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Navbar.module.css'
import { MdEmojiPeople } from 'react-icons/md';
import { CiDiscount1 } from 'react-icons/ci'
import { GiWallet } from 'react-icons/gi'


const Navbar = () => {
   
 const user = useSelector((state)=>state.user.username)
   
  return (
    <header>
      <div className={styles.raisedDiv}>
        <p className={styles.title}>Pre Order From <MdEmojiPeople/></p>
        <p className={styles.title} style={{fontWeight:'bold'}}>Connaught Place</p>
      </div>
      <div className={styles.secondtitle}>
        <div className={styles.userbox}><div style={{fontWeight:'600', paddingTop:'30px'}}>{user}</div><p style={{color:'black'}}>Let's Explore this evening</p></div>
        <div className={styles.logo}>
            <div><div className={`${styles.offer} ${styles.enlargeIcon}`}><CiDiscount1/></div>Offer</div>
           <div><div className={`${styles.wallet} ${styles.enlargeIcon}`}><GiWallet/></div>Wallet</div> 
        </div>
      </div>
    </header>
  )
}

export default Navbar
