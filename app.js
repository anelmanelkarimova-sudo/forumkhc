const navButtons = document.querySelectorAll('.nav-item');
const screens = document.querySelectorAll('.screen');
const allTargetButtons = document.querySelectorAll('[data-target]');
const i18nNodes = document.querySelectorAll('[data-i18n]');

const STORAGE_KEY = 'kjkForumAttendance';
const PARTICIPANT_CODE = 'KJK-ANNA-143';

const translations = {
  ru: {
    heroBadge: '3-day forum',
    welcomeTitle: 'Добро пожаловать <br />на Форум КЖК',
    welcomeText: 'Регистрация, события, QR-проверка и ИИ-помощник в одном мобильном интерфейсе.',
    registerBtn: 'Регистрация',
    programBtn: 'Программа',
    helpBtn: 'Помощь',
    participantsLabel: 'Участников',
    speakersLabel: 'Спикеры',
    todayLabel: 'Сегодня',
    nextEventLabel: 'Следующее событие',
    nextEventTitle: 'Открытие форума',
    nextEventTime: '08:30',
    welcomeTotalText: 'Всего',
    welcomeArrivedText: 'Пришли',
    welcomeLateText: 'Не пришли',
    guestSearchPlaceholder: 'Поиск по имени или компании',
    guestEmptyTitle: 'Не найдено',
    guestEmptySubtitle: 'Попробуйте другое имя или компанию',
    guestDeleteBtn: 'Удалить',
    registerLabel: 'Регистрация',
    registerTitle: 'Новый участник',
    formFullName: 'ФИО',
    formCompany: 'Компания',
    formPosition: 'Должность',
    formCity: 'Город',
    formPhone: 'Телефон',
    formEmail: 'Email',
    formWeChat: 'WeChat',
    formParticipantType: 'Тип участника',
    formLanguage: 'Язык общения',
    formStatusLabel: 'Статус',
    registrationSuccess: 'Участник успешно зарегистрирован',
    qrReady: 'QR готов',
    checkLabel: 'Проверка',
    checkTitle: 'Вход участника',
    deskQrDescription: 'Это QR стойки регистрации. Участник сканирует его, а организатор проверяет вход здесь.',
    goToCheckBtn: 'Перейти к проверке входа',
    startCameraBtn: 'Запустить камеру',
    manualQrPlaceholder: 'Вставьте QR-код или ID участника',
    confirmEntryBtn: 'Подтвердить вход',
    scanHelpText: 'Камера нужна только чтобы проверить вход участника по QR-коду.',
    statusCheckedIn: 'Пришёл',
    statusPending: 'Ожидает',
    statusLate: 'Опоздал',
    statusAbsent: 'Не пришёл',
    statusConfirmed: 'Подтвержден',
    statusNotArrived: 'Не пришел',
    statusLateShort: 'Опоздал',
    programLabel: 'Программа',
    programTitle: 'Сегодня',
    eventOpeningTitle: 'Открытие форума',
    eventOpeningMeta: 'Главный зал • Русский',
    eventLive: 'Live',
    eventPanelTitle: 'Панель: Жилищная политика',
    eventPanelMeta: 'Зал А • English',
    eventSpeaker: 'Спикер',
    eventNetworkTitle: 'Сетевой вечер',
    eventNetworkMeta: 'Лобби • Русский / 中文',
    eventNetworkLabel: 'Сеть',
    mapLabel: 'Карта',
    mapTitle: 'План зала',
    mapHall: 'Главный зал',
    mapLobby: 'Лобби',
    mapRoomA: 'Зал A',
    mapRoomB: 'Зал B',
    mapHelp: 'Помощь',
    assistantLabel: 'Помощь',
    assistantTitle: 'ИИ-помощник',
    assistantGreeting: 'Здравствуйте! Чем могу помочь на форуме?',
    assistantQuestion: 'Где регистрация?',
    assistantAnswer: 'Регистрация находится в главном лобби, рядом со входом.',
    assistantProgramBtn: 'Программа',
    assistantMapBtn: 'Карта',
    assistantStatsBtn: 'Статистика',
    guestsLabel: 'Гости',
    guestsTitle: 'Список участников',
    guestsTotal: 'Всего',
    guestsChecked: 'Пришли',
    guestsLate: 'Не пришли',
    guestTableName: 'Участник',
    guestTableStatus: 'Статус',
    statsLabel: 'Статистика',
    statsTitle: 'Аналитика',
    statsTotalText: 'Всего',
    statsCheckedText: 'Пришло',
    statsLateText: 'Не пришли',
    statsPendingText: 'Не пришли',
    notFoundMessage: 'Участник не найден по этому QR-коду',
    cameraUnavailable: 'QR-сканер недоступен в этом браузере',
    cameraMissing: 'Камера не найдена. Используйте ручной ввод кода.',
    cameraStartError: 'Не удалось запустить камеру. Используйте ручной ввод кода.',
    manualCodeRequired: 'Введите QR-код или ID участника',
    navHome: 'Главная',
    navRegister: 'Регистрация',
    navCheck: 'Проверка',
    navGuests: 'Гости',
    navAssistant: 'ИИ'
  },
  en: {
    heroBadge: '3-day forum',
    welcomeTitle: 'Welcome to <br />KJK Forum',
    welcomeText: 'Registration, agenda, QR check-in, and AI assistant in one mobile interface.',
    registerBtn: 'Register',
    programBtn: 'Agenda',
    helpBtn: 'Help',
    participantsLabel: 'Participants',
    speakersLabel: 'Speakers',
    todayLabel: 'Today',
    nextEventLabel: 'Next event',
    nextEventTitle: 'Forum opening',
    nextEventTime: '08:30',
    welcomeTotalText: 'Total',
    welcomeArrivedText: 'Arrived',
    welcomeLateText: 'Not arrived',
    guestSearchPlaceholder: 'Search by name or company',
    guestEmptyTitle: 'No guests found',
    guestEmptySubtitle: 'Try another name or company',
    guestDeleteBtn: 'Delete',
    registerLabel: 'Registration',
    registerTitle: 'New participant',
    formFullName: 'Full name',
    formCompany: 'Company',
    formPosition: 'Position',
    formCity: 'City',
    formPhone: 'Phone',
    formEmail: 'Email',
    formWeChat: 'WeChat',
    formParticipantType: 'Participant type',
    formLanguage: 'Language',
    formStatusLabel: 'Status',
    registrationSuccess: 'Participant successfully registered',
    qrReady: 'QR ready',
    checkLabel: 'Check-in',
    checkTitle: 'Participant entry',
    deskQrDescription: 'This is the registration desk QR. The participant scans it and the organizer verifies entry here.',
    goToCheckBtn: 'Go to check-in',
    startCameraBtn: 'Start camera',
    manualQrPlaceholder: 'Enter QR code or participant ID',
    confirmEntryBtn: 'Confirm entry',
    scanHelpText: 'The camera is only needed to verify participant entry by QR code.',
    statusCheckedIn: 'Checked in',
    statusPending: 'Pending',
    statusLate: 'Late',
    statusAbsent: 'Not arrived',
    statusConfirmed: 'Confirmed',
    statusNotArrived: 'Not arrived',
    statusLateShort: 'Late',
    programLabel: 'Agenda',
    programTitle: 'Today',
    eventOpeningTitle: 'Forum opening',
    eventOpeningMeta: 'Main hall • Russian',
    eventLive: 'Live',
    eventPanelTitle: 'Panel: Housing Policy',
    eventPanelMeta: 'Hall A • English',
    eventSpeaker: 'Speaker',
    eventNetworkTitle: 'Networking evening',
    eventNetworkMeta: 'Lobby • Russian / 中文',
    eventNetworkLabel: 'Network',
    mapLabel: 'Map',
    mapTitle: 'Hall plan',
    mapHall: 'Main hall',
    mapLobby: 'Lobby',
    mapRoomA: 'Hall A',
    mapRoomB: 'Hall B',
    mapHelp: 'Help',
    assistantLabel: 'Help',
    assistantTitle: 'AI assistant',
    assistantGreeting: 'Hello! How can I help at the forum?',
    assistantQuestion: 'Where is registration?',
    assistantAnswer: 'Registration is in the main lobby near the entrance.',
    assistantProgramBtn: 'Agenda',
    assistantMapBtn: 'Map',
    assistantStatsBtn: 'Stats',
    guestsLabel: 'Guests',
    guestsTitle: 'Participant list',
    guestsTotal: 'Total',
    guestsChecked: 'Checked in',
    guestsLate: 'Not arrived',
    guestTableName: 'Participant',
    guestTableStatus: 'Status',
    statsLabel: 'Statistics',
    statsTitle: 'Analytics',
    statsTotalText: 'Total',
    statsCheckedText: 'Checked in',
    statsLateText: 'Not arrived',
    statsPendingText: 'Not arrived',
    notFoundMessage: 'Participant not found for this QR code',
    cameraUnavailable: 'QR scanner is not available in this browser',
    cameraMissing: 'No camera found. Use manual code entry instead.',
    cameraStartError: 'Could not start camera. Use manual code entry instead.',
    manualCodeRequired: 'Enter QR code or participant ID',
    navHome: 'Home',
    navRegister: 'Register',
    navCheck: 'Check-in',
    navGuests: 'Guests',
    navAssistant: 'AI'
  },
  cn: {
    heroBadge: '3天论坛',
    welcomeTitle: '欢迎来到 <br />KJK 论坛',
    welcomeText: '一个移动端界面统一处理注册、日程、QR签到和AI助手。',
    registerBtn: '注册',
    programBtn: '日程',
    helpBtn: '帮助',
    participantsLabel: '参与者',
    speakersLabel: '演讲者',
    todayLabel: '今日',
    nextEventLabel: '下一活动',
    nextEventTitle: '论坛开幕',
    nextEventTime: '08:30',
    welcomeTotalText: '总计',
    welcomeArrivedText: '已到',
    welcomeLateText: '未到',
    guestSearchPlaceholder: '按姓名或公司搜索',
    guestEmptyTitle: '未找到',
    guestEmptySubtitle: '试试其他姓名或公司',
    guestDeleteBtn: '删除',
    registerLabel: '注册',
    registerTitle: '新参与者',
    formFullName: '姓名',
    formCompany: '公司',
    formPosition: '职位',
    formCity: '城市',
    formPhone: '电话',
    formEmail: '邮箱',
    formWeChat: '微信',
    formParticipantType: '参与者类型',
    formLanguage: '沟通语言',
    formStatusLabel: '状态',
    registrationSuccess: '参与者已成功注册',
    qrReady: '二维码已准备',
    checkLabel: '签到',
    checkTitle: '入场验证',
    deskQrDescription: '这是注册台的二维码。参与者扫码后，组织者可在此核验入场。',
    goToCheckBtn: '前往入场验证',
    startCameraBtn: '启动相机',
    manualQrPlaceholder: '输入二维码或参与者ID',
    confirmEntryBtn: '确认入场',
    scanHelpText: '相机仅用于通过二维码核验参与者入场。',
    statusCheckedIn: '已到',
    statusPending: '等待中',
    statusLate: '迟到',
    statusAbsent: '未到',
    statusConfirmed: '已确认',
    statusNotArrived: '未到',
    statusLateShort: '迟到',
    programLabel: '日程',
    programTitle: '今日',
    eventOpeningTitle: '论坛开幕',
    eventOpeningMeta: '主会场 • 中文',
    eventLive: '直播',
    eventPanelTitle: '论坛：住房政策',
    eventPanelMeta: 'A厅 • English',
    eventSpeaker: '演讲者',
    eventNetworkTitle: '联谊晚会',
    eventNetworkMeta: '门厅 • Русский / 中文',
    eventNetworkLabel: '活动',
    mapLabel: '地图',
    mapTitle: '会场平面图',
    mapHall: '主会场',
    mapLobby: '门厅',
    mapRoomA: 'A厅',
    mapRoomB: 'B厅',
    mapHelp: '帮助',
    assistantLabel: '帮助',
    assistantTitle: 'AI助手',
    assistantGreeting: '你好！我可以为论坛提供什么帮助？',
    assistantQuestion: '在哪里注册？',
    assistantAnswer: '注册在入口附近的主门厅。',
    assistantProgramBtn: '日程',
    assistantMapBtn: '地图',
    assistantStatsBtn: '统计',
    guestsLabel: '嘉宾',
    guestsTitle: '参与者名单',
    guestsTotal: '总计',
    guestsChecked: '已到',
    guestsLate: '未到',
    guestTableName: '参与者',
    guestTableStatus: '状态',
    statsLabel: '统计',
    statsTitle: '分析',
    statsTotalText: '总计',
    statsCheckedText: '已到',
    statsLateText: '未到',
    statsPendingText: '未到',
    notFoundMessage: '未找到该二维码对应的参与者',
    cameraUnavailable: '此浏览器不支持二维码扫描',
    cameraMissing: '未找到相机。请使用手动输入代码。',
    cameraStartError: '无法启动相机。请使用手动输入代码。',
    manualCodeRequired: '请输入二维码或参与者ID',
    navHome: '主页',
    navRegister: '注册',
    navCheck: '签到',
    navGuests: '嘉宾',
    navAssistant: 'AI'
  }
};

let currentLanguage = 'ru';

function getTranslation(key, fallback = '') {
  const map = translations[currentLanguage] || translations.ru;
  return map[key] || translations.ru[key] || fallback;
}

function applyLanguage(lang) {
  currentLanguage = lang;
  const map = translations[lang] || translations.ru;

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = map[key];
    if (!value) return;
    node.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (map[key]) {
      node.setAttribute('placeholder', map[key]);
    }
  });

  document.documentElement.lang = lang;
  document.title = lang === 'en' ? 'KJK Forum | Glass Prototype' : lang === 'cn' ? 'KJK 论坛 | Glass Prototype' : 'КЖК Форум | Glass Prototype';

  renderGuestTable();
  renderStatusSummary();
  updateAttendancePanel(readParticipants().find((participant) => participant.status === 'checked_in') || readParticipants()[0] || null);
}

const statusMap = {
  checked_in: { labelKey: 'statusCheckedIn', className: 'checked_in' },
  pending: { labelKey: 'statusPending', className: 'pending' },
  absent: { labelKey: 'statusAbsent', className: 'absent' }
};

function normalizeParticipantStatus(status) {
  if (status === 'late') return 'absent';
  return status;
}

const initialParticipants = [
  {
    id: 'KJK-ANNA-143',
    name: 'Анна Кузнецова',
    company: 'КЖК',
    position: 'Менеджер проекта',
    phone: '+7 (701) 555-10-11',
    email: 'anna@kzk.kz',
    city: 'Астана',
    language: 'Русский',
    type: 'Спикер',
    status: 'checked_in',
    checkedAt: '2026-10-08T09:30:00Z',
    event: 'Открытие форума'
  },
  {
    id: 'KJK-ALIM-204',
    name: 'Алим Сериков',
    company: 'KazBuild',
    position: 'Директор по развитию',
    phone: '+7 (776) 118-22-44',
    email: 'alim@kazbuild.kz',
    city: 'Алматы',
    language: 'Русский',
    type: 'Участник',
    status: 'pending',
    checkedAt: null,
    event: 'Открытие форума'
  },
  {
    id: 'KJK-MARIA-318',
    name: 'Мария Лу',
    company: 'Urban Labs',
    position: 'Product Lead',
    phone: '+86 138 2111 0912',
    email: 'maria@urbanlabs.ai',
    city: 'Пекин',
    language: 'English',
    type: 'Участник',
    status: 'absent',
    checkedAt: null,
    event: 'Открытие форума'
  },
  {
    id: 'KJK-DANIEL-447',
    name: 'Даниил Нурбеков',
    company: 'City Flow',
    position: 'Архитектор',
    phone: '+7 (705) 200-88-17',
    email: 'danil@cityflow.kz',
    city: 'Нур-Султан',
    language: 'Русский',
    type: 'Партнер',
    status: 'absent',
    checkedAt: null,
    event: 'Открытие форума'
  }
];

const readParticipants = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (raw === null) {
      return initialParticipants.map((participant) => ({
        ...participant,
        status: normalizeParticipantStatus(participant.status)
      }));
    }

    const saved = JSON.parse(raw);
    if (!Array.isArray(saved)) {
      return initialParticipants.map((participant) => ({
        ...participant,
        status: normalizeParticipantStatus(participant.status)
      }));
    }

    return saved.map((participant) => ({
      ...participant,
      status: normalizeParticipantStatus(participant.status)
    }));
  } catch (error) {
    return initialParticipants.map((participant) => ({
      ...participant,
      status: normalizeParticipantStatus(participant.status)
    }));
  }
};

const writeParticipants = (participants) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(participants));
};

function updateParticipantStatus(participantId, nextStatus) {
  const participants = readParticipants().map((participant) => {
    if (participant.id !== participantId) return participant;
    return {
      ...participant,
      status: nextStatus,
      checkedAt: nextStatus === 'checked_in' ? new Date().toISOString() : participant.checkedAt,
      event: nextStatus === 'checked_in' ? 'Открытие форума' : participant.event
    };
  });

  writeParticipants(participants);
  renderAll();
}

function deleteParticipant(participantId) {
  if (!participantId) return;

  const participants = readParticipants().filter((participant) => participant.id !== participantId);
  writeParticipants(participants);

  const searchInput = document.getElementById('guest-search');
  if (searchInput) {
    searchInput.dispatchEvent(new Event('input', { bubbles: true }));
  }

  renderAll();
}

let qrScanner = null;

function getGuestQueryParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get('participant');
}

function setGuestQueryParam(participantId) {
  const url = new URL(window.location.href);
  if (participantId) {
    url.searchParams.set('participant', participantId);
  } else {
    url.searchParams.delete('participant');
  }
  window.history.replaceState({}, '', url.toString());
}

function renderGuestTable() {
  const guestList = document.getElementById('guest-list-body');
  if (!guestList) return;

  const participants = readParticipants();
  const searchInput = document.getElementById('guest-search');
  const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
  const selectedParticipantId = getGuestQueryParam();
  const selectedParticipant = selectedParticipantId
    ? participants.find((participant) => participant.id === selectedParticipantId)
    : null;

  const filteredParticipants = query
    ? participants.filter((participant) => {
        const haystack = `${participant.name} ${participant.company} ${participant.position} ${participant.city}`.toLowerCase();
        return haystack.includes(query);
      })
    : participants;

  const listedParticipants = selectedParticipantId
    ? filteredParticipants.filter((participant) => participant.id !== selectedParticipantId)
    : filteredParticipants;

  if (!listedParticipants.length && !selectedParticipant) {
    guestList.innerHTML = `
      <div class="guest-row empty-state">
        <div class="guest-meta">
          <strong>${getTranslation('guestEmptyTitle', 'No guests found')}</strong>
          <span>${getTranslation('guestEmptySubtitle', 'Try another name or company')}</span>
        </div>
      </div>
    `;
    return;
  }

  const detailMarkup = selectedParticipant
    ? (() => {
        const status = statusMap[selectedParticipant.status] || statusMap.pending;
        const selectOptions = Object.entries(statusMap).map(([value, item]) => {
          const selected = value === selectedParticipant.status ? 'selected' : '';
          return `<option value="${value}" ${selected}>${getTranslation(item.labelKey, item.labelKey)}</option>`;
        }).join('');

        return `
          <div class="guest-detail-card">
            <div class="guest-detail-header">
              <span class="guest-detail-label">Участник</span>
              <button class="guest-back-btn" type="button" data-clear-participant="true">Список</button>
            </div>
            <div class="guest-detail-body">
              <div class="guest-detail-main">
                <div class="guest-detail-name">${selectedParticipant.name}</div>
                <div class="guest-detail-company">${selectedParticipant.company}</div>
                <div class="guest-detail-position">${selectedParticipant.position}</div>
              </div>
              <div class="guest-detail-controls">
                <span class="status-pill ${status.className}">${getTranslation(status.labelKey, status.labelKey)}</span>
                <select class="guest-status-select" data-participant-id="${selectedParticipant.id}">
                  ${selectOptions}
                </select>
                <button class="guest-delete-btn" type="button" data-participant-id="${selectedParticipant.id}">${getTranslation('guestDeleteBtn', 'Delete')}</button>
              </div>
            </div>
          </div>
        `;
      })()
    : '';

  const rowsMarkup = listedParticipants.map((participant) => {
    const status = statusMap[participant.status] || statusMap.pending;
    const selectOptions = Object.entries(statusMap).map(([value, item]) => {
      const selected = value === participant.status ? 'selected' : '';
      return `<option value="${value}" ${selected}>${getTranslation(item.labelKey, item.labelKey)}</option>`;
    }).join('');

    return `
      <div class="guest-row">
        <div class="guest-meta">
          <button type="button" class="guest-link" data-participant-id="${participant.id}">
            <strong>${participant.name}</strong>
          </button>
          <span>${participant.company} • ${participant.position}</span>
        </div>
        <div class="guest-controls">
          <span class="status-pill ${status.className}">${getTranslation(status.labelKey, status.labelKey)}</span>
          <select class="guest-status-select" data-participant-id="${participant.id}">
            ${selectOptions}
          </select>
          <button class="guest-delete-btn" type="button" data-participant-id="${participant.id}">${getTranslation('guestDeleteBtn', 'Delete')}</button>
        </div>
      </div>
    `;
  }).join('');

  guestList.innerHTML = `${detailMarkup}${rowsMarkup}`;
}

function renderStatusSummary() {
  const participants = readParticipants();
  const total = participants.length;
  const checked = participants.filter((participant) => participant.status === 'checked_in').length;
  const notArrived = participants.filter((participant) => participant.status !== 'checked_in').length;
  const pending = participants.filter((participant) => participant.status === 'pending').length;

  const updateText = (id, value) => {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  };

  updateText('summary-total', total);
  updateText('summary-checked', checked);
  updateText('summary-late', notArrived);

  updateText('stat-total', total);
  updateText('stat-checked', checked);
  updateText('stat-late', notArrived);
  updateText('stat-pending', pending);

  updateText('welcome-total', total);
  updateText('welcome-arrived', checked);
  updateText('welcome-late', notArrived);
}

function renderAll() {
  renderGuestTable();
  renderStatusSummary();
}

function showScreen(target) {
  if (!target) return;

  navButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.target === target);
  });

  screens.forEach((screen) => {
    screen.classList.toggle('active', screen.dataset.screen === target);
  });

  if (target === 'guests' || target === 'stats') {
    renderAll();
  }
}

function normalizeParticipantCode(rawCode) {
  const code = String(rawCode || '').trim();
  if (!code) return null;
  return code
    .replace(/^kJK\s*[:/]/i, '')
    .replace(/^participant[:/]/i, '')
    .replace(/^qr[:/]/i, '')
    .trim();
}

function findParticipantByCode(rawCode) {
  const code = normalizeParticipantCode(rawCode);
  if (!code) return null;
  const participants = readParticipants();
  return participants.find((participant) => participant.id === code || participant.name === code || participant.company === code);
}

function updateAttendancePanel(participant) {
  const attendanceScreen = document.querySelector('[data-screen="attendance"]');
  if (!attendanceScreen || !participant) return;

  const nameNode = attendanceScreen.querySelector('.participant-top h3');
  const metaNode = attendanceScreen.querySelector('.participant-top p');
  const statusNode = attendanceScreen.querySelector('.chip');
  const searchInput = attendanceScreen.querySelector('.search-panel input');
  const resultCard = document.getElementById('scan-result-card');

  if (nameNode) nameNode.textContent = participant.name;
  if (metaNode) metaNode.textContent = `${participant.company} • ${participant.position}`;
  if (statusNode) {
    const currentStatus = statusMap[participant.status] || statusMap.pending;
    statusNode.textContent = getTranslation(currentStatus.labelKey, currentStatus.labelKey);
    statusNode.className = `chip ${currentStatus.className}`;
  }
  if (searchInput) searchInput.value = participant.name;
  if (resultCard) {
    resultCard.hidden = false;
  }
}

function markParticipantCheckedIn(rawCode) {
  const participant = findParticipantByCode(rawCode);
  if (!participant) {
    alert(getTranslation('notFoundMessage', 'Participant not found for this QR code'));
    return false;
  }

  const participants = readParticipants();
  const updated = participants.map((item) => {
    if (item.id === participant.id) {
      return {
        ...item,
        status: 'checked_in',
        checkedAt: new Date().toISOString(),
        event: 'Открытие форума'
      };
    }
    return item;
  });

  writeParticipants(updated);
  renderAll();
  const currentParticipant = updated.find((item) => item.id === participant.id) || participant;
  updateAttendancePanel(currentParticipant);
  showScreen('attendance');

  const statusNode = document.getElementById('desk-qr-status');
  if (statusNode) {
    statusNode.textContent = getTranslation('statusCheckedIn', 'Checked in');
  }

  return true;
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => showScreen(button.dataset.target));
});

allTargetButtons.forEach((button) => {
  if (button.classList.contains('nav-item')) return;

  button.addEventListener('click', () => {
    const target = button.dataset.target;
    showScreen(target);

    if (target === 'qr') {
      document.title = 'КЖК Форум | QR';
    }
  });
});

const statusButtons = document.querySelectorAll('.mini-btn');
statusButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const label = button.textContent.trim();
    statusButtons.forEach((item) => item.classList.remove('success', 'warn'));

    if (label === 'Пришел') {
      button.classList.add('success');
    }

    if (label === 'Опоздал') {
      button.classList.add('warn');
    }
  });
});

const langButtons = document.querySelectorAll('.lang');
langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    langButtons.forEach((item) => item.classList.toggle('active', item === button));
    const lang = button.textContent.trim().toLowerCase();
    const languageKey = lang === 'en' ? 'en' : lang === '中文' ? 'cn' : 'ru';
    applyLanguage(languageKey);
  });
});

applyLanguage('ru');

function stopQrScanner() {
  if (!qrScanner) return;

  try {
    qrScanner.stop();
  } catch (error) {
    // ignore
  }
}

async function startQrScanner() {
  if (!window.Html5Qrcode) {
    alert(getTranslation('cameraUnavailable', 'QR scanner is not available in this browser'));
    return;
  }

  const qrReaderElement = document.getElementById('qr-reader');
  if (!qrReaderElement) return;

  qrReaderElement.innerHTML = '';

  try {
    qrScanner = new Html5Qrcode('qr-reader');
    const cameras = await Html5Qrcode.getCameras();

    if (!cameras || !cameras.length) {
      alert(getTranslation('cameraMissing', 'No camera found. Use manual code entry instead.'));
      return;
    }

    await qrScanner.start(
      { facingMode: 'environment' },
      { fps: 10, qrbox: { width: 220, height: 220 } },
      (decodedText) => {
        const ok = markParticipantCheckedIn(decodedText);
        if (ok) {
          stopQrScanner();
        }
      },
      () => {}
    );
  } catch (error) {
    console.error('QR camera error:', error);
    alert(getTranslation('cameraStartError', 'Could not start camera. Use manual code entry instead.'));
  }
}

function bindManualScan() {
  const input = document.getElementById('manual-qr-input');
  const button = document.getElementById('manual-scan-btn');
  const startButton = document.getElementById('start-scan-btn');
  if (startButton) {
    startButton.addEventListener('click', startQrScanner);
  }

  if (button && input) {
    button.addEventListener('click', () => {
      const code = input.value.trim();
      if (!code) {
        alert(getTranslation('manualCodeRequired', 'Enter QR code or participant ID'));
        return;
      }

      const ok = markParticipantCheckedIn(code);
      if (ok) {
        input.value = '';
      }
    });
  }
}

function seedParticipantState() {
  const participants = readParticipants();
  if (!participants.length) {
    writeParticipants(initialParticipants);
  }
  renderAll();
}

seedParticipantState();
bindManualScan();

const guestSearchInput = document.getElementById('guest-search');
if (guestSearchInput) {
  guestSearchInput.addEventListener('input', renderGuestTable);
}

const guestList = document.getElementById('guest-list-body');
if (guestList) {
  guestList.addEventListener('change', (event) => {
    const select = event.target.closest('.guest-status-select');
    if (!select) return;
    updateParticipantStatus(select.dataset.participantId, select.value);
  });

  guestList.addEventListener('click', (event) => {
    const deleteButton = event.target.closest('.guest-delete-btn');
    if (deleteButton) {
      event.preventDefault();
      event.stopPropagation();

      const participantId = deleteButton.dataset.participantId;
      if (!participantId) return;

      deleteParticipant(participantId);
      return;
    }

    const clearDetailButton = event.target.closest('[data-clear-participant="true"]');
    if (clearDetailButton) {
      event.preventDefault();
      setGuestQueryParam(null);
      renderGuestTable();
      return;
    }

    const guestLink = event.target.closest('.guest-link');
    if (!guestLink) return;

    event.preventDefault();
    const participantId = guestLink.dataset.participantId;
    if (!participantId) return;

    setGuestQueryParam(participantId);
    renderGuestTable();
  });
}

window.addEventListener('popstate', () => {
  renderGuestTable();
});

window.__testScan = (code) => markParticipantCheckedIn(code || PARTICIPANT_CODE);
window.__currentParticipants = readParticipants;
