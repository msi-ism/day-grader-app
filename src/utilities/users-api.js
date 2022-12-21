
// ^ This is the base path of the Express route
const BASE_URL = '/api/users'

export async function signUp(userData) {
    // ^ Fetch uses an options object as a second arg to make requests other than the basic GET request to include data, headers, etc.
    console.log(userData)
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        // ^ Fetch requires data payloads to be stringified and assigned to a body property on the options object which is what the line below does
        body: JSON.stringify(userData)
    })
    console.log(res)
    // ^ Check if req was successful
    if (res.ok) {
        // ^ if okay, res.json will resolve to the JWT
        console.log('res okay')
        return res.json()
    } else {
        console.log(`Request not okay`)
        throw new Error('Invalid Sign Up - Users API')
    }
}

// ! The FETCH method will not throw an error unless there is a network error which is why we first need to check the res.ok property to see if the server returned a proper response (code in the 200s)