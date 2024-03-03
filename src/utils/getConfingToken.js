
const getConfingToken = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

export default getConfingToken