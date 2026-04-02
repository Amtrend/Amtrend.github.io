export const fetchGithubData = async (username, repo) => {
    const CACHE_KEY = `gh_cache_${username}_${repo}`;
    const CACHE_TIME_KEY = `${CACHE_KEY}_time`;
    const TEN_MINUTES = 600000;

    try {
        // check the cache
        const cachedData = localStorage.getItem(CACHE_KEY);
        const cacheTime = localStorage.getItem(CACHE_TIME_KEY);

        if (cachedData && cacheTime && (Date.now() - cacheTime < TEN_MINUTES)) {
            return JSON.parse(cachedData);
        }

        const [repoRes, commitsRes] = await Promise.all([
            fetch(`https://api.github.com/repos/${username}/${repo}`),
            fetch(`https://api.github.com/repos/${username}/${repo}/commits?per_page=1`)
        ]);

        if (!repoRes.ok) return null;

        const repoData = await repoRes.json();
        const lastCommit = await commitsRes.json();

        const result = {
            name: repoData.name,
            branch: repoData.default_branch,
            lastCommitMsg: lastCommit[0]?.commit.message,
            lastCommitDate: new Date(lastCommit[0]?.commit.committer.date).toLocaleDateString(),
            updatedAt: repoData.updated_at
        };

        // save to cache
        localStorage.setItem(CACHE_KEY, JSON.stringify(result));
        localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());

        return result;
    } catch {
        return null;
    }
};
