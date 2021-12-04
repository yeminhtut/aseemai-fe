// import restaurantTransformer from './restaurant'
// import feedbackTransformer from './feedback'
// import ycTransformer from './ycStatus'
// import statsTransformer from './stats'
// import countryTransformer from './country'
// import userTransformer from './user'
// import ratingTransformer from './rating'
// import forgotPasswordTransformer from './forgotPassword'
// import trafficTransformer from './traffic'
// import cityTransformer from './city'
// import merchantUserTransformer from './merchantUser'
// import resetPasswordTransformer from './resetPassword'
// import permissionTransformer from './permissionList'

// const transformApiToState = (type, state) => data => {
//     switch (type) {
//         case 'restaurant':
//             return restaurantTransformer.toState(data)

//         case 'feedback':
//             return feedbackTransformer.toState(data)

//         case 'ycStatus':
//             return ycTransformer.toState(data)

//         case 'country':
//             return countryTransformer.toState(data)

//         case 'user':
//             return userTransformer.toState(data)

//         case 'rating':
//             return ratingTransformer.toState(data)

//         case 'traffic':
//             return trafficTransformer.toState(data, state)

//         case 'city':
//             return cityTransformer.toState(data, state)

//         case 'merchantUser':
//             return merchantUserTransformer.toState(data, state)

//         case 'permissionList':
//             return permissionTransformer.toState(data, state)

//         default:
//             return {}
//     }
// }

// const transformStateToApi = type => data => {
//     switch (type) {

//         case 'ycStatus':
//             return ycTransformer.toApi(data)

//         case 'ycStatusEmail':
//             return ycTransformer.toApiEmail(data)

//         case 'calendarBooking':
//             return calendarTransformer.toApi(data)

//         case 'stats':
//             return statsTransformer.toApi(data)

//         case 'booking':
//             return bookingTransformer.toApi(data)

//         case 'country':
//             return countryTransformer.toApi(data)

//         case 'bookingStatusEvent':
//             return bookingStatusEventTransformer.toApi(data)

//         case 'forgotPassword':
//             return forgotPasswordTransformer.toApi(data)

//         case 'traffic':
//             return trafficTransformer.toApi(data)

//         case 'merchantUser':
//             return merchantUserTransformer.toApi(data)

//         case 'resetPassword':
//             return resetPasswordTransformer.toApi(data)

//         default:
//             return {}
//     }
// }

// export { transformApiToState, transformStateToApi }
