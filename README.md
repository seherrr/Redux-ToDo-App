# Redux kullanılarak ToDo uygulaması:  
`npx create-react-app `  
ile react projemizi oluşturuyoruz.

`npm install @reduxjs/toolkit react-redux`  
komutu ile redux kurulumunu yapıyıyoruz.  

Api adında backend dosyasını yüklüyoruz ve api dizinine gidiyoruz.  
`cd api`  
`npm i`  
`cat package.json`  
`npm run server`  

Api'lerimizi test etmek için Postman kullanabiliriz.  

Todo listemize eklenenleri server üzerinde göstermek için şu komutu çalıştırıyoruz;  
`npm run server`  

CSS'i kopyalamak isteyenler için projedeki Codepen linki:  
[https://codepen.io/mehmetseven/full/OJRzLjV](https://codepen.io/mehmetseven/full/OJRzLjV)  

# Yapılan işlemler:  
- Store ve todos slice oluşturma
- Yeni to-do elemanı ekleme
- Toggle işlemleri
- Silme işlemleri
- Filtreleme İşlemleri
- Selectors
- Prepare
- Api kurulumu
- Api üzerinden veri çekmek (Thunk Middleware)
