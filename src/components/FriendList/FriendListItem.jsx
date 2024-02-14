
import styles from './friendslist.module.css';

const FriendListItem = ({ friends }) => (

<>
<img src={friends.avatar} alt="Friends image" width="48" className={styles.img}/>
 <p className={styles.title}>{friends.name}</p>
 <p className={friends.isOnline === "true" ? styles.statusOn : styles.statusOff}>{friends.isOnline === "true" ? "Online" : "Offline"}</p>
</>
  );

  export default FriendListItem;