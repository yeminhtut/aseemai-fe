export const downloadFile = (response, filename) => {
    // fix for IE
    // @see: https://stackoverflow.com/questions/36984907/access-is-denied-when-attempting-to-open-a-url-generated-for-a-procedurally-ge
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(response, filename)
        return
    }
    const windowUrl = window.URL || window.webkitURL
    const url = windowUrl.createObjectURL(response)
    let link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', filename)
    document.body.appendChild(link)
    link.click()
    setTimeout(() => {
        document.body.removeChild(link)
        windowUrl.revokeObjectURL(url)
    }, 100)
}
