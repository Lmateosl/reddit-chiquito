const clientId = 'I7HT7ZM5Nw4Z_RxtnI1OmQ';
const clientSecret = 'K8bM3AeRHG6qhQVUP_GiZ951V7sP_Q';
const accessTokenUrl = 'https://www.reddit.com/api/v1/access_token';
const subredditUrl = 'https://oauth.reddit.com/r/{subreddit}/hot';

// Autenticación para obtener el token de acceso
const getAccessToken = async () => {
    const credentials = btoa(clientId + ':' + clientSecret);
    const response = await fetch(accessTokenUrl, {
      method: 'POST',
      body: 'grant_type=client_credentials',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + credentials
      }
    });
    const data = await response.json();
    return data.access_token;
  };
  

// Función para obtener los posts más populares de un subreddit
export const getSubredditPosts = async (subreddit) => {
  const accessToken = await getAccessToken();
  const response = await fetch(subredditUrl.replace('{subreddit}', subreddit), {
    headers: {
      'Authorization': 'bearer ' + accessToken
    }
  });
  const data = await response.json();
  return data.data.children.map(post => post.data);
};

export const getPostsByString = async (searchString) => {
    const accessToken = await getAccessToken();
    const response = await fetch(`https://oauth.reddit.com/search?q=${encodeURIComponent(searchString)}&sort=hot`, {
      headers: {
        'Authorization': 'bearer ' + accessToken
      }
    });
    const data = await response.json();
    return data.data.children.map(post => post.data);
  };
