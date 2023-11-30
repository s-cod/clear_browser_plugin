function reddenPage(c) {
    // localStorage.clear()
    // sessionStorage.clear()
    console.log(c)
}

chrome.action.onClicked.addListener(async (tab) => {
    // Очистка конкретного сайта
    chrome.browsingData.remove(
        {
            origins: ['https://ssl.budgetplan.minfin.ru'],
        },
        {
            cacheStorage: true,
            cookies: true,
            fileSystems: true,
            indexedDB: true,
            localStorage: true,
            serviceWorkers: true,
            webSQL: true,
        },
        () => {},
    )
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: reddenPage,
        args: ['успешно очищено'],
    })
})
