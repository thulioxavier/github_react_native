import React from "react";
import {UserContext} from '../../contexts/UserContext';
import { Repository, Header, Pagination } from "../../components";

import {
  Conteiner,
  List
} from "./styles";

import Api from "../../services/Api";

const Repos = ({ navigation }) => {

    const {state: user} = React.useContext(UserContext);
    const [repos, setRepos] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    const [page, setPage] = React.useState(1);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{
        getList();
    }, [])

    const Back = () => {
      navigation.navigate('Home');
    }

    const getList = async () =>{

      if(loading){
        return;
      }

      if(total > 0 && user.public_repos == total){
        return;
      }

      setLoading(true);

      var res = await Api.listRepos(user.login, page);

      setRepos([
        ...repos,
        ...res
      ]);

      setTotal(res.length);
      setPage(page + 1);
      setLoading(false);

    }

  return (
    <>
      <Conteiner>
      <Header
          title='Repositórios'
          cont={user.public_repos}
          backScreen={Back}
        />
        <List
            keyboardShouldPersistTaps="handled"
            data={repos}
            keyExtractor={item => String(item.id)}
            onEndReached={
              getList
            }
            onEndReachedThreshold={0.4}
            renderItem={({ item }) => (
            <Repository data={item} />
        )}
      />
      </Conteiner>
    </>
  );
};

export default Repos;
