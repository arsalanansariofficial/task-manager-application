import domainName from "../config/dev";
export const uploadUserProfilePicture = async (user, profilePicture) => {
    const formData = new FormData();
    formData.append('uploadProfile', profilePicture);
    const url = `${domainName}/users/upload-profile-picture`;
    const imageRequestConfigurations = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${user.token}`
        },
        body: formData
    }
    return await fetch(url, imageRequestConfigurations);
}
