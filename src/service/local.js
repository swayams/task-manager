export const getLocalNode = (nodeName) => {
    let data = window.localStorage.getItem(nodeName)
    if(data)
        return JSON.parse(data)
    else 
        return null
}

export const setLocalNode = (nodeName, data) => {
    window.localStorage.setItem(nodeName, JSON.stringify(data))
}




