// Инициализация динамической адаптации
new Adapt();

// Инициализация модального окна
const modal = new Modal({animation: 'fadeIn'});

// Инициализация главного меню
new Menu('main-menu', { alwaysClick: true });

// Инициализация табов на главной странице
new Tabs('main-media');
