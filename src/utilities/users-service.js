import * as usersAPI from './users-api'


export async function signUp(userData) {
    // ^ Delegate the network request code to the users-api.js API module which will ultimately return a JSON Web Token (JWT)
    console.log(userData)
    const token = await usersAPI.signUp(userData)
    // ^ Save token to local storage
    localStorage.setItem('token', token)
}

export function getToken() {
    // ^ getItem below will return null if there's no string - i.e. no token in local storage
    const token = localStorage.getItem('token')
    if(!token) return null
    // ^ Obtain the payload of the token below
    const payload = JSON.parse(atob(token.split('.')[1]))
    // ^ A JWT's expiration is expressed in seconds, not ms so need to convert below
    if (payload.exp < Date.now() / 1000) {
        // ^ if the payload's expiration value is less than the current value (which is in ms so need to divide by 1000 to get seconds), the token has expired so remove from local storage and return null
        localStorage.removeItem('token')
        return null
    }
    // ^ Otherwise, return token
    return token
}

export function getUser() {
    const token = getToken()
    // ^ If there's a token in local storage, return the user in the payload otherwise return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}