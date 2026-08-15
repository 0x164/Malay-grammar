(function () {
  const ui = {
    en: {
      course: "Course",
      patterns: "Patterns",
      review: "Review",
      brand: "Malay, plainly",
      pocketCourse: "Pocket course · BM grammar",
      homeIntro:
        "A phone-sized path through practical Malay grammar — rules, short dialogues, and checks. Progress stays on this device.",
      patternBox: "Pattern box",
      patternBoxHint: "Build common frames with your own word",
      cheatSheet: "Cheat sheet",
      cheatSheetHint: "Particles & negation on one screen",
      reviewHint: "Topics that tripped you up",
      about: "About",
      aboutHint: "How to use this course",
      resetProgress: "Reset progress",
      clearProgressConfirm: "Clear all progress on this device?",
      allTopics: "← All topics",
      done: "done",
      next: "Next",
      backToCourse: "Back to course",
      rule: "Rule",
      text: "Text",
      practice: "Practice",
      toolkit: "Toolkit",
      patternTitle: "Pattern box",
      patternIntro:
        "Type a Malay word or short phrase, then tap a frame. Say your guess aloud before you look.",
      yourWord: "Your word",
      patternPlaceholder: "e.g. tidur, sekolah, lapar",
      sheetTitle: "Particles & nots",
      sheetIntro: "Return here until the choices feel automatic.",
      negation: "Negation",
      place: "Place",
      aspectHelpers: "Aspect helpers",
      aspectMeaning: "done · in progress · will · just · ever",
      pronounCut: "Pronoun quick cut",
      pronounMeaning: "kami excludes you · kita includes you",
      menHint: "meN- nasal hint",
      reviewTitle: "Review",
      reviewEyebrow: "Worth another pass",
      reviewEmptyTitle: "Nothing to review yet",
      reviewEmptyBody: "Miss a practice answer and it will show up here.",
      miss: "miss",
      misses: "misses",
      aboutEyebrow: "About",
      aboutTitle: "How this works",
      aboutWhat:
        "An offline-friendly Malay grammar course for phones. Progress lives in your browser storage and is not sent anywhere.",
      aboutWho:
        "Learners who can read Latin script and want sentence patterns before long vocabulary lists.",
      aboutEach:
        "Each topic has three tabs: Rule, Text, Practice. Follow the numbered order — later blocks lean on earlier ones.",
      aboutHow:
        "Use Next at the bottom. Do not skip the dialogues. Open the Pattern box when a frame feels shaky. Reset progress from the home screen if you want a clean run.",
      aboutFooter: "Built for GitHub Pages · Malay, plainly · 2026",
      ofDone: "{done} of {total} done",
      themeToggle: "Toggle colour theme",
      langToggle: "Switch interface language",
      langShort: "RU",
    },
    ru: {
      course: "Курс",
      patterns: "Шаблоны",
      review: "Повтор",
      brand: "Малайский, по делу",
      pocketCourse: "Карманный курс · грамматика BM",
      homeIntro:
        "Практичная грамматика малайского для телефона — правила, короткие диалоги и проверки. Прогресс хранится на этом устройстве.",
      patternBox: "Конструктор фраз",
      patternBoxHint: "Соберите типовые конструкции со своим словом",
      cheatSheet: "Шпаргалка",
      cheatSheetHint: "Частицы и отрицание на одном экране",
      reviewHint: "Темы, где были ошибки",
      about: "О курсе",
      aboutHint: "Как пользоваться курсом",
      resetProgress: "Сбросить прогресс",
      clearProgressConfirm: "Очистить весь прогресс на этом устройстве?",
      allTopics: "← Все темы",
      done: "готово",
      next: "Далее",
      backToCourse: "К курсу",
      rule: "Правило",
      text: "Текст",
      practice: "Практика",
      toolkit: "Инструменты",
      patternTitle: "Конструктор фраз",
      patternIntro:
        "Введите малайское слово или короткую фразу, затем нажмите шаблон. Произнесите вариант вслух, прежде чем смотреть.",
      yourWord: "Ваше слово",
      patternPlaceholder: "напр. tidur, sekolah, lapar",
      sheetTitle: "Частицы и «нет»",
      sheetIntro: "Возвращайтесь сюда, пока выбор не станет автоматическим.",
      negation: "Отрицание",
      place: "Место",
      aspectHelpers: "Маркеры времени",
      aspectMeaning: "сделано · в процессе · будет · только что · когда-либо",
      pronounCut: "Местоимения — кратко",
      pronounMeaning: "kami — без вас · kita — с вами",
      menHint: "meN- — подсказка по носовым",
      reviewTitle: "Повтор",
      reviewEyebrow: "Стоит пройти ещё раз",
      reviewEmptyTitle: "Пока нечего повторять",
      reviewEmptyBody: "Ошибитесь в практике — тема появится здесь.",
      miss: "ошибка",
      misses: "ошибки",
      aboutEyebrow: "О курсе",
      aboutTitle: "Как устроен курс",
      aboutWhat:
        "Карманный курс малайской грамматики, работает офлайн. Прогресс хранится в браузере и никуда не отправляется.",
      aboutWho:
        "Тем, кто читает латиницу и хочет сначала освоить конструкции предложений, а не длинные списки слов.",
      aboutEach:
        "У каждой темы три вкладки: Правило, Текст, Практика. Идите по порядку — поздние блоки опираются на ранние.",
      aboutHow:
        "Жмите «Далее» внизу. Не пропускайте диалоги. Открывайте конструктор фраз, если шаблон шатается. Сбросьте прогресс на главной, если нужен чистый заход.",
      aboutFooter: "Для GitHub Pages · Малайский, по делу · 2026",
      ofDone: "{done} из {total} пройдено",
      themeToggle: "Переключить тему",
      langToggle: "Переключить язык интерфейса",
      langShort: "EN",
    },
  };

  const modules = [
    {
      id: "m0",
      label: { en: "Block 0 · Asas", ru: "Блок 0 · Asas" },
      title: { en: "The bones of a Malay sentence", ru: "Каркас малайского предложения" },
      blurb: {
        en: "Word order, pronouns, and the particles that do most of the work. Get these automatic before anything else sticks.",
        ru: "Порядок слов, местоимения и частицы, которые делают основную работу. Доведите их до автоматизма — тогда всё остальное ляжет.",
      },
      level: { en: "A1 · 8 topics", ru: "A1 · 8 тем" },
    },
    {
      id: "m1",
      label: { en: "Block 1 · Kata kerja", ru: "Блок 1 · Kata kerja" },
      title: { en: "Verbs without conjugation theatre", ru: "Глаголы без спряжений" },
      blurb: {
        en: "Malay verbs do not change for person or tense the way European ones do. Affixes and time words carry the load.",
        ru: "Малайские глаголы не меняются по лицу и времени, как европейские. Нагрузку несут аффиксы и слова времени.",
      },
      level: { en: "A1–A2 · 7 topics", ru: "A1–A2 · 7 тем" },
    },
    {
      id: "m2",
      label: { en: "Block 2 · Imbuhan", ru: "Блок 2 · Imbuhan" },
      title: { en: "Prefixes that reshape meaning", ru: "Приставки, меняющие смысл" },
      blurb: {
        en: "me-, ber-, ter-, pe-, di- — once you hear the pattern, new vocabulary stops feeling random.",
        ru: "me-, ber-, ter-, pe-, di- — услышите закономерность, и новая лексика перестанет казаться случайной.",
      },
      level: { en: "A2 · 6 topics", ru: "A2 · 6 тем" },
    },
    {
      id: "m3",
      label: { en: "Block 3 · Luas", ru: "Блок 3 · Luas" },
      title: { en: "From sentence to speech", ru: "От предложения к речи" },
      blurb: {
        en: "Questions, negation, classifiers, possessives, and the small words that make Malay sound natural.",
        ru: "Вопросы, отрицание, счётные слова, притяжательность и мелкие слова, без которых малайский звучит естественно.",
      },
      level: { en: "A2–B1 · 7 topics", ru: "A2–B1 · 7 тем" },
    },
  ];

  const lessons = {
    "0.1": {
      subtitle: "Подлежащее → сказуемое → дополнение, затем детали",
      rule: `
        <p>В малайском стабильный каркас: <b>подлежащее + глагол + дополнение</b>. Время и место обычно стоят по краям, а не зажаты посередине.</p>
        <div class="example">
          <div class="example-label">Образец</div>
          <p class="malay">Saya makan nasi.</p>
          <p class="meaning">Я ем рис.</p>
        </div>
        <div class="note"><b>Подсказка.</b> Наречия времени (<i>semalam, esok, setiap hari</i>) любят начало или конец. Не вклинивайте их между подлежащим и глаголом, если не хотите что-то выделить.</div>
        <div class="example">
          <div class="example-label">Со временем</div>
          <p class="malay">Esok saya pergi ke pasar.</p>
          <p class="meaning">Завтра я иду на рынок.</p>
        </div>
      `,
      text: `
        <p><b>Диалог · di rumah</b></p>
        <div class="example">
          <p class="malay">A: Awak buat apa sekarang?</p>
          <p class="meaning">Что ты сейчас делаешь?</p>
          <p class="malay">B: Saya baca buku di bilik.</p>
          <p class="meaning">Я читаю книгу в комнате.</p>
          <p class="malay">A: Nanti kita makan bersama?</p>
          <p class="meaning">Поедим вместе позже?</p>
        </div>
        <div class="word-grid">
          <div class="word"><b>buat</b><small>делать</small></div>
          <div class="word"><b>sekarang</b><small>сейчас</small></div>
          <div class="word"><b>baca</b><small>читать</small></div>
          <div class="word"><b>bilik</b><small>комната</small></div>
          <div class="word"><b>nanti</b><small>позже</small></div>
          <div class="word"><b>bersama</b><small>вместе</small></div>
        </div>
      `,
      tasks: [
        {
          q: "Какой порядок слов — естественный малайский?",
          choices: ["Makan saya nasi.", "Saya makan nasi.", "Nasi saya makan."],
        },
        {
          q: "Где «esok» звучит естественно?",
          choices: [
            "Только после глагола",
            "В начале или в конце предложения",
            "Только между подлежащим и глаголом",
          ],
        },
      ],
    },
    "0.2": {
      subtitle: "Я, ты, мы — и вежливый выбор",
      rule: `
        <p>Частые местоимения: <b>saya</b> (я, вежливо), <b>aku</b> (я, близко), <b>awak / kamu</b> (ты), <b>dia</b> (он/она), <b>kami</b> (мы, без вас), <b>kita</b> (мы, с вами), <b>mereka</b> (они).</p>
        <div class="note"><b>Ловушка.</b> <i>Kami</i> исключает собеседника; <i>kita</i> включает. Перепутать — звучит холодно или навязчиво.</div>
        <div class="example">
          <div class="example-label">Сравнение</div>
          <p class="malay">Kami belajar Malay.</p>
          <p class="meaning">Мы (без вас) учим малайский.</p>
          <p class="malay">Kita belajar Malay.</p>
          <p class="meaning">Мы (и вы тоже) учим малайский.</p>
        </div>
      `,
      text: `
        <p><b>Диалог · di kelas</b></p>
        <div class="example">
          <p class="malay">A: Awak dari mana?</p>
          <p class="meaning">Откуда ты?</p>
          <p class="malay">B: Saya dari Singapura. Awak?</p>
          <p class="meaning">Я из Сингапура. А ты?</p>
          <p class="malay">A: Saya dari KL. Kita boleh belajar bersama.</p>
          <p class="meaning">Я из KL. Можем учиться вместе.</p>
        </div>
        <div class="word-grid">
          <div class="word"><b>dari</b><small>из, от</small></div>
          <div class="word"><b>mana</b><small>где, откуда</small></div>
          <div class="word"><b>boleh</b><small>можно / мочь</small></div>
          <div class="word"><b>belajar</b><small>учиться</small></div>
        </div>
      `,
      tasks: [
        {
          q: "Вы с другом зовёте незнакомца. Какое «мы»?",
          choices: ["kami", "kita", "mereka"],
        },
        {
          q: "Вежливое «я» в новых ситуациях:",
          choices: ["aku", "saya", "awak"],
        },
      ],
    },
    "0.3": {
      subtitle: "Указание и существование",
      rule: `
        <p><b>Ini</b> = это (близко), <b>itu</b> = то (далеко). <b>Ada</b> — «есть / имеется / существует»: рабочая лошадка для «есть ли…?» и «у меня есть…».</p>
        <div class="example">
          <div class="example-label">Существование</div>
          <p class="malay">Ada kopi ke?</p>
          <p class="meaning">Есть кофе?</p>
          <p class="malay">Saya ada dua adik.</p>
          <p class="meaning">У меня двое младших братьев/сестёр.</p>
        </div>
        <div class="note"><b>Без «to be».</b> <i>Ini buku</i> = Это книга. Не вставляйте английское «is» в каждое предложение.</div>
      `,
      text: `
        <p><b>Диалог · di kedai</b></p>
        <div class="example">
          <p class="malay">A: Ini apa?</p>
          <p class="meaning">Что это?</p>
          <p class="malay">B: Itu kuih. Ada juga teh panas.</p>
          <p class="meaning">То — kuih. Есть ещё горячий чай.</p>
        </div>
        <div class="word-grid">
          <div class="word"><b>apa</b><small>что</small></div>
          <div class="word"><b>kuih</b><small>местная выпечка / снек</small></div>
          <div class="word"><b>juga</b><small>тоже, также</small></div>
          <div class="word"><b>panas</b><small>горячий</small></div>
        </div>
      `,
      tasks: [
        {
          q: "«Это книга» по-малайски:",
          choices: ["Ini adalah buku saya punya.", "Ini buku.", "Buku ini adalah."],
        },
        {
          q: "Лучшее использование ada:",
          choices: ["Ada air di meja.", "Saya adalah ada.", "Ini ada itu."],
        },
      ],
    },
    "0.4": {
      subtitle: "apa, siapa, mana, bila, kenapa, bagaimana",
      rule: `
        <p>Вопросительные слова обычно стоят в начале или там, где будет ответ. Часто хватает интонации — вопросительная частица не обязательна.</p>
        <div class="example">
          <div class="example-label">Базовый набор</div>
          <p class="malay">Siapa nama awak?</p>
          <p class="meaning">Как тебя зовут? (букв. Кто имя ты?)</p>
          <p class="malay">Bila awak datang?</p>
          <p class="meaning">Когда ты придёшь?</p>
          <p class="malay">Bagaimana rasanya?</p>
          <p class="meaning">Какой вкус?</p>
        </div>
        <div class="note"><b>-kah</b> может помечать вопрос формально (<i>Adakah…?</i>), но в разговоре часто опускают.</div>
      `,
      text: `
        <p><b>Диалог · di stesen</b></p>
        <div class="example">
          <p class="malay">A: Maaf, bilik air di mana?</p>
          <p class="meaning">Извините, где туалет?</p>
          <p class="malay">B: Di situ. Awak nak pergi sekarang?</p>
          <p class="meaning">Там. Хочешь пойти сейчас?</p>
          <p class="malay">A: Ya. Berapa lama bas datang?</p>
          <p class="meaning">Да. Сколько ждать автобус?</p>
        </div>
        <div class="word-grid">
          <div class="word"><b>maaf</b><small>извините</small></div>
          <div class="word"><b>bilik air</b><small>туалет</small></div>
          <div class="word"><b>nak</b><small>хочу (разг.)</small></div>
          <div class="word"><b>berapa lama</b><small>сколько (по времени)</small></div>
        </div>
      `,
      tasks: [
        {
          q: "Спросить «кто это?»",
          choices: ["Apa itu?", "Siapa itu?", "Mana itu?"],
        },
        {
          q: "Спросить «почему?»",
          choices: ["bagaimana", "kenapa / mengapa", "bila"],
        },
      ],
    },
    "0.5": {
      subtitle: "Три вида «нет»",
      rule: `
        <p><b>Tidak</b> отрицает глаголы и прилагательные. <b>Bukan</b> — существительные и тождество. <b>Belum</b> — «ещё не».</p>
        <div class="example">
          <div class="example-label">Различайте</div>
          <p class="malay">Saya tidak lapar.</p>
          <p class="meaning">Я не голоден.</p>
          <p class="malay">Ini bukan rumah saya.</p>
          <p class="meaning">Это не мой дом.</p>
          <p class="malay">Saya belum makan.</p>
          <p class="meaning">Я ещё не ел.</p>
        </div>
        <div class="note"><b>Быстро.</b> Если в английском «not» перед существительным («not a teacher»), малайский хочет <i>bukan</i>. Перед глаголом/прилагательным — <i>tidak</i>.</div>
      `,
      text: `
        <p><b>Диалог · di kafe</b></p>
        <div class="example">
          <p class="malay">A: Awak lapar ke?</p>
          <p class="meaning">Ты голоден?</p>
          <p class="malay">B: Tidak. Saya belum dahaga juga.</p>
          <p class="meaning">Нет. Я ещё и не хочу пить.</p>
          <p class="malay">A: Ini bukan meja kita, kan?</p>
          <p class="meaning">Это не наш стол, да?</p>
        </div>
      `,
      tasks: [
        {
          q: "Отрицание «Dia guru.»",
          choices: ["Dia tidak guru.", "Dia bukan guru.", "Dia belum guru."],
        },
        {
          q: "«Я ещё не пришёл»",
          choices: ["Saya tidak sampai.", "Saya bukan sampai.", "Saya belum sampai."],
        },
      ],
    },
    "0.6": {
      subtitle: "Частицы направления и места",
      rule: `
        <p><b>Ke</b> = к, в (направление), <b>di</b> = в, на, у (место), <b>dari</b> = из, от. Короткие, но задают всю карту предложения.</p>
        <div class="example">
          <div class="example-label">Тройка</div>
          <p class="malay">Saya pergi ke sekolah.</p>
          <p class="meaning">Я иду в школу.</p>
          <p class="malay">Saya di sekolah.</p>
          <p class="meaning">Я в школе.</p>
          <p class="malay">Saya datang dari sekolah.</p>
          <p class="meaning">Я прихожу из школы.</p>
        </div>
      `,
      text: `
        <p><b>Диалог · di telefon</b></p>
        <div class="example">
          <p class="malay">A: Awak di mana?</p>
          <p class="meaning">Где ты?</p>
          <p class="malay">B: Saya di pejabat. Nanti saya pergi ke rumah awak.</p>
          <p class="meaning">Я в офисе. Потом пойду к тебе домой.</p>
        </div>
      `,
      tasks: [
        {
          q: "Вставьте: Saya tinggal ___ KL.",
          choices: ["ke", "di", "dari"],
        },
        {
          q: "Вставьте: Dia naik bas ___ rumah.",
          choices: ["ke", "di", "dari"],
        },
      ],
    },
    "0.7": {
      subtitle: "Союзы между частями предложения",
      rule: `
        <p><b>Dan</b> и, <b>atau</b> или, <b>tapi / tetapi</b> но, <b>jadi</b> поэтому. Малайский любит короткие части, связанные ими, а не вложенные европейские конструкции.</p>
        <div class="example">
          <p class="malay">Saya letih, tapi saya masih bekerja.</p>
          <p class="meaning">Я устал, но всё ещё работаю.</p>
          <p class="malay">Hujan, jadi kita tinggal di rumah.</p>
          <p class="meaning">Дождь, поэтому мы остаёмся дома.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Awak nak teh atau kopi?</p>
          <p class="meaning">Тебе чай или кофе?</p>
          <p class="malay">B: Teh, dan tolong tambah gula sikit.</p>
          <p class="meaning">Чай, и добавь немного сахара, пожалуйста.</p>
        </div>
      `,
      tasks: [
        {
          q: "Противопоставить две идеи:",
          choices: ["dan", "tapi", "atau"],
        },
        {
          q: "«Дождь, поэтому остаёмся» — союз:",
          choices: ["jadi", "atau", "siapa"],
        },
      ],
    },
    "0.8": {
      subtitle: "Время без окончаний глагола",
      rule: `
        <p>Глагол не меняется. Аспект и время несут помощники: <b>sudah / telah</b> (уже / завершено), <b>sedang</b> (сейчас, в процессе), <b>akan</b> (будет), <b>baru</b> (только что).</p>
        <div class="example">
          <p class="malay">Saya sudah makan.</p>
          <p class="meaning">Я уже поел.</p>
          <p class="malay">Saya sedang makan.</p>
          <p class="meaning">Я ем (прямо сейчас).</p>
          <p class="malay">Saya akan makan.</p>
          <p class="meaning">Я буду есть.</p>
        </div>
        <div class="note"><b>Разговорный малайский</b> часто говорит <i>dah</i> вместо <i>sudah</i> и опускает <i>akan</i>, если контекст ясен: <i>Esok saya pergi.</i></div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Awak sudah siap?</p>
          <p class="meaning">Ты уже готов?</p>
          <p class="malay">B: Belum. Saya sedang pakai kasut.</p>
          <p class="meaning">Ещё нет. Надеваю обувь.</p>
        </div>
      `,
      tasks: [
        {
          q: "Действие прямо сейчас:",
          choices: ["sudah", "sedang", "akan"],
        },
        {
          q: "Завершённое действие:",
          choices: ["sudah makan", "akan makan", "sedang makan"],
        },
      ],
    },
    "1.1": {
      subtitle: "Голый глагол многое вытягивает",
      rule: `
        <p>Корневой глагол может стоять сам: <b>makan, minum, tidur, pergi, datang, kerja, main</b>. Лицо и число не меняют форму.</p>
        <div class="example">
          <p class="malay">Saya / dia / mereka makan.</p>
          <p class="meaning">Я / он / они едят — одна форма глагола.</p>
        </div>
      `,
      text: `
        <div class="word-grid">
          <div class="word"><b>makan</b><small>есть</small></div>
          <div class="word"><b>minum</b><small>пить</small></div>
          <div class="word"><b>tidur</b><small>спать</small></div>
          <div class="word"><b>pergi</b><small>идти</small></div>
          <div class="word"><b>datang</b><small>приходить</small></div>
          <div class="word"><b>kerja</b><small>работать</small></div>
        </div>
        <div class="example">
          <p class="malay">Setiap pagi saya minum kopi dan baca berita.</p>
          <p class="meaning">Каждое утро я пью кофе и читаю новости.</p>
        </div>
      `,
      tasks: [
        {
          q: "Верно для «они спят»:",
          choices: ["Mereka tidurs.", "Mereka tidur.", "Mereka tiduri."],
        },
      ],
    },
    "1.2": {
      subtitle: "Хотеть и намерение",
      rule: `
        <p><b>Mahu</b> и <b>hendak</b> — стандартное «хотеть»; <b>nak</b> — разговорное. С глаголом: <i>nak pergi, mahu makan</i>.</p>
        <div class="example">
          <p class="malay">Saya nak beli tiket.</p>
          <p class="meaning">Я хочу купить билет.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Awak nak makan apa?</p>
          <p class="meaning">Что хочешь есть?</p>
          <p class="malay">B: Saya mahu nasi lemak.</p>
          <p class="meaning">Я хочу nasi lemak.</p>
        </div>
      `,
      tasks: [
        {
          q: "Самое разговорное «хотеть»:",
          choices: ["hendak", "nak", "sedang"],
        },
      ],
    },
    "1.3": {
      subtitle: "Умение, разрешение, вежливая просьба",
      rule: `
        <p><b>Boleh</b> — «мочь», «можно», мягкая просьба. <i>Boleh tolong…?</i> — дружелюбная просьба. Отрицание: <i>tidak boleh</i>.</p>
        <div class="example">
          <p class="malay">Boleh saya duduk sini?</p>
          <p class="meaning">Можно сесть здесь?</p>
          <p class="malay">Dia tidak boleh datang hari ini.</p>
          <p class="meaning">Он не может прийти сегодня.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Boleh tolong buka pintu?</p>
          <p class="meaning">Можешь открыть дверь, пожалуйста?</p>
          <p class="malay">B: Boleh. Sekejap ya.</p>
          <p class="meaning">Конечно. Секунду.</p>
        </div>
      `,
      tasks: [
        {
          q: "Попросить разрешения войти:",
          choices: ["Saya masuk boleh tidak.", "Boleh saya masuk?", "Masuk saya sudah."],
        },
      ],
    },
    "1.4": {
      subtitle: "Нужно, должно, следует",
      rule: `
        <p><b>Perlu</b> = нужно, <b>mesti</b> = должно (обязательно), <b>patut</b> = следует. Сила часто растёт: patut → perlu → mesti.</p>
        <div class="example">
          <p class="malay">Awak patut rehat.</p>
          <p class="meaning">Тебе следует отдохнуть.</p>
          <p class="malay">Saya perlu duit.</p>
          <p class="meaning">Мне нужны деньги.</p>
          <p class="malay">Awak mesti ikut peraturan.</p>
          <p class="meaning">Ты обязан следовать правилам.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">Esok saya perlu bangun awal. Saya patut tidur awal malam ini.</p>
          <p class="meaning">Завтра мне нужно встать рано. Сегодня вечером мне следует лечь пораньше.</p>
        </div>
      `,
      tasks: [
        {
          q: "Самая сильная обязанность:",
          choices: ["patut", "perlu", "mesti"],
        },
      ],
    },
    "1.5": {
      subtitle: "Нравится и предпочтения",
      rule: `
        <p><b>Suka</b> + существительное/глагол = нравится. С людьми иногда <i>suka akan</i>, но для еды, хобби, мест хватит <i>suka</i>.</p>
        <div class="example">
          <p class="malay">Saya suka makan pedas.</p>
          <p class="meaning">Мне нравится острое.</p>
          <p class="malay">Dia tidak suka hujan.</p>
          <p class="meaning">Ему не нравится дождь.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Awak suka filem apa?</p>
          <p class="meaning">Какие фильмы тебе нравятся?</p>
          <p class="malay">B: Saya suka filem komedi, tapi tidak suka seram.</p>
          <p class="meaning">Люблю комедии, но не ужасы.</p>
        </div>
      `,
      tasks: [
        {
          q: "«Мне не нравится кофе»",
          choices: ["Saya bukan suka kopi.", "Saya tidak suka kopi.", "Saya belum suka kopi."],
        },
      ],
    },
    "1.6": {
      subtitle: "Опыт и доступность",
      rule: `
        <p>Кроме «иметь», <b>ada</b> может отмечать опыт: <i>Pernah ada…</i>, или что что-то доступно. В речи <i>ada</i> иногда — мягкая вставка перед глаголом.</p>
        <div class="example">
          <p class="malay">Ada nak cuba?</p>
          <p class="meaning">Хочешь попробовать? (разг. приглашение)</p>
          <p class="malay">Saya pernah ada tinggal di Penang.</p>
          <p class="meaning">Я когда-то жил в Penang. (возможно в речи)</p>
        </div>
        <div class="note"><b>Для письма чище:</b> лучше <i>Saya pernah tinggal di Penang.</i></div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Ada soalan?</p>
          <p class="meaning">Есть вопросы?</p>
          <p class="malay">B: Ada. Boleh ulang sekali?</p>
          <p class="meaning">Есть. Можешь повторить раз?</p>
        </div>
      `,
      tasks: [
        {
          q: "Естественная проверка в классе:",
          choices: ["Ada soalan?", "Soalan adalah?", "Bukan soalan?"],
        },
      ],
    },
    "1.7": {
      subtitle: "Приказы и мягкие просьбы",
      rule: `
        <p>Голый глагол = приказ: <i>Duduk. Tunggu. Mari.</i> Смягчить: <b>tolong</b>, <b>sila</b> или вопрос с <i>boleh</i>.</p>
        <div class="example">
          <p class="malay">Tolong buka tingkap.</p>
          <p class="meaning">Открой окно, пожалуйста.</p>
          <p class="malay">Sila masuk.</p>
          <p class="meaning">Проходите, пожалуйста.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Tolong hantar mesej ini.</p>
          <p class="meaning">Отправь это сообщение, пожалуйста.</p>
          <p class="malay">B: Baik. Tunggu sekejap.</p>
          <p class="meaning">Хорошо. Подожди секунду.</p>
        </div>
      `,
      tasks: [
        {
          q: "Мягче, чем голый приказ:",
          choices: ["Tutup pintu.", "Tolong tutup pintu.", "Pintu tutup mesti."],
        },
      ],
    },
    "2.1": {
      subtitle: "Активный залог с me-",
      rule: `
        <p>Приставка <b>meN-</b> — активный, часто переходный глагол. Носовой согласный подстраивается: <i>me-, mem-, men-, meng-, meny-</i> по первой букве корня.</p>
        <div class="example">
          <p class="malay">tulis → menulis · baca → membaca · ajar → mengajar</p>
          <p class="meaning">писать · читать · учить</p>
        </div>
        <div class="note"><b>Запоминалка.</b> В речи meN- часто опускают, если объект ясен: <i>Saya baca buku</i> — нормально; в письме любят <i>membaca</i>.</div>
      `,
      text: `
        <div class="example">
          <p class="malay">Guru mengajar murid menulis surat.</p>
          <p class="meaning">Учитель учит учеников писать письмо.</p>
        </div>
        <div class="word-grid">
          <div class="word"><b>menulis</b><small>писать</small></div>
          <div class="word"><b>membaca</b><small>читать</small></div>
          <div class="word"><b>mengajar</b><small>учить</small></div>
          <div class="word"><b>membeli</b><small>покупать</small></div>
        </div>
      `,
      tasks: [
        {
          q: "Корень «beli» с meN-:",
          choices: ["mebeli", "membeli", "menbeli"],
        },
      ],
    },
    "2.2": {
      subtitle: "Пассив с di-",
      rule: `
        <p><b>di-</b> + корень = пассив. Деятель, если есть, часто после глагола с <i>oleh</i> или просто после глагола в речи.</p>
        <div class="example">
          <p class="malay">Surat itu ditulis oleh Ali.</p>
          <p class="meaning">Это письмо написано Ali.</p>
          <p class="malay">Nasi sudah dimakan.</p>
          <p class="meaning">Рис уже съеден.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Buku ini dibeli di mana?</p>
          <p class="meaning">Где купили эту книгу?</p>
          <p class="malay">B: Dibeli di kedai buku lama.</p>
          <p class="meaning">Купили в старом книжном.</p>
        </div>
      `,
      tasks: [
        {
          q: "Пассив от «makan»:",
          choices: ["memakan", "dimakan", "bermakan"],
        },
      ],
    },
    "2.3": {
      subtitle: "Состояния, привычки, взаимность",
      rule: `
        <p><b>ber-</b> часто — непереходное состояние или действие: <i>berlari, berbicara, bekerja, bermain</i>. Прямое дополнение не обязательно.</p>
        <div class="example">
          <p class="malay">Mereka berbicara di luar.</p>
          <p class="meaning">Они разговаривают снаружи.</p>
          <p class="malay">Saya bekerja di pejabat.</p>
          <p class="meaning">Я работаю в офисе.</p>
        </div>
      `,
      text: `
        <div class="word-grid">
          <div class="word"><b>berlari</b><small>бегать</small></div>
          <div class="word"><b>bermain</b><small>играть</small></div>
          <div class="word"><b>bercakap</b><small>болтать / говорить</small></div>
          <div class="word"><b>berhenti</b><small>останавливаться</small></div>
        </div>
      `,
      tasks: [
        {
          q: "Лучший ber- глагол:",
          choices: ["bermakan nasi", "bermain bola", "berbaca buku itu"],
        },
      ],
    },
    "2.4": {
      subtitle: "Случайность или результат способности",
      rule: `
        <p><b>ter-</b> — случайно (<i>terjatuh, terbuka</i>) или «удалось / слышно / видно» (<i>terdengar, terlihat</i>). Контекст решает.</p>
        <div class="example">
          <p class="malay">Gelas itu terjatuh.</p>
          <p class="meaning">Стакан упал (случайно).</p>
          <p class="malay">Suara dia terdengar dari sini.</p>
          <p class="meaning">Его голос отсюда слышен.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Pintu terbuka ke?</p>
          <p class="meaning">Дверь открыта?</p>
          <p class="malay">B: Ya, saya tak sengaja terdorong tadi.</p>
          <p class="meaning">Да, я случайно толкнул её раньше.</p>
        </div>
      `,
      tasks: [
        {
          q: "Случайное падение:",
          choices: ["menjatuh", "terjatuh", "dijatuh"],
        },
      ],
    },
    "2.5": {
      subtitle: "Люди и абстрактные существительные от глаголов",
      rule: `
        <p><b>peN-</b> часто даёт деятеля: <i>penulis, pembaca, pengajar</i>. <b>-an</b> — результат или абстракция: <i>tulisan, bacaan, makanan</i>.</p>
        <div class="example">
          <p class="malay">penulis · tulisan · makanan</p>
          <p class="meaning">писатель · текст / письмо · еда</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">Penulis itu menulis tulisan pendek setiap minggu.</p>
          <p class="meaning">Тот писатель каждую неделю пишет короткий текст.</p>
        </div>
      `,
      tasks: [
        {
          q: "«Еда» от makan:",
          choices: ["pemakan", "makanan", "termakan"],
        },
      ],
    },
    "2.6": {
      subtitle: "Каузатив и направленные окончания",
      rule: `
        <p><b>-kan</b> часто — каузатив или объект как бенефициар. <b>-i</b> — локатив или повтор. Учите парами: <i>menunggu / menunggukan</i> реже, чем <i>membuka / membukakan</i>.</p>
        <div class="example">
          <p class="malay">Tolong bukakan pintu untuk saya.</p>
          <p class="meaning">Открой дверь для меня, пожалуйста.</p>
          <p class="malay">Dia menanami tanah itu dengan padi.</p>
          <p class="meaning">Он засадил ту землю рисом.</p>
        </div>
        <div class="note"><b>Не перегружайте.</b> Многие фразы яснее с голым или meN- глаголом и предлогом.</div>
      `,
      text: `
        <div class="example">
          <p class="malay">Ibu membacakan cerita kepada anak.</p>
          <p class="meaning">Мама читает ребёнку сказку.</p>
        </div>
      `,
      tasks: [
        {
          q: "-kan часто ощущается как:",
          choices: [
            "случайность",
            "для кого-то / каузатив",
            "только множественное число",
          ],
        },
      ],
    },
    "3.1": {
      subtitle: "Краткие формы притяжательности",
      rule: `
        <p>Стандарт: <i>buku saya</i>. Разговорно: <i>buku aku / buku awak</i>. Клитики: <b>-ku, -mu, -nya</b> к существительному: <i>bukuku, bukumu, bukunya</i>. <b>Punya</b> в речи: <i>Ini punya saya.</i></p>
        <div class="example">
          <p class="malay">Nama saya Amin. Namanya Amin.</p>
          <p class="meaning">Меня зовут Amin. Его/её зовут Amin.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Ini beg siapa?</p>
          <p class="meaning">Чья это сумка?</p>
          <p class="malay">B: Beg saya. Oh, itu begnya.</p>
          <p class="meaning">Моя. О, та — его/её.</p>
        </div>
      `,
      tasks: [
        {
          q: "«Его книга» с клитикой:",
          choices: ["bukuku", "bukumu", "bukunya"],
        },
      ],
    },
    "3.2": {
      subtitle: "Счётные слова: orang, buah, biji…",
      rule: `
        <p>Числа часто требуют классификатор: <b>orang</b> (люди), <b>ekor</b> (животные), <b>buah</b> (крупные / абстрактные единицы), <b>biji</b> (мелкие округлые), <b>helai</b> (листы, плоское), <b>batang</b> (длинные тонкие).</p>
        <div class="example">
          <p class="malay">tiga orang kawan · dua ekor kucing · sebuah rumah</p>
          <p class="meaning">трое друзей · две кошки · один дом</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">Saya beli dua biji epal dan sehelai kain.</p>
          <p class="meaning">Я купил два яблока и один кусок ткани.</p>
        </div>
      `,
      tasks: [
        {
          q: "Классификатор для людей:",
          choices: ["buah", "orang", "batang"],
        },
      ],
    },
    "3.3": {
      subtitle: "Сравнение без -er",
      rule: `
        <p><b>lebih … daripada</b> — сравнительная степень, <b>paling / ter-</b> — превосходная, <b>sama … dengan</b> — равенство.</p>
        <div class="example">
          <p class="malay">Teh ini lebih manis daripada itu.</p>
          <p class="meaning">Этот чай слаще того.</p>
          <p class="malay">Ini yang paling sedap.</p>
          <p class="meaning">Это самое вкусное.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: KL lebih besar daripada Ipoh, kan?</p>
          <p class="meaning">KL больше Ipoh, да?</p>
          <p class="malay">B: Ya. Tapi Ipoh punya makanan paling sedap, bagi saya.</p>
          <p class="meaning">Да. Но для меня в Ipoh самая вкусная еда.</p>
        </div>
      `,
      tasks: [
        {
          q: "Рамка сравнения:",
          choices: ["paling … daripada", "lebih … daripada", "sama … daripada"],
        },
      ],
    },
    "3.4": {
      subtitle: "Если и хотя",
      rule: `
        <p><b>Kalau</b> (речь) / <b>jika / sekiranya</b> (формально) = если. <b>Walaupun / meskipun</b> = хотя. «Тогда» часто без отдельного слова.</p>
        <div class="example">
          <p class="malay">Kalau hujan, kita tinggal di rumah.</p>
          <p class="meaning">Если дождь, остаёмся дома.</p>
          <p class="malay">Walaupun letih, dia terus kerja.</p>
          <p class="meaning">Хотя устал, он продолжает работать.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">Kalau awak datang awal, kita boleh minum kopi dulu.</p>
          <p class="meaning">Если придёшь рано, можем сначала выпить кофе.</p>
        </div>
      `,
      tasks: [
        {
          q: "Повседневное «если»:",
          choices: ["walaupun", "kalau", "daripada"],
        },
      ],
    },
    "3.5": {
      subtitle: "Относительная связка",
      rule: `
        <p><b>Yang</b> связывает существительное с описанием — «кто / который / что». Держите придаточное компактным после <i>yang</i>.</p>
        <div class="example">
          <p class="malay">Orang yang duduk situ kawan saya.</p>
          <p class="meaning">Человек, который сидит там, — мой друг.</p>
          <p class="malay">Makanan yang paling sedap sudah habis.</p>
          <p class="meaning">Самая вкусная еда уже закончилась.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">Buku yang saya beli semalam hilang.</p>
          <p class="meaning">Книга, которую я купил вчера, пропала.</p>
        </div>
      `,
      tasks: [
        {
          q: "yang в основном:",
          choices: [
            "помечает прошедшее время",
            "связывает существительное и описание",
            "означает «или»",
          ],
        },
      ],
    },
    "3.6": {
      subtitle: "Малые слова, большой оттенок",
      rule: `
        <p><b>-lah</b> смягчает или усиливает приказ/утверждение. <b>-kah</b> — вопрос (формальнее). <b>pun</b> — «даже / тоже»: <i>saya pun nak</i>.</p>
        <div class="example">
          <p class="malay">Duduklah dulu.</p>
          <p class="meaning">Садись-ка сначала.</p>
          <p class="malay">Siapakah dia?</p>
          <p class="meaning">Кто он/она?</p>
          <p class="malay">Saya pun setuju.</p>
          <p class="meaning">Я тоже согласен.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Marilah kita mula.</p>
          <p class="meaning">Давай начнём.</p>
          <p class="malay">B: Baiklah.</p>
          <p class="meaning">Хорошо.</p>
        </div>
      `,
      tasks: [
        {
          q: "Смягчение приказа часто через:",
          choices: ["-kah", "-lah", "только pun"],
        },
      ],
    },
    "3.7": {
      subtitle: "Время и счёт",
      rule: `
        <p>Часы: <i>pukul tiga / jam tiga</i>. Половина: <i>pukul tiga setengah</i>. Минуты: <i>pukul tiga lebih sepuluh</i>. Числа перед классификатором: <i>lima orang</i>.</p>
        <div class="example">
          <p class="malay">Jumpa pukul dua petang.</p>
          <p class="meaning">Встречаемся в два дня.</p>
          <p class="malay">Saya ada tiga tiket.</p>
          <p class="meaning">У меня три билета.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Bas datang pukul berapa?</p>
          <p class="meaning">Во сколько приходит автобус?</p>
          <p class="malay">B: Pukul tujuh pagi. Jangan lambat.</p>
          <p class="meaning">В семь утра. Не опаздывай.</p>
        </div>
      `,
      tasks: [
        {
          q: "«Половина четвёртого» (3:30):",
          choices: ["pukul tiga setengah", "pukul setengah tiga sahaja", "tiga pukul setengah"],
        },
      ],
    },
  };

  const patterns = [
    {
      id: "svo",
      label: { en: "SVO", ru: "SVO" },
      why: {
        en: "Subject + verb + object. Swap the subject; the verb stays put.",
        ru: "Подлежащее + глагол + дополнение. Меняйте подлежащее — глагол на месте.",
      },
    },
    {
      id: "ada",
      label: { en: "Ada…", ru: "Ada…" },
      why: {
        en: "Ada asks whether something exists or is available.",
        ru: "Ada спрашивает, есть ли что-то или доступно ли оно.",
      },
    },
    {
      id: "nak",
      label: { en: "Nak + verb", ru: "Nak + глагол" },
      why: {
        en: "Intention without conjugating the verb.",
        ru: "Намерение без спряжения глагола.",
      },
    },
    {
      id: "sudah",
      label: { en: "Sudah + verb", ru: "Sudah + глагол" },
      why: {
        en: "Completed aspect sits before the unchanged verb.",
        ru: "Завершённость — перед неизменным глаголом.",
      },
    },
    {
      id: "tidak",
      label: { en: "Tidak + adj/verb", ru: "Tidak + прил./гл." },
      why: {
        en: "Tidak for verbs and adjectives — not for noun identity.",
        ru: "Tidak для глаголов и прилагательных — не для тождества существительных.",
      },
    },
    {
      id: "bukan",
      label: { en: "Bukan + noun", ru: "Bukan + сущ." },
      why: {
        en: "Bukan denies what something is.",
        ru: "Bukan отрицает, чем что-то является.",
      },
    },
    {
      id: "ke",
      label: { en: "Ke + place", ru: "Ke + место" },
      why: {
        en: "Ke marks direction toward a place.",
        ru: "Ke — направление к месту.",
      },
    },
    {
      id: "yang",
      label: { en: "Noun + yang…", ru: "Сущ. + yang…" },
      why: {
        en: "Yang hooks a description onto a noun.",
        ru: "Yang цепляет описание к существительному.",
      },
    },
  ];

  const sheet = {
    en: {
      negationBody:
        "<b>tidak</b> — verbs &amp; adjectives<br/><b>bukan</b> — nouns &amp; identity<br/><b>belum</b> — not yet",
      placeBody: "<b>ke</b> to · <b>di</b> at/in · <b>dari</b> from",
      aspectLabel: "Aspect helpers",
      aspectMeaning: "done · in progress · will · just · ever",
      pronounLabel: "Pronoun quick cut",
      pronounMeaning: "kami excludes you · kita includes you",
      menLabel: "meN- nasal hint",
      menBody:
        "b → mem- · t/c/d/j → men- · k/g/h/a… → meng- · s → meny- · l/m/n/r/w/y → me-",
    },
    ru: {
      negationBody:
        "<b>tidak</b> — глаголы и прилагательные<br/><b>bukan</b> — существительные и тождество<br/><b>belum</b> — ещё не",
      placeBody: "<b>ke</b> к · <b>di</b> в/на · <b>dari</b> из",
      aspectLabel: "Маркеры времени",
      aspectMeaning: "сделано · в процессе · будет · только что · когда-либо",
      pronounLabel: "Местоимения — кратко",
      pronounMeaning: "kami — без вас · kita — с вами",
      menLabel: "meN- — подсказка по носовым",
      menBody:
        "b → mem- · t/c/d/j → men- · k/g/h/a… → meng- · s → meny- · l/m/n/r/w/y → me-",
    },
  };

  window.MalayI18n = { ui, modules, lessons, patterns, sheet };
})();
