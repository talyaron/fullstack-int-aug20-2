
const test = async () => {
    let data
    await fetch('https://reqres.in/api/products/3')
        .then(r => r.json())
        .then(r => {
            data = r.data.name
        })
    return data
}
export async function fetchTodos(dispatch, getState) {
    const x = await test()
    dispatch({ type: 'thunkTesting', payload: { id: 25, msg: x } })
}