import { Octokit } from "@octokit/core"
import { system } from '../settings/system'

const octokit = new Octokit({ auth: system.GitHubToken });

const getGistsForUser = async (username) => {
    let response = await octokit.request('GET /users/{username}/gists', {
        username: username
    });

    if (response.status === 200) {
        return response.data;
    }

    return null;
}

const getGistFileContent = (url, successCallback, errorCallback) => {
    fetch(url)
        .then((r) => {
            r.text()
                .then(successCallback)
                .catch(errorCallback)
        })
        .catch(errorCallback)
}

const getGistForks = (url, successCallback, errorCallback) => {
    fetch(url, {
        headers: {
            "Authorization": `token ${system.GitHubToken}`
        }
    })
        .then((r) => {
            r.text()
                .then(successCallback)
                .catch(errorCallback)
        })
        .catch(errorCallback)
}

export { getGistsForUser, getGistFileContent, getGistForks };