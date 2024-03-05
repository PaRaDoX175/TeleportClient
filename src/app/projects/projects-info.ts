export interface SliderFilled {
  imageUrl: string;
  title: string[];
  description: string;
  table: string[];
}

export const arrOfInfo: SliderFilled[] = [
  {
    imageUrl: './assets/img/Teleport_AGP.jpg',
    title: ['Азиатский гозопровод (АГП)', 'Газопровод Бейнеу-Шымкент(ГБШ)'],
    description:
      'Наши эксперты принимали участие в реализации следующих задач:',
    table: [
      'внедрение системы электронного документооборота',
      'разработка модулей SAP',
      'поставка и ввод в эксплуатацию систем хранения данных',
      'IT-обслуживание и техподдержка',
    ],
  },
  {
    imageUrl: './assets/img/Teleport_Sinooil.jpg',
    title: ['Sinooil, Petrochina, PetroKazakhstan'],
    description: 'При участии наших специалистов были реализованы:',
    table: [
      'поставка и ввод в эксплуатацию сетевого и серверного оборудования, а также систем хранения данных',
      'настройка сетевого оборудования для обеспечения резерва и безопасности',
      'техническое обслуживание систем хранения данных',
    ],
  },
  {
    imageUrl: './assets/img/Teleport_Airport.jpg',
    title: ['Аэропорт г. Уральск'],
    description: '',
    table: [
      'участие в разработке и реализации системы безопасности и IT-инфраструктуры аэропорта',
      'наша экспертная вовлеченность в создание современной технологической базы для оперативного обмена информацией и управления процессами аэропорта',
    ],
  },
  {
    imageUrl: './assets/img/Teleport_KazAtomProm.jpg',
    title: ['АО "КазАтомПром"'],
    description:
      'Наши специалисты участвовали в монтаже волоконно-оптических линий связи протяженностью 600 километров, обеспечив стабильную и высокоскоростную передачу данных между производственными узлами. Это значительно улучшило коммуникацию и способствовало дальнейшему развитию',
    table: [],
  },
  {
    imageUrl: './assets/img/Teleport_AstanaExpo.jpg',
    title: ['Astana EXPO 2017'],
    description:
      'Наша команда специалистов активно участвовала в успешной реализации системы безопасности, которая включает в себя более 2000 камер. Благодаря этому, мы смогли обеспечить широкий охват видеонаблюдения и контроля, что значительно повысило уровень безопасности',
    table: [],
  },
  {
    imageUrl: './assets/img/Teleport_Kazakhtelecom.jpg',
    title: ['АО "Казахтелеком"'],
    description:
      'Мы участвовали в построении надежных транспортных сетей и сетей доступа для крупнейшего интернет-провайдера страны, в рамках обеспечения стабильной передачи данных и высокоскоростного интернета для пользователей',
    table: [],
  },
];