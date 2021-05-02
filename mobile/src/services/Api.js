const BASE_API = 'https://api.github.com';

export default {
    signIn: async (user) => {
        const req = await fetch(`${BASE_API}/users/${user}`);
        const json = await req.json();
        return json;
    },

    listRepos: async (user, page) => {
        
        var results = [];

        const req = await fetch(`${BASE_API}/users/${user}/repos?page=${page}`);
        const json = await req.json();

        json.map(function(item, index){
            results.push({
                id: item.id,
                title: item.name,
                description: item.description,
                star: item.stargazers_count,
                techs: item.language,
                url: item.html_url,
            })
        });

        return results;
    },

    listFollowers: async (user, page) =>{
        var result = [];

        const req = await fetch(`${BASE_API}/users/${user}/followers?page=${page}`);
        const json = await req.json();

        json.map(function(item, index){
            result.push({
                id: item.id,
                avatar_url: item.avatar_url,
                login: item.login,
            })
        });

        return result;
    },

    listFollowing: async (user, page) =>{
        var result = [];

        const req = await fetch(`${BASE_API}/users/${user}/following?page=${page}`);
        const json = await req.json();

        json.map(function(item, index){
            result.push({
                id: item.id,
                avatar_url: item.avatar_url,
                login: item.login,
            })
        });

        return result;
    } 
}