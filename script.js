const texts = [

  "-Front-end, ni!",
  "-Html kodlarni!",
  "-Css kodlarni!",
  "-React boyicha kodlarni!",
  "-Web saytlar yaratishni!"
];

let index = 0;
const textElement = document.getElementById("changingText");

setInterval(() => {
  index = (index + 1) % texts.length;
  textElement.textContent = texts[index];
}, 2000); // Har 500ms = 2 sekundda almashadi



  function sendToTelegram1() {
    var name = document.getElementById("username").value.trim();
    
    // Agar input bo‘sh bo‘lsa, xatolikni ko‘rsatamiz
    if (!name) {
      alert("Iltimos, ismingizni kiriting!");
      return;
    }

    var telegram_bot_id = "7511233771:AAG0V0-H73LJkHrVuokhvZsG6lrps-8R-OE"; // To‘g‘ri tokenni kiritish
    var chat_id = "7026723422"; // To‘g‘ri chat ID'ni kiritish
    var message = "Yangi foydalanuvchi: " + name;

    // URL'ni to‘g‘ri shaklda tuzamiz
    var url = `https://api.telegram.org/bot${telegram_bot_id}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;

    // API so‘rovi yuboriladi
    fetch(url)
      .then(response => response.json())  // JSON formatda javob olish
      .then(data => {
        if (data.ok) {
          alert("Ism yuborildi ✅");
        } else {
          alert("Telegram API xatolik qaytardi: " + data.description);
        }
      })
      .catch(error => {
        alert("Xatolik yuz berdi: " + error.message); // Asl xatolikni qaytarish
      });
  }





  function sendToTelegram2() {
    var phone = document.getElementById("phone").value.trim();

    if (!phone) {
      alert("Iltimos, telefon raqamingizni kiriting!");
      return;
    }

    var telegram_bot_id = "7511233771:AAG0V0-H73LJkHrVuokhvZsG6lrps-8R-OE"; // <-- bu yerga o'z bot tokeningizni yozing
    var chat_id = "7026723422"; // <-- bu yerga o'z Telegram ID'ingizni yozing
    var message = `📱 Yangi telefon raqam: ${phone}`;

    var url = `https://api.telegram.org/bot${telegram_bot_id}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          alert("Raqam yuborildi ✅");
        } else {
          alert("Telegram API xatolik: " + data.description);
        }
      })
      .catch(error => {
        alert("Xatolik yuz berdi: " + error.message);
      });
  }


  function sendToTelegram3() {
    var region = document.getElementById("regions").value;

    if (!region) {
      alert("Iltimos, viloyatni tanlang!");
      return;
    }

    var telegram_bot_id = "7511233771:AAG0V0-H73LJkHrVuokhvZsG6lrps-8R-OE"; // ← Bot token bu yerga
    var chat_id = "7026723422"; // ← Telegram ID bu yerga
    var message = `📍 Tanlangan viloyat: ${region}`;

    var url = `https://api.telegram.org/bot${telegram_bot_id}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          alert("Viloyat yuborildi ✅");
        } else {
          alert("Telegram API xatolik: " + data.description);
        }
      })
      .catch(error => {
        alert("Xatolik yuz berdi: " + error.message);
      });
  }
