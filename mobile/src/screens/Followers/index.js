import React from "react";
import { Header, Network, Preview } from "../../components/index";
import Api from "../../services/Api";
import { UserContext } from "../../contexts/UserContext";
import { Conteiner, List } from "./styles";

const Followers = ({ navigation }) => {
  const { state: user } = React.useContext(UserContext);
  const [followers, setFollowers] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [preview, setPreview] =  React.useState([]);

  const { dispatch: userDispatch } = React.useContext(UserContext);

  const salve = () => {
    userDispatch({
      type: 'setLogin',
      payload:{
          login: preview.login, 
          name: preview.name,
          email: preview.email,
          location: preview.location,
          company: preview.company,
          bio: preview.bio,
          avatar_url: preview.avatar_url,
          followers_url: preview.followers_url,
          following_url: preview.following_url,
          organizations_url: preview.organizations_url,
          starred_url: preview.starred_url,
          public_repos: preview.public_repos,
          public_repos: preview.public_repos,
          followers: preview.followers,
          following: preview.following,
      },
  });
  navigation.navigate("Home");
  setModal(false);
  }

  const Back = () => {
    navigation.navigate("Home");
  };

  React.useEffect(() => {
    getFllowers();
  }, []);

  const getFllowers = async () => {
    
    if(loading){
      return;
    }

    if(total > 0 && user.followers == total){
      return;
    }

    setLoading(true);


    const result = await Api.listFollowers(user.login, page);
    setFollowers(
      [
        ...followers,
        ...result
      ]
    );

    setTotal(result.length);
    setPage(page + 1);
    setLoading(false);
  };

  const  clik = async (item) => {
    var result = await Api.signIn(item);
    setPreview(result);
    console.log(preview);
    setModal(true);
  }

  return (
    <>
      <Conteiner>
        <Header title="Seguidores" cont={user.followers} backScreen={Back} />

        <List
          keyboardShouldPersistTaps="handled"
          data={followers}
          keyExtractor={(item) => String(item.id)}
          onEndReached={
            getFllowers
          }
          onEndReachedThreshold={0.4}
          renderItem={({ item }) => <Network data={item} click={() => clik(item.login)}/>}
        />
        <Preview
          salve={salve}
          preview={preview}
          modalVisible={modal}
          offVisible={()=> {setModal(false)}}
        />
      </Conteiner>
    </>
  );
};

export default Followers;
