const STORAGE_KEY = "hexletgram-posts-v2";
const PROFILE_KEY = "hexletgram-profile-v1";
const MAX_LENGTH = 280;
const PREVIEW_LIMIT = 180;

const seedPosts = [
  {
    id: "p0",
    author: "Мира",
    content:
      "Добро пожаловать в hexletgram. Давайте знакомиться: из какого вы колледжа и какой навык хотите прокачать в этом месяце?",
    mood: "Вдохновенно",
    likes: 12,
    likedByUser: false,
    pinned: true,
    createdAt: "2026-04-20T09:10:00.000Z",
    comments: [
      {
        id: "c0a",
        author: "Аян",
        text: "Я из Алматы, хочу усилить JavaScript и английский для интервью.",
        createdAt: "2026-04-20T09:25:00.000Z",
      },
      {
        id: "c0b",
        author: "Лина",
        text: "Я в теме frontend, ищу напарника для еженедельных code review.",
        createdAt: "2026-04-20T09:36:00.000Z",
      },
    ],
  },
  {
    id: "p1",
    author: "Самат",
    content:
      "Кто делает pet-project на React? Можем собрать мини-клуб и каждую пятницу показывать прогресс.",
    mood: "Уверенно",
    likes: 9,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-04-19T15:45:00.000Z",
    comments: [
      {
        id: "c1a",
        author: "Дарина",
        text: "Я за, особенно если добавим разбор архитектуры и тестов.",
        createdAt: "2026-04-19T16:05:00.000Z",
      },
    ],
  },
  {
    id: "p2",
    author: "Омар",
    content:
      "Тема для обсуждения: что реально помогло вам пройти сложный модуль по алгоритмам?",
    mood: "Спокойно",
    likes: 7,
    likedByUser: true,
    pinned: false,
    createdAt: "2026-04-18T11:20:00.000Z",
    comments: [
      {
        id: "c2a",
        author: "Ника",
        text: "Мне помогли карточки с паттернами и решение одной задачи в день.",
        createdAt: "2026-04-18T11:42:00.000Z",
      },
    ],
  },
  {
    id: "p3",
    author: "Жанна",
    content:
      "Ищу ребят для разговорного клуба по IT-английскому. Формат: 30 минут созвон + 10 новых слов.",
    mood: "Вдохновенно",
    likes: 11,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-04-17T17:00:00.000Z",
    comments: [],
  },
  {
    id: "p4",
    author: "Кирилл М.",
    content:
      "Как вы ведете заметки по учебе в Hexlet: Notion, Obsidian или обычный markdown?",
    mood: "Легко",
    likes: 6,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-04-16T13:05:00.000Z",
    comments: [
      {
        id: "c4a",
        author: "Света",
        text: "Я веду в markdown и храню в репозитории, удобно искать по истории.",
        createdAt: "2026-04-16T13:30:00.000Z",
      },
    ],
  },
  {
    id: "p5",
    author: "Данил",
    content:
      "Давайте соберем список полезных материалов по стажировкам: чек-листы, шаблоны резюме, вопросы.",
    mood: "Уверенно",
    likes: 8,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-04-15T09:40:00.000Z",
    comments: [],
  },
  {
    id: "p6",
    author: "Ника",
    content:
      "Кто хочет buddy-систему на месяц? Пара студентов поддерживает друг друга по целям и дедлайнам.",
    mood: "Вдохновенно",
    likes: 10,
    likedByUser: true,
    pinned: false,
    createdAt: "2026-04-14T10:20:00.000Z",
    comments: [
      {
        id: "c6a",
        author: "Мира",
        text: "Классная идея, это хорошо работает для мотивации.",
        createdAt: "2026-04-14T10:38:00.000Z",
      },
    ],
  },
  {
    id: "p7",
    author: "Аян",
    content:
      "Какой мини-проект лучше взять новичку, чтобы собрать портфолио за 2 недели и не перегореть?",
    mood: "Спокойно",
    likes: 5,
    likedByUser: false,
    pinned: false,
    createdAt: "2026-04-13T18:10:00.000Z",
    comments: [],
  },
];

const feedList = document.getElementById("feedList");
const pinnedList = document.getElementById("pinnedList");
const postCount = document.getElementById("postCount");
const createBtn = document.getElementById("createBtn");
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
const registerNameInput = document.getElementById("registerNameInput");
const registerCollegeInput = document.getElementById("registerCollegeInput");
const registerFocusInput = document.getElementById("registerFocusInput");
const registerBtn = document.getElementById("registerBtn");
const logoutBtn = document.getElementById("logoutBtn");
const activeProfile = document.getElementById("activeProfile");
const composerStatus = document.getElementById("composerStatus");

let posts = loadPosts();
let currentUser = loadProfile();
let toastTimer = null;

function generateId(prefix) {
  const stamp = Date.now().toString(36);
  const random = Math.random().toString(36).slice(2, 7);
  return `${prefix}${stamp}${random}`;
}

function sanitizeText(value, maxLength) {
  const plain = typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
  if (!plain) {
    return "";
  }
  return plain.slice(0, maxLength);
}

function normalizeProfile(profile) {
  if (!profile || typeof profile !== "object") {
    return null;
  }

  const name = sanitizeText(profile.name, 40);
  if (!name) {
    return null;
  }

  return {
    id: profile.id || generateId("u"),
    name,
    college: sanitizeText(profile.college, 80),
    focus: sanitizeText(profile.focus, 100),
    createdAt: profile.createdAt || new Date().toISOString(),
  };
}

function loadProfile() {
  const raw = localStorage.getItem(PROFILE_KEY);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw);
    return normalizeProfile(parsed);
  } catch (error) {
    return null;
  }
}

function saveProfile() {
  if (!currentUser) {
    localStorage.removeItem(PROFILE_KEY);
    return;
  }

  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(currentUser));
  } catch (error) {
    console.warn("Не удалось сохранить профиль", error);
  }
}

function normalizeComment(comment) {
  return {
    id: comment.id || generateId("c"),
    author: comment.author || "Гость",
    text: comment.text || "",
    createdAt: comment.createdAt || new Date().toISOString(),
  };
}

function normalizePost(post) {
  return {
    id: post.id || generateId("p"),
    author: post.author || "Гость",
    content: post.content || "",
    mood: post.mood || "Уверенно",
    likes: Number.isFinite(post.likes) ? post.likes : 0,
    likedByUser: Boolean(post.likedByUser),
    pinned: Boolean(post.pinned),
    isEditing: Boolean(post.isEditing),
    createdAt: post.createdAt || new Date().toISOString(),
    comments: Array.isArray(post.comments)
      ? post.comments.map((comment) => normalizeComment(comment))
      : [],
  };
}

function normalizePosts(list) {
  const result = [];
  for (let i = 0; i < list.length; i += 1) {
    result.push(normalizePost(list[i]));
  }
  return result;
}

function loadPosts() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return normalizePosts(seedPosts);
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return normalizePosts(seedPosts);
    }
    return normalizePosts(parsed);
  } catch (error) {
    return normalizePosts(seedPosts);
  }
}

function savePosts() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch (error) {
    console.warn("Не удалось сохранить данные", error);
  }
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
  return date.toLocaleString("ru-RU", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function sortPosts(list) {
  const sorted = list.slice();
  if (sortSelect.value === "liked") {
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

  const result = [];
  for (let i = 0; i < list.length; i += 1) {
    const post = list[i];
    const matchesSearch =
      !search ||
      post.content.toLowerCase().includes(search) ||
      post.author.toLowerCase().includes(search);
    const matchesMood = mood === "all" || post.mood === mood;
    const matchesLiked = !likedOnly || post.likedByUser;
    const matchesCommented = !commentedOnly || post.comments.length > 0;

    if (matchesSearch && matchesMood && matchesLiked && matchesCommented) {
      result.push(post);
    }
  }
  return result;
}

function updateComposerPreview() {
  const rawText = contentInput.value.trim();
  let previewText = rawText;
  if (rawText.length > PREVIEW_LIMIT) {
    previewText = `${rawText.slice(0, PREVIEW_LIMIT)}…`;
  }

  if (!currentUser) {
    livePreview.textContent = "После регистрации здесь появится черновик вашего поста.";
  } else {
    livePreview.textContent = previewText || "Здесь появится текст вашего поста.";
  }

  charCount.textContent = contentInput.value.length;
  previewMood.textContent = `Настроение: ${moodInput.value}`;
}

function isRegistered() {
  return Boolean(currentUser && currentUser.name);
}

function ensureRegistered() {
  if (isRegistered()) {
    return true;
  }

  showToast("Сначала зарегистрируйтесь, чтобы писать в ленту");
  registerNameInput.focus();
  return false;
}

function updateAuthUI() {
  const ready = isRegistered();

  if (ready) {
    registerNameInput.value = currentUser.name;
    registerCollegeInput.value = currentUser.college;
    registerFocusInput.value = currentUser.focus;

    const details = [];
    if (currentUser.college) {
      details.push(currentUser.college);
    }
    if (currentUser.focus) {
      details.push(currentUser.focus);
    }

    activeProfile.textContent = details.length
      ? `Вы вошли как ${currentUser.name} • ${details.join(" • ")}`
      : `Вы вошли как ${currentUser.name}`;
    composerStatus.textContent = `Публикация от имени: ${currentUser.name}`;
    registerBtn.textContent = "Обновить профиль";
    logoutBtn.disabled = false;
  } else {
    activeProfile.textContent = "Профиль еще не зарегистрирован.";
    composerStatus.textContent = "Посты публикуются только после регистрации.";
    registerBtn.textContent = "Сохранить профиль";
    logoutBtn.disabled = true;
    contentInput.value = "";
  }

  createBtn.disabled = !ready;
  contentInput.disabled = !ready;
  moodInput.disabled = !ready;
  clearBtn.disabled = !ready;

  updateComposerPreview();
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

  for (let i = 0; i < post.comments.length; i += 1) {
    const comment = post.comments[i];
    const item = document.createElement("div");
    item.className = "comment";
    const author = document.createElement("strong");
    author.textContent = comment.author || "Гость";
    const text = document.createElement("div");
    text.textContent = comment.text || "";
    item.appendChild(author);
    item.appendChild(text);
    container.appendChild(item);
  }
}

function renderList(container, list) {
  if (!list.length) {
    return;
  }

  for (let i = 0; i < list.length; i += 1) {
    const node = buildPostNode(list[i]);
    container.appendChild(node);
  }
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
  const pinned = [];
  const regular = [];

  for (let i = 0; i < sorted.length; i += 1) {
    if (sorted[i].pinned) {
      pinned.push(sorted[i]);
    } else {
      regular.push(sorted[i]);
    }
  }

  renderList(pinnedList, pinned);
  renderList(feedList, regular);
}

function toggleLike(post) {
  if (post.likedByUser) {
    post.likedByUser = false;
    post.likes = Math.max(0, post.likes - 1);
  } else {
    post.likedByUser = true;
    post.likes += 1;
  }
  savePosts();
  renderPosts();
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  return Promise.reject();
}

function buildPostNode(post) {
  const node = template.content.cloneNode(true);
  const article = node.querySelector(".post");
  const canEdit = isRegistered() && post.author === currentUser.name;

  if (!canEdit && post.isEditing) {
    post.isEditing = false;
  }

  article.classList.toggle("editing", Boolean(post.isEditing));

  node.querySelector(".post-author").textContent = post.author;
  node.querySelector(".post-time").textContent = formatDate(post.createdAt);
  const postContent = node.querySelector(".post-content");
  postContent.textContent = post.content;

  const editField = node.querySelector(".post-edit");
  editField.value = post.content;

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
    toggleLike(post);
  });

  const commentToggle = node.querySelector(".comment-toggle");
  const commentCount = node.querySelector(".comment-count");
  commentCount.textContent = post.comments.length;
  commentToggle.addEventListener("click", () => {
    commentsBox.classList.toggle("open");
  });

  const commentAddBtn = node.querySelector(".comment-add");
  const commentTextField = article.querySelector(".comment-text");

  if (!isRegistered()) {
    commentAddBtn.disabled = true;
    commentTextField.disabled = true;
    commentTextField.placeholder = "Сначала зарегистрируйтесь";
  } else {
    commentTextField.placeholder = "Комментарий";
  }

  commentAddBtn.addEventListener("click", () => {
    if (!ensureRegistered()) {
      return;
    }

    const text = commentTextField.value.trim();
    if (!text) {
      commentTextField.focus();
      return;
    }

    post.comments.unshift({
      id: generateId("c"),
      author: currentUser.name,
      text,
      createdAt: new Date().toISOString(),
    });

    commentTextField.value = "";
    savePosts();
    renderPosts();
    showToast("Комментарий добавлен");
  });

  const editBtn = node.querySelector(".edit-btn");
  if (!canEdit) {
    editBtn.disabled = true;
    editBtn.title = "Редактировать может только автор поста";
  }

  editBtn.addEventListener("click", () => {
    if (!canEdit) {
      return;
    }

    post.isEditing = true;
    renderPosts();
  });

  node.querySelector(".cancel-edit").addEventListener("click", () => {
    if (!canEdit) {
      return;
    }

    post.isEditing = false;
    renderPosts();
  });

  node.querySelector(".save-edit").addEventListener("click", () => {
    if (!canEdit) {
      return;
    }

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

  node.querySelector(".copy-btn").addEventListener("click", () => {
    const text = `${post.author}: ${post.content}`;
    copyToClipboard(text)
      .then(() => showToast("Текст скопирован"))
      .catch(() => showToast("Скопируйте вручную"));
  });

  postContent.addEventListener("dblclick", () => {
    if (!post.likedByUser) {
      toggleLike(post);
    }
  });

  return node;
}

registerBtn.addEventListener("click", () => {
  const name = sanitizeText(registerNameInput.value, 40);
  const college = sanitizeText(registerCollegeInput.value, 80);
  const focus = sanitizeText(registerFocusInput.value, 100);

  if (!name) {
    registerNameInput.focus();
    showToast("Введите имя для регистрации");
    return;
  }

  currentUser = {
    id: currentUser?.id || generateId("u"),
    name,
    college,
    focus,
    createdAt: currentUser?.createdAt || new Date().toISOString(),
  };

  saveProfile();
  updateAuthUI();
  renderPosts();
  showToast("Профиль сохранен");
  contentInput.focus();
});

logoutBtn.addEventListener("click", () => {
  currentUser = null;
  saveProfile();
  updateAuthUI();
  renderPosts();
  showToast("Профиль очищен");
});

createBtn.addEventListener("click", () => {
  if (!ensureRegistered()) {
    return;
  }

  const content = contentInput.value.trim();
  const mood = moodInput.value;

  if (!content) {
    contentInput.focus();
    return;
  }

  posts.unshift({
    id: generateId("p"),
    author: currentUser.name,
    content,
    mood,
    likes: 0,
    likedByUser: false,
    isEditing: false,
    pinned: false,
    createdAt: new Date().toISOString(),
    comments: [],
  });

  searchInput.value = "";
  moodFilter.value = "all";
  likedOnlyBtn.classList.remove("active");
  commentedOnlyBtn.classList.remove("active");
  sortSelect.value = "new";

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
  posts = normalizePosts(seedPosts);
  savePosts();
  renderPosts();
  showToast("Демо восстановлено");
});

newPostBtn.addEventListener("click", () => {
  if (!ensureRegistered()) {
    return;
  }

  contentInput.focus();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

clearBtn.addEventListener("click", () => {
  contentInput.value = "";
  moodInput.value = "Уверенно";
  updateComposerPreview();
  showToast("Поле очищено");
});

contentInput.maxLength = MAX_LENGTH;
updateAuthUI();
renderPosts();
