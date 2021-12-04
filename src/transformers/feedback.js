const feedback = {
    toState: (data = {}) => {
        return {
            score: data.score ? Number(data.score) : 0,
            ...data
        }
    }
}

export default feedback
