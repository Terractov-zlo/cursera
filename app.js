const STORAGE_KEY = "mini-social-posts-v1";
const MAX_LENGTH = 280;
const PREVIEW_LIMIT = 180;

const seedPosts = [
  {
    id: "p0",
    author: "Аян",
    content:
      "Запускаю рубрику про учебный фокус: как планировать день и не выгорать.",
    mood: "Легко",
    likes: 18,
    likedByUser: false,
    pinned: true,
    media:
      "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1200&q=80",
    link: "https://hexlet.io",
    createdAt: "2026-03-29T07:20:00.000Z",
    comments: [
      {
        id: "c0a",
        author: "Дарина",
        text: "Очень вовремя, беру в заметки.",
        createdAt: "2026-03-29T07:45:00.000Z",
      },
    ],
  },
  {
    id: "p1",
    author: "Кирилл М.",
    content:
      "Обновил ленту: закрепы, новые карточки и более чистый интерфейс.",
    mood: "Вдохновенно",
    likes: 7,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-28T15:12:00.000Z",
    comments: [
      {
        id: "c1",
        author: "Лина",
        text: "Выглядит как настоящий продукт.",
        createdAt: "2026-03-28T16:10:00.000Z",
      },
    ],
  },
  {
    id: "p2",
    author: "Омар",
    content:
      "Сделал форму создания поста более компактной и понятной для новичков.",
    mood: "Уверенно",
    likes: 12,
    likedByUser: true,
    pinned: false,
    media:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2026-03-27T11:44:00.000Z",
    comments: [
      {
        id: "c2",
        author: "Света",
        text: "Супер, все по делу.",
        createdAt: "2026-03-27T12:10:00.000Z",
      },
      {
        id: "c3",
        author: "Ильяс",
        text: "Можно позже добавить черновики?",
        createdAt: "2026-03-27T12:35:00.000Z",
      },
    ],
  },
  {
    id: "p3",
    author: "Айна",
    content:
      "Предлагаю прописать правила общения: уважение, ясность, конкретика.",
    mood: "Спокойно",
    likes: 3,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-26T18:02:00.000Z",
    comments: [],
  },
  {
    id: "p4",
    author: "Данил",
    content:
      "Давайте вводить теги по темам: #дизайн #код #менеджмент.",
    mood: "Вдохновенно",
    likes: 9,
    likedByUser: false,
    pinned: false,
    link: "https://habr.com",
    createdAt: "2026-03-26T12:18:00.000Z",
    comments: [
      {
        id: "c4a",
        author: "Олеся",
        text: "Да, поиск станет быстрее.",
        createdAt: "2026-03-26T12:40:00.000Z",
      },
    ],
  },
  {
    id: "p5",
    author: "Раяна",
    content:
      "Подборка статей по UX‑копирайтингу — могу поделиться, если нужно.",
    mood: "Уверенно",
    likes: 14,
    likedByUser: false,
    pinned: false,
    link: "https://developer.mozilla.org",
    createdAt: "2026-03-25T19:55:00.000Z",
    comments: [
      {
        id: "c5a",
        author: "Матвей",
        text: "Скинь, пожалуйста.",
        createdAt: "2026-03-25T20:10:00.000Z",
      },
      {
        id: "c5b",
        author: "Лео",
        text: "Тоже интересно.",
        createdAt: "2026-03-25T20:12:00.000Z",
      },
    ],
  },
  {
    id: "p6",
    author: "Злата",
    content:
      "Кто может созвониться сегодня, чтобы обсудить адаптив? Я после 18:30.",
    mood: "Спокойно",
    likes: 6,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-25T15:05:00.000Z",
    comments: [
      {
        id: "c6a",
        author: "Руссо",
        text: "Могу в 19:00.",
        createdAt: "2026-03-25T15:20:00.000Z",
      },
    ],
  },
  {
    id: "p7",
    author: "Нелли",
    content:
      "Настроила цветовые переменные, теперь стиль поддерживать проще.",
    mood: "Уверенно",
    likes: 11,
    likedByUser: true,
    pinned: false,
    createdAt: "2026-03-24T09:18:00.000Z",
    comments: [],
  },
  {
    id: "p8",
    author: "Эдик",
    content:
      "Предлагаю мини‑онбординг: три шага, чтобы новичку было понятно.",
    mood: "Вдохновенно",
    likes: 5,
    likedByUser: false,
    pinned: false,
    media:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2026-03-23T21:42:00.000Z",
    comments: [
      {
        id: "c8a",
        author: "Инна",
        text: "Поддерживаю, это важно.",
        createdAt: "2026-03-23T22:01:00.000Z",
      },
    ],
  },
  {
    id: "p9",
    author: "Гоша",
    content:
      "Сегодня исправил пару мелких багов — проверьте в комментариях.",
    mood: "Легко",
    likes: 8,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-23T17:30:00.000Z",
    comments: [],
  },
  {
    id: "p10",
    author: "Лиза Р.",
    content:
      "Есть идея челленджа: каждый день короткий пост о прогрессе.",
    mood: "Вдохновенно",
    likes: 4,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-22T13:27:00.000Z",
    comments: [
      {
        id: "c10a",
        author: "Самат",
        text: "Давайте, я за!",
        createdAt: "2026-03-22T14:05:00.000Z",
      },
    ],
  },
  {
    id: "p11",
    author: "Лаура",
    content:
      "Собрала чеклист перед сдачей: адаптив, контраст, логика интерактива.",
    mood: "Уверенно",
    likes: 10,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-22T09:12:00.000Z",
    comments: [
      {
        id: "c11a",
        author: "Иман",
        text: "Супер, заберу в закладки.",
        createdAt: "2026-03-22T09:40:00.000Z",
      },
    ],
  },
  {
    id: "p12",
    author: "Рустем А.",
    content:
      "Кому интересно — покажу, как настроил поиск по ленте.",
    mood: "Спокойно",
    likes: 7,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-21T20:18:00.000Z",
    comments: [
      {
        id: "c12a",
        author: "Мадина К.",
        text: "Да, покажи пожалуйста!",
        createdAt: "2026-03-21T20:44:00.000Z",
      },
    ],
  },
  {
    id: "p13",
    author: "Тимофей",
    content:
      "Поиграл с тенями — карточки стали мягче и легче для чтения.",
    mood: "Легко",
    likes: 6,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-21T16:02:00.000Z",
    comments: [],
  },
  {
    id: "p14",
    author: "Эльнара",
    content:
      "Вынесла блок «О проекте» в шапку — стало структурнее.",
    mood: "Уверенно",
    likes: 13,
    likedByUser: true,
    pinned: false,
    createdAt: "2026-03-21T10:28:00.000Z",
    comments: [
      {
        id: "c14a",
        author: "Жасмин",
        text: "Согласна, так читается лучше.",
        createdAt: "2026-03-21T10:42:00.000Z",
      },
    ],
  },
  {
    id: "p15",
    author: "Егор Н.",
    content:
      "Собираю идеи для короткого промо о проекте. Что показать первым?",
    mood: "Вдохновенно",
    likes: 5,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-20T19:50:00.000Z",
    comments: [
      {
        id: "c15a",
        author: "Фарида",
        text: "Покажи ленту с фильтрами.",
        createdAt: "2026-03-20T20:05:00.000Z",
      },
    ],
  },
  {
    id: "p16",
    author: "Ника Т.",
    content:
      "Кто может проверить на Android? У меня iPhone, хочу сравнить поведение.",
    mood: "Спокойно",
    likes: 4,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-20T14:14:00.000Z",
    comments: [],
  },
  {
    id: "p17",
    author: "Жанна",
    content:
      "Сделала список будущих фич: теги, уведомления, сохраненные посты.",
    mood: "Уверенно",
    likes: 9,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-19T21:33:00.000Z",
    comments: [],
  },
  {
    id: "p18",
    author: "Сергей К.",
    content:
      "Проверил фильтры: все ок, но можно добавить быстрые кнопки.",
    mood: "Легко",
    likes: 3,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-19T10:02:00.000Z",
    comments: [],
  },
  {
    id: "p19",
    author: "Адель",
    content:
      "Предлагаю сделать панель статистики: посты, лайки, комментарии.",
    mood: "Вдохновенно",
    likes: 12,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-18T18:37:00.000Z",
    comments: [
      {
        id: "c19a",
        author: "Гаянэ",
        text: "Это будет полезно для обзора.",
        createdAt: "2026-03-18T19:00:00.000Z",
      },
    ],
  },
  {
    id: "p20",
    author: "Марк",
    content:
      "Сделал быстрый опрос по темам контента: дизайн, код, менеджмент?",
    mood: "Вдохновенно",
    likes: 8,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-18T09:25:00.000Z",
    comments: [
      {
        id: "c20a",
        author: "Роксана",
        text: "Дизайн + код звучит отлично.",
        createdAt: "2026-03-18T09:52:00.000Z",
      },
    ],
  },
  {
    id: "p21",
    author: "Артемий",
    content:
      "Сделал шпаргалку по структуре поста: тема → тезис → вывод.",
    mood: "Уверенно",
    likes: 6,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-17T18:20:00.000Z",
    comments: [
      {
        id: "c21a",
        author: "Диана С.",
        text: "Коротко и по делу.",
        createdAt: "2026-03-17T18:44:00.000Z",
      },
    ],
  },
  {
    id: "p22",
    author: "Ульяна",
    content:
      "Нашла вдохновляющий пример адаптивной сетки, могу показать.",
    mood: "Вдохновенно",
    likes: 9,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-17T12:08:00.000Z",
    comments: [],
  },
  {
    id: "p23",
    author: "Аян",
    content:
      "Как сделать блок комментариев компактнее на мобилках? Есть идеи?",
    mood: "Спокойно",
    likes: 4,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-16T20:45:00.000Z",
    comments: [
      {
        id: "c23a",
        author: "Дарина",
        text: "Можно сделать разворачиваемый список.",
        createdAt: "2026-03-16T21:05:00.000Z",
      },
    ],
  },
  {
    id: "p24",
    author: "Кирилл М.",
    content:
      "Перепроверил контраст текста — на светлом фоне читается лучше.",
    mood: "Легко",
    likes: 5,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-16T09:30:00.000Z",
    comments: [],
  },
  {
    id: "p25",
    author: "Омар",
    content:
      "Составил список улучшений: черновики, избранное, быстрые шаблоны.",
    mood: "Уверенно",
    likes: 7,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-15T19:12:00.000Z",
    comments: [],
  },
  {
    id: "p26",
    author: "Света",
    content:
      "Тестировала поиск: быстро, но стоит подсвечивать совпадения.",
    mood: "Спокойно",
    likes: 3,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-15T12:40:00.000Z",
    comments: [
      {
        id: "c26a",
        author: "Ильяс",
        text: "Подсветка будет круто.",
        createdAt: "2026-03-15T12:58:00.000Z",
      },
    ],
  },
  {
    id: "p27",
    author: "Айна",
    content:
      "Добавила плавный скролл к форме — переходы стали мягче.",
    mood: "Уверенно",
    likes: 6,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-14T20:10:00.000Z",
    comments: [],
  },
  {
    id: "p28",
    author: "Данил",
    content:
      "Завтра покажу, как делать карточки с «стеклом» и мягкой тенью.",
    mood: "Вдохновенно",
    likes: 8,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-14T09:55:00.000Z",
    comments: [],
  },
  {
    id: "p29",
    author: "Олеся",
    content:
      "Записала инструкцию по localStorage: где хранится и как чистить.",
    mood: "Спокойно",
    likes: 4,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-03-13T18:33:00.000Z",
    comments: [
      {
        id: "c29a",
        author: "Раяна",
        text: "Да, пришли пожалуйста!",
        createdAt: "2026-03-13T19:02:00.000Z",
      },
    ],
  },
];

const feedList = document.getElementById("feedList");
const pinnedList = document.getElementById("pinnedList");
const postCount = document.getElementById("postCount");
const createBtn = document.getElementById("createBtn");
const authorInput = document.getElementById("authorInput");
const contentInput = document.getElementById("contentInput");
const moodInput = document.getElementById("moodInput");
const sortSelect = document.getElementById("sortSelect");
const seedBtn = document.getElementById("seedBtn");
const newPostBtn = document.getElementById("newPostBtn");
const template = document.getElementById("postTemplate");
const searchInput = document.getElementById("searchInput");
const moodFilter = document.getElementById("moodFilter");
const likedOnlyBtn = document.getElementById("likedOnlyBtn");
const commentedOnlyBtn = document.getElementById("commentedOnlyBtn");
const charCount = document.getElementById("charCount");
const clearBtn = document.getElementById("clearBtn");
const livePreview = document.getElementById("livePreview");
const previewMood = document.getElementById("previewMood");
const toast = document.getElementById("toast");

let posts = loadPosts();
let toastTimer = null;

function loadPosts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return seedPosts.map(ensurePostDefaults);
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return seedPosts.map(ensurePostDefaults);
    }
    return parsed.map(ensurePostDefaults);
  } catch (error) {
    return seedPosts.map(ensurePostDefaults);
  }
}

function savePosts() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch (error) {
    console.warn("Не удалось сохранить данные", error);
  }
}

function ensurePostDefaults(post) {
  return {
    ...post,
    pinned: Boolean(post.pinned),
    media: post.media || "",
    link: post.link || "",
  };
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  if (toastTimer) {
    clearTimeout(toastTimer);
  }
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "сейчас";
  }
  return new Intl.DateTimeFormat("ru-RU", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function sortPosts(list) {
  const mode = sortSelect.value;
  const sorted = [...list];
  if (mode === "liked") {
    sorted.sort((a, b) => {
      if (b.likes !== a.likes) {
        return b.likes - a.likes;
      }
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  } else {
    sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
  return sorted;
}

function filterPosts(list) {
  const search = searchInput.value.trim().toLowerCase();
  const mood = moodFilter.value;
  const likedOnly = likedOnlyBtn.classList.contains("active");
  const commentedOnly = commentedOnlyBtn.classList.contains("active");

  return list.filter((post) => {
    const matchesSearch =
      !search ||
      post.content.toLowerCase().includes(search) ||
      post.author.toLowerCase().includes(search);
    const matchesMood = mood === "all" || post.mood === mood;
    const matchesLiked = !likedOnly || post.likedByUser;
    const matchesCommented = !commentedOnly || post.comments.length > 0;
    return matchesSearch && matchesMood && matchesLiked && matchesCommented;
  });
}

function updateComposerPreview() {
  const rawText = contentInput.value.trim();
  const previewText = buildPreviewText(rawText);
  livePreview.innerHTML =
    previewText || "Здесь появится текст вашего поста.";
  charCount.textContent = contentInput.value.length;
  previewMood.textContent = `Настроение: ${moodInput.value}`;
}

function buildPreviewText(rawText) {
  if (!rawText) {
    return "";
  }
  const truncated =
    rawText.length > PREVIEW_LIMIT
      ? `${rawText.slice(0, PREVIEW_LIMIT)}…`
      : rawText;
  const escaped = escapeHtml(truncated);
  const withLinks = linkify(escaped);
  return highlightTags(withLinks);
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function linkify(text) {
  const urlRegex = /\b(https?:\/\/|www\.)[^\s<]+/gi;
  return text.replace(urlRegex, (match) => {
    const href = match.startsWith("http") ? match : `https://${match}`;
    return `<a class="preview-link" href="${href}" target="_blank" rel="noopener">${match}</a>`;
  });
}

function highlightTags(html) {
  return html.replace(/(^|>)([^<]+)/g, (full, prefix, text) => {
    const highlighted = text.replace(
      /([#@][\p{L}\d_]+)/gu,
      '<span class="preview-pill">$1</span>'
    );
    return `${prefix}${highlighted}`;
  });
}

function renderComments(container, post) {
  container.innerHTML = "";
  if (!post.comments.length) {
    const empty = document.createElement("div");
    empty.className = "comment";
    empty.textContent = "Комментариев пока нет.";
    container.appendChild(empty);
    return;
  }
  post.comments.forEach((comment) => {
    const item = document.createElement("div");
    item.className = "comment";
    const author = document.createElement("strong");
    author.textContent = comment.author;
    const text = document.createElement("div");
    text.textContent = comment.text;
    item.appendChild(author);
    item.appendChild(text);
    container.appendChild(item);
  });
}

function renderPosts() {
  feedList.innerHTML = "";
  pinnedList.innerHTML = "";
  const filtered = filterPosts(posts);
  if (filtered.length === posts.length) {
    postCount.textContent = `${posts.length} постов`;
  } else {
    postCount.textContent = `${filtered.length} из ${posts.length} постов`;
  }
  const sorted = sortPosts(filtered);
  const pinned = sorted.filter((post) => post.pinned);
  const regular = sorted.filter((post) => !post.pinned);
  renderList(pinnedList, pinned);
  renderList(feedList, regular);
}

function renderList(container, list) {
  if (!list.length) {
    return;
  }
  list.forEach((post) => {
    const node = buildPostNode(post);
    container.appendChild(node);
  });
}

function buildPostNode(post) {
  const node = template.content.cloneNode(true);
  const article = node.querySelector(".post");
  article.classList.toggle("editing", Boolean(post.isEditing));

  node.querySelector(".post-author").textContent = post.author;
  node.querySelector(".post-time").textContent = formatDate(post.createdAt);
  const postContent = node.querySelector(".post-content");
  postContent.textContent = post.content;

  const editField = node.querySelector(".post-edit");
  editField.value = post.content;

  const mediaBox = node.querySelector(".post-media");
  if (post.media) {
    const img = document.createElement("img");
    img.src = post.media;
    img.alt = "Изображение поста";
    mediaBox.appendChild(img);
    mediaBox.style.display = "block";
  }

  const linkBox = node.querySelector(".post-link");
  if (post.link) {
    linkBox.href = post.link;
    linkBox.textContent = "Перейти по ссылке";
    linkBox.style.display = "inline-flex";
  }

  const tagWrap = node.querySelector(".post-tags");
  const moodTag = document.createElement("span");
  moodTag.className = "tag";
  moodTag.textContent = `Настроение: ${post.mood}`;
  tagWrap.appendChild(moodTag);

  if (post.pinned) {
    const pinTag = document.createElement("span");
    pinTag.className = "tag";
    pinTag.textContent = "Закреплено";
    tagWrap.appendChild(pinTag);
  }

  const commentTag = document.createElement("span");
  commentTag.className = "tag";
  commentTag.textContent = `Комментарии: ${post.comments.length}`;
  tagWrap.appendChild(commentTag);

  const likeBtn = node.querySelector(".like-btn");
  const likeCount = node.querySelector(".like-count");
  likeCount.textContent = post.likes;
  if (post.likedByUser) {
    likeBtn.classList.add("active");
    likeBtn.querySelector(".like-label").textContent = "Вы лайкнули";
  }

  const commentsBox = node.querySelector(".comments");
  const commentsList = node.querySelector(".comments-list");
  renderComments(commentsList, post);

  likeBtn.addEventListener("click", () => {
    post.likedByUser = !post.likedByUser;
    post.likes += post.likedByUser ? 1 : -1;
    likeBtn.classList.remove("burst");
    void likeBtn.offsetWidth;
    likeBtn.classList.add("burst");
    savePosts();
    renderPosts();
  });

  const commentToggle = node.querySelector(".comment-toggle");
  const commentCount = node.querySelector(".comment-count");
  commentCount.textContent = post.comments.length;
  commentToggle.addEventListener("click", () => {
    commentsBox.classList.toggle("open");
  });

  node.querySelector(".comment-add").addEventListener("click", () => {
    const authorField = article.querySelector(".comment-author");
    const textField = article.querySelector(".comment-text");
    const author = authorField.value.trim() || "Гость";
    const text = textField.value.trim();
    if (!text) {
      textField.focus();
      return;
    }
    post.comments.unshift({
      id: crypto.randomUUID(),
      author,
      text,
      createdAt: new Date().toISOString(),
    });
    authorField.value = "";
    textField.value = "";
    savePosts();
    renderPosts();
    commentsBox.classList.add("open");
  });

  node.querySelector(".edit-btn").addEventListener("click", () => {
    post.isEditing = true;
    renderPosts();
  });

  node.querySelector(".cancel-edit").addEventListener("click", () => {
    post.isEditing = false;
    renderPosts();
  });

  node.querySelector(".save-edit").addEventListener("click", () => {
    const text = editField.value.trim();
    if (!text) {
      editField.focus();
      return;
    }
    post.content = text;
    post.isEditing = false;
    savePosts();
    renderPosts();
    showToast("Пост обновлен");
  });

  node.querySelector(".delete-btn").addEventListener("click", () => {
    if (!confirm("Удалить этот пост?")) {
      return;
    }
    posts = posts.filter((item) => item.id !== post.id);
    savePosts();
    renderPosts();
    showToast("Пост удален");
  });

  node.querySelector(".copy-btn").addEventListener("click", async () => {
    const text = `${post.author}: ${post.content}`;
    try {
      await navigator.clipboard.writeText(text);
      showToast("Текст скопирован");
    } catch (error) {
      showToast("Не удалось скопировать");
    }
  });

  postContent.addEventListener("dblclick", () => {
    if (!post.likedByUser) {
      post.likedByUser = true;
      post.likes += 1;
      savePosts();
      renderPosts();
    }
  });

  return node;
}

createBtn.addEventListener("click", () => {
  const author = authorInput.value.trim() || "Аноним";
  const content = contentInput.value.trim();
  const mood = moodInput.value;

  if (!content) {
    contentInput.focus();
    return;
  }

  posts.unshift({
    id: crypto.randomUUID(),
    author,
    content,
    mood,
    likes: 0,
    likedByUser: false,
    isEditing: false,
    pinned: false,
    media: "",
    link: "",
    createdAt: new Date().toISOString(),
    comments: [],
  });

  searchInput.value = "";
  moodFilter.value = "all";
  likedOnlyBtn.classList.remove("active");
  commentedOnlyBtn.classList.remove("active");
  sortSelect.value = "new";

  authorInput.value = "";
  contentInput.value = "";
  moodInput.value = "Уверенно";
  updateComposerPreview();
  savePosts();
  renderPosts();
  showToast("Пост опубликован");
});

sortSelect.addEventListener("change", renderPosts);
searchInput.addEventListener("input", renderPosts);
moodFilter.addEventListener("change", renderPosts);
likedOnlyBtn.addEventListener("click", () => {
  likedOnlyBtn.classList.toggle("active");
  renderPosts();
});
commentedOnlyBtn.addEventListener("click", () => {
  commentedOnlyBtn.classList.toggle("active");
  renderPosts();
});

contentInput.addEventListener("input", () => {
  if (contentInput.value.length > MAX_LENGTH) {
    contentInput.value = contentInput.value.slice(0, MAX_LENGTH);
  }
  updateComposerPreview();
});

moodInput.addEventListener("change", updateComposerPreview);

seedBtn.addEventListener("click", () => {
  posts = [...seedPosts];
  savePosts();
  renderPosts();
  showToast("Демо восстановлено");
});

newPostBtn.addEventListener("click", () => {
  authorInput.focus();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

clearBtn.addEventListener("click", () => {
  authorInput.value = "";
  contentInput.value = "";
  moodInput.value = "Уверенно";
  updateComposerPreview();
  showToast("Поле очищено");
});

contentInput.maxLength = MAX_LENGTH;
updateComposerPreview();
renderPosts();
