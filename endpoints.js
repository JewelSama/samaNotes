export const baseUrl = `https://jewel.cmsandbox.com.ng/api/`;

/**
 * Returns a complete api url.
 *
 * @param x Your desired Api Endpoint
*/

const endpoint = x => `${baseUrl}${x}`;

//Account
export const loginAPI = endpoint('login');
export const registerAPI = endpoint('register');
export const logoutAPI = endpoint('logout');

//Notes
export const getNotesAPI = endpoint('notes')
export const searchNotesAPI = endpoint('notessearch/j=') //expects {name} url parameter