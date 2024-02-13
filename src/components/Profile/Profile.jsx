import styles from './profile.module.css';



const Profile = ({name, tag, location, avatar, stats }) => {
  return <div className={styles.common}>
  <div className={styles.description}>
  <img src={avatar} alt="user avatar" className={styles.avatar}/>
    <p className={styles.name}> {name} </p>
    <p className={styles.tag}> @{tag} </p>
    <p className={styles.location}> {location} </p>
  </div>

  <ul className={styles.list}>
    <li className={styles.li}>
      <span className={styles.lable}> Followers </span>
      <span className={styles.number}> {stats.followers}  </span>
    </li>
    <li className={styles.li}>
      <span className={styles.lable}> Views </span>
      <span className={styles.number}> {stats.views} </span>
    </li>
    <li className={styles.li}>
      <span className={styles.lable}> Likes </span>
      <span className={styles.number}> {stats.likes} </span>
    </li>
  </ul>
</div>
}


export default Profile;

