import * as usersAPI from './users-api'


export async function signUp(userData) {
    // ^ Delegate the network request code to the users-api.js API module which will ultimately return a JSON Web Token (JWT)
    console.log(userData)
    const token = await usersAPI.signUp(userData)
    return token
}