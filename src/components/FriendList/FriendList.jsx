
 const FriendList = ({ friends }) => (
	<ul >
	  {friends.map(friend => (
		<li key={friend.id}>
		  <span
		  ></span>
		  <img src={friend.avatar} alt="" width="48" />
		  <p >{friend.name}</p>
		</li>
	  ))}
	</ul>
  );

export default FriendList;