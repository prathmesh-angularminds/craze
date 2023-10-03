const sessionToUserMap = new Map()

const setUser = (sessionId,user) => {

    sessionToUserMap.set(sessionId,user)
}

const getUser = (sessionId) => {

    return sessionToUserMap.get(sessionId)
}

module.exports = {
    setUser,
    getUser
}