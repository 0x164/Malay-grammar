(() => {
  const STORAGE_KEY = "malay-plainly-v1";
  const THEME_KEY = "malay-plainly-theme";
  const LANG_KEY = "malay-plainly-lang";
  const I18n = window.MalayI18n;

  const state = {
    view: "home",
    lessonId: null,
    tab: "rule",
    progress: loadProgress(),
    lang: loadLang(),
  };

  function loadLang() {
    const saved = localStorage.getItem(LANG_KEY);
    return saved === "ru" || saved === "en" ? saved : "en";
  }

  function t(key) {
    return I18n.ui[state.lang][key] || I18n.ui.en[key] || key;
  }

  function pick(value) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return value[state.lang] || value.en || "";
  }

  const modules = I18n.modules;

  const lessons = [
    // —— Block 0 ——
    {
      id: "0.1",
      module: "m0",
      title: "Susunan ayat",
      subtitle: "Subject → Verb → Object, then the extras",
      rule: `
        <p>Malay keeps a steady spine: <b>subject + verb + object</b>. Time and place usually sit at the edges, not jammed in the middle.</p>
        <div class="example">
          <div class="example-label">Pattern</div>
          <p class="malay">Saya makan nasi.</p>
          <p class="meaning">I eat rice.</p>
        </div>
        <div class="note"><b>Tip.</b> Adverbs of time (<i>semalam, esok, setiap hari</i>) like the front or the end. Do not bury them between subject and verb unless you are emphasising something.</div>
        <div class="example">
          <div class="example-label">With time</div>
          <p class="malay">Esok saya pergi ke pasar.</p>
          <p class="meaning">Tomorrow I go to the market.</p>
        </div>
      `,
      text: `
        <p><b>Dialog · di rumah</b></p>
        <div class="example">
          <p class="malay">A: Awak buat apa sekarang?</p>
          <p class="meaning">What are you doing now?</p>
          <p class="malay">B: Saya baca buku di bilik.</p>
          <p class="meaning">I am reading a book in the room.</p>
          <p class="malay">A: Nanti kita makan bersama?</p>
          <p class="meaning">Shall we eat together later?</p>
        </div>
        <div class="word-grid">
          <div class="word"><b>buat</b><small>do / make</small></div>
          <div class="word"><b>sekarang</b><small>now</small></div>
          <div class="word"><b>baca</b><small>read</small></div>
          <div class="word"><b>bilik</b><small>room</small></div>
          <div class="word"><b>nanti</b><small>later</small></div>
          <div class="word"><b>bersama</b><small>together</small></div>
        </div>
      `,
      tasks: [
        {
          q: "Which order is natural Malay?",
          choices: ["Makan saya nasi.", "Saya makan nasi.", "Nasi saya makan."],
          answer: 1,
        },
        {
          q: "Where can “esok” sit comfortably?",
          choices: ["Only after the verb", "At the start or end of the sentence", "Between subject and verb only"],
          answer: 1,
        },
      ],
    },
    {
      id: "0.2",
      module: "m0",
      title: "Kata ganti nama",
      subtitle: "I, you, we — and the polite choices",
      rule: `
        <p>Common pronouns: <b>saya</b> (I, polite), <b>aku</b> (I, intimate), <b>awak / kamu</b> (you), <b>dia</b> (he/she), <b>kami</b> (we, not including you), <b>kita</b> (we, including you), <b>mereka</b> (they).</p>
        <div class="note"><b>Trap.</b> <i>Kami</i> excludes the listener; <i>kita</i> includes them. Mixing these up sounds oddly cold or oddly pushy.</div>
        <div class="example">
          <div class="example-label">Compare</div>
          <p class="malay">Kami belajar Malay.</p>
          <p class="meaning">We (not you) are learning Malay.</p>
          <p class="malay">Kita belajar Malay.</p>
          <p class="meaning">We (you too) are learning Malay.</p>
        </div>
      `,
      text: `
        <p><b>Dialog · di kelas</b></p>
        <div class="example">
          <p class="malay">A: Awak dari mana?</p>
          <p class="meaning">Where are you from?</p>
          <p class="malay">B: Saya dari Singapura. Awak?</p>
          <p class="meaning">I am from Singapore. You?</p>
          <p class="malay">A: Saya dari KL. Kita boleh belajar bersama.</p>
          <p class="meaning">I am from KL. We can learn together.</p>
        </div>
        <div class="word-grid">
          <div class="word"><b>dari</b><small>from</small></div>
          <div class="word"><b>mana</b><small>where</small></div>
          <div class="word"><b>boleh</b><small>can / may</small></div>
          <div class="word"><b>belajar</b><small>learn / study</small></div>
        </div>
      `,
      tasks: [
        {
          q: "You and a friend invite a stranger to join. Which “we”?",
          choices: ["kami", "kita", "mereka"],
          answer: 1,
        },
        {
          q: "Polite “I” in most new situations:",
          choices: ["aku", "saya", "awak"],
          answer: 1,
        },
      ],
    },
    {
      id: "0.3",
      module: "m0",
      title: "Ini / itu / ada",
      subtitle: "Pointing and existence",
      rule: `
        <p><b>Ini</b> = this (near), <b>itu</b> = that (far). <b>Ada</b> means “there is / have / exist” — Malay’s workhorse for “is there…?” and “I have…”.</p>
        <div class="example">
          <div class="example-label">Existence</div>
          <p class="malay">Ada kopi ke?</p>
          <p class="meaning">Is there coffee?</p>
          <p class="malay">Saya ada dua adik.</p>
          <p class="meaning">I have two younger siblings.</p>
        </div>
        <div class="note"><b>No “to be” needed.</b> <i>Ini buku</i> = This is a book. Do not force an English-style “is” into every sentence.</div>
      `,
      text: `
        <p><b>Dialog · di kedai</b></p>
        <div class="example">
          <p class="malay">A: Ini apa?</p>
          <p class="meaning">What is this?</p>
          <p class="malay">B: Itu kuih. Ada juga teh panas.</p>
          <p class="meaning">That is a kuih. There is also hot tea.</p>
        </div>
        <div class="word-grid">
          <div class="word"><b>apa</b><small>what</small></div>
          <div class="word"><b>kuih</b><small>local cake / snack</small></div>
          <div class="word"><b>juga</b><small>also</small></div>
          <div class="word"><b>panas</b><small>hot</small></div>
        </div>
      `,
      tasks: [
        {
          q: "“This is a book” in natural Malay:",
          choices: ["Ini adalah buku saya punya.", "Ini buku.", "Buku ini adalah."],
          answer: 1,
        },
        {
          q: "Best use of ada:",
          choices: ["Ada air di meja.", "Saya adalah ada.", "Ini ada itu."],
          answer: 0,
        },
      ],
    },
    {
      id: "0.4",
      module: "m0",
      title: "Kata soal",
      subtitle: "apa, siapa, mana, bila, kenapa, bagaimana",
      rule: `
        <p>Question words usually stay near the front, or right where the answer would sit. Rising intonation often does enough — you do not always need a question particle.</p>
        <div class="example">
          <div class="example-label">Core set</div>
          <p class="malay">Siapa nama awak?</p>
          <p class="meaning">What is your name? (lit. Who name you?)</p>
          <p class="malay">Bila awak datang?</p>
          <p class="meaning">When are you coming?</p>
          <p class="malay">Bagaimana rasanya?</p>
          <p class="meaning">How does it taste?</p>
        </div>
        <div class="note"><b>-kah</b> can mark a question formally (<i>Adakah…?</i>), but everyday speech often skips it.</div>
      `,
      text: `
        <p><b>Dialog · di stesen</b></p>
        <div class="example">
          <p class="malay">A: Maaf, bilik air di mana?</p>
          <p class="meaning">Sorry, where is the toilet?</p>
          <p class="malay">B: Di situ. Awak nak pergi sekarang?</p>
          <p class="meaning">Over there. Do you want to go now?</p>
          <p class="malay">A: Ya. Berapa lama bas datang?</p>
          <p class="meaning">Yes. How long until the bus comes?</p>
        </div>
        <div class="word-grid">
          <div class="word"><b>maaf</b><small>sorry</small></div>
          <div class="word"><b>bilik air</b><small>toilet</small></div>
          <div class="word"><b>nak</b><small>want (colloquial)</small></div>
          <div class="word"><b>berapa lama</b><small>how long</small></div>
        </div>
      `,
      tasks: [
        {
          q: "Ask “who is that?”",
          choices: ["Apa itu?", "Siapa itu?", "Mana itu?"],
          answer: 1,
        },
        {
          q: "Ask “why?”",
          choices: ["bagaimana", "kenapa / mengapa", "bila"],
          answer: 1,
        },
      ],
    },
    {
      id: "0.5",
      module: "m0",
      title: "Tidak / bukan / belum",
      subtitle: "Three kinds of “not”",
      rule: `
        <p><b>Tidak</b> negates verbs and adjectives. <b>Bukan</b> negates nouns and identities. <b>Belum</b> means “not yet”.</p>
        <div class="example">
          <div class="example-label">Split carefully</div>
          <p class="malay">Saya tidak lapar.</p>
          <p class="meaning">I am not hungry.</p>
          <p class="malay">Ini bukan rumah saya.</p>
          <p class="meaning">This is not my house.</p>
          <p class="malay">Saya belum makan.</p>
          <p class="meaning">I have not eaten yet.</p>
        </div>
        <div class="note"><b>Shortcut.</b> If English “not” sits before a noun (“not a teacher”), Malay wants <i>bukan</i>. If it sits before a verb/adjective, use <i>tidak</i>.</div>
      `,
      text: `
        <p><b>Dialog · di kafe</b></p>
        <div class="example">
          <p class="malay">A: Awak lapar ke?</p>
          <p class="meaning">Are you hungry?</p>
          <p class="malay">B: Tidak. Saya belum dahaga juga.</p>
          <p class="meaning">No. I am not thirsty yet either.</p>
          <p class="malay">A: Ini bukan meja kita, kan?</p>
          <p class="meaning">This is not our table, right?</p>
        </div>
      `,
      tasks: [
        {
          q: "Negate “Dia guru.”",
          choices: ["Dia tidak guru.", "Dia bukan guru.", "Dia belum guru."],
          answer: 1,
        },
        {
          q: "“I have not arrived yet”",
          choices: ["Saya tidak sampai.", "Saya bukan sampai.", "Saya belum sampai."],
          answer: 2,
        },
      ],
    },
    {
      id: "0.6",
      module: "m0",
      title: "Ke / di / dari",
      subtitle: "Direction and location particles",
      rule: `
        <p><b>Ke</b> = to (direction), <b>di</b> = at / in / on (location), <b>dari</b> = from. They are short, but they decide the whole map of the sentence.</p>
        <div class="example">
          <div class="example-label">Trio</div>
          <p class="malay">Saya pergi ke sekolah.</p>
          <p class="meaning">I go to school.</p>
          <p class="malay">Saya di sekolah.</p>
          <p class="meaning">I am at school.</p>
          <p class="malay">Saya datang dari sekolah.</p>
          <p class="meaning">I come from school.</p>
        </div>
      `,
      text: `
        <p><b>Dialog · di telefon</b></p>
        <div class="example">
          <p class="malay">A: Awak di mana?</p>
          <p class="meaning">Where are you?</p>
          <p class="malay">B: Saya di pejabat. Nanti saya pergi ke rumah awak.</p>
          <p class="meaning">I am at the office. Later I will go to your house.</p>
        </div>
      `,
      tasks: [
        {
          q: "Fill: Saya tinggal ___ KL.",
          choices: ["ke", "di", "dari"],
          answer: 1,
        },
        {
          q: "Fill: Dia naik bas ___ rumah.",
          choices: ["ke", "di", "dari"],
          answer: 2,
        },
      ],
    },
    {
      id: "0.7",
      module: "m0",
      title: "Dan / atau / tapi / jadi",
      subtitle: "Glue words between clauses",
      rule: `
        <p><b>Dan</b> and, <b>atau</b> or, <b>tapi / tetapi</b> but, <b>jadi</b> so / therefore. Malay likes short clauses strung with these rather than nested European clauses.</p>
        <div class="example">
          <p class="malay">Saya letih, tapi saya masih bekerja.</p>
          <p class="meaning">I am tired, but I am still working.</p>
          <p class="malay">Hujan, jadi kita tinggal di rumah.</p>
          <p class="meaning">It is raining, so we stay home.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Awak nak teh atau kopi?</p>
          <p class="meaning">Do you want tea or coffee?</p>
          <p class="malay">B: Teh, dan tolong tambah gula sikit.</p>
          <p class="meaning">Tea, and please add a little sugar.</p>
        </div>
      `,
      tasks: [
        {
          q: "Contrast two ideas with:",
          choices: ["dan", "tapi", "atau"],
          answer: 1,
        },
        {
          q: "“Rain, so we stay” connector:",
          choices: ["jadi", "atau", "siapa"],
          answer: 0,
        },
      ],
    },
    {
      id: "0.8",
      module: "m0",
      title: "Sudah / sedang / akan",
      subtitle: "Time without verb endings",
      rule: `
        <p>Malay verbs stay the same. Aspect and tense ride on helpers: <b>sudah / telah</b> (already / completed), <b>sedang</b> (in progress), <b>akan</b> (will), <b>baru</b> (just).</p>
        <div class="example">
          <p class="malay">Saya sudah makan.</p>
          <p class="meaning">I have already eaten.</p>
          <p class="malay">Saya sedang makan.</p>
          <p class="meaning">I am eating (right now).</p>
          <p class="malay">Saya akan makan.</p>
          <p class="meaning">I will eat.</p>
        </div>
        <div class="note"><b>Spoken Malay</b> often uses <i>dah</i> for <i>sudah</i> and drops <i>akan</i> when context is clear: <i>Esok saya pergi.</i></div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Awak sudah siap?</p>
          <p class="meaning">Are you ready yet?</p>
          <p class="malay">B: Belum. Saya sedang pakai kasut.</p>
          <p class="meaning">Not yet. I am putting on shoes.</p>
        </div>
      `,
      tasks: [
        {
          q: "Action happening right now:",
          choices: ["sudah", "sedang", "akan"],
          answer: 1,
        },
        {
          q: "Completed action:",
          choices: ["sudah makan", "akan makan", "sedang makan"],
          answer: 0,
        },
      ],
    },

    // —— Block 1 ——
    {
      id: "1.1",
      module: "m1",
      title: "Kata kerja asas",
      subtitle: "Bare verbs carry a lot",
      rule: `
        <p>A root verb can stand alone: <b>makan, minum, tidur, pergi, datang, kerja, main</b>. Person and number never force a change on the verb.</p>
        <div class="example">
          <p class="malay">Saya / dia / mereka makan.</p>
          <p class="meaning">I / he / they eat — same verb form.</p>
        </div>
      `,
      text: `
        <div class="word-grid">
          <div class="word"><b>makan</b><small>eat</small></div>
          <div class="word"><b>minum</b><small>drink</small></div>
          <div class="word"><b>tidur</b><small>sleep</small></div>
          <div class="word"><b>pergi</b><small>go</small></div>
          <div class="word"><b>datang</b><small>come</small></div>
          <div class="word"><b>kerja</b><small>work</small></div>
        </div>
        <div class="example">
          <p class="malay">Setiap pagi saya minum kopi dan baca berita.</p>
          <p class="meaning">Every morning I drink coffee and read the news.</p>
        </div>
      `,
      tasks: [
        {
          q: "Correct for “they sleep”:",
          choices: ["Mereka tidurs.", "Mereka tidur.", "Mereka tiduri."],
          answer: 1,
        },
      ],
    },
    {
      id: "1.2",
      module: "m1",
      title: "Mahu / nak / hendak",
      subtitle: "Want and intention",
      rule: `
        <p><b>Mahu</b> and <b>hendak</b> are standard “want”; <b>nak</b> is the everyday spoken form. Pair them with a verb: <i>nak pergi, mahu makan</i>.</p>
        <div class="example">
          <p class="malay">Saya nak beli tiket.</p>
          <p class="meaning">I want to buy a ticket.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Awak nak makan apa?</p>
          <p class="meaning">What do you want to eat?</p>
          <p class="malay">B: Saya mahu nasi lemak.</p>
          <p class="meaning">I want nasi lemak.</p>
        </div>
      `,
      tasks: [
        {
          q: "Most colloquial “want”:",
          choices: ["hendak", "nak", "sedang"],
          answer: 1,
        },
      ],
    },
    {
      id: "1.3",
      module: "m1",
      title: "Boleh / bolehkah",
      subtitle: "Ability, permission, polite requests",
      rule: `
        <p><b>Boleh</b> covers “can”, “may”, and soft requests. <i>Boleh tolong…?</i> is a friendly ask. Negate with <i>tidak boleh</i>.</p>
        <div class="example">
          <p class="malay">Boleh saya duduk sini?</p>
          <p class="meaning">May I sit here?</p>
          <p class="malay">Dia tidak boleh datang hari ini.</p>
          <p class="meaning">He cannot come today.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Boleh tolong buka pintu?</p>
          <p class="meaning">Can you please open the door?</p>
          <p class="malay">B: Boleh. Sekejap ya.</p>
          <p class="meaning">Sure. Just a moment.</p>
        </div>
      `,
      tasks: [
        {
          q: "Ask permission to enter:",
          choices: ["Saya masuk boleh tidak.", "Boleh saya masuk?", "Masuk saya sudah."],
          answer: 1,
        },
      ],
    },
    {
      id: "1.4",
      module: "m1",
      title: "Perlu / mesti / patut",
      subtitle: "Need, must, should",
      rule: `
        <p><b>Perlu</b> = need, <b>mesti</b> = must, <b>patut</b> = should / ought. Strength goes up from patut → perlu → mesti in many contexts.</p>
        <div class="example">
          <p class="malay">Awak patut rehat.</p>
          <p class="meaning">You should rest.</p>
          <p class="malay">Saya perlu duit.</p>
          <p class="meaning">I need money.</p>
          <p class="malay">Awak mesti ikut peraturan.</p>
          <p class="meaning">You must follow the rules.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">Esok saya perlu bangun awal. Saya patut tidur awal malam ini.</p>
          <p class="meaning">Tomorrow I need to wake early. I should sleep early tonight.</p>
        </div>
      `,
      tasks: [
        {
          q: "Strongest obligation:",
          choices: ["patut", "perlu", "mesti"],
          answer: 2,
        },
      ],
    },
    {
      id: "1.5",
      module: "m1",
      title: "Suka / suka akan",
      subtitle: "Likes and preferences",
      rule: `
        <p><b>Suka</b> + noun/verb = like. For people or stronger attachment you may hear <i>suka akan</i>, but plain <i>suka</i> is enough for food, hobbies, places.</p>
        <div class="example">
          <p class="malay">Saya suka makan pedas.</p>
          <p class="meaning">I like eating spicy food.</p>
          <p class="malay">Dia tidak suka hujan.</p>
          <p class="meaning">He does not like rain.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Awak suka filem apa?</p>
          <p class="meaning">What kind of films do you like?</p>
          <p class="malay">B: Saya suka filem komedi, tapi tidak suka seram.</p>
          <p class="meaning">I like comedy films, but not horror.</p>
        </div>
      `,
      tasks: [
        {
          q: "“I do not like coffee”",
          choices: ["Saya bukan suka kopi.", "Saya tidak suka kopi.", "Saya belum suka kopi."],
          answer: 1,
        },
      ],
    },
    {
      id: "1.6",
      module: "m1",
      title: "Ada + verb feel",
      subtitle: "Experience and availability",
      rule: `
        <p>Beyond possession, <b>ada</b> can mark that an experience exists: <i>Pernah ada…</i>, or that something is available to do. Spoken Malay also uses <i>ada</i> as a soft filler before verbs.</p>
        <div class="example">
          <p class="malay">Ada nak cuba?</p>
          <p class="meaning">Want to try? (colloquial invitation)</p>
          <p class="malay">Saya pernah ada tinggal di Penang.</p>
          <p class="meaning">I once lived in Penang. (possible in speech)</p>
        </div>
        <div class="note"><b>Keep it clean for writing:</b> prefer <i>Saya pernah tinggal di Penang.</i></div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Ada soalan?</p>
          <p class="meaning">Any questions?</p>
          <p class="malay">B: Ada. Boleh ulang sekali?</p>
          <p class="meaning">Yes. Can you repeat once?</p>
        </div>
      `,
      tasks: [
        {
          q: "Natural classroom check:",
          choices: ["Ada soalan?", "Soalan adalah?", "Bukan soalan?"],
          answer: 0,
        },
      ],
    },
    {
      id: "1.7",
      module: "m1",
      title: "Ayat perintah",
      subtitle: "Commands and soft requests",
      rule: `
        <p>Bare verb = command: <i>Duduk. Tunggu. Mari.</i> Soften with <b>tolong</b>, <b>sila</b>, or a question with <i>boleh</i>.</p>
        <div class="example">
          <p class="malay">Tolong buka tingkap.</p>
          <p class="meaning">Please open the window.</p>
          <p class="malay">Sila masuk.</p>
          <p class="meaning">Please come in.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Tolong hantar mesej ini.</p>
          <p class="meaning">Please send this message.</p>
          <p class="malay">B: Baik. Tunggu sekejap.</p>
          <p class="meaning">Alright. Wait a moment.</p>
        </div>
      `,
      tasks: [
        {
          q: "Softer than a bare command:",
          choices: ["Tutup pintu.", "Tolong tutup pintu.", "Pintu tutup mesti."],
          answer: 1,
        },
      ],
    },

    // —— Block 2 ——
    {
      id: "2.1",
      module: "m2",
      title: "meN- aktif",
      subtitle: "Active voice with me-",
      rule: `
        <p>The <b>meN-</b> prefix marks an active, often transitive verb. The nasal adapts: <i>me-, mem-, men-, meng-, meny-</i> depending on the root’s first letter.</p>
        <div class="example">
          <p class="malay">tulis → menulis · baca → membaca · ajar → mengajar</p>
          <p class="meaning">write · read · teach</p>
        </div>
        <div class="note"><b>Memory hook.</b> Spoken Malay often drops meN- when the object is clear: <i>Saya baca buku</i> is fine in speech; formal writing likes <i>membaca</i>.</div>
      `,
      text: `
        <div class="example">
          <p class="malay">Guru mengajar murid menulis surat.</p>
          <p class="meaning">The teacher teaches the pupils to write a letter.</p>
        </div>
        <div class="word-grid">
          <div class="word"><b>menulis</b><small>write</small></div>
          <div class="word"><b>membaca</b><small>read</small></div>
          <div class="word"><b>mengajar</b><small>teach</small></div>
          <div class="word"><b>membeli</b><small>buy</small></div>
        </div>
      `,
      tasks: [
        {
          q: "Root “beli” with meN- becomes:",
          choices: ["mebeli", "membeli", "menbeli"],
          answer: 1,
        },
      ],
    },
    {
      id: "2.2",
      module: "m2",
      title: "di- pasif",
      subtitle: "Passive with di-",
      rule: `
        <p><b>di-</b> + root makes a passive. The doer, if mentioned, often comes after with <i>oleh</i>, or simply after the verb in speech.</p>
        <div class="example">
          <p class="malay">Surat itu ditulis oleh Ali.</p>
          <p class="meaning">That letter was written by Ali.</p>
          <p class="malay">Nasi sudah dimakan.</p>
          <p class="meaning">The rice has already been eaten.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Buku ini dibeli di mana?</p>
          <p class="meaning">Where was this book bought?</p>
          <p class="malay">B: Dibeli di kedai buku lama.</p>
          <p class="meaning">Bought at an old bookshop.</p>
        </div>
      `,
      tasks: [
        {
          q: "Passive of “makan”:",
          choices: ["memakan", "dimakan", "bermakan"],
          answer: 1,
        },
      ],
    },
    {
      id: "2.3",
      module: "m2",
      title: "ber- keadaan",
      subtitle: "States, habits, reciprocal feel",
      rule: `
        <p><b>ber-</b> often marks an intransitive state or activity: <i>berlari, berbicara, bekerja, bermain</i>. No direct object is required.</p>
        <div class="example">
          <p class="malay">Mereka berbicara di luar.</p>
          <p class="meaning">They are talking outside.</p>
          <p class="malay">Saya bekerja di pejabat.</p>
          <p class="meaning">I work in an office.</p>
        </div>
      `,
      text: `
        <div class="word-grid">
          <div class="word"><b>berlari</b><small>run</small></div>
          <div class="word"><b>bermain</b><small>play</small></div>
          <div class="word"><b>bercakap</b><small>chat / speak</small></div>
          <div class="word"><b>berhenti</b><small>stop</small></div>
        </div>
      `,
      tasks: [
        {
          q: "Best ber- verb:",
          choices: ["bermakan nasi", "bermain bola", "berbaca buku itu"],
          answer: 1,
        },
      ],
    },
    {
      id: "2.4",
      module: "m2",
      title: "ter- tak sengaja",
      subtitle: "Unintended or ability result",
      rule: `
        <p><b>ter-</b> can mean accidental (<i>terjatuh, terbuka</i>) or “able to / managed to” (<i>terdengar, terlihat</i>). Context chooses.</p>
        <div class="example">
          <p class="malay">Gelas itu terjatuh.</p>
          <p class="meaning">The glass fell (accidentally).</p>
          <p class="malay">Suara dia terdengar dari sini.</p>
          <p class="meaning">His voice can be heard from here.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Pintu terbuka ke?</p>
          <p class="meaning">Is the door open?</p>
          <p class="malay">B: Ya, saya tak sengaja terdorong tadi.</p>
          <p class="meaning">Yes, I accidentally pushed it earlier.</p>
        </div>
      `,
      tasks: [
        {
          q: "Accidental fall uses:",
          choices: ["menjatuh", "terjatuh", "dijatuh"],
          answer: 1,
        },
      ],
    },
    {
      id: "2.5",
      module: "m2",
      title: "peN- / -an",
      subtitle: "People and abstract nouns from verbs",
      rule: `
        <p><b>peN-</b> often makes an agent noun: <i>penulis, pembaca, pengajar</i>. <b>-an</b> makes results or abstracts: <i>tulisan, bacaan, makanan</i>.</p>
        <div class="example">
          <p class="malay">penulis · tulisan · makanan</p>
          <p class="meaning">writer · writing · food</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">Penulis itu menulis tulisan pendek setiap minggu.</p>
          <p class="meaning">That writer writes a short piece every week.</p>
        </div>
      `,
      tasks: [
        {
          q: "“Food” from makan:",
          choices: ["pemakan", "makanan", "termakan"],
          answer: 1,
        },
      ],
    },
    {
      id: "2.6",
      module: "m2",
      title: "me- … -kan / -i",
      subtitle: "Causative and directional endings",
      rule: `
        <p><b>-kan</b> often makes a causative or focuses the object as beneficiary/theme. <b>-i</b> often adds a locative or repeated feel. Learn pairs as chunks: <i>menunggu / menunggukan</i> is less common than clear pairs like <i>membuka / membukakan</i>.</p>
        <div class="example">
          <p class="malay">Tolong bukakan pintu untuk saya.</p>
          <p class="meaning">Please open the door for me.</p>
          <p class="malay">Dia menanami tanah itu dengan padi.</p>
          <p class="meaning">He planted that land with rice.</p>
        </div>
        <div class="note"><b>Do not over-affix.</b> Many everyday sentences are clearer with a bare or meN- verb plus a preposition.</div>
      `,
      text: `
        <div class="example">
          <p class="malay">Ibu membacakan cerita kepada anak.</p>
          <p class="meaning">Mother reads a story to the child.</p>
        </div>
      `,
      tasks: [
        {
          q: "-kan often feels:",
          choices: ["accidental", "for someone’s benefit / causative", "purely plural"],
          answer: 1,
        },
      ],
    },

    // —— Block 3 ——
    {
      id: "3.1",
      module: "m3",
      title: "Punya / -ku / -mu / -nya",
      subtitle: "Possession shortcuts",
      rule: `
        <p>Standard: <i>buku saya</i>. Spoken: <i>buku aku / buku awak</i>. Clitics: <b>-ku, -mu, -nya</b> attach to the noun: <i>bukuku, bukumu, bukunya</i>. <b>Punya</b> also marks ownership in speech: <i>Ini punya saya.</i></p>
        <div class="example">
          <p class="malay">Nama saya Amin. Namanya Amin.</p>
          <p class="meaning">My name is Amin. His/her name is Amin.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Ini beg siapa?</p>
          <p class="meaning">Whose bag is this?</p>
          <p class="malay">B: Beg saya. Oh, itu begnya.</p>
          <p class="meaning">My bag. Oh, that is his/hers.</p>
        </div>
      `,
      tasks: [
        {
          q: "“His book” with a clitic:",
          choices: ["bukuku", "bukumu", "bukunya"],
          answer: 2,
        },
      ],
    },
    {
      id: "3.2",
      module: "m3",
      title: "Penjodoh bilangan",
      subtitle: "Classifiers: orang, buah, biji…",
      rule: `
        <p>Numbers often need a classifier: <b>orang</b> (people), <b>ekor</b> (animals), <b>buah</b> (large objects / abstract units), <b>biji</b> (small roundish things), <b>helai</b> (flat sheets), <b>batang</b> (long thin).</p>
        <div class="example">
          <p class="malay">tiga orang kawan · dua ekor kucing · sebuah rumah</p>
          <p class="meaning">three friends · two cats · a house</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">Saya beli dua biji epal dan sehelai kain.</p>
          <p class="meaning">I bought two apples and one piece of cloth.</p>
        </div>
      `,
      tasks: [
        {
          q: "Classifier for people:",
          choices: ["buah", "orang", "batang"],
          answer: 1,
        },
      ],
    },
    {
      id: "3.3",
      module: "m3",
      title: "Lebih / paling / kurang",
      subtitle: "Comparisons without -er endings",
      rule: `
        <p>Use <b>lebih … daripada</b> for comparative, <b>paling / ter-</b> for superlative, <b>sama … dengan</b> for equality.</p>
        <div class="example">
          <p class="malay">Teh ini lebih manis daripada itu.</p>
          <p class="meaning">This tea is sweeter than that.</p>
          <p class="malay">Ini yang paling sedap.</p>
          <p class="meaning">This is the tastiest.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: KL lebih besar daripada Ipoh, kan?</p>
          <p class="meaning">KL is bigger than Ipoh, right?</p>
          <p class="malay">B: Ya. Tapi Ipoh punya makanan paling sedap, bagi saya.</p>
          <p class="meaning">Yes. But for me Ipoh has the tastiest food.</p>
        </div>
      `,
      tasks: [
        {
          q: "Comparative frame:",
          choices: ["paling … daripada", "lebih … daripada", "sama … daripada"],
          answer: 1,
        },
      ],
    },
    {
      id: "3.4",
      module: "m3",
      title: "Kalau / jika / walaupun",
      subtitle: "If and although",
      rule: `
        <p><b>Kalau</b> (spoken) / <b>jika / sekiranya</b> (formal) = if. <b>Walaupun / meskipun</b> = although. The “then” clause often needs no special word.</p>
        <div class="example">
          <p class="malay">Kalau hujan, kita tinggal di rumah.</p>
          <p class="meaning">If it rains, we stay home.</p>
          <p class="malay">Walaupun letih, dia terus kerja.</p>
          <p class="meaning">Although tired, he keeps working.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">Kalau awak datang awal, kita boleh minum kopi dulu.</p>
          <p class="meaning">If you come early, we can have coffee first.</p>
        </div>
      `,
      tasks: [
        {
          q: "Everyday “if”:",
          choices: ["walaupun", "kalau", "daripada"],
          answer: 1,
        },
      ],
    },
    {
      id: "3.5",
      module: "m3",
      title: "Yang",
      subtitle: "The relative hinge",
      rule: `
        <p><b>Yang</b> links a noun to a description — Malay’s “who / which / that”. Keep the clause tight after <i>yang</i>.</p>
        <div class="example">
          <p class="malay">Orang yang duduk situ kawan saya.</p>
          <p class="meaning">The person who is sitting there is my friend.</p>
          <p class="malay">Makanan yang paling sedap sudah habis.</p>
          <p class="meaning">The tastiest food is already gone.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">Buku yang saya beli semalam hilang.</p>
          <p class="meaning">The book that I bought yesterday is missing.</p>
        </div>
      `,
      tasks: [
        {
          q: "yang mainly:",
          choices: ["marks past tense", "links noun + description", "means “or”"],
          answer: 1,
        },
      ],
    },
    {
      id: "3.6",
      module: "m3",
      title: "Partikel lah / kah / pun",
      subtitle: "Tiny words, big tone",
      rule: `
        <p><b>-lah</b> softens or emphasises a command/statement. <b>-kah</b> marks questions (more formal). <b>pun</b> adds “even / also / too” flavours: <i>saya pun nak</i>.</p>
        <div class="example">
          <p class="malay">Duduklah dulu.</p>
          <p class="meaning">Do sit down first.</p>
          <p class="malay">Siapakah dia?</p>
          <p class="meaning">Who is he/she?</p>
          <p class="malay">Saya pun setuju.</p>
          <p class="meaning">I agree too.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Marilah kita mula.</p>
          <p class="meaning">Come, let’s start.</p>
          <p class="malay">B: Baiklah.</p>
          <p class="meaning">Alright then.</p>
        </div>
      `,
      tasks: [
        {
          q: "Softening a command often uses:",
          choices: ["-kah", "-lah", "pun only"],
          answer: 1,
        },
      ],
    },
    {
      id: "3.7",
      module: "m3",
      title: "Waktu & nombor",
      subtitle: "Clock talk and counting cleanly",
      rule: `
        <p>Hours: <i>pukul tiga / jam tiga</i>. Half: <i>pukul tiga setengah</i>. Minutes: <i>pukul tiga lebih sepuluh</i>. Numbers stay before classifiers: <i>lima orang</i>.</p>
        <div class="example">
          <p class="malay">Jumpa pukul dua petang.</p>
          <p class="meaning">Meet at two in the afternoon.</p>
          <p class="malay">Saya ada tiga tiket.</p>
          <p class="meaning">I have three tickets.</p>
        </div>
      `,
      text: `
        <div class="example">
          <p class="malay">A: Bas datang pukul berapa?</p>
          <p class="meaning">What time does the bus come?</p>
          <p class="malay">B: Pukul tujuh pagi. Jangan lambat.</p>
          <p class="meaning">Seven in the morning. Don’t be late.</p>
        </div>
      `,
      tasks: [
        {
          q: "“Half past three” feel:",
          choices: ["pukul tiga setengah", "pukul setengah tiga sahaja", "tiga pukul setengah"],
          answer: 0,
        },
      ],
    },
  ];

  const patterns = [
    {
      id: "svo",
      build: (w) => (w ? `${cap(w)} makan nasi.` : "Saya makan nasi."),
    },
    {
      id: "ada",
      build: (w) => (w ? `Ada ${w} ke?` : "Ada air ke?"),
    },
    {
      id: "nak",
      build: (w) => (w ? `Saya nak ${w}.` : "Saya nak pergi."),
    },
    {
      id: "sudah",
      build: (w) => (w ? `Saya sudah ${w}.` : "Saya sudah makan."),
    },
    {
      id: "tidak",
      build: (w) => (w ? `Saya tidak ${w}.` : "Saya tidak lapar."),
    },
    {
      id: "bukan",
      build: (w) => (w ? `Ini bukan ${w}.` : "Ini bukan rumah saya."),
    },
    {
      id: "ke",
      build: (w) => (w ? `Saya pergi ke ${w}.` : "Saya pergi ke pasar."),
    },
    {
      id: "yang",
      build: (w) => (w ? `Orang yang ${w} kawan saya.` : "Orang yang duduk situ kawan saya."),
    },
  ];

  function patternMeta(id) {
    return I18n.patterns.find((p) => p.id === id) || { label: { en: id, ru: id }, why: { en: "", ru: "" } };
  }

  function localizedLesson(lesson) {
    if (!lesson) return null;
    if (state.lang === "en") return lesson;
    const ru = I18n.lessons[lesson.id];
    if (!ru) return lesson;
    return {
      ...lesson,
      subtitle: ru.subtitle || lesson.subtitle,
      rule: ru.rule || lesson.rule,
      text: ru.text || lesson.text,
      tasks: lesson.tasks.map((task, i) => ({
        ...task,
        q: ru.tasks?.[i]?.q || task.q,
        choices: ru.tasks?.[i]?.choices || task.choices,
      })),
    };
  }

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  }

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  }

  function saveLang() {
    localStorage.setItem(LANG_KEY, state.lang);
  }

  function cap(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
  }

  function lessonById(id) {
    return lessons.find((l) => l.id === id);
  }

  function lessonsFor(moduleId) {
    return lessons.filter((l) => l.module === moduleId);
  }

  function doneCount() {
    return lessons.filter((l) => state.progress[l.id]?.done).length;
  }

  function markDone(id) {
    state.progress[id] = { ...(state.progress[id] || {}), done: true };
    saveProgress();
  }

  function markWrong(id) {
    const prev = state.progress[id] || {};
    state.progress[id] = { ...prev, wrong: (prev.wrong || 0) + 1 };
    saveProgress();
  }

  function setNav(active) {
    document.querySelectorAll(".nav-item").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.action === active);
    });
  }

  function syncChrome() {
    document.documentElement.lang = state.lang === "ru" ? "ru" : "en";
    document.title = t("brand");
    const brand = document.getElementById("brand-label");
    if (brand) brand.textContent = t("brand");
    document.querySelectorAll("[data-nav-label]").forEach((el) => {
      el.textContent = t(el.dataset.navLabel);
    });
    const langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.textContent = t("langShort");
      langBtn.setAttribute("aria-label", t("langToggle"));
    }
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) themeBtn.setAttribute("aria-label", t("themeToggle"));
  }

  function render() {
    syncChrome();
    const app = document.getElementById("app");
    if (state.view === "home") {
      setNav("home");
      app.innerHTML = renderHome();
    } else if (state.view === "lesson") {
      setNav("home");
      app.innerHTML = renderLesson();
    } else if (state.view === "patterns") {
      setNav("patterns");
      app.innerHTML = renderPatterns();
    } else if (state.view === "review") {
      setNav("review");
      app.innerHTML = renderReview();
    } else if (state.view === "about") {
      setNav("home");
      app.innerHTML = renderAbout();
    } else if (state.view === "sheet") {
      setNav("home");
      app.innerHTML = renderSheet();
    }
    app.focus({ preventScroll: true });
    bindDynamic();
  }

  function renderHome() {
    const done = doneCount();
    const total = lessons.length;
    const pct = Math.round((done / total) * 100);
    const doneLabel = t("ofDone").replace("{done}", done).replace("{total}", total);
    return `
      <p class="eyebrow">${t("pocketCourse")}</p>
      <h1>${t("brand")}</h1>
      <p class="intro">${t("homeIntro")}</p>
      <div class="progress-ring" aria-label="${doneLabel}">${pct}%</div>
      <div class="quick-actions">
        <button class="quick-action" data-action="patterns"><span class="action-icon">⌘</span><b>${t("patternBox")}</b><small>${t("patternBoxHint")}</small></button>
        <button class="quick-action" data-action="sheet"><span class="action-icon">☰</span><b>${t("cheatSheet")}</b><small>${t("cheatSheetHint")}</small></button>
        <button class="quick-action" data-action="review"><span class="action-icon">↻</span><b>${t("review")}</b><small>${t("reviewHint")}</small></button>
        <button class="quick-action" data-action="about"><span class="action-icon">i</span><b>${t("about")}</b><small>${t("aboutHint")}</small></button>
      </div>
      ${modules
        .map((m, mi) => {
          const list = lessonsFor(m.id);
          return `
          <section class="module">
            <div class="module-intro tone-${mi}">
              <div class="module-label">${pick(m.label)} · ${pick(m.level)}</div>
              <h2>${pick(m.title)}</h2>
              <p>${pick(m.blurb)}</p>
            </div>
            <div class="lesson-list">
              ${list
                .map((l) => {
                  const loc = localizedLesson(l);
                  return `
                <button class="lesson-card" data-lesson="${l.id}">
                  <span class="lesson-number">${l.id}</span>
                  <span>
                    <b>${l.title}</b>
                    <small>${loc.subtitle}</small>
                  </span>
                  <span class="${state.progress[l.id]?.done ? "done" : "arrow"}">${state.progress[l.id]?.done ? "✓" : "›"}</span>
                </button>`;
                })
                .join("")}
            </div>
          </section>`;
        })
        .join("")}
      <button class="next" data-action="reset-progress" style="background:transparent;color:var(--muted);border:1px solid var(--line);margin-bottom:12px">${t("resetProgress")}</button>
    `;
  }

  function renderLesson() {
    const base = lessonById(state.lessonId);
    const lesson = localizedLesson(base);
    if (!lesson) return renderHome();
    const idx = lessons.findIndex((l) => l.id === lesson.id);
    const next = lessons[idx + 1];
    const tabs = [
      ["rule", t("rule")],
      ["text", t("text")],
      ["task", t("practice")],
    ];
    let body = "";
    if (state.tab === "rule") body = `<div class="lesson-copy">${lesson.rule}</div>`;
    if (state.tab === "text") body = `<div class="lesson-copy">${lesson.text}</div>`;
    if (state.tab === "task") body = renderTasks(lesson);

    const doneBit = state.progress[lesson.id]?.done ? ` · ${t("done")}` : "";
    return `
      <button class="back" data-action="home">${t("allTopics")}</button>
      <div class="lesson-kicker">${lesson.id}${doneBit}</div>
      <h1 style="font-size:34px">${lesson.title}</h1>
      <p class="intro">${lesson.subtitle}</p>
      <div class="tabs">
        ${tabs
          .map(
            ([id, label]) =>
              `<button class="tab ${state.tab === id ? "active" : ""}" data-tab="${id}">${label}</button>`
          )
          .join("")}
      </div>
      ${body}
      ${
        next
          ? `<button class="next" data-lesson="${next.id}" data-mark="${lesson.id}">${t("next")} · ${next.id} ${next.title}</button>`
          : `<button class="next" data-action="home" data-mark="${lesson.id}">${t("backToCourse")}</button>`
      }
    `;
  }

  function renderTasks(lesson) {
    return lesson.tasks
      .map((task, i) => {
        const key = `${lesson.id}:${i}`;
        const answered = state.progress[lesson.id]?.answers?.[i];
        return `
        <div class="question" style="margin-bottom:14px" data-q="${key}">
          <h3>${task.q}</h3>
          <div class="answers">
            ${task.choices
              .map((c, ci) => {
                let cls = "answer";
                if (answered !== undefined) {
                  if (ci === task.answer) cls += " correct";
                  else if (ci === answered && answered !== task.answer) cls += " wrong";
                }
                return `<button class="${cls}" data-answer="${ci}" data-lesson-q="${lesson.id}" data-qi="${i}" data-correct="${task.answer}" ${answered !== undefined ? "disabled" : ""}>${c}</button>`;
              })
              .join("")}
          </div>
        </div>`;
      })
      .join("");
  }

  function renderPatterns() {
    const firstMeta = patternMeta(patterns[0].id);
    return `
      <button class="back" data-action="home">${t("allTopics")}</button>
      <p class="eyebrow">${t("toolkit")}</p>
      <h1 style="font-size:34px">${t("patternTitle")}</h1>
      <p class="intro">${t("patternIntro")}</p>
      <div class="pattern-tool">
        <label for="pattern-input">${t("yourWord")}</label>
        <input id="pattern-input" type="text" placeholder="${t("patternPlaceholder")}" autocomplete="off" />
        <div id="pattern-list" style="display:grid;gap:8px;margin-top:14px">
          ${patterns
            .map((p) => {
              const meta = patternMeta(p.id);
              return `<button class="answer" data-pattern="${p.id}" style="font-weight:600">${pick(meta.label)}</button>`;
            })
            .join("")}
        </div>
        <div class="pattern-result" id="pattern-result">
          <b>${patterns[0].build("")}</b>
          <p class="meaning" style="margin:8px 0 0;color:var(--muted)">${pick(firstMeta.why)}</p>
        </div>
      </div>
    `;
  }

  function renderSheet() {
    const sheet = I18n.sheet[state.lang] || I18n.sheet.en;
    return `
      <button class="back" data-action="home">${t("allTopics")}</button>
      <p class="eyebrow">${t("cheatSheet")}</p>
      <h1 style="font-size:34px">${t("sheetTitle")}</h1>
      <p class="intro">${t("sheetIntro")}</p>
      <div class="note">
        <b>${t("negation")}</b>
        <p style="margin:8px 0 0">${sheet.negationBody}</p>
      </div>
      <div class="note" style="background:color-mix(in srgb, var(--sun) 28%, var(--surface))">
        <b>${t("place")}</b>
        <p style="margin:8px 0 0">${sheet.placeBody}</p>
      </div>
      <div class="example">
        <div class="example-label">${sheet.aspectLabel || t("aspectHelpers")}</div>
        <p class="malay">sudah · sedang · akan · baru · pernah</p>
        <p class="meaning">${sheet.aspectMeaning || t("aspectMeaning")}</p>
      </div>
      <div class="example">
        <div class="example-label">${sheet.pronounLabel || t("pronounCut")}</div>
        <p class="malay">saya / aku · awak · dia · kami / kita · mereka</p>
        <p class="meaning">${sheet.pronounMeaning || t("pronounMeaning")}</p>
      </div>
      <div class="example">
        <div class="example-label">${sheet.menLabel || t("menHint")}</div>
        <p class="meaning">${sheet.menBody || t("menHint")}</p>
      </div>
    `;
  }

  function renderReview() {
    const hard = lessons
      .filter((l) => (state.progress[l.id]?.wrong || 0) > 0)
      .sort((a, b) => (state.progress[b.id].wrong || 0) - (state.progress[a.id].wrong || 0));
    if (!hard.length) {
      return `
        <button class="back" data-action="home">${t("allTopics")}</button>
        <div class="empty">
          <h2>${t("reviewEmptyTitle")}</h2>
          <p>${t("reviewEmptyBody")}</p>
        </div>`;
    }
    return `
      <button class="back" data-action="home">${t("allTopics")}</button>
      <p class="eyebrow">${t("reviewEyebrow")}</p>
      <h1 style="font-size:34px">${t("reviewTitle")}</h1>
      <div class="lesson-list" style="border-radius:16px;border:1px solid var(--line)">
        ${hard
          .map((l) => {
            const n = state.progress[l.id].wrong;
            const missLabel = `${n} ${n > 1 ? t("misses") : t("miss")}`;
            return `
          <button class="lesson-card" data-lesson="${l.id}">
            <span class="lesson-number">${l.id}</span>
            <span><b>${l.title}</b><small>${missLabel}</small></span>
            <span class="arrow">›</span>
          </button>`;
          })
          .join("")}
      </div>
    `;
  }

  function renderAbout() {
    const labels =
      state.lang === "ru"
        ? { what: "Что это.", who: "Кому подходит.", each: "Каждая тема.", how: "Как заниматься." }
        : { what: "What it is.", who: "Who it suits.", each: "Each topic.", how: "How to study." };
    return `
      <button class="back" data-action="home">${t("allTopics")}</button>
      <p class="eyebrow">${t("aboutEyebrow")}</p>
      <h1 style="font-size:34px">${t("aboutTitle")}</h1>
      <div class="lesson-copy">
        <p><b>${labels.what}</b> ${t("aboutWhat")}</p>
        <p><b>${labels.who}</b> ${t("aboutWho")}</p>
        <p><b>${labels.each}</b> ${t("aboutEach")}</p>
        <p><b>${labels.how}</b> ${t("aboutHow")}</p>
        <p style="color:var(--muted);font-size:14px">${t("aboutFooter")}</p>
      </div>
    `;
  }

  function bindDynamic() {
    const root = document.getElementById("app");

    root.querySelectorAll("[data-action]").forEach((el) => {
      el.addEventListener("click", () => {
        if (el.dataset.mark) markDone(el.dataset.mark);
        const a = el.dataset.action;
        if (a === "home") {
          state.view = "home";
          state.lessonId = null;
        } else if (a === "patterns") state.view = "patterns";
        else if (a === "review") state.view = "review";
        else if (a === "about") state.view = "about";
        else if (a === "sheet") state.view = "sheet";
        else if (a === "reset-progress") {
          if (confirm(t("clearProgressConfirm"))) {
            state.progress = {};
            saveProgress();
          }
        }
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

    root.querySelectorAll("[data-lesson]").forEach((el) => {
      el.addEventListener("click", () => {
        if (el.dataset.mark) markDone(el.dataset.mark);
        state.view = "lesson";
        state.lessonId = el.dataset.lesson;
        state.tab = "rule";
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

    root.querySelectorAll("[data-tab]").forEach((el) => {
      el.addEventListener("click", () => {
        state.tab = el.dataset.tab;
        render();
      });
    });

    root.querySelectorAll("[data-answer]").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.dataset.lessonQ;
        const qi = Number(el.dataset.qi);
        const correct = Number(el.dataset.correct);
        const chosen = Number(el.dataset.answer);
        const prev = state.progress[id] || {};
        const answers = { ...(prev.answers || {}), [qi]: chosen };
        state.progress[id] = { ...prev, answers };
        if (chosen !== correct) markWrong(id);
        else saveProgress();
        const allRight = lessonById(id).tasks.every((task, i) => answers[i] === task.answer);
        if (allRight) markDone(id);
        render();
      });
    });

    const input = document.getElementById("pattern-input");
    root.querySelectorAll("[data-pattern]").forEach((el) => {
      el.addEventListener("click", () => {
        const p = patterns.find((x) => x.id === el.dataset.pattern);
        const meta = patternMeta(el.dataset.pattern);
        const word = (input?.value || "").trim();
        const box = document.getElementById("pattern-result");
        if (box && p) {
          box.innerHTML = `<b>${p.build(word)}</b><p class="meaning" style="margin:8px 0 0;color:var(--muted)">${pick(meta.why)}</p>`;
        }
      });
    });
  }

  // Theme
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);
  themeToggle?.addEventListener("click", () => {
    const nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    if (nextTheme === "light") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem(THEME_KEY, nextTheme === "light" ? "" : "dark");
  });

  document.getElementById("lang-toggle")?.addEventListener("click", () => {
    state.lang = state.lang === "en" ? "ru" : "en";
    saveLang();
    render();
  });

  document.querySelectorAll(".brand, .nav-item").forEach((el) => {
    el.addEventListener("click", () => {
      const a = el.dataset.action;
      if (!a) return;
      state.view = a === "home" ? "home" : a;
      if (a === "home") state.lessonId = null;
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  render();
})();
