const country = {
    toApi: (data = {}) => ({
        isActive: data.isActive
    }),

    toState: (data = {}) => ({
        bookingAdvanceCancelTimeMinutes: data.bookingAdvanceCancelTimeMinutes || 0,
        bookingGracePeriodMinutes: data.bookingGracePeriodMinutes || 0,
        countryCode: data.countryCode || '',
        countryName: data.countryName || '',
        currencyCode: data.currencyCode || '',
        currencySymbol: data.currencySymbol || '',
        flagImageURL: data.flagImageURL || '',
        languages: data.languages || [],
        phoneCode: data.phoneCode || '',
        taxCode: data.taxCode || ''
    })
}

export default country
