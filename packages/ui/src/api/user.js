import client from './client'

const getAllUsers = () => client.get('/users')

const getSpecificUser = (id) => client.get(`/users/${id}`)

const createNewUser = (body) => client.post(`/users`, body) //body: IUser

const updateUser = (id, body) => client.put(`/users/${id}`, body) //body: IUser

const deleteUser = (id) => client.delete(`/users/${shortId}`)

const getUserCredential = (id) => client.get(`/users/wallet/${id}`)


export default {
    getAllUsers,
    getSpecificUser,
    createNewUser,
    updateUser,
    deleteUser,
    getUserCredential
}
