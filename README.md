![logo|200x100](./assets/logo.png)

Kullanıcının giriş yaptıktan sonra, listenen kitapların içerisinden seçim, arama ve detay bilgisine ulaşabildiği bir uygulama istenmektedir.

_**Mümkün olduğunca Jetpack Components kullanmanız süreçte avantaj sağlamaktadır.**_

![design](./assets/design.png)

# Gereksinimler

### Login
- **username** olarak `jane` veya `joe` kullanılmalıdır. 
- Kullanıcı username alanını boş bırakamaz.
- Kullanıcı username olarak sadece harf girebilmelidir.
- Kullanıcı bilgisi cihaz üzerinde saklanmalıdır.

### Books
- API'dan dönen kitaplar cihaz üzerinde saklanmalıdır.
- Tekrarlı gelen kayıtlar için tekilleştirme işlemi yapılmalıdır.
- Cihaz üzerinde saklanan datalar içerisinden arama yapılabilmelidir.
- Seçilen kitap'ın **id** bilgisi bir sonraki ekrana taşınmalıdır.

### Book Details
- Parametre olarak bir önceki ekrandan gelen **id** değeri ile detay bilgisi alınmalıdır.

# Required Tech Stack
- Jetpack Libraries
- Room
- Compose
- Flow
- Retrofit
- Test

# Design

Renk hex referansları aşağıdaki gibidir.

| Color     | Hex                                                              |
|-----------|------------------------------------------------------------------|
| black     | ![#FFE800](https://via.placeholder.com/10/000000?text=+) #000000 |
| white     | ![#FFE800](https://via.placeholder.com/10/ffffff?text=+) #FFFFFF |
| navy blue | ![#0E278C](https://via.placeholder.com/10/0E278C?text=+) #3F485F |

Font olarak [Noto Serif](https://fonts.google.com/noto/specimen/Noto+Serif?stroke=Serif) kullanabilirsiniz.

# API

Host bilgisi aşağıdaki gibidir.
```http
  https://us-central1-sahibinden-case.cloudfunctions.net
```

### Login
`GET` `/login/:username` ile çağıralabilir.

| Parameter  | Type     | Description                          |
|:-----------|:---------|:-------------------------------------|
| `username` | `string` | **Required**. Username to login with |

> `200`
> ```yaml
> {
>   "id": 1234,
>   "fullname": "John Doe",
>   "username": "john",
>   "email": "john@gmail.com",
>   "photoLink": "https://picsum.photos/id/433/200"
> }
> ```

>`404`
>```yaml
>{
>  message: "User not found"
>}
>```

> `500`
> ```yaml
> {
>   message: "Unknown error occurred"
> }
> ```

### Books
`GET` `/all/:page` ile çağıralabilir.

| Parameter | Type  | Description                           |
|:----------|:------|:--------------------------------------|
| `page`    | `int` | **Required**. Number of page to fetch |


> `200`
> ```yaml
> [
>   {
>     "id": 0,
>     "author": "Chinua Achebe",
>     "country": "Nigeria",
>     "imageLink": "images/things-fall-apart.jpg",
>     "language": "English",
>     "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
>     "pages": 209,
>     "title": "Things Fall Apart",
>     "year": 1958
>   },
>   {
>     "id": 1,
>     "author": "Hans Christian Andersen",
>     "country": "Denmark",
>     "imageLink": "images/fairy-tales.jpg",
>     "language": "Danish",
>     "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
>     "pages": 784,
>     "title": "Fairy tales",
>     "year": 1836
>   },
>   ...
> ]
> ```

>`404`
>```yaml
>{
>  message: "End of array"
>}
>```

>> `500`
> ```yaml
> {
>   message: "Unknown error occurred"
> }
> ```

### Book Details

`GET` `/detail/:id` ile çağıralabilir.

| Parameter | Type  | Description                                |
|:----------|:------|:-------------------------------------------|
| `id`      | `int` | **Required**. Id or index of item to fetch |

> `200`
> ```yaml
> {
> "author": "Dante Alighieri",
> "country": "Italy",
> "imageLink": "images/the-divine-comedy.jpg",
> "language": "Italian",
> "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
> "pages": 928,
> "title": "The Divine Comedy",
> "year": 1315
> }
> ```

>`404`
>```yaml
>{
>  message: "Book not found"
>}
>```

> `500`
> ```yaml
> {
>   message: "Unknown error occurred"
> }
> ```

# FAQ
### Harici kütüphane kullanabilir miyim?
Evet, kullanabilirsiniz.

# Feedback
Geri bildirimleriniz için **fake@fake.com**'a mail atabilirsiniz.
