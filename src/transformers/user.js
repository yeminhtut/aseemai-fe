const user = {
    toState: (data = {}) => {
        return {
            authProviders: data.authProviders || [],
            banned: data.banned || false,
            countryCode: data.countryCode || '',
            createdAt: data.createdAt || '',
            emails: data.emails || [],
            firstName: data.firstName || '',
            gender: data.gender || '',
            id: data.id || null,
            languageCode: data.languageCode || '',
            lastName: data.lastName || '',
            lastSignedInAt: data.lastSignedInAt || '',
            phoneNumber: data.phoneNumber || '',
            phoneNumberVerified: data.phoneNumberVerified || false,
            photoUrl: data.photoUrl || '',
            primaryEmail: data.primaryEmail || {},
            primaryPhone: data.primaryPhone || {},
            roles: data.roles || [],
            signupChannelId: data.signupChannelId || '',
            status: data.status || '',
            updatedAt: data.updatedAt || ''
        }
    }
}

export default user
