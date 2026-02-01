# Google Drive Fotoğraf Linklerini Ayarlama

## Adım 1: Her Fotoğraf İçin Link Al

1. [Google Drive Klasörüne Git](https://drive.google.com/drive/folders/1iRrGMU-ryiQiiN810WWP807J8hpR2CTd?usp=sharing)

2. Her dosyayı tek tek aç:
   - `photo1.JPG`
   - `photo2.JPG`
   - `photo3.JPG`
   - `surprise1.JPG`
   - `surprise2.JPG`
   - `surprise3.PNG`

3. Her dosya için:
   - Dosyaya sağ tık yap
   - "Get link" veya "Share" seç
   - "Anyone with the link can view" yap
   - Linki kopyala

## Adım 2: Link Formatı

Aldığın link şu formatta olacak:
```
https://drive.google.com/file/d/FILE_ID/view?usp=sharing
```

Bu linkten `FILE_ID` kısmını çıkar (örnek: `1a2b3c4d5e6f7g8h9i0j`)

## Adım 3: HTML Dosyalarını Güncelle

### index.html için:
- `GOOGLE_DRIVE_FILE_ID_1` → photo1.JPG'nin FILE_ID'si
- `GOOGLE_DRIVE_FILE_ID_2` → photo2.JPG'nin FILE_ID'si
- `GOOGLE_DRIVE_FILE_ID_3` → photo3.JPG'nin FILE_ID'si

### surprise.html için:
- `GOOGLE_DRIVE_FILE_ID_SURPRISE1` → surprise1.JPG'nin FILE_ID'si
- `GOOGLE_DRIVE_FILE_ID_SURPRISE2` → surprise2.JPG'nin FILE_ID'si
- `GOOGLE_DRIVE_FILE_ID_SURPRISE3` → surprise3.PNG'nin FILE_ID'si

## Örnek:

Eğer photo1.JPG'nin linki:
```
https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view?usp=sharing
```

O zaman HTML'de şöyle olacak:
```html
<img src="https://drive.google.com/uc?export=view&id=1a2b3c4d5e6f7g8h9i0j" ...>
```

## Not:
- `onerror` attribute'u eklendi, eğer Google Drive linki çalışmazsa yerel dosyayı gösterecek
- Tüm dosyalar "Anyone with the link can view" olarak paylaşılmış olmalı

