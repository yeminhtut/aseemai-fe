const city = {
    toState: (data = {}) => ({
        cityName: data.name,
        countryCode: data.country.countryCode || '',
        countryName: data.country.countryName || '',
        flagImageURL: data.country.flagImageURL || '',
        id: data.id,
        languages: data.country.languages || [],
        phoneCode: data.country.phoneCode || ''
    })
}

export default city
