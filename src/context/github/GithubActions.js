import github, { get as githubGet } from './githubClient';

// search all github users
export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text,
    });

    const response = await githubGet(`/search/users?${params}`);
    return response.data.items;
};

// get user and repos
export const getUserAndRepos = async (login) => {
    const [user, repos] = await Promise.all([
        githubGet(`/users/${login}`),
        githubGet(`/users/${login}/repos`),
    ]);

    return {
        user: user.data,
        repos: repos.data,
    };
};
