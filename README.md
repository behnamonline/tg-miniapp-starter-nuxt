## ساخت مینی‌اپ با هوش مصنوعی

۱. این ریپو را به‌صورت zip دانلود کنید.

۲. فایل را در هوش مصنوعی خودتان آپلود کنید مثلا ([claude.ai](https://claude.ai)).

۳. این پرامپت را بفرستید و اپ دلخواه‌تان را توضیح دهید:

```
این یک استارتر برای ساخت مینی‌اپ تلگرام است که با Nuxt ساخته شده و آماده‌ی دیپلوی روی Cloudflare است.
API، بک‌اند و دیتابیس هم دارد و احراز هویت هم در آن انجام شده است.
با استفاده از همین ساختار یک مینی‌اپ تلگرامی برایم بساز که:

(اینجا اپ را شرح بدهید)

در نهایت کل پروژه رو به صورت یک فایل zip بهم تحویل بده
نکته‌ها:
۱. ساختار فایل wrangler.jsonc را دقیقاً به همین شکل نگه دار و چیزی به آن اضافه یا از آن کم نکن، چون موقع build ارور می‌دهد.
۲. فایل README.md را بر اساس اپلیکیشنم خیلی ساده بنویس.
۳. دیتابیس روی Cloudflare از نوع D1 (SQLite) است و روی لوکال هم SQLite.
۴.رمز ها و کد های امنیتی در حالت پروداکشن  همه توی varibale های secret ورکر کلودفلر هستند
```

۴. فایل zip را دانلود و از حالت فشرده خارج کنید.

## دیپلوی

۵. وارد داشبورد Cloudflare شوید:
   - به **Storage & Databases > D1 SQL Database** بروید.
   - یک دیتابیس بسازید.
   - نام دیتابیس و `database_id` را در فایل `wrangler.jsonc` قرار دهید.

۶. یک ریپوی **خصوصی (private)** در گیتهاب بسازید.

۷. کد را روی ریپو push کنید. در پوشه‌ی اصلی پروژه (جایی که `package.json` هست) این دستورها را اجرا کنید:

```bash
git config --global credential.helper store
git init
git add .
git config --global user.name "your name"
git config --global user.email "youremail@gmail.com"
git commit -m "init"
git remote add origin https://github.com/<your-github-username>/<your-repo-name>
git branch -M main
git push -u origin main
```

   - موقع پرسیدن، نام کاربری گیتهاب را وارد کنید.
   - به‌جای پسورد باید یک **Classic Token** بسازید: [github.com/settings/tokens](https://github.com/settings/tokens)
   - در بخش Select scopes گزینه‌ی **repo** را انتخاب کنید و توکن را به‌جای پسورد وارد کنید.

۸. به Cloudflare برگردید و به **Workers & Pages** بروید:
   - یک Worker بسازید.
   - گیتهاب را متصل کنید.
   - ریپو را انتخاب کنید و منتظر بمانید تا بیلد تمام شود.

## تنظیم ربات تلگرام

۹. در تلگرام به [@BotFather](https://t.me/BotFather) بروید و یک ربات بسازید و توکن را بگیرید.
   - سپس در تنظیمات Worker به **Settings > Variables and Secrets** بروید.
   - یک متغیر اضافه کنید:
     - **Key:** `NUXT_TELEGRAM_BOT_TOKEN`
     - **Value:** توکن ربات
   - نوع آن را **Secret** بگذارید و ذخیره کنید.

۱۰. دوباره به BotFather برگردید و دستور `/mybots` را بفرستید:
   - ربات خود را انتخاب کنید و به **Bot Settings** بروید.
   - **Menu Button > Configure menu button**: آدرس Worker را وارد کنید (از **Settings > Domains & Routes** یا دکمه‌ی Visit در Worker) و یک عنوان بدهید.
   - به Bot Settings برگردید، به **Configure Mini App** بروید، آن را فعال کنید و همان آدرس را وارد کنید.
