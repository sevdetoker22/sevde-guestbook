# Sevde — Kişisel Sayfa ve Ziyaretçi Defteri

Next.js App Router, TypeScript ve Tailwind CSS ile hazırlanmış tek sayfalık kişisel tanıtım ve ziyaretçi defteri projesi.

## Özellikler

- Responsive, koyu temalı kişisel tanıtım alanı
- Kod içinde tanımlanmış üç örnek ziyaretçi mesajı
- React state ile çalışan mesaj ekleme formu
- Erişilebilir form etiketleri ve klavye odak stilleri

Bu ilk aşamada mesajlar yalnızca tarayıcı belleğinde tutulur; sayfa yenilendiğinde sonradan eklenen mesajlar silinir.

## Yerelde çalıştırma

```bash
npm install
npm run dev
```

Ardından [http://localhost:3000](http://localhost:3000) adresini açın.

## Kontroller

```bash
npm run lint
npm run build
```
## Sorular ve Cevaplar

### 1. .env.local dosyası neden GitHub'a gönderilmiyor?

.env.local dosyası, projenin API anahtarları ve ortam
değişkenleri gibi yapılandırma bilgilerini içerir.

Bu dosyanın GitHub'a gönderilmemesi, özellikle gizli
anahtarların yanlışlıkla paylaşılmasını önlemek için
önemlidir.

Bu nedenle .gitignore dosyasına .env* kuralı eklenerek
.env.local dosyasının Git tarafından takip edilmesi
engellenir.

Supabase Publishable Key herkese açık kullanılabilen
bir anahtar olsa da secret ve service_role anahtarları
gizli tutulmalıdır.


### 2. Site kendi bilgisayarında çalışırken canlıda neden çalışmadı? Nasıl düzelttin?

Projem kendi bilgisayarımda çalışıyordu çünkü Supabase
bağlantısı için gerekli Project URL ve Publishable Key
bilgileri .env.local dosyasında tanımlanmıştı.

Ancak .env.local dosyası GitHub'a gönderilmediği için
Vercel bu ortam değişkenlerine erişemedi.

Bu nedenle yeni deployment başarısız oldu ve canlı
sitede eski sürüm çalışmaya devam etti.

Sorunu çözmek için Vercel'in Settings bölümündeki
Environment Variables alanına NEXT_PUBLIC_SUPABASE_URL
ve NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY değişkenlerini
ekledim.

Ardından projeyi yeniden deploy ederek Supabase
bağlantısının canlı ortamda da çalışmasını sağladım.


### 3. Bir tabloda RLS açıkken hiç kural yoksa ne olur?

RLS (Row Level Security), veritabanındaki satırlara
kimlerin hangi işlemlerle erişebileceğini belirleyen
bir güvenlik mekanizmasıdır.

Bir tabloda RLS aktifken hiçbir policy tanımlanmamışsa
varsayılan olarak erişim engellenir.

Bu durumda normal API kullanıcıları SELECT, INSERT,
UPDATE ve DELETE işlemlerini gerçekleştiremez.

Örneğin, messages tablosunda RLS aktifken SELECT
politikası bulunmazsa ziyaretçiler mesajları okuyamaz.

INSERT politikası bulunmazsa yeni mesaj ekleyemezler.

Bu projede yalnızca SELECT ve INSERT politikaları
oluşturularak ziyaretçilerin mesajları okumasına
ve yeni mesaj eklemesine izin verilmiştir.

UPDATE ve DELETE politikaları oluşturulmadığı için
normal ziyaretçiler mevcut mesajları değiştiremez
veya silemez.

Not: service_role gibi RLS'i aşma yetkisine sahip
roller bu kısıtlamaların dışındadır.