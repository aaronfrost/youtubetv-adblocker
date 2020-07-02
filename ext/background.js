chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        console.log(details.url);
        return { cancel: true };
    },
    { urls: ['https://www.youtube.com/get_midroll_info*'] },
    ['blocking'],
);
