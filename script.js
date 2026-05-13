const MOBILE_QUERY = "(max-width: 820px)";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const prefersLowMotionDevice = window.matchMedia(`(hover: none), (pointer: coarse), ${MOBILE_QUERY}`).matches;
const ENHANCEMENT_SCRIPTS = [
  "https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js",
  "https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js",
  "https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/bundled/lenis.min.js",
];
const sectionMoods = [
  {
    selector: ".hero",
    x: "18%",
    y: "17%",
    a: "rgba(255, 180, 94, 0.2)",
    b: "rgba(57, 213, 192, 0.06)",
  },
  {
    selector: ".reel",
    x: "82%",
    y: "24%",
    a: "rgba(255, 224, 163, 0.15)",
    b: "rgba(255, 180, 94, 0.09)",
  },
  {
    selector: ".manifesto",
    x: "24%",
    y: "48%",
    a: "rgba(57, 213, 192, 0.1)",
    b: "rgba(255, 224, 163, 0.09)",
  },
  {
    selector: ".signature",
    x: "72%",
    y: "42%",
    a: "rgba(255, 180, 94, 0.17)",
    b: "rgba(255, 224, 163, 0.08)",
  },
  {
    selector: ".work",
    x: "18%",
    y: "58%",
    a: "rgba(255, 180, 94, 0.22)",
    b: "rgba(57, 213, 192, 0.07)",
  },
  {
    selector: ".capabilities",
    x: "80%",
    y: "56%",
    a: "rgba(255, 224, 163, 0.14)",
    b: "rgba(57, 213, 192, 0.1)",
  },
  {
    selector: ".process",
    x: "28%",
    y: "68%",
    a: "rgba(57, 213, 192, 0.11)",
    b: "rgba(255, 180, 94, 0.08)",
  },
  {
    selector: ".about",
    x: "74%",
    y: "70%",
    a: "rgba(255, 224, 163, 0.16)",
    b: "rgba(255, 180, 94, 0.08)",
  },
  {
    selector: ".contact",
    x: "50%",
    y: "82%",
    a: "rgba(255, 180, 94, 0.2)",
    b: "rgba(255, 224, 163, 0.09)",
  },
];
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const languages = {
  fa: {
    lang: "fa",
    dir: "rtl",
    title: "سیامک دهبکری، مدیر برند و کارگردان تبلیغاتی",
    meta: "سیامک دهبکری، مدیر برند و کارگردان تبلیغاتی",
    content: {
      brand: { name: "سیامک دهبکری" },
      nav: { work: "کارها", method: "روش", identity: "نگاه", contact: "تماس" },
      hero: {
        eyebrow: "مدیر برند / کارگردان تبلیغاتی",
        title: ["سیامک", "دهبکری", "ادراک برند را", "دقیق‌تر می‌سازد."],
        body:
          "وقتی ظاهر کافی نیست، کار از جایگاه، لحن، تصویر و فیلم شروع می‌شود؛ تا برند پیش از توضیح، درست فهمیده شود.",
        primaryCta: "دیدن کارها",
        secondaryCta: "خواندن نگاه",
        caption: "سیامک / برند / فیلم / ادراک",
        metricOneLabel: "برند",
        metricOne: "جایگاه روشن",
        metricTwoLabel: "فیلم",
        metricTwo: "حس کنترل‌شده",
        metricThreeLabel: "اثر",
        metricThree: "یادآوری ماندگار",
      },
      reel: {
        items: [
          { index: "01", title: "منطق برند", body: "جایگاه، پیام و لحن وقتی ارزش دارند که تصمیم‌های روزمره برند را دقیق‌تر کنند." },
          { index: "02", title: "کارگردانی تبلیغاتی", body: "فیلمی که با فشار نمی‌فروشد؛ انتخاب را طبیعی‌تر و قابل‌باورتر می‌کند." },
          { index: "03", title: "طراحی برداشت", body: "هماهنگ کردن تصویر، کلمه و تجربه تا برند یک برداشت روشن بسازد." },
        ],
      },
      manifesto: {
        kicker: "01 / اصل کار",
        title: "برند وقتی جدی می‌شود که هر خروجی به یک برداشت مشترک برسد.",
        body:
          "لوگو، رنگ، کلمه و فیلم جدا از هم اثر نمی‌گذارند. ارزش آن‌ها وقتی شروع می‌شود که یک تصمیم مشخص را تقویت کنند. کار سیامک ساختن همین انسجام است: دقیق، کم‌اضافه، قابل اعتماد.",
      },
      signature: {
        kicker: "02 / امضا",
        title: "استراتژی با چشم تصویر. فیلم با منطق برند.",
        items: [
          {
            label: "برند",
            title: "منطق برند",
            body: "جایگاه، پیام و لحن را به ابزار تصمیم‌گیری تبدیل می‌کند.",
          },
          {
            label: "فیلم",
            title: "کارگردانی تبلیغاتی",
            body: "ایده، سناریو، قاب و ریتم را در خدمت حس برند قرار می‌دهد.",
          },
          {
            label: "ادراک",
            title: "طراحی برداشت",
            body: "تصویر، کلمه و تجربه را به یک برداشت روشن وصل می‌کند.",
          },
        ],
      },
      work: {
        kicker: "03 / پروژه‌ها",
        title: "کارهایی برای واضح‌تر دیده شدن؛ نه بلندتر، نه شلوغ‌تر.",
        open: "مشاهده کیس",
      },
      capabilities: {
        kicker: "04 / خدمات دقیق",
        title: "خدماتی برای اینکه برند دقیق‌تر دیده، فهمیده و انتخاب شود.",
        items: [
          {
            title: "استراتژی برند",
            body: "تعیین جایگاه، مخاطب، تفاوت و پیام مرکزی؛ تا برند بداند چه بگوید و چه چیزی را حذف کند.",
          },
          {
            title: "هویت بصری",
            body: "ساختن زبان دیداری که اجراها را یکدست، قابل تشخیص و قابل کنترل نگه دارد.",
          },
          {
            title: "فیلم تبلیغاتی",
            body: "تبدیل مزیت برند به روایت، قاب و ریتمی که دلیل انتخاب را روشن کند.",
          },
          {
            title: "کمپین و لانچ",
            body: "طراحی مسیر انتشار، پیام و محتوا برای اینکه کمپین پراکنده دیده نشود.",
          },
        ],
      },
      method: {
        kicker: "05 / روش کار",
        items: [
          { title: "کشف", body: "مسئله واقعی را از پشت درخواست بیرون می‌آوریم." },
          { title: "تمرکز", body: "یک تصمیم مرکزی می‌سازیم و اضافه‌ها را حذف می‌کنیم." },
          { title: "کارگردانی", body: "تصمیم را به کلمه، تصویر، صحنه و ریتم تبدیل می‌کنیم." },
          { title: "انتشار", body: "خروجی‌ها با نظم منتشر می‌شوند تا برند واضح‌تر دیده شود." },
        ],
      },
      identity: {
        kicker: "06 / بیانیه هویت خلاق",
        title: "برند برای تزئین نیست؛ باید فهمیده، انتخاب و به‌یاد آورده شود.",
        paragraphs: [
          "سیامک دهبکری در نقطه‌ای کار می‌کند که استراتژی برند، تصویر، فیلم و اجرا به هم می‌رسند. تمرکز او ساختن برندی است که فقط دیده نشود؛ درست دیده شود.",
          "تجربه او از هلدینگ‌های صنعتی و برندهای مصرفی تا آموزش آنلاین، ابزار، هوش مصنوعی، تولید محتوا و کمپین‌های فروش امتداد دارد.",
          "او به جای اضافه کردن نشانه‌های بیشتر، معنا را دقیق‌تر می‌کند. هر کلمه، قاب و حرکت باید به یک برداشت روشن از برند کمک کند.",
        ],
        experienceKicker: "همکاری‌ها و نقش‌های منتخب",
        experienceItems: [
          { name: "صنایع توسعه شهد آذربایجان", role: "مدیر برند هلدینگ" },
          { name: "مدرسه آنلاین کوردیا", role: "مدیر برند، استراتژیست و ویدیوگرافر" },
          { name: "نیاز کالا", role: "مدیر برند و استراتژیست" },
          { name: "میکاپ رز / آراز زاگرس", role: "برند آرتیست و طراح کمپین فروش" },
          { name: "شرکت هوش مصنوعی زبرا کت", role: "UI Motion Designer و Editor" },
          { name: "رونیکس", role: "تدوینگر" },
          { name: "Gusscoinc", role: "تدوینگر و کارگردان تبلیغاتی" },
          { name: "Elegant Hoopoe", role: "تدوینگر و موشن دیزاینر" },
          { name: "Finland Q", role: "تدوینگر" },
          { name: "Rupak Production", role: "تدوینگر" },
          { name: "لیتاما", role: "برند آرتیست" },
          { name: "مرغ هوگر", role: "برند آرتیست" },
        ],
      },
      contact: {
        kicker: "07 / تماس",
        title: "اگر برند باید دقیق‌تر دیده شود، از اینجا شروع کنیم.",
        note: "برای همکاری، معرفی برند یا ساخت فیلم تبلیغاتی پیام بدهید.",
        phone: "+۹۸۹۱۲۹۳۷۶۸۴۷",
      },
      case: {
        inPage: "مشاهده در همین صفحه",
        challenge: "مسئله",
        strategy: "تصمیم استراتژیک",
        direction: "جهت خلاق",
        execution: "اجرا",
        outcome: "اثر",
      },
      footer: {
        name: "سیامک دهبکری",
        role: "مدیر برند و کارگردان تبلیغاتی",
      },
    },
  },
  ku: {
    lang: "ku",
    dir: "rtl",
    title: "سیامه‌ک دیبوکری، بەڕێوەبەری براند و دەرهێنەری فیلمی ڕیکلامی",
    meta: "سیامه‌ک دیبوکری، بەڕێوەبەری براند و دەرهێنەری فیلمی ڕیکلامی",
    content: {
      brand: { name: "سیامه‌ک دیبوکری" },
      nav: { work: "کارەکان", method: "ڕێباز", identity: "دید", contact: "پەیوەندی" },
      hero: {
        eyebrow: "بەڕێوەبەری براند / دەرهێنەری فیلمی ڕیکلامی",
        title: ["سیامه‌ک", "دیبوکری", "هەستپێکردنی براند", "وردتر دەکات."],
        body:
          "کاتێک ڕووکار بەس نییە، کار لە جێگە، تۆن، وێنە و فیلم دەست پێدەکات؛ بۆ ئەوەی براند پێش ڕوونکردنەوە تێبگەیەنرێت.",
        primaryCta: "بینینی کارەکان",
        secondaryCta: "خوێندنەوەی دید",
        caption: "سیامه‌ک / براند / فیلم / هەستپێکردن",
        metricOneLabel: "براند",
        metricOne: "جێگەی ڕوون",
        metricTwoLabel: "هەست",
        metricTwo: "هەستی کۆنترۆڵکراو",
        metricThreeLabel: "کاریگەری",
        metricThree: "لەبیرماندنی ماوەدار",
      },
      reel: {
        items: [
          { index: "01", title: "لۆژیکی براند", body: "جێگە، پەیام و تۆن کاتێک بەهادارن کە بڕیارە ڕۆژانەکانی براند وردتر بکەن." },
          { index: "02", title: "دەرهێنانی ڕیکلامی", body: "فیلمێک کە بە فشار نافرۆشێت؛ هەڵبژاردن ڕوونتر و باوەڕپێکراوتر دەکات." },
          { index: "03", title: "داڕشتنی وەرگرتن", body: "هاوهەنگکردنی وێنە، وشە و ئەزموون بۆ ئەوەی براند وەرگرتنێکی ڕوون دروست بکات." },
        ],
      },
      manifesto: {
        kicker: "01 / بنەمای کار",
        title: "براند کاتێک جدی دەبێت کە هەر دەرچوونێک بگاتە هەمان وەرگرتن.",
        body:
          "لۆگۆ، ڕەنگ، وشە و فیلم بە تەنیا کاریگەری دروست ناکەن. بەهایان لەو کاتە دەست پێدەکات کە بڕیارێکی ڕوون بەهێز بکەن. کاری سیامه‌ک دروستکردنی ئەو هاوهەنگییەیە: ورد، کەم‌زیادە، متمانەپێکراو.",
      },
      signature: {
        kicker: "02 / واژۆ",
        title: "ستراتیژی بە چاوی وێنە. فیلم بە لۆژیکی براند.",
        items: [
          {
            label: "براند",
            title: "لۆژیکی براند",
            body: "جێگە، پەیام و تۆن دەبنە ئامرازی بڕیاردان.",
          },
          {
            label: "فیلم",
            title: "دەرهێنانی ڕیکلامی",
            body: "بیرۆکە، سیناریۆ، چوارچێوە و ڕیتم دەخاتە خزمەتی هەستی براند.",
          },
          {
            label: "هەستپێکردن",
            title: "داڕشتنی وەرگرتن",
            body: "وێنە، وشە و ئەزموون دەگەیەنێتە وەرگرتنێکی ڕوون.",
          },
        ],
      },
      work: {
        kicker: "03 / کارەکان",
        title: "کارەکان بۆ ئەوەی براند ڕوونتر ببینرێت؛ نە دەنگدارتر، نە شلوغتر.",
        open: "بینینی کیس",
      },
      capabilities: {
        kicker: "04 / خزمەتگوزارییە وردەکان",
        title: "خزمەتگوزارییەکان بۆ ئەوەی براند وردتر ببینرێت، تێبگەیەنرێت و هەڵبژێردرێت.",
        items: [
          {
            title: "ستراتیژی براند",
            body: "دیاریکردنی جێگە، بینەر، جیاوازی و پەیامی ناوەندی؛ بۆ ئەوەی براند بزانێت چی بڵێت و چی لاببات.",
          },
          {
            title: "ناسنامەی بینراو",
            body: "دروستکردنی زمانێکی بینراو کە جێبەجێکردنەکان یەکدەست، ناسراو و کۆنترۆڵکراو بهێڵێتەوە.",
          },
          {
            title: "فیلمی ڕیکلامی",
            body: "گۆڕینی بەهێزی براند بۆ گێڕانەوە، چوارچێوە و ڕیتمێک کە هۆکاری هەڵبژاردن ڕوون بکات.",
          },
          {
            title: "کەمپەین و لانچ",
            body: "دیزاینی ڕێڕەوی بڵاوکردنەوە، پەیام و ناوەڕۆک بۆ ئەوەی کەمپەین پەرشوباڵاو نەبینرێت.",
          },
        ],
      },
      method: {
        kicker: "05 / ڕێبازی کار",
        items: [
          { title: "دۆزینەوە", body: "کێشەی ڕاستەقینە لە پشت داواکارییەکە دەردەهێنین." },
          { title: "چڕکردنەوە", body: "بڕیارێکی ناوەندی دیاری دەکەین و زیادەکان لادەبەین." },
          { title: "دەرهێنان", body: "بڕیارەکە دەگۆڕین بۆ وشە، وێنە، صحنە و ڕیتم." },
          { title: "بڵاوکردنەوە", body: "دەرچوونەکان بە ڕێکخستنی ورد بڵاو دەبنەوە تا براند ڕوونتر ببینرێت." },
        ],
      },
      identity: {
        kicker: "06 / بیانی ناسنامەی داهێنەرانە",
        title: "براند بۆ ڕازاندنەوە نییە؛ دەبێت تێبگەیەنرێت، هەڵبژێردرێت و لەبیر بمێنێتەوە.",
        paragraphs: [
          "سیامه‌ک دیبوکری لەو خاڵەدا کار دەکات کە ستراتیژیی براند، وێنە، فیلم و جێبەجێکردن یەک دەگرن. سەرنجی ئەو تەنها بینراوبوونی براند نییە؛ بەڵکوو بە دروستی بینراوبوونیەتی.",
          "ئەزموونی لە هۆڵدینگە پیشەسازییەکان و براندە بازاڕییەکانەوە تا فێرکاریی ئۆنلاین، ئامراز، زیرەکی دەستکرد، بەرهەمهێنانی ناوەڕۆک و کەمپەینی فرۆشتن دەڕوات.",
          "لە جیاتی زیادکردنی نیشانەی زیاتر، واتا وردتر دەکات. هەر وشە، چوارچێوە و جووڵە دەبێت یارمەتیی وەرگرتنێکی ڕوونتری براند بدات.",
        ],
        experienceKicker: "هاوکاری و ڕۆڵە هەڵبژێردراوەکان",
        experienceItems: [
          { name: "صنایع توسعه شهد آذربایجان", role: "بەڕێوەبەری براندی هۆڵدینگ" },
          { name: "قوتابخانەی ئۆنلاین کوردیا", role: "بەڕێوەبەری براند، ستراتیژیست و ڤیدیۆگرافەر" },
          { name: "نیاز کالا", role: "بەڕێوەبەری براند و ستراتیژیست" },
          { name: "میکاپ ڕۆز / ئاڕاز زاگرس", role: "براند ئارتیست و دیزاینەری کەمپەینی فرۆشتن" },
          { name: "کۆمپانیای زیرەکی دەستکردی زبرا کت", role: "UI Motion Designer و Editor" },
          { name: "رونیکس", role: "مۆنتاژکار" },
          { name: "Gusscoinc", role: "مۆنتاژکار و دەرهێنەری ڕیکلامی" },
          { name: "Elegant Hoopoe", role: "مۆنتاژکار و مووشن دیزاینەر" },
          { name: "Finland Q", role: "مۆنتاژکار" },
          { name: "Rupak Production", role: "مۆنتاژکار" },
          { name: "لیتاما", role: "براند ئارتیست" },
          { name: "مرغ هوگر", role: "براند ئارتیست" },
        ],
      },
      contact: {
        kicker: "07 / پەیوەندی",
        title: "ئەگەر براندەکە دەبێت ڕوونتر ببینرێت، لێرە دەست پێبکەین.",
        note: "بۆ هاوکاری، ناساندنی براند یان دروستکردنی فیلمی ڕیکلامی پەیام بنێرن.",
        phone: "+۹۸۹۱۲۹۳۷۶۸۴۷",
      },
      case: {
        inPage: "بینین لەم پەڕەیەدا",
        challenge: "کێشە",
        strategy: "بڕیاری ستراتیژیک",
        direction: "ئاڕاستەی داهێنەرانە",
        execution: "جێبەجێکردن",
        outcome: "کاریگەری",
      },
      footer: {
        name: "سیامه‌ک دیبوکری",
        role: "بەڕێوەبەری براند و دەرهێنەری فیلمی ڕیکلامی",
      },
    },
  },
  en: {
    lang: "en",
    dir: "ltr",
    title: "Siamak Dehbokri, Brand Director & Commercial Film Director",
    meta: "Siamak Dehbokri, Brand Director & Commercial Film Director",
    content: {
      brand: { name: "Siamak Dehbokri" },
      nav: { work: "Work", method: "Method", identity: "View", contact: "Contact" },
      hero: {
        eyebrow: "Brand Director / Commercial Film Director",
        title: ["Siamak", "Dehbokri", "sharpens how brands", "are perceived."],
        body:
          "When appearance is not enough, the work begins with position, tone, image, and film, so the brand is understood before it is explained.",
        primaryCta: "View the work",
        secondaryCta: "Read the view",
        caption: "Siamak / Brand / Film / Perception",
        metricOneLabel: "Brand",
        metricOne: "Clear position",
        metricTwoLabel: "Film",
        metricTwo: "Controlled feeling",
        metricThreeLabel: "Effect",
        metricThree: "Lasting memory",
      },
      reel: {
        items: [
          { index: "01", title: "Brand Logic", body: "Position, message, and tone matter when they make daily brand decisions sharper." },
          { index: "02", title: "Commercial Direction", body: "Film that does not pressure the sale; it makes the choice feel clearer and more believable." },
          { index: "03", title: "Perception Design", body: "Aligning image, words, and experience so the brand leaves a clear impression." },
        ],
      },
      manifesto: {
        kicker: "01 / Principle",
        title: "A brand becomes serious when every output leads to the same impression.",
        body:
          "Logos, colors, words, and films do not work in isolation. Their value begins when they support one clear decision. Siamak’s work is to build that coherence: precise, restrained, trustworthy.",
      },
      signature: {
        kicker: "02 / Signature",
        title: "Strategy with a visual eye. Film with brand logic.",
        items: [
          {
            label: "Brand",
            title: "Brand Logic",
            body: "Turning position, message, and tone into tools for decision-making.",
          },
          {
            label: "Film",
            title: "Commercial Direction",
            body: "Putting concept, script, frame, and rhythm in service of brand feeling.",
          },
          {
            label: "Perception",
            title: "Perception Design",
            body: "Connecting image, words, and experience into one clearer impression.",
          },
        ],
      },
      work: {
        kicker: "03 / Projects",
        title: "Work made for clearer perception, not louder surfaces.",
        open: "View case",
      },
      capabilities: {
        kicker: "04 / Exact Capabilities",
        title: "Capabilities that help the brand be seen, understood, and chosen with more precision.",
        items: [
          {
            title: "Brand Strategy",
            body: "Defining position, audience, difference, and core message, so the brand knows what to say and what to remove.",
          },
          {
            title: "Visual Identity",
            body: "Building a visual language that keeps executions consistent, recognizable, and controlled.",
          },
          {
            title: "Advertising Film",
            body: "Turning brand advantage into story, frame, and rhythm that clarify the reason to choose.",
          },
          {
            title: "Campaign & Launch",
            body: "Designing release, message, and content flow so the campaign does not feel scattered.",
          },
        ],
      },
      method: {
        kicker: "05 / Working Method",
        items: [
          { title: "Discover", body: "We find the real issue behind the brief." },
          { title: "Focus", body: "We define one central decision and remove the excess." },
          { title: "Direct", body: "We turn the decision into words, image, scene, and rhythm." },
          { title: "Release", body: "The outputs are released with discipline so the brand becomes clearer." },
        ],
      },
      identity: {
        kicker: "06 / Creative Identity Statement",
        title: "A brand is not decoration. It has to be understood, chosen, and remembered.",
        paragraphs: [
          "Siamak Dehbokri works where brand strategy, image, film, and execution meet. His focus is not only making a brand visible, but making it seen correctly.",
          "His experience spans industrial holdings, consumer brands, online education, tools, AI products, content production, and sales campaigns.",
          "Instead of adding more signs, he sharpens meaning. Every word, frame, and movement has to support a clearer brand impression.",
        ],
        experienceKicker: "Selected Roles & Collaborations",
        experienceItems: [
          { name: "Sanaye Tose'e Shahd Azarbaijan", role: "Holding Brand Director" },
          { name: "Kurdia Online School", role: "Brand Director, Strategist & Videographer" },
          { name: "Niaz Kala", role: "Brand Director & Strategist" },
          { name: "Makeup Roz / Araz Zagros", role: "Brand Artist & Sales Campaign Designer" },
          { name: "Zebra Cat AI", role: "UI Motion Designer & Editor" },
          { name: "Ronix", role: "Editor" },
          { name: "Gusscoinc", role: "Editor & Advertising Director" },
          { name: "Elegant Hoopoe", role: "Editor & Motion Designer" },
          { name: "Finland Q", role: "Editor" },
          { name: "Rupak Production", role: "Editor" },
          { name: "Litama", role: "Brand Artist" },
          { name: "Morgh Hooger", role: "Brand Artist" },
        ],
      },
      contact: {
        kicker: "07 / Contact",
        title: "If the brand needs to be seen more clearly, start here.",
        note: "Message for collaboration, brand introduction, or commercial film production.",
        phone: "+989129376847",
      },
      case: {
        inPage: "In-page case",
        challenge: "Problem",
        strategy: "Strategic Move",
        direction: "Creative Direction",
        execution: "Execution",
        outcome: "Effect",
      },
      footer: {
        name: "Siamak Dehbokri",
        role: "Brand Director & Commercial Film Director",
      },
    },
  },
};

const projects = [
  {
    id: "golfam-brand-direction",
    cover: "assets/project-cover-golfam.svg",
    image: "assets/project-golfam-tomato.jpg",
    imageWidth: 1280,
    imageHeight: 1600,
    gallery: ["assets/project-golfam-balsamic.jpg"],
    imageLayout: "portrait",
    year: "2024",
    tags: {
      fa: ["گلفام", "مدیریت برند", "FMCG"],
      ku: ["گۆلفام", "بەڕێوەبردنی براند", "FMCG"],
      en: ["Golfam", "Brand Direction", "FMCG"],
    },
    copy: {
      fa: {
        title: "گلفام؛ نظم برند در مقیاس هلدینگ",
        category: "مدیریت برند صنایع توسعه شهد آذربایجان",
        summary: "یکپارچه‌سازی لحن، تصویر و مسیر ارتباطی برای گلفام و برندهای غذایی هلدینگ.",
        intro: "سیامک دهبکری به مدت یک سال مدیر برند صنایع توسعه شهد آذربایجان بود؛ هلدینگی شامل گلفام، قند ارومیه، قند خوی، قند پیرانشهر، توتیا، شفاژن و فروشگاه‌های زنجیره‌ای ترقی.",
        challenge: "چند برند فعال، چند بازار و چند نوع مخاطب وجود داشت؛ اما زبان ارتباطی باید منظم‌تر و قابل تشخیص‌تر می‌شد.",
        strategy: "تمرکز روی معماری پیام، کنترل لحن تصویری و ساختن نظمی بود که هر خروجی را هم مستقل نشان بدهد و هم به اعتبار مجموعه اضافه کند.",
        direction: "برای گلفام، تصویر محصول باید مستقیم، اشتهابرانگیز و قابل اعتماد می‌بود؛ کمتر شلوغ، بیشتر متکی بر کیفیت، ماده اولیه و تشخیص سریع برند.",
        execution: "خروجی‌های تصویری، مسیر محتوا، زبان کمپین و ارائه محصول در کنار نیازهای فروش و ارتباطات سازمانی هماهنگ شد.",
        outcome: "برند منظم‌تر و حرفه‌ای‌تر دیده شد؛ به‌خصوص در دسته‌هایی مثل رب گوجه‌فرنگی گلفام و سرکه بالزامیک ترقی.",
      },
      ku: {
        title: "گۆلفام؛ ڕێکخستنی براند لە ئاستی هۆڵدینگ",
        category: "بەڕێوەبردنی براندی صنایع توسعه شهد آذربایجان",
        summary: "یەکخستنی تۆن، وێنە و ڕێڕەوی پەیوەندی بۆ گۆلفام و براندە خۆراکییەکانی هۆڵدینگ.",
        intro: "سیامه‌ک دیبوکری بۆ ماوەی ساڵێک بەڕێوەبەری براندی صنایع توسعه شهد آذربایجان بوو؛ هۆڵدینگێک کە گۆلفام، قەندی ورمێ، قەندی خۆی، قەندی پیرانشار، توتیا، شفاژن و فرۆشگاکانی زنجیرەیی ترقی لەخۆدەگرێت.",
        challenge: "چەند براند، چەند بازاڕ و چەند جۆر بینەر هەبوو؛ بەڵام زمانی پەیوەندی پێویستی بە ڕێکخستن و ناسراوبوونی زیاتر هەبوو.",
        strategy: "سەرنج لەسەر پێکهاتەی پەیام، کۆنترۆڵی تۆنی بینراو و ڕێکخستنێک بوو کە هەر دەرچوونێک سەربەخۆ ببینرێت و هاوکات متمانەی کۆمەڵەکە زیاد بکات.",
        direction: "بۆ گۆلفام، وێنەی بەرهەم دەبوو ڕاستەوخۆ، ئارەزووبەخش و متمانەپێکراو بێت؛ کەمتر شلوغ و زیاتر پشت بە کوالیتی، مادەی سەرەکی و ناسینەوەی خێرای براند ببەستێت.",
        execution: "دەرچوونە بینراوەکان، ڕێڕەوی ناوەڕۆک، زمانی کەمپەین و پێشکەشکردنی بەرهەم لەگەڵ پێویستییەکانی فرۆشتن و پەیوەندیی ڕێکخراویدا هاوهەنگ کران.",
        outcome: "براند ڕێکخراوتر و پیشەیی‌تر بینرا؛ بە تایبەتی لە بەشەکانی وەک رب گوجه‌فرنگی گۆلفام و سرکەی بالزامیکی ترقی.",
      },
      en: {
        title: "Golfam; Brand Discipline at Holding Scale",
        category: "Brand Direction for Sanaye Tose'e Shahd Azarbaijan",
        summary: "Unifying tone, imagery, and communication flow across Golfam and the holding’s food brands.",
        intro: "Siamak Dehbokri served for one year as Brand Director of Sanaye Tose'e Shahd Azarbaijan, a holding including Golfam, Qand Urmia, Qand Khoy, Qand Piranshahr, Tootia, Shafazhen, and Taraghi chain stores.",
        challenge: "Several active brands, markets, and audiences were involved; the communication language needed to become more disciplined and recognizable.",
        strategy: "The work focused on message architecture, visual tone control, and a system where every output could stand alone while strengthening the holding’s credibility.",
        direction: "For Golfam, product imagery had to feel direct, appetizing, and trustworthy; less noise, more quality, ingredient clarity, and instant brand recognition.",
        execution: "Visual outputs, content direction, campaign language, and product presentation were coordinated alongside sales and corporate communication needs.",
        outcome: "The brand appeared more disciplined and professional, especially across products such as Golfam tomato paste and Taraghi balsamic vinegar.",
      },
    },
  },
  {
    id: "niaz-brand-art-house",
    cover: "assets/project-cover-niaz.svg",
    image: "assets/project-niaz-cover.jpg",
    imageWidth: 1440,
    imageHeight: 1000,
    gallery: ["assets/project-niaz-packaging.jpg"],
    year: "2024",
    tags: {
      fa: ["نیاز", "برندینگ", "آرت‌هاوس"],
      ku: ["نیاز", "براندینگ", "ئارت‌هاوس"],
      en: ["Niaz", "Branding", "Art House"],
    },
    copy: {
      fa: {
        title: "نیاز؛ لوکس‌سازی یک برداشت",
        category: "مدیریت برندینگ، طراحی و عکاسی محصول",
        summary: "هدایت برندینگ، بسته‌بندی، آرت‌هاوس و عکاسی محصول برای ساخت تصویری آرام و قابل تشخیص.",
        intro: "نیاز برای ساخت یک زبان دیداری لوکس در دسته عطر و پرفیوم شکل گرفت؛ جایی که بسته‌بندی، فرم، رنگ و عکاسی باید یک برداشت واحد بسازند.",
        challenge: "در عطر، برداشت از کیفیت قبل از بو شکل می‌گیرد. بسته‌بندی و تصویر باید سطح برند را پیش از تجربه فیزیکی محصول منتقل می‌کردند.",
        strategy: "مسیر کار روی یک کد تصویری مشخص بنا شد: آبی عمیق، طلایی کنترل‌شده، فرم‌های نرم و فضایی آرام که محصول را دقیق، نه پر سر و صدا، نشان دهد.",
        direction: "آرت‌هاوس پروژه با تمرکز روی خویشتن‌داری لوکس، نورپردازی آرام، قاب‌های تمیز و جزئیات بسته‌بندی هدایت شد.",
        execution: "مسیر برندینگ، هماهنگی طراحی، کنترل خروجی‌های بسته‌بندی، ران‌کردن تیم آرت‌هاوس و عکاسی محصول در یک زبان مشترک انجام شد.",
        outcome: "خروجی نهایی به نیاز حضوری آرام، لوکس و قابل اعتماد داد؛ تصویری که در بسته‌بندی و عکاسی، یک زبان مشترک دارد.",
      },
      ku: {
        title: "نیاز؛ شێوەدانی وەرگرتنێکی لوکس",
        category: "بەڕێوەبردنی براندینگ، دیزاین و وێنەگرتنی بەرهەم",
        summary: "ڕێبەری براندینگ، پاکێجینگ، ئارت‌هاوس و وێنەگرتنی بەرهەم بۆ دروستکردنی وێنەیەکی هێمن و ناسراو.",
        intro: "نیاز بۆ دروستکردنی زمانێکی بینراوی لوکس لە جۆری عەتر و پرفیومدا شکل گرت؛ ئەو شوێنەی پاکێجینگ، فۆرم، ڕەنگ و وێنە دەبێت وەرگرتنێکی یەکگرتوو بسازن.",
        challenge: "لە عەتر، وەرگرتنی کوالیتی پێش بۆن دروست دەبێت. پاکێجینگ و وێنە دەبوو ئاستی براند پێش ئەزموونی فیزیکی بەرهەم بگوازنەوە.",
        strategy: "ڕێڕەوی کار لەسەر کۆدێکی بینراوی دیاریکراو دانرا: شینی قووڵ، زێڕی کۆنترۆڵکراو، فۆرمە نەرمان و فضاییەکی هێمن کە بەرهەم بە وردی، نە بە دەنگی زۆر، نیشان بدات.",
        direction: "ئارت‌هاوسی پروژه بە سەرنج لەسەر خۆڕاگریی لوکس، ڕووناکیی هێمن، قابی پاک و وردەکاریی پاکێجینگ ڕێبەری کرا.",
        execution: "ڕێڕەوی براندینگ، هاوهەنگی دیزاین، کۆنترۆڵی دەرچوونەکانی پاکێجینگ، ڕانکردنی تیمی ئارت‌هاوس و وێنەگرتنی بەرهەم لە زمانێکی هاوبەشدا ئەنجام درا.",
        outcome: "دەرچوونی کۆتایی بە نیاز ئامادەبوونێکی هێمن، لوکس و متمانەپێکراو دا؛ وێنەیەک کە لە پاکێجینگ و وێنەگرتندا زمانێکی هاوبەشی هەیە.",
      },
      en: {
        title: "Niaz; Shaping a Premium Impression",
        category: "Branding Direction, Design & Product Photography",
        summary: "Directing branding, packaging, art house production, and product photography into a calm, recognizable image.",
        intro: "Niaz was shaped to build a premium visual language for perfume, where packaging, form, color, and photography had to create one controlled impression.",
        challenge: "In fragrance, perceived quality begins before scent. The packaging and imagery had to communicate the brand’s level before the product was physically experienced.",
        strategy: "The system was built around a clear visual code: deep blue, restrained gold, soft forms, and a quiet space that lets the product feel precise rather than loud.",
        direction: "The art house direction focused on luxury restraint, calm lighting, clean framing, and packaging details.",
        execution: "Branding direction, design coordination, packaging output control, art house production, and product photography were guided through one shared language.",
        outcome: "The final work gave Niaz a calm, premium, and trustworthy presence, with one shared language across packaging and photography.",
      },
    },
  },
  {
    id: "makeuproz-sales-campaign",
    cover: "assets/project-cover-makeuproz.svg",
    image: "assets/project-makeuproz-blue.jpg",
    imageWidth: 1200,
    imageHeight: 1200,
    gallery: ["assets/project-makeuproz-gold.jpg", "assets/project-makeuproz-pink.jpg"],
    year: "2024",
    tags: {
      fa: ["میکاپ رز", "کمپین فروش", "بهداشت"],
      ku: ["میکاپ ڕۆز", "کەمپەینی فرۆشتن", "تەندروستی"],
      en: ["Makeup Roz", "Sales Campaign", "Health"],
    },
    copy: {
      fa: {
        title: "میکاپ رز؛ فروش بدون افت برند",
        category: "طراحی کمپین فروش برندینگ‌محور",
        summary: "طراحی کمپین فروش برای آراز زاگرس با تمرکز بر وضوح پیشنهاد، نظم بسته‌بندی و حفظ تصویر سلامت‌محور برند.",
        intro: "میکاپ رز در حوزه بهداشتی و سلامتی به کمپینی نیاز داشت که فروش را فعال کند، اما برند را به یک پیشنهاد ارزان یا صرفاً تخفیفی تقلیل ندهد.",
        challenge: "کمپین‌های فروش معمولاً با عدد و پیشنهاد شروع می‌شوند و برند را عقب می‌برند. چالش این بود که ارزش بیشتر دیده شود، بدون اینکه تصویر سلامت‌محور محصول آسیب ببیند.",
        strategy: "پیشنهاد فروش در مرکز کار بود، اما زبان بصری اجازه نداد برند فقط به تخفیف تقلیل پیدا کند.",
        direction: "رنگ‌بندی، بسته‌بندی، قاب محصول و زبان پیام طوری هدایت شد که حس بهداشت، نظم، هدیه و دسترسی سریع را منتقل کند.",
        execution: "طراحی کمپین، ساختار پیام، بسته‌بندی، نسخه‌های رنگی محصول و خروجی‌های فروش در یک مسیر برندینگ‌محور هماهنگ شد.",
        outcome: "کمپین پیشنهاد فروش را واضح‌تر کرد و هم‌زمان میکاپ رز را منظم‌تر، قابل اعتمادتر و سلامت‌محورتر نشان داد.",
      },
      ku: {
        title: "میکاپ ڕۆز؛ فرۆشتن بەبێ کەمبوونی بەهای براند",
        category: "دیزاینی کەمپەینی فرۆشتنی براندینگ‌محور",
        summary: "کەمپەینی فرۆشتن بۆ ئاڕاز زاگرس بە سەرنج لەسەر ڕوونیی پێشنیار، ڕێکخستنی پاکێجینگ و پاراستنی وێنەی تەندروستی‌محوری براند.",
        intro: "میکاپ ڕۆز لە بواری پاکوخاوێنی و تەندروستیدا پێویستی بە کەمپەینێک هەبوو کە فرۆشتن چالاک بکات، بەڵام براند نەکاتە پێشنیارێکی هەرزان یان تەنها داشکاندن.",
        challenge: "کەمپەینەکانی فرۆشتن زۆرجار بە ژمارە و پێشنیار دەست پێدەکەن و براند لە دواوە دەهێڵن. کێشە ئەوە بوو بەهای زیاتر ڕوون بێت، بەبێ ئەوەی وێنەی تەندروستی‌محوری بەرهەم زیان ببینێت.",
        strategy: "پێشنیاری فرۆشتن لە ناوەنددا بوو، بەڵام زمانی بینراو ڕێی نەدا براند تەنها ببێتە داشکاندن.",
        direction: "ڕەنگ، پاکێجینگ، قابی بەرهەم و زمانی پەیام وەها ڕێبەری کران کە هەستی پاکوخاوێنی، ڕێکخستن، دیاری و دەستگەیشتنی خێرا بگوازنەوە.",
        execution: "دیزاینی کەمپەین، پێکهاتەی پەیام، پاکێجینگ، وەشانە ڕەنگاوڕەنگەکانی بەرهەم و دەرچوونەکانی فرۆشتن لە ڕێڕەوێکی براندینگ‌محوردا هاوهەنگ کران.",
        outcome: "کەمپەینەکە پێشنیاری فرۆشتن ڕوونتر کرد و هاوکات میکاپ ڕۆز ڕێکخراوتر، متمانەپێکراوتر و تەندروستی‌محورتر نیشان دا.",
      },
      en: {
        title: "Makeup Roz; Sales Without Losing Brand Value",
        category: "Brand-Led Sales Campaign Design",
        summary: "A sales campaign for Araz Zagros focused on offer clarity, packaging order, and protecting the brand’s health-led perception.",
        intro: "Makeup Roz needed a campaign that could activate sales without reducing the brand to a cheap offer or a purely discount-led message.",
        challenge: "Sales campaigns often begin with numbers and offers, pushing brand perception into the background. The challenge was to make the extra value visible without damaging the product’s health-led image.",
        strategy: "The sales offer was central, but the visual language prevented the brand from being reduced to a discount.",
        direction: "Color, packaging, product framing, and message hierarchy were directed to communicate hygiene, order, gifting, and quick access.",
        execution: "Campaign design, message structure, packaging, product color versions, and sales outputs were aligned into one brand-led system.",
        outcome: "The campaign made the offer clearer while presenting Makeup Roz as more organized, trustworthy, and health-led.",
      },
    },
  },
];

const mediaDimensions = {
  "assets/project-golfam-tomato.jpg": [1280, 1600],
  "assets/project-golfam-balsamic.jpg": [1120, 1400],
  "assets/project-niaz-cover.jpg": [1440, 1000],
  "assets/project-niaz-packaging.jpg": [760, 2649],
  "assets/project-makeuproz-blue.jpg": [1200, 1200],
  "assets/project-makeuproz-gold.jpg": [1200, 1200],
  "assets/project-makeuproz-pink.jpg": [1200, 1200],
};

const accessibilityText = {
  fa: {
    navigation: "ناوبری اصلی",
    closeCase: "بستن کیس‌استادی",
    brandWhisper: "نام کافی نیست؛ باید درست دیده شد.",
    galleryPrev: "تصویر قبلی",
    galleryNext: "تصویر بعدی",
    galleryGo: "نمایش تصویر",
    instagram: "اینستاگرام سیامک دهبکری",
    telegram: "تلگرام سیامک دهبکری",
    linkedin: "لینکدین سیامک دهبکری",
    egg: "لایه پنهان فعال شد؛ ادراک همیشه یک قدم جلوتر از توضیح است.",
  },
  ku: {
    navigation: "ناوبەری سەرەکی",
    closeCase: "داخستنی کیس",
    brandWhisper: "ناو بەس نییە؛ دەبێت بە دروستی ببینرێت.",
    galleryPrev: "وێنەی پێشوو",
    galleryNext: "وێنەی دواتر",
    galleryGo: "پیشاندانی وێنە",
    instagram: "ئینستاگرامی سیامه‌ک دیبوکری",
    telegram: "تێلەگرامی سیامه‌ک دیبوکری",
    linkedin: "لینکدینی سیامه‌ک دیبوکری",
    egg: "چینی شاراوە چالاک بوو؛ هەستپێکردن هەمیشە پێش ڕوونکردنەوەیە.",
  },
  en: {
    navigation: "Primary navigation",
    closeCase: "Close case study",
    brandWhisper: "A name is not enough. It has to be seen right.",
    galleryPrev: "Previous image",
    galleryNext: "Next image",
    galleryGo: "Show image",
    instagram: "Siamak Dehbokri on Instagram",
    telegram: "Siamak Dehbokri on Telegram",
    linkedin: "Siamak Dehbokri on LinkedIn",
    egg: "Hidden layer unlocked; perception always arrives before explanation.",
  },
};

let activeLanguage = "fa";
let lenis;
let hasRenderedOnce = false;
let lastFocusedElement = null;
let activeCaseGalleryIndex = 0;
let activeCaseGallerySlides = [];
let refreshActiveNavigation = () => {};
let refreshScrollProgress = () => {};
let refreshSectionMood = () => {};
let currentActiveNavHash = "";
let enhancementsRequested = false;
let enhancedMotionReady = false;
let mobileRevealObserver = null;

function getPath(source, path) {
  return path.split(".").reduce((value, key) => value?.[key], source);
}

function setText(selector, value) {
  const node = typeof selector === "string" ? $(selector) : selector;
  if (node) node.textContent = value || "";
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });
}

function renderStaticText() {
  const { content } = languages[activeLanguage];

  $$("[data-i18n]").forEach((node) => {
    setText(node, getPath(content, node.dataset.i18n));
  });

  $$("[data-i18n-lines]").forEach((node) => {
    const lines = getPath(content, node.dataset.i18nLines) || [];
    node.innerHTML = lines.map((line, index) => `<span style="--line-index: ${index}">${escapeHTML(line)}</span>`).join("");
  });
}

function renderCards() {
  const { content } = languages[activeLanguage];
  const reelTrack = $("[data-reel-track]");
  const signatureGrid = $("[data-signature-grid]");
  const capabilityGrid = $("[data-capability-grid]");
  const methodList = $("[data-method-list]");
  const identityCopy = $("[data-identity-copy]");
  const experienceList = $("[data-experience-list]");

  if (reelTrack) {
    reelTrack.innerHTML = content.reel.items
      .map(
        (item) => `
          <article class="reel-card" data-reveal>
            <span>${escapeHTML(item.index)}</span>
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.body)}</p>
          </article>
        `,
      )
      .join("");
  }

  if (signatureGrid) {
    signatureGrid.innerHTML = content.signature.items
      .map(
        (item, index) => `
          <article data-reveal>
            <span class="signature-index">${String(index + 1).padStart(2, "0")} / ${escapeHTML(item.label)}</span>
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.body)}</p>
          </article>
        `,
      )
      .join("");
  }

  if (capabilityGrid) {
    capabilityGrid.innerHTML = content.capabilities.items
      .map(
        (item, index) => `
          <article data-reveal>
            <span class="capability-index">${String(index + 1).padStart(2, "0")}</span>
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.body)}</p>
          </article>
        `,
      )
      .join("");
  }

  if (methodList) {
    methodList.innerHTML = content.method.items
      .map(
        (item) => `
          <div class="process-step" data-reveal>
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.body)}</p>
          </div>
        `,
      )
      .join("");
  }

  if (identityCopy) {
    identityCopy.innerHTML = content.identity.paragraphs
      .map((paragraph) => `<p data-reveal>${escapeHTML(paragraph)}</p>`)
      .join("");
  }

  if (experienceList) {
    experienceList.innerHTML = `
      <p class="experience-kicker" data-reveal>${escapeHTML(content.identity.experienceKicker)}</p>
      <div class="experience-grid">
        ${content.identity.experienceItems
          .map(
            (item) => `
              <article data-reveal>
                <h3>${escapeHTML(item.name)}</h3>
                <p>${escapeHTML(item.role)}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    `;
  }
}

function renderProjects() {
  const { content } = languages[activeLanguage];
  const list = $("[data-project-list]");
  if (!list) return;

  list.innerHTML = projects
    .map((project, index) => {
      const copy = project.copy[activeLanguage];
      const tags = (project.tags[activeLanguage] || project.tags.en)
        .map((tag) => `<span>${escapeHTML(tag)}</span>`)
        .join("");
      const title = escapeHTML(copy.title);
      const cover = escapeHTML((project.cover || project.image).replace(/['"()\\]/g, ""));
      const layoutClass = project.imageLayout === "portrait" ? "is-portrait" : "";
      return `
        <article class="project-card ${index % 2 ? "is-offset" : ""}" data-reveal>
          <button class="project-media ${layoutClass}" type="button" data-project-id="${project.id}" style="--project-cover-art: url('${cover}')" aria-label="${escapeHTML(content.work.open)}: ${title}">
            <img class="project-image" loading="lazy" decoding="async" width="${project.imageWidth || 1800}" height="${project.imageHeight || 1040}" src="${project.image}" alt="${title}" />
            <span class="project-cover-layer" aria-hidden="true"></span>
          </button>
          <div class="project-copy">
            <p class="project-eyebrow">${escapeHTML(copy.category)} / ${escapeHTML(project.year)}</p>
            <h3>${title}</h3>
            <p class="project-summary">${escapeHTML(copy.summary)}</p>
            <div class="project-meta">${tags}<span>${escapeHTML(content.work.open)}</span></div>
            <button class="project-open" type="button" data-project-id="${project.id}" aria-label="${escapeHTML(content.work.open)}: ${title}">
              ${escapeHTML(content.work.open)}
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  $$("[data-project-id]").forEach((button) => {
    button.addEventListener("click", () => openCaseStudy(button.dataset.projectId));
  });
}

function updateA11yLabels() {
  const labels = accessibilityText[activeLanguage] || accessibilityText.fa;
  const nav = $("[data-main-nav]");
  if (nav) nav.setAttribute("aria-label", labels.navigation);

  const brandWhisper = $("[data-brand-whisper]");
  if (brandWhisper) brandWhisper.textContent = labels.brandWhisper;

  $$("[data-close-case]").forEach((button) => {
    button.setAttribute("aria-label", labels.closeCase);
  });

  const socialLabels = {
    Instagram: labels.instagram,
    Telegram: labels.telegram,
    LinkedIn: labels.linkedin,
  };

  $$(".socials a").forEach((link) => {
    const label = socialLabels[link.textContent.trim()];
    if (label) link.setAttribute("aria-label", label);
  });
}

function updateLanguage(lang) {
  const nextLanguage = languages[lang] ? lang : "fa";
  if (hasRenderedOnce && nextLanguage === activeLanguage) return;

  const shouldAnimateLanguage = hasRenderedOnce && window.gsap && !prefersReducedMotion;
  if (shouldAnimateLanguage) {
    document.body.classList.add("is-language-switching");
    gsap.killTweensOf("main, .site-footer");
  }

  activeLanguage = nextLanguage;
  const language = languages[activeLanguage];
  const metaDescription = $('meta[name="description"]');

  document.documentElement.lang = language.lang;
  document.documentElement.dir = language.dir;
  document.body.classList.remove("lang-fa", "lang-ku", "lang-en");
  document.body.classList.add(`lang-${activeLanguage}`);
  document.title = language.title;
  if (metaDescription) metaDescription.content = language.meta;

  $$("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === activeLanguage);
    button.setAttribute("aria-pressed", button.dataset.lang === activeLanguage ? "true" : "false");
  });

  renderStaticText();
  renderCards();
  renderProjects();
  updateA11yLabels();
  initAnchorNavigation();
  initMotion(hasRenderedOnce);
  setActiveNav(location.hash || "#top");
  requestAnimationFrame(refreshActiveNavigation);
  hasRenderedOnce = true;

  if (shouldAnimateLanguage) {
    gsap.fromTo(
      "main, .site-footer",
      { autoAlpha: 0.64, y: 4 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.58,
        ease: "power2.out",
        onComplete: () => document.body.classList.remove("is-language-switching"),
      },
    );
  } else {
    document.body.classList.remove("is-language-switching");
  }

  try {
    localStorage.setItem("preferred-language", activeLanguage);
  } catch {
    // Storage may be disabled; language switching remains functional.
  }
}

function setActiveNav(hash) {
  const didChange = hash !== currentActiveNavHash;
  let activeLink = null;
  currentActiveNavHash = hash;

  $$(".nav a").forEach((link) => {
    const isCurrent = link.getAttribute("href") === hash;
    link.classList.toggle("is-current", isCurrent);

    if (isCurrent) {
      link.setAttribute("aria-current", "page");
      activeLink = link;
    } else {
      link.removeAttribute("aria-current");
    }
  });

  const nav = activeLink?.closest(".nav");
  const shouldCenterMobileNav =
    didChange && activeLink && nav && window.matchMedia(MOBILE_QUERY).matches && nav.scrollWidth > nav.clientWidth + 2;

  if (shouldCenterMobileNav) {
    activeLink.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }
}

function scrollToTarget(hash, updateHistory = true) {
  const target = document.getElementById(hash.slice(1));
  if (!target) return;

  if (updateHistory && location.hash !== hash) {
    history.pushState(null, "", hash);
  }

  setActiveNav(hash);

  if (lenis && !prefersReducedMotion) {
    const headerHeight = $(".site-header")?.getBoundingClientRect().height || 0;
    lenis.scrollTo(target, {
      offset: hash === "#top" ? 0 : -(headerHeight + 16),
      duration: 1.18,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });
    return;
  }

  target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
}

function initAnchorNavigation() {
  $$('a[href^="#"]').forEach((link) => {
    if (link.dataset.anchorReady) return;
    link.dataset.anchorReady = "true";

    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.getElementById(hash.slice(1));
      if (!target) return;
      event.preventDefault();
      if (event.detail > 0) link.blur();
      scrollToTarget(hash);
    });
  });
}

function initActiveNavigation() {
  const links = $$(".nav a");
  const sections = links
    .map((link) => ({
      hash: link.getAttribute("href"),
      node: document.getElementById(link.getAttribute("href").slice(1)),
    }))
    .filter((item) => item.node);

  if (!sections.length) return;

  let ticking = false;

  const update = () => {
    const headerHeight = $(".site-header")?.getBoundingClientRect().height || 0;
    const activationLine = headerHeight + window.innerHeight * 0.22;
    let activeHash = "#top";

    sections.forEach((section) => {
      if (section.node.getBoundingClientRect().top <= activationLine) {
        activeHash = section.hash;
      }
    });

    setActiveNav(activeHash);
    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  update();
  refreshActiveNavigation = requestUpdate;
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("hashchange", requestUpdate);
  lenis?.on("scroll", requestUpdate);
}

function initLanguage() {
  let storedLanguage = "fa";
  try {
    storedLanguage = localStorage.getItem("preferred-language") || "fa";
  } catch {
    storedLanguage = "fa";
  }

  $$("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => updateLanguage(button.dataset.lang));
  });

  updateLanguage(storedLanguage);
}

function initSmoothScroll() {
  if (lenis || prefersReducedMotion || prefersLowMotionDevice || !window.Lenis) return;

  lenis = new Lenis({
    duration: 1.36,
    easing: (t) => 1 - Math.pow(1 - t, 3.35),
    smoothWheel: true,
    syncTouch: false,
    wheelMultiplier: 0.78,
    touchMultiplier: 1,
  });

  if (window.gsap && window.ScrollTrigger) {
    lenis.on("scroll", ScrollTrigger.update);
    lenis.on("scroll", refreshActiveNavigation);
    lenis.on("scroll", refreshScrollProgress);
    lenis.on("scroll", refreshSectionMood);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    return;
  }

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

function loadScript(src) {
  const isLoaded = [...document.scripts].some((script) => script.src === src);
  if (isLoaded) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.fetchPriority = "low";
    script.onload = resolve;
    script.onerror = reject;
    document.head.append(script);
  });
}

function initDeferredEnhancements() {
  if (enhancementsRequested || prefersReducedMotion || prefersLowMotionDevice) return;
  enhancementsRequested = true;

  const loadEnhancements = () => {
    ENHANCEMENT_SCRIPTS.reduce((chain, src) => chain.then(() => loadScript(src)), Promise.resolve())
      .then(() => {
        initSmoothScroll();
        const shouldPlayIntro = !enhancedMotionReady && window.scrollY < 120 && (!location.hash || location.hash === "#top");
        enhancedMotionReady = true;
        initMotion(!shouldPlayIntro);
        requestAnimationFrame(refreshActiveNavigation);
        requestAnimationFrame(refreshScrollProgress);
        requestAnimationFrame(refreshSectionMood);
      })
      .catch(() => {});
  };

  const schedule = () => {
    requestAnimationFrame(() => window.setTimeout(loadEnhancements, 120));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", schedule, { once: true });
  } else {
    schedule();
  }
}

function initPointerGlow() {
  if (prefersReducedMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const orb = $(".cursor-orb");
  if (!orb) return;

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;
  let isActive = false;
  let frame = null;

  const render = () => {
    const deltaX = targetX - currentX;
    const deltaY = targetY - currentY;

    currentX += deltaX * 0.14;
    currentY += deltaY * 0.14;
    orb.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate3d(-50%, -50%, 0)`;
    frame = isActive && Math.abs(deltaX) + Math.abs(deltaY) > 0.24 ? requestAnimationFrame(render) : null;
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!isActive) {
        currentX = targetX;
        currentY = targetY;
        isActive = true;
        orb.classList.add("is-active");
      }

      if (!frame) frame = requestAnimationFrame(render);

      const eventTarget = event.target instanceof Element ? event.target : null;
      const hoverTarget = eventTarget?.closest(
        ".reel-card, .signature-grid article, .capability-grid article, .process-step, .project-copy, .project-media, .contact-panel",
      );

      if (hoverTarget) {
        const rect = hoverTarget.getBoundingClientRect();
        hoverTarget.style.setProperty("--hover-x", `${event.clientX - rect.left}px`);
        hoverTarget.style.setProperty("--hover-y", `${event.clientY - rect.top}px`);
      }
    },
    { passive: true },
  );

  window.addEventListener("pointerleave", () => {
    isActive = false;
    orb.classList.remove("is-active");
  });
}

function initScrollProgress() {
  const progress = $(".scroll-progress");
  if (!progress) return;

  let ticking = false;

  const render = () => {
    const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const value = Math.min(Math.max(window.scrollY / scrollable, 0), 1);
    progress.style.setProperty("--scroll-progress", `${value * 100}%`);
    ticking = false;
  };

  const requestRender = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(render);
  };

  render();
  refreshScrollProgress = requestRender;
  window.addEventListener("scroll", requestRender, { passive: true });
  window.addEventListener("resize", requestRender);
  lenis?.on("scroll", requestRender);
}

function isMobileRevealEnabled() {
  return !prefersReducedMotion && window.matchMedia("(max-width: 899px)").matches;
}

function isAlreadyInView(node) {
  const rect = node.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

function refreshMobileReveal() {
  const items = $$("main [data-reveal], main [data-split-title]");

  if (!isMobileRevealEnabled()) {
    document.body.classList.remove("mobile-motion-ready");
    mobileRevealObserver?.disconnect();
    mobileRevealObserver = null;
    items.forEach((item) => item.classList.add("is-revealed"));
    return;
  }

  document.body.classList.add("mobile-motion-ready");
  mobileRevealObserver?.disconnect();

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-revealed"));
    return;
  }

  mobileRevealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        mobileRevealObserver?.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
  );

  items.forEach((item, index) => {
    item.style.removeProperty("opacity");
    item.style.removeProperty("transform");
    item.style.setProperty("--reveal-delay", `${Math.min((index % 5) * 42, 168)}ms`);

    if (isAlreadyInView(item)) {
      item.classList.add("is-revealed");
    } else {
      item.classList.remove("is-revealed");
      mobileRevealObserver.observe(item);
    }
  });
}

function initMobileRevealSystem() {
  refreshMobileReveal();

  let ticking = false;
  window.addEventListener("resize", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      refreshMobileReveal();
    });
  });
}

function applySectionMood(section, mood) {
  if (!section || !mood) return;

  $$(".section-shell.is-focused-section").forEach((item) => {
    if (item !== section) item.classList.remove("is-focused-section");
  });

  section.classList.add("is-focused-section");
  document.body.style.setProperty("--mood-x", mood.x);
  document.body.style.setProperty("--mood-y", mood.y);
  document.body.style.setProperty("--mood-a", mood.a);
  document.body.style.setProperty("--mood-b", mood.b);
}

function initSectionMood() {
  const entries = sectionMoods
    .map((mood) => ({ mood, section: $(mood.selector) }))
    .filter(({ section }) => section);

  if (!entries.length) return;

  let ticking = false;
  let activeSection = null;

  const update = () => {
    const headerHeight = $(".site-header")?.getBoundingClientRect().height || 0;
    const focusLine = headerHeight + window.innerHeight * 0.34;
    let next = entries[0];

    entries.forEach((entry) => {
      if (entry.section.getBoundingClientRect().top <= focusLine) {
        next = entry;
      }
    });

    if (next.section !== activeSection) {
      activeSection = next.section;
      applySectionMood(next.section, next.mood);
    }

    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  update();
  refreshSectionMood = requestUpdate;
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("hashchange", requestUpdate);
  lenis?.on("scroll", requestUpdate);
}

function initMotion(refreshOnly = false) {
  if (!window.gsap || !window.ScrollTrigger || prefersReducedMotion) {
    if (isMobileRevealEnabled()) {
      refreshMobileReveal();
      return;
    }

    $$("[data-reveal]").forEach((item) => {
      item.style.opacity = 1;
      item.style.transform = "none";
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.killTweensOf("[data-reveal], .split-title span, .project-media img, section, .ambient, .hero-frame img, .reel-card, .signature-grid article, .capability-grid article");

  const isMobile = window.matchMedia(MOBILE_QUERY).matches;
  const isCompact = window.matchMedia("(max-width: 900px)").matches;

  if (isMobile) {
    gsap.set("[data-reveal], .site-header[data-reveal], .split-title span", {
      autoAlpha: 1,
      y: 0,
      yPercent: 0,
      clearProps: "transform",
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());
    return;
  }

  gsap.set("[data-reveal]", {
    autoAlpha: refreshOnly ? 1 : 0,
    y: refreshOnly ? 0 : 24,
  });

  gsap.set(".split-title span", {
    yPercent: refreshOnly ? 0 : 68,
    rotate: 0,
    autoAlpha: refreshOnly ? 1 : 0,
  });

  if (!refreshOnly) {
    gsap.to(".split-title span", {
      yPercent: 0,
      rotate: 0,
      autoAlpha: 1,
      duration: 1.42,
      stagger: 0.085,
      ease: "power3.out",
      delay: 0.12,
    });

    gsap.fromTo(
      ".hero-frame img",
      { scale: 1.045, yPercent: 1.4 },
      { scale: 1, yPercent: 0, duration: 1.7, ease: "power3.out", delay: 0.16 },
    );

    gsap.to(".ambient-a", {
      x: 54,
      y: 18,
      duration: 18,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".ambient-b", {
      x: -46,
      y: -24,
      duration: 22,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }

  ScrollTrigger.batch("[data-reveal]:not(.project-card)", {
    start: "top 87%",
    once: true,
    onEnter: (batch) => {
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: 1.14,
        stagger: 0.06,
        ease: "power3.out",
      });
    },
  });

  if (!refreshOnly && !isMobile) {
    gsap.to(".site-header[data-reveal]", {
      autoAlpha: 1,
      y: 0,
      duration: 0.85,
      ease: "power3.out",
      overwrite: true,
    });
  }

  $$(".project-card").forEach((card) => {
    const media = $(".project-media", card);
    const copy = $(".project-copy", card);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: isCompact ? "top 90%" : "top 84%",
        once: true,
      },
    });

    timeline.fromTo(
      card,
      { autoAlpha: 0, y: isCompact ? 18 : 28 },
      {
        autoAlpha: 1,
        y: 0,
        duration: isCompact ? 0.84 : 1.08,
        ease: "power3.out",
      },
    );

    if (!isCompact && media && copy) {
      timeline.fromTo(
        [media, copy],
        { y: 14 },
        {
          y: 0,
          duration: 0.78,
          stagger: 0.07,
          ease: "power2.out",
        },
        "<0.12",
      );
    }
  });

  if (!isCompact) {
    $$(".project-card").forEach((card) => {
      const images = $$(".project-image", card);
      if (!images.length) return;
      gsap.fromTo(
        images,
        { scale: 1.08, yPercent: 3 },
        {
          scale: 1.015,
          yPercent: -1.5,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.25,
          },
        },
      );
    });

    $$(".reel-card, .signature-grid article, .capability-grid article").forEach((card) => {
      gsap.fromTo(
        card,
        { y: 22, autoAlpha: 0.82 },
        {
          y: -6,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          },
        },
      );
    });
  }

  requestAnimationFrame(() => ScrollTrigger.refresh());
}

function getCaseFocusables() {
  const drawer = $("[data-case-study]");
  if (!drawer) return [];

  return $$(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    drawer,
  ).filter((node) => !node.disabled && node.offsetParent !== null);
}

function getMediaDimensions(src, fallback = [1800, 1040]) {
  return mediaDimensions[src] || fallback;
}

function getMediaOrientation(width, height) {
  const ratio = height / width;
  if (ratio > 1.65) return "is-tall";
  if (ratio > 1.08) return "is-portrait";
  if (width / height > 1.35) return "is-landscape";
  return "is-square";
}

function updateCaseGallery(index) {
  const gallery = $("[data-case-gallery]");
  const track = gallery ? $("[data-case-gallery-track]", gallery) : null;
  if (!gallery || !track || !activeCaseGallerySlides.length) return;

  activeCaseGalleryIndex = (index + activeCaseGallerySlides.length) % activeCaseGallerySlides.length;
  track.style.transform = `translate3d(${-activeCaseGalleryIndex * 100}%, 0, 0)`;

  $$("[data-case-slide-dot]", gallery).forEach((dot, dotIndex) => {
    const isActive = dotIndex === activeCaseGalleryIndex;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-current", isActive ? "true" : "false");
  });

  setText($("[data-case-gallery-count]", gallery), `${activeCaseGalleryIndex + 1} / ${activeCaseGallerySlides.length}`);
}

function renderCaseGallery(project, copy) {
  const gallery = $("[data-case-gallery]");
  if (!gallery) return;

  const labels = accessibilityText[activeLanguage] || accessibilityText.fa;
  activeCaseGalleryIndex = 0;
  activeCaseGallerySlides = [
    {
      src: project.image,
      width: project.imageWidth || getMediaDimensions(project.image)[0],
      height: project.imageHeight || getMediaDimensions(project.image)[1],
    },
    ...(project.gallery || []).map((src) => {
      const [width, height] = getMediaDimensions(src);
      return { src, width, height };
    }),
  ];

  gallery.className = "case-gallery";
  gallery.innerHTML = `
    <div class="case-gallery-viewport">
      <div class="case-gallery-track" data-case-gallery-track>
        ${activeCaseGallerySlides
          .map(
            (slide, index) => {
              const slideArt = escapeHTML(slide.src.replace(/['"()\\]/g, ""));
              const orientation = getMediaOrientation(slide.width, slide.height);
              return `
              <figure class="case-slide ${orientation}" style="--slide-art: url('${slideArt}')">
                <img
                  src="${escapeHTML(slide.src)}"
                  width="${slide.width}"
                  height="${slide.height}"
                  alt="${index === 0 ? escapeHTML(copy.title) : `${escapeHTML(copy.title)} ${index + 1}`}"
                  loading="${index === 0 ? "eager" : "lazy"}"
                  decoding="async"
                />
              </figure>
            `;
            },
          )
          .join("")}
      </div>
    </div>
    ${
      activeCaseGallerySlides.length > 1
        ? `
          <div class="case-gallery-controls">
            <button class="case-gallery-nav" type="button" data-case-slide-action="prev" aria-label="${escapeHTML(labels.galleryPrev)}">‹</button>
            <div class="case-gallery-dots">
              ${activeCaseGallerySlides
                .map(
                  (_, index) => `
                    <button
                      class="case-gallery-dot"
                      type="button"
                      data-case-slide-dot="${index}"
                      aria-label="${escapeHTML(labels.galleryGo)} ${index + 1}"
                    ></button>
                  `,
                )
                .join("")}
            </div>
            <button class="case-gallery-nav" type="button" data-case-slide-action="next" aria-label="${escapeHTML(labels.galleryNext)}">›</button>
            <span class="case-gallery-count" data-case-gallery-count></span>
          </div>
        `
        : ""
    }
  `;

  $$("[data-case-slide-action]", gallery).forEach((button) => {
    button.addEventListener("click", () => {
      updateCaseGallery(activeCaseGalleryIndex + (button.dataset.caseSlideAction === "next" ? 1 : -1));
    });
  });

  $$("[data-case-slide-dot]", gallery).forEach((button) => {
    button.addEventListener("click", () => {
      updateCaseGallery(Number(button.dataset.caseSlideDot || 0));
    });
  });

  updateCaseGallery(0);
}

function openCaseStudy(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  const copy = project.copy[activeLanguage];
  const labels = languages[activeLanguage].content.case;
  const drawer = $("[data-case-study]");
  const panel = $(".case-panel");
  const caseGrid = $("[data-case-grid]");
  if (!drawer || !panel || !caseGrid) return;

  const activeElement = document.activeElement;
  lastFocusedElement = activeElement instanceof HTMLElement && activeElement !== document.body ? activeElement : null;

  setText("[data-case-category]", copy.category);
  setText("[data-case-title]", copy.title);
  setText("[data-case-intro]", copy.intro);
  setText("[data-case-year]", project.year);

  renderCaseGallery(project, copy);
  panel.scrollTop = 0;

  caseGrid.innerHTML = [
    ["challenge", copy.challenge],
    ["strategy", copy.strategy],
    ["direction", copy.direction],
    ["execution", copy.execution],
    ["outcome", copy.outcome],
  ]
    .map(([key, value]) => `<section class="case-item"><h3>${escapeHTML(labels[key])}</h3><p>${escapeHTML(value)}</p></section>`)
    .join("");

  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-case-open");
  lenis?.stop();

  requestAnimationFrame(() => {
    panel.focus({ preventScroll: true });
  });

  if (window.gsap && !prefersReducedMotion) {
    gsap.fromTo(".case-backdrop", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.72, ease: "power2.out" });
    gsap.fromTo(
      ".case-panel",
      { autoAlpha: 0, y: 42, scale: 0.992 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.98, ease: "power3.out" },
    );
    gsap.fromTo(
      ".case-item",
      { autoAlpha: 0, y: 18 },
      { autoAlpha: 1, y: 0, duration: 0.82, stagger: 0.055, delay: 0.24, ease: "power2.out" },
    );
  }
}

function closeCaseStudy() {
  const drawer = $("[data-case-study]");
  if (!drawer) return;

  const close = () => {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-case-open");
    lenis?.start();
    lastFocusedElement?.focus?.({ preventScroll: true });
    lastFocusedElement = null;
    activeCaseGalleryIndex = 0;
    activeCaseGallerySlides = [];
  };

  if (window.gsap && !prefersReducedMotion) {
    gsap.to(".case-panel", { autoAlpha: 0, y: 32, scale: 0.992, duration: 0.48, ease: "power2.inOut" });
    gsap.to(".case-backdrop", { autoAlpha: 0, duration: 0.48, ease: "power2.inOut", onComplete: close });
  } else {
    close();
  }
}

function initSignatureDraw() {
  const signature = $("[data-signature-draw]");
  if (!signature) return;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    signature.classList.add("is-drawn");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        signature.classList.add("is-drawn");
        observer.disconnect();
      });
    },
    { rootMargin: "0px 0px -18% 0px", threshold: 0.28 },
  );

  observer.observe(signature);
}

function initEasterEgg() {
  const brand = $(".brand");
  const message = $("[data-easter-egg]");
  if (!brand || !message) return;

  let clickCount = 0;
  let resetTimer = null;
  let hideTimer = null;

  const showMessage = () => {
    const labels = accessibilityText[activeLanguage] || accessibilityText.fa;
    message.textContent = labels.egg;
    message.classList.add("is-visible");
    document.body.classList.add("egg-active");

    window.clearTimeout(hideTimer);
    hideTimer = window.setTimeout(() => {
      message.classList.remove("is-visible");
      document.body.classList.remove("egg-active");
    }, 3600);
  };

  brand.addEventListener("click", () => {
    clickCount += 1;
    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => {
      clickCount = 0;
    }, 1600);

    if (clickCount < 5) return;
    clickCount = 0;
    showMessage();
  });
}

function initCaseStudy() {
  $$("[data-close-case]").forEach((button) => button.addEventListener("click", closeCaseStudy));
  window.addEventListener("keydown", (event) => {
    const drawer = $("[data-case-study]");
    if (!drawer) return;
    if (!drawer.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeCaseStudy();
      return;
    }

    if (activeCaseGallerySlides.length > 1 && (event.key === "ArrowRight" || event.key === "ArrowLeft")) {
      event.preventDefault();
      updateCaseGallery(activeCaseGalleryIndex + (event.key === "ArrowRight" ? 1 : -1));
      return;
    }

    if (event.key !== "Tab") return;

    const focusables = getCaseFocusables();
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

initSmoothScroll();
initScrollProgress();
initCaseStudy();
initLanguage();
initAnchorNavigation();
initActiveNavigation();
initPointerGlow();
initMobileRevealSystem();
initSectionMood();
initSignatureDraw();
initEasterEgg();
initDeferredEnhancements();
