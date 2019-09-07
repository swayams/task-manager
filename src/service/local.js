export const getLocalNode = (nodeName) => {
    let data = JSON.parse( window.localStorage.getItem(nodeName))
    if(data && data.length > 0)
        return data
    else 
        return null
}

export const setLocalNode = (nodeName, data) => {
    window.localStorage.setItem(nodeName, JSON.stringify(data))
}




