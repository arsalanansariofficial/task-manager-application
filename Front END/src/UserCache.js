export const cacheUser = async options => {
    const newCache = await caches.open('user-cache');
    const url = 'http://localhost:8080/users/view-profile';
    try {
        await newCache.add(new Request(url, options));
        return true;
    } catch (error) {
        return false;
    }
}

export const getCachedUser = async () => {
    const newCache = await caches.open('user-cache');
    const url = 'http://localhost:8080/users/view-profile';
    return await newCache.match(url);
}

export const deleteCachedUser = async () => {
    const newCache = await caches.open('user-cache');
    const url = 'http://localhost:8080/users/view-profile';
    return await newCache.delete(url);
}
