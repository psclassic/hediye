// Replace this URL with your App Store gift link
const APP_STORE_LINK = 'https://apps.apple.com/tr/app/stardew-valley/id1406710800';

const appStoreBtn = document.getElementById('appStoreBtn');

appStoreBtn.addEventListener('click', () => {
    if (APP_STORE_LINK && APP_STORE_LINK !== 'YOUR_APP_STORE_LINK_HERE') {
        window.location.href = APP_STORE_LINK;
    } else {
        alert('Please add your App Store link to game-info-script.js!');
    }
});

