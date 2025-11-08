const UserProfile = ({ route, navigation }) => {
  const [revs, setRevs] = useState(null);
  const [yets, setYets] = useState(null);
  const [favs, setFavs] = useState(null);

  const [userInfo, setUserInfo] = useState({
    firstName: 'Jane',
    lastName: 'Doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    profileImage: 'https://via.placeholder.com/150',
    email: 'johndoe@example.com',
    location: 'New York, USA',
    followers: 1,
    following: 1,
    reviews: 1,
    username: 'foodLover',
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require('../../assets/ProfilePics/pic2.jpg')}
          style={styles.profileImage}
        />
        <Text allowFontScaling={true} style={styles.name}>
          {userInfo ? `${userInfo.firstName} ${userInfo.lastName}` : ''}
        </Text>
      </View>
      <View style={styles.profileDetails}>
        <Text allowFontScaling={true} style={styles.detail}>
          @{userInfo ? userInfo.username : ''}
        </Text>
        {/* <Text style={styles.detail}>
          Email: {userInfo ? userInfo.email : ''}
        </Text> */}
      </View>
      <View style={styles.grid}>
        <Text
          allowFontScaling={true}
          style={styles.gridItem}
          onPress={() => navigation.navigate('Reviews', { revs: revs })}
        >
          Reviews
        </Text>
        <Text
          allowFontScaling={true}
          style={styles.gridItem}
          onPress={() => {
            navigation.navigate('Followers/Following', {
              follow: userInfo.followers,
            });
          }}
        >
          Followers
        </Text>
        <Text
          allowFontScaling={true}
          style={styles.gridItem}
          onPress={() => {
            navigation.navigate('Followers/Following', {
              follow: userInfo.following,
            });
          }}
        >
          Following
        </Text>
      </View>
      <View style={styles.grid}>
        <Text
          allowFontScaling={true}
          style={styles.BigNums}
          onPress={() => navigation.navigate('Reviews', { revs: revs })}
        >
          {revs ? revs.length : 0}
        </Text>
        <Text
          allowFontScaling={true}
          style={styles.BigNums}
          onPress={() => {
            navigation.navigate('Followers/Following', {
              follow: userInfo.followers,
            });
          }}
        >
          {userInfo ? userInfo.followers.length : 0}
        </Text>
        <Text
          allowFontScaling={true}
          style={styles.BigNums}
          onPress={() => {
            navigation.navigate('Followers/Following', {
              follow: userInfo.following,
            });
          }}
        >
          {userInfo ? userInfo.following.length : 0}
        </Text>
      </View>
      <View style={styles.favorites}>
        <CustomTouchable
          title="Chewiest"
          onPress={() => navigation.navigate('Reviews', { revs: favs })}
          style={[styles.buttons, styles.Chewiest]}
        />
        <CustomTouchable
          title="Yet To Chew"
          onPress={() =>
            navigation.navigate('Reviews', {
              revs: yets,
              dontSortAndGroup: true,
            })
          }
          style={[styles.buttons, styles.YetToChew]}
        />
        <CustomTouchable
          title="Chewed"
          onPress={() => navigation.navigate('Reviews', { revs: revs })}
          style={[styles.buttons, styles.Chewed]}
        />
        <CustomTouchable
          title="Edit Profile"
          onPress={() => navigation.navigate('Edit Profile')}
        />
        <CustomTouchable
          title="Sign Out"
          onPress={() => handleLogout()}
          style={[styles.buttons, styles.Chewed]}
        />
      </View>
    </ScrollView>
  );
};

export default UserProfile;
