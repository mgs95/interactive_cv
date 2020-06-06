/////////////////                  ONBOARDING                  /////////////////
export const DATA_ONBOARDING = [
  { todo: 'Create CV design (psd format)', done: true },
  { todo: 'Make a website version based on the design (static)', done: true },
  { todo: 'Create onboarding with todo list', done: true },
  {
    todo: 'Add multi-language functionality (English and Spanish)',
    done: false,
  },
  { todo: '[Interaction] Transform URLs into links', done: true },
  { todo: '[Interaction] Add interactivity to timelines', done: false },
  { todo: '[Interaction] Add interactivity to charts', done: false },
  {
    todo: '[Interaction] Add interactivity to remaining elements',
    done: false,
  },
  {
    todo: 'Add customization (resume version, print, add motivation...)',
    done: false,
  },
];

/////////////////                    HEADER                    /////////////////
export const NAME = 'Mariano Gonzalez Salazar';
export const WEBSITE_URL = 'https://mgs95.github.io/interactive_cv/';
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/marianogs',
  github: 'https://github.com/mgs95',
};
export const CONTACT_INFO = [
  {
    icon: 'email',
    title: 'E-MAIL',
    value: 'marianogs_95@hotmail.com',
  },
  {
    icon: 'phone',
    title: 'PHONE NUMBER',
    value: '+34 649 76 05 75',
  },
  {
    icon: 'website',
    title: 'WEBSITE',
    value: 'marianogs.pythonanywhere.com',
  },
  {
    icon: 'lock',
    title: 'WEBSITE PASSWORD',
    value: '93hKe6Va',
  },
];

/////////////////             SECTION - EDUCATION              /////////////////
export const DATA_EDUCATION = [
  {
    place: 'Stony Brook University (New York)',
    year: [2016, 2017],
    title: 'EXCHANGE PROGRAM',
    description: [
      [
        'Completing courses from fourth year and doing some extra courses ' +
          'such as Advanced Game Programming and American History and Society.',
      ],
      ['Average score: 9.3/10'],
      ['More info: http://www.stonybrook.edu/'],
    ],
  },
  {
    place: 'Universidad Carlos III de Madrid',
    year: [2013, 2018],
    title: 'TELEMATICS ENGINEERING DEGREE',
    description: [
      [
        'Electrical Engineering + Computer Science.',
        'Core topics: telecommunications, networks, programming',
      ],
      [
        'Average score: 6.7/10',
        'Final degree project score: 9.7/10',
        'More info: https://goo.gl/k8EjJv',
      ],
    ],
  },
];

/////////////////              SECTION - LANGUAGES             /////////////////
export const DATA_LANGUAGES = [
  {
    name: 'English',
    progress: 83,
    grade: 'C1',
  },
  {
    name: 'Spanish',
    progress: 100,
    grade: 'NA',
  },
  {
    name: 'French',
    progress: 16,
    grade: 'A1',
  },
];

/////////////////             SECTION - EXPERIENCE             /////////////////
export const DATA_EXPERIENCE = [
  {
    place: 'Intelygenz',
    year: [2019, 'today'],
    title: 'FRONT-END DEVELOPER',
    description: [
      ['Front-end developer at I+D and AI department.'],
      ['More info: https://intelygenz.com/intelygenz-ai'],
    ],
  },
  {
    place: 'Telefónica I+D',
    year: [2018, 2019],
    title: 'FULL-STACK DEVELOPER',
    description: [
      ['Full-stack developer at LUCA: Data-Driven decisions.'],
      ['More info: https://goo.gl/JbxJ8M'],
    ],
  },
  {
    place: 'Telefónica I+D',
    year: [2017, 2018],
    title: 'FULL-STACK DEVELOPER (INTERN)',
    description: [
      ['Full-stack developer at LUCA: Data-Driven decisions.'],
      [
        'Program: Talentum 2017/2018.',
        'More info: http://www.talentumtelefonica.com/',
      ],
    ],
  },
];

/////////////////         SECTION - PROFESSIONAL SKILLS        /////////////////
export const DATA_PROFESSIONAL_SKILLS = [
  {
    title: 'Programming languages',
    data: [
      { name: 'JavaScript', score: 97 },
      { name: 'Python', score: 95 },
      { name: 'TypeScript', score: 80 },
      { name: 'Java', score: 70 },
      { name: 'Go', score: 25 },
    ],
  },
  {
    title: 'Back-end technologies',
    data: [
      { name: 'Flask', score: 75 },
      { name: 'Django', score: 66 },
    ],
  },
  {
    title: 'Front-end technologies',
    data: [
      { name: 'React', score: 92 },
      { name: 'HTML/CSS', score: 90 },
      { name: 'D3', score: 90 },
      { name: 'Apollo', score: 90 },
    ],
  },
  {
    title: 'Graphic design',
    data: [
      { name: 'Photoshop', score: 58 },
      { name: 'Blender', score: 52 },
      { name: 'Premiere', score: 23 },
    ],
  },
  {
    title: 'Other',
    data: [
      { name: 'Algorithms', score: 65 },
      { name: 'Docker', score: 35 },
      { name: 'Kubernetes', score: 21 },
    ],
  },
];

/////////////////           SECTION - PERSONAL SKILLS          /////////////////
export const DATA_PERSONAL_SKILLS = [
  ['Patient', 'Perfectionist', 'Optimist'],
  ['Attentive-Analytical', 'Passionate', 'Inquisitive'],
  ['Critical thinking', 'Competitive', 'Sportsman'],
];

/////////////////        SECTION - CONTESTS AND AWARDS         /////////////////
export const DATA_CONTESTS_AND_AWARDS = {
  Programming: [
    {
      medal: 'gold',
      title: 'Google Games for Stony Brook Univ.',
      date: '2017',
    },
    {
      medal: 'gold',
      title: 'Telefonica Equinox',
      date: 'Autumn 2017',
    },
    {
      medal: 'gold',
      title: 'Week of Code 38',
      date: 'Hackerrank - Jun 2018',
    },
    {
      medal: 'silver',
      title: 'Week of Code 37',
      date: 'Hackerrank - Apr 2018',
    },
  ],
  Other: [
    {
      medal: 'gold',
      title: '#1 at Puzzlerama',
      date: '(Ranking > 1M players) June 2017',
    },
  ],
  'Rock Climbing': [
    {
      medal: 'gold',
      title: '1st Comp. Rivaskla',
      date: '(Intermediate category) 2017',
    },
    {
      medal: 'silver',
      title: '1st Comp. CaraSur',
      date: '(UC3M) 2018',
    },
    {
      medal: 'bronze',
      title: '2nd Open Boulder Manotas Climb',
      date: '(Intermediate category) 2015',
    },
  ],
};

/////////////////              SECTION - HOBBIES               /////////////////
export const DATA_HOBBIES = {
  name: 'container',
  children: [
    {
      name: 'inner',
      children: [
        {
          name: 'Sport',
          children: [
            {
              name: 'Rock climbing',
              children: [
                { name: 'Boulder (7b)', size: 18 },
                { name: 'Sport climbing (7b+)', size: 8 },
              ],
            },
            {
              name: 'Skating',
              children: [{ name: 'Line skating', size: 6 }],
            },
          ],
        },
        {
          name: 'Programming',
          children: [
            {
              name: 'Personal Projects',
              children: [
                { name: 'Web related', size: 15 },
                { name: 'Others', size: 5 },
              ],
            },
            {
              name: 'Problems',
              children: [{ name: 'Competitive program-ming', size: 10 }],
            },
          ],
        },
        {
          name: 'Graphic design',
          children: [
            {
              name: 'Image',
              children: [{ name: 'Edition and creation', size: 16 }],
            },
            {
              name: 'Video',
              children: [{ name: 'Edition', size: 4 }],
            },
          ],
        },
        {
          name: 'Music and cinema',
          children: [
            {
              name: 'Music',
              children: [
                { name: 'Soundtracks', size: 3 },
                { name: 'Rock', size: 1.5 },
                { name: 'Other', size: 2 },
              ],
            },
            {
              name: 'Instruments',
              children: [
                { name: 'Guitar', size: 2 },
                { name: 'Piano', size: 0.5 },
              ],
            },
            {
              name: 'Cinema',
              children: [
                { name: 'TV Shows', size: 6 },
                { name: 'Movies', size: 3 },
              ],
            },
          ],
        },
      ],
    },
  ],
};
