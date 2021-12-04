export const isNotProduction = process.env.BUILD_ENV !== 'production'

export const isDev = process.env.BUILD_ENV === 'development' || process.env.NODE_ENV === 'development'
