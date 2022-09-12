const getProfile = async (user) => {
  const reponse = await fetch(`https://api.github.com/users/${user}`);
  const data = await reponse.json();
  return data;
};
const getRepo = async (user) => {
  const response = await fetch(`https://api.github.com/users/${user}/repos`);
  const data = await response.json();
  return data;
};

export { getProfile, getRepo };
