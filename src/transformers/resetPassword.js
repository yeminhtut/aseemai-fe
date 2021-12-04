const resetPassword = {
    toApi: (data = {}) => ({
        newPassword: data.password,
        token: data.token
    })
}

export default resetPassword
