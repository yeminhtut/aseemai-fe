import filter from 'lodash/filter'
import find from 'lodash/find'
import findIndex from 'lodash/findIndex'
import first from 'lodash/first'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import includes from 'lodash/includes'
import isEmpty from 'lodash/isEmpty'
import keys from 'lodash/keys'
import last from 'lodash/last'
import map from 'lodash/map'
import orderBy from 'lodash/orderBy'
import padStart from 'lodash/padStart'
import range from 'lodash/range'
import reduce from 'lodash/reduce'
import round from 'lodash/round'
import slice from 'lodash/slice'
import take from 'lodash/take'
import uniqBy from 'lodash/uniqBy'
import moment from 'moment'
import { DAY_FORMAT } from '../constants/formats'
import { getMomentLanguage } from '../utils/time'

const groupedBreakfastSlots = ['04:00', '05:00', '06:00', '07:00', '08:00', '09:00']
const groupedDinnerSlots = ['23:00', '00:00', '01:00', '02:00', '03:00']

export const CASTED_NUMBER_0 = 0.12345
export const CATEGORY_BREAKFAST = 'breakfast'
export const CATEGORY_LUNCH = 'lunch'
export const CATEGORY_DINNER = 'dinner'
export const CATEGORY_WEEKDAYS = 'weekdays'
export const CATEGORY_WEEKENDS = 'weekends'
export const CATEGORY_WEEK_1 = 'week 1'
export const CATEGORY_WEEK_2 = 'week 2'
export const CATEGORY_WEEK_3 = 'week 3'
export const CATEGORY_WEEK_4 = 'week 4'
export const CATEGORY_WEEK_5 = 'week 5'
export const CATEGORY_WEEK_6 = 'week 6'

const slotToCategory = {
    '00:00': CATEGORY_DINNER,
    '01:00': CATEGORY_DINNER,
    '02:00': CATEGORY_DINNER,
    '03:00': CATEGORY_DINNER,
    '04:00': CATEGORY_BREAKFAST,
    '05:00': CATEGORY_BREAKFAST,
    '06:00': CATEGORY_BREAKFAST,
    '07:00': CATEGORY_BREAKFAST,
    '08:00': CATEGORY_BREAKFAST,
    '09:00': CATEGORY_BREAKFAST,
    '10:00': CATEGORY_BREAKFAST,
    '11:00': CATEGORY_LUNCH,
    '12:00': CATEGORY_LUNCH,
    '13:00': CATEGORY_LUNCH,
    '14:00': CATEGORY_LUNCH,
    '15:00': CATEGORY_LUNCH,
    '16:00': CATEGORY_LUNCH,
    '17:00': CATEGORY_DINNER,
    '18:00': CATEGORY_DINNER,
    '19:00': CATEGORY_DINNER,
    '20:00': CATEGORY_DINNER,
    '21:00': CATEGORY_DINNER,
    '22:00': CATEGORY_DINNER,
    '23:00': CATEGORY_DINNER
}
const dayToCategory = {
    1: CATEGORY_WEEKDAYS,
    2: CATEGORY_WEEKDAYS,
    3: CATEGORY_WEEKDAYS,
    4: CATEGORY_WEEKDAYS,
    5: CATEGORY_WEEKDAYS,
    6: CATEGORY_WEEKENDS,
    7: CATEGORY_WEEKENDS
}
const dateToCategory = (allSundayDates = [], dateNumber = 99) => {
    if (allSundayDates[0] && dateNumber <= allSundayDates[0]) {
        return CATEGORY_WEEK_1
    }
    if (allSundayDates[1] && dateNumber <= allSundayDates[1]) {
        return CATEGORY_WEEK_2
    }
    if (allSundayDates[2] && dateNumber <= allSundayDates[2]) {
        return CATEGORY_WEEK_3
    }
    if (allSundayDates[3] && dateNumber <= allSundayDates[3]) {
        return CATEGORY_WEEK_4
    }
    if (allSundayDates[4] && dateNumber <= allSundayDates[4]) {
        return CATEGORY_WEEK_5
    }
    if (!allSundayDates[4] && dateNumber > allSundayDates[3]) {
        return CATEGORY_WEEK_5
    }
    return CATEGORY_WEEK_6
}

const DEFAULT_CATEGORY_LINE_DATA = { value: null, category: '' }

const transformSummaryItems = (summary = []) => {
    let result = {}
    forEach(summary, item => {
        result[item.slot] = round(item.percent, 0)
    })
    return result
}

// NOTE: need to do this to avoid floating number percision issue
const tuningFloatNumber = arr => {
    const allTotal = reduce(arr, (sum, item) => addFloatNumber(sum, item.displayValue || '0.0'), '0.0')
    const remaining = getRemainingPart(allTotal)
    if (remaining !== '0.0' && remaining !== '99.10') {
        arr[arr.length - 1].displayValue = remaining
        arr[arr.length - 1].value = parseFloat(remaining)
    }

    return arr
}

const addFloatNumber = (a, b) => {
    const numA = a.split('.')
    const numB = b.split('.')

    let integer = Number(numA[0]) + Number(numB[0])
    let fraction = Number(numA[1]) + Number(numB[1])

    if (fraction > 9) {
        fraction -= 10
        integer++
    }

    return `${integer}.${fraction}`
}

const getRemainingPart = num => {
    if (!num || Number(num) >= 100) return '0.0'
    const temp = num.split('.')
    return `${99 - Number(temp[0])}.${10 - Number(temp[1])}`
}

// NOTE: hack to show min line width for value 0, otherwise bar length will be 0
const transformZeroValues = (data = []) =>
    map(data, item => {
        if (item.value === 0) {
            item.value = CASTED_NUMBER_0
        }
        return item
    })

const getCategorySubtotal = (data, categoryName) => {
    const filtered = filter(data, item => item.category === categoryName)
    const total = reduce(filtered, (sum, item) => sum + item.value, 0)
    return round(total, 0)
}

const transformDayChartData = (data = []) => {
    let result = uniqBy(data, item => item.slot)
    result = map(result, item => ({ ...item, slot: padStart(item.slot, 5, '0') }))
    forEach(keys(slotToCategory), slot => {
        if (!find(result, item => item.slot === slot)) {
            result = [...result, { slot: slot.toString(), percent: 0 }]
        }
    })

    result = map(result, item => ({
        label: item.slot,
        value: Number(item.percent),
        displayValue: Number(item.percent).toFixed(1),
        category: slotToCategory[item.slot] || ''
    }))
    result = orderBy(result, ['label'], ['asc'])

    const breakfast = filter(result, item => includes(groupedBreakfastSlots, item.label))
    const dinner = filter(result, item => includes(groupedDinnerSlots, item.label))

    const breakfastValue = reduce(breakfast, (sum, item) => sum + item.value, 0)
    const dinnerVakue = reduce(dinner, (sum, item) => sum + item.value, 0)
    result = [
        {
            label: `${first(groupedBreakfastSlots)}\n- ${last(groupedBreakfastSlots)}`,
            value: breakfastValue,
            displayValue: breakfastValue.toFixed(1),
            category: CATEGORY_BREAKFAST
        },
        ...filter(result, item => !includes([...groupedBreakfastSlots, ...groupedDinnerSlots], item.label)),
        {
            label: `${first(groupedDinnerSlots)}\n- ${last(groupedDinnerSlots)}`,
            value: dinnerVakue,
            displayValue: dinnerVakue.toFixed(1),
            category: CATEGORY_DINNER
        }
    ]
    const breakfastTotal = getCategorySubtotal(result, CATEGORY_BREAKFAST)
    const lunchTotal = getCategorySubtotal(result, CATEGORY_LUNCH)
    const dinnerTotal = getCategorySubtotal(result, CATEGORY_DINNER)

    result = transformZeroValues(result)

    const lastBreakfastIndex = findIndex(result, item => item.label === '10:00') + 1
    const lastLunchIndex = findIndex(result, item => item.label === '16:00') + 1

    result = [
        {
            ...DEFAULT_CATEGORY_LINE_DATA,
            label: 'breakfast',
            labelKey: 'traffic_label_breakfast',
            total: breakfastTotal
        },
        ...slice(result, 0, lastBreakfastIndex),
        { ...DEFAULT_CATEGORY_LINE_DATA, label: 'lunch', labelKey: 'traffic_label_lunch', total: lunchTotal },
        ...slice(result, lastBreakfastIndex, lastLunchIndex),
        { ...DEFAULT_CATEGORY_LINE_DATA, label: 'dinner', labelKey: 'traffic_label_dinner', total: dinnerTotal },
        ...slice(result, lastLunchIndex)
    ]

    result = tuningFloatNumber(result)

    return result
}

const transformWeekChartData = (data = [], state = {}) => {
    const { language } = state.common
    const momentLang = getMomentLanguage(language)

    let result = uniqBy(data, item => item.slot)
    forEach([1, 2, 3, 4, 5, 6, 7], slot => {
        if (!find(result, item => Number(item.slot) === slot)) {
            result = [...result, { slot, percent: 0 }]
        }
    })

    result = map(result, item => ({
        key: Number(item.slot),
        label: moment()
            .isoWeekday(Number(item.slot))
            .locale(momentLang)
            .format(DAY_FORMAT),
        value: Number(item.percent),
        displayValue: Number(item.percent).toFixed(1),
        category: dayToCategory[item.slot] || ''
    }))
    result = orderBy(result, ['key'], ['asc'])

    const weekdaysTotal = getCategorySubtotal(result, CATEGORY_WEEKDAYS)
    const weekendsTotal = getCategorySubtotal(result, CATEGORY_WEEKENDS)

    result = transformZeroValues(result)

    const lastWeekdayIndex = findIndex(result, item => item.key === 5) + 1

    result = [
        { ...DEFAULT_CATEGORY_LINE_DATA, label: 'weekdays', labelKey: 'traffic_label_weekdays', total: weekdaysTotal },
        ...slice(result, 0, lastWeekdayIndex),
        { ...DEFAULT_CATEGORY_LINE_DATA, label: 'weekends', labelKey: 'traffic_label_weekends', total: weekendsTotal },
        ...slice(result, lastWeekdayIndex)
    ]

    result = tuningFloatNumber(result)

    return result
}

const transformMonthChartData = (data = []) => {
    let result = uniqBy(data, item => item.slot)
    const monthOffset = 1
    const maxDays = moment()
        .subtract(monthOffset, 'month')
        .daysInMonth()

    forEach(range(1, maxDays + 1), slot => {
        if (!find(result, item => Number(item.slot) === slot)) {
            result = [...result, { slot: slot.toString(), percent: 0 }]
        }
    })
    result = take(result, maxDays)

    const allDates = range(1, maxDays + 1)
    const allSundayDates = filter(
        allDates,
        date =>
            moment()
                .subtract(monthOffset, 'month')
                .date(date)
                .isoWeekday() %
            7 ===
            0
    )

    result = map(result, item => ({
        key: Number(item.slot),
        label: item.slot,
        value: Number(item.percent),
        displayValue: Number(item.percent).toFixed(1),
        category: dateToCategory(allSundayDates, Number(item.slot))
    }))
    result = orderBy(result, ['key'], ['asc'])

    const lastWeek1Index = findIndex(result, item => item.key === allSundayDates[0]) + 1
    const lastWeek2Index = findIndex(result, item => item.key === allSundayDates[1]) + 1
    const lastWeek3Index = findIndex(result, item => item.key === allSundayDates[2]) + 1
    const lastWeek4Index = findIndex(result, item => item.key === allSundayDates[3]) + 1
    const lastWeek5Index = allSundayDates[4] ? findIndex(result, item => item.key === allSundayDates[4]) + 1 : -1

    const week1Total = getCategorySubtotal(result, CATEGORY_WEEK_1)
    const week2Total = getCategorySubtotal(result, CATEGORY_WEEK_2)
    const week3Total = getCategorySubtotal(result, CATEGORY_WEEK_3)
    const week4Total = getCategorySubtotal(result, CATEGORY_WEEK_4)
    const week5Total = getCategorySubtotal(result, CATEGORY_WEEK_5)
    const week6Total = getCategorySubtotal(result, CATEGORY_WEEK_6)

    result = transformZeroValues(result)

    let splitResult = [
        { ...DEFAULT_CATEGORY_LINE_DATA, label: 'week 1', labelKey: 'traffic_tab_week', count: 1, total: week1Total },
        ...slice(result, 0, lastWeek1Index),
        { ...DEFAULT_CATEGORY_LINE_DATA, label: 'week 2', labelKey: 'traffic_tab_week', count: 2, total: week2Total },
        ...slice(result, lastWeek1Index, lastWeek2Index),
        { ...DEFAULT_CATEGORY_LINE_DATA, label: 'week 3', labelKey: 'traffic_tab_week', count: 3, total: week3Total },
        ...slice(result, lastWeek2Index, lastWeek3Index),
        { ...DEFAULT_CATEGORY_LINE_DATA, label: 'week 4', labelKey: 'traffic_tab_week', count: 4, total: week4Total },
        ...slice(result, lastWeek3Index, lastWeek4Index),
        { ...DEFAULT_CATEGORY_LINE_DATA, label: 'week 5', labelKey: 'traffic_tab_week', count: 5, total: week5Total }
    ]
    if (lastWeek5Index === -1) {
        splitResult = [...splitResult, ...slice(result, lastWeek4Index)]
        splitResult = tuningFloatNumber(splitResult)
        return splitResult
    }
    splitResult = [...splitResult, ...slice(result, lastWeek4Index, lastWeek5Index)]

    const week6Data = slice(result, lastWeek5Index)
    if (!isEmpty(week6Data)) {
        splitResult = [
            ...splitResult,
            {
                ...DEFAULT_CATEGORY_LINE_DATA,
                label: 'week 6',
                labelKey: 'traffic_tab_week',
                count: 6,
                total: week6Total
            },
            ...week6Data
        ]
    }
    splitResult = tuningFloatNumber(splitResult)
    return splitResult
}

const traffic = {
    toState: (data = {}, state = {}) => ({
        day: {
            data: transformDayChartData(get(data, 'day.data')),
            summary: transformSummaryItems(get(data, 'day.summary'))
        },
        week: {
            data: transformWeekChartData(get(data, 'week.data'), state),
            summary: transformSummaryItems(get(data, 'week.summary'))
        },
        month: {
            data: transformMonthChartData(get(data, 'month.data')),
            summary: transformSummaryItems(get(data, 'month.summary'))
        }
    }),

    toApi: (data = {}) => ({
        date_from: data.dateFrom,
        date_to: data.dateTo
    })
}

export default traffic
