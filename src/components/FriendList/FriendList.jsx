import styles from './friendslist.module.css';



 const FriendList = ({ friends }) => (


	<ul className={styles.common} >
	  {friends.map(friend => (
		<li key={friend.id} className={styles.li}>
		    <span className={friend.isOnline === "isOnline" ? styles.statusOn : styles.statusOff}
		  >{friend.isOnline}</span>
		  
		  <img src={friend.avatar} alt="" width="48" className={styles.img}/>
		  <p className={styles.title}>{friend.name}</p>

		
		</li>
	  ))}
	</ul>
  );

export default FriendList;