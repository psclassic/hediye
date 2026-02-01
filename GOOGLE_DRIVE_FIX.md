# Google Drive Fotoğraf Sorunu Çözümü

## Sorun
Google Drive linkleri Vercel'de görünmüyor.

## Çözüm Adımları

### 1. Google Drive Paylaşım Ayarları
Her dosya için şunları yap:

1. Google Drive'da dosyayı aç
2. Sağ tık → "Share" veya "Get link"
3. **"Anyone with the link can view"** seçeneğini aktif et
4. Link'i kopyala

### 2. Alternatif Çözüm: Fotoğrafları Vercel'e Yükle

Eğer Google Drive linkleri çalışmazsa, fotoğrafları direkt Vercel'e yükleyebilirsin:

1. Vercel projesinde `public/photos/` klasörü oluştur
2. Tüm fotoğrafları buraya yükle
3. HTML'deki linkleri şu formata çevir:
   ```html
   <img src="/photos/photo1.JPG" alt="...">
   ```

### 3. Mevcut Durum
Şu anda iki format denendi:
- `uc?export=download` (direkt indirme)
- `thumbnail?id=...&sz=w1000` (fallback - thumbnail)

### 4. Test Et
1. Tarayıcıda Developer Tools'u aç (F12)
2. Console'u kontrol et - hata var mı?
3. Network tab'ında fotoğraf isteklerini kontrol et
4. 403 veya 404 hatası görüyorsan, dosyalar paylaşılmamış demektir

### 5. En İyi Çözüm
**Fotoğrafları Vercel'e yüklemek en güvenilir yöntemdir:**
- Daha hızlı yüklenir
- CORS sorunu yok
- Her zaman çalışır

