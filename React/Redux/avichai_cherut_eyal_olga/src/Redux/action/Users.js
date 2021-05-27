let userCount = 0

export const addUser = (name, url) => ({
    type: 'ADD_USER',
    payload: { name, url, id: ++userCount }
})

