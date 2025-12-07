// Wrapper around axios to isolate the rest of the codebase from
// direct axios usage. If axios introduces breaking changes when
// upgraded, update this file to adapt the new API and keep the
// rest of the code unchanged.
import axios from 'axios';

const GITHUB_URL = 'https://api.github.com';

// Create and export a single configured client. If axios changes its
// API in a future major version, adjust this module to provide the
// same interface used by the rest of the code (get, post, etc.).
export const github = axios.create({
    baseURL: GITHUB_URL,
});

// Provide a small compatibility layer for response shape differences.
// Currently axios returns a response object where the data lives at
// response.data. If a future axios version changes that, adapt the
// methods below to continue returning the same values.
export async function get(url, config) {
    const res = await github.get(url, config);
    return res;
}

export default github;
