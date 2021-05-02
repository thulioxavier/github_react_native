export const initialState = {
    login: '', 
    name: '', 
    email: '', 
    location: '', 
    company: '', 
    bio: '', 
    avatar_url: '', 
    followers_url: '', 
    following_url: '', 
    organizations_url: '', 
    starred_url: '', 
    public_repos: '', 
    public_gists: '', 
    followers: '', 
    following: ''
}

export const UserReducer = (state, action) => {
    switch(action.type){
        case 'setLogin':
            return {
                ...state, 
                login: action.payload.login, 
                name: action.payload.name,
                email: action.payload.email,
                location: action.payload.location,
                company: action.payload.company,
                bio: action.payload.bio,
                avatar_url: action.payload.avatar_url,
                followers_url: action.payload.followers_url,
                following_url: action.payload.following_url,
                organizations_url: action.payload.organizations_url,
                starred_url: action.payload.starred_url,
                public_repos: action.payload.public_repos,
                public_gists: action.payload.public_gists,
                followers: action.payload.followers,
                following: action.payload.following,
            };
        break;
        default:
            return state;
    }
}