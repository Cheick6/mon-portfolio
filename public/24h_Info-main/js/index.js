

// document.getElementById("lang").addEventListener("click", function() {
//     let lang = window.location.href.split("/")[3];
//     let newLang = lang === "fr" ? "en" : "fr";
//     let newUrl = window.location.href.replace(lang, newLang);
//     window.location.href = newUrl;
// });

document.getElementById("lang").addEventListener("click", function() {
    let url = window.location.href;
    if (url.includes('/fr/')) {
        window.location.href = url.replace('/fr/', '/en/');
    } else if (url.includes('/en/')) {
        window.location.href = url.replace('/en/', '/fr/');
    }
});