import React from "react";
import { Alert} from "react-native";

import { UserContext } from "../../contexts/UserContext";

import Api from "../../services/Api";

import { Input, Button } from "../../components/index";
import { _GitHub, _Next } from "../../../constants/icons";
import { Conteiner, Logo} from './styles';


const SingIn = ({ navigation }) => {
    const { dispatch: userDispatch } = React.useContext(UserContext);
    const [user, setUser] = React.useState("");

    const getUser = async () => {

        if (user != "") {
        const User = await Api.signIn(user);
            if (User.message) {
                return Alert.alert("Usuário não encontrado!");
                
            }else{
                userDispatch({
                    type: 'setLogin',
                    payload:{
                        login: User.login, 
                        name: User.name,
                        email: User.email,
                        location: User.location,
                        company: User.company,
                        bio: User.bio,
                        avatar_url: User.avatar_url,
                        followers_url: User.followers_url,
                        following_url: User.following_url,
                        organizations_url: User.organizations_url,
                        starred_url: User.starred_url,
                        public_repos: User.public_repos,
                        public_repos: User.public_repos,
                        followers: User.followers,
                        following: User.following,
                    },
                });
                navigation.navigate('Home');
            }
        } else {
        Alert.alert("Preencha o campo Usuário!");
        }
    };

    return (
        <Conteiner>
        <Logo source={_GitHub} />
        <Input
            placeholder="Usuário"
            value={user}
            onChangeText={(e) => setUser(e)}
        />
        <Button text="Entrar" onPress={getUser} icon={_Next} />
        </Conteiner>
    );
};

export default SingIn;
