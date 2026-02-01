// Google Drive Photo Links Configuration
// Her dosya için Google Drive'dan direkt görsel linkini alıp buraya ekle
// Link formatı: https://drive.google.com/uc?export=view&id=FILE_ID

const DRIVE_PHOTOS = {
    // İlk sayfa fotoğrafları
    photo1: 'GOOGLE_DRIVE_LINK_BURAYA', // photo1.JPG için
    photo2: 'GOOGLE_DRIVE_LINK_BURAYA', // photo2.JPG için
    photo3: 'GOOGLE_DRIVE_LINK_BURAYA', // photo3.JPG için
    
    // Surprise sayfası fotoğrafları
    surprise1: 'GOOGLE_DRIVE_LINK_BURAYA', // surprise1.JPG için
    surprise2: 'GOOGLE_DRIVE_LINK_BURAYA', // surprise2.JPG için
    surprise3: 'GOOGLE_DRIVE_LINK_BURAYA'  // surprise3.PNG için
};

// Fonksiyon: Dosya ID'sinden görsel linki oluştur
function getDriveImageUrl(fileId) {
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
}

// Fonksiyon: Tam Google Drive linkinden ID çıkar ve görsel linki döndür
function convertDriveLinkToImageUrl(shareLink) {
    // https://drive.google.com/file/d/FILE_ID/view?usp=sharing formatından ID çıkar
    const match = shareLink.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
        return getDriveImageUrl(match[1]);
    }
    return shareLink; // Eğer format uymazsa orijinal linki döndür
}

