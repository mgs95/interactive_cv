/////////////////                    HEADER                    /////////////////
export const NAME = 'Mariano Gonzalez Salazar';
export const WEBSITE_URL = 'marianointeractivecv.pythonanywhere.com';
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/marianogs',
  github: 'https://github.com/mgs95'
};
export const CONTACT_INFO = [
  {
    icon: 'email',
    title: 'E-MAIL',
    value: 'marianogs_95@hotmail.com'
  },
  {
    icon: 'phone',
    title: 'PHONE NUMBER',
    value: '+34 649 76 05 75'
  },
  {
    icon: 'website',
    title: 'WEBSITE',
    value: 'marianogs.pythonanywhere.com'
  },
  {
    icon: 'lock',
    title: 'WEBSITE PASSWORD',
    value: '93hKe6Va'
  },
];

/////////////////             SECTION - EDUCATION              /////////////////
export const DATA_EDUCATION = [
  {
    place: 'Stony Brook University (New York)',
    year: [ 2016, 2017 ],
    title: 'EXCHANGE PROGRAM',
    description: [
      [
        'Completing courses from fourth year and doing some extra courses ' +
        'such as Advanced Game Programming and American History and Society.'
      ],
      [ 'Average score: 9.3/10' ],
      [ 'More info: http://www.stonybrook.edu/' ]
    ]
  },
  {
    place: 'Universidad Carlos III de Madrid',
    year: [ 2013, 2018 ],
    title: 'TELEMATICS ENGINEERING DEGREE',
    description: [
      [
        'Electrical Engineering + Computer Science.',
        'Core topics: telecommunications, networks, programming'
      ],
      [
        'Average score: 6.7/10',
        'Final degree project score: 9.7/10',
        'More info: https://goo.gl/k8EjJv'
      ]
    ]
  },
];

/////////////////              SECTION - LANGUAGES             /////////////////
export const DATA_LANGUAGES = [
  {
    name: 'English',
    progress: 83,
    grade: 'C1'
  },
  {
    name: 'Spanish',
    progress: 100,
    grade: 'NA'
  },
  {
    name: 'French',
    progress: 16,
    grade: 'A1'
  }
];

/////////////////             SECTION - EXPERIENCE             /////////////////
export const DATA_EXPERIENCE = [
  {
    place: 'Telefónica I+D',
    year: [2018, 'today'],
    title: 'FULL-STACK DEVELOPER',
    description: [
      [
        'Full-stack developer at LUCA: Data-Driven decisions.'
      ],
      [
        'More info: https://goo.gl/JbxJ8M'
      ]
    ]
  },
  {
    place: 'Telefónica I+D',
    year: [2017, 2018],
    title: 'FULL-STACK DEVELOPER',
    description: [
      [
        'Full-stack developer at LUCA: Data-Driven decisions.'
      ],
      [
        'Program: Talentum 2017/2018.',
        'More info: http://www.talentumtelefonica.com/'
      ]
    ]
  },
];

/////////////////         SECTION - PROFESSIONAL SKILLS        /////////////////
export const DATA_PROFESSIONAL_SKILLS = [
  {
    title: 'Programming languages',
    data: [
      {name: 'Python', score: 95},
      {name: 'Java', score: 70},
      {name: 'C#', score: 55},
      {name: 'C', score: 40},
      {name: 'Scala', score: 35}
    ]
  },
  {
    title: 'Back-end technologies',
    data: [
      {name: 'Flask', score: 85},
      {name: 'Django', score: 76},
      {name: 'Swagger', score: 48}
    ]
  },
  {
    title: 'Front-end technologies',
    data: [
      {name: 'HTML', score: 90},
      {name: 'D3', score: 90},
      {name: 'JavaScript', score: 81},
      {name: 'CSS', score: 77},
      {name: 'React', score: 68},
      {name: 'Redux', score: 54},
      {name: 'Webpack', score: 31}
    ]
  },
  {
    title: 'Graphic design',
    data: [
      {name: 'Photoshop', score: 58},
      {name: 'Blender', score: 52},
      {name: 'Sony Vegas', score: 44},
      {name: 'Cinema 4D', score: 29},
      {name: 'Premiere', score: 23},
      {name: 'After Effects', score: 18}
    ]
  },
  {
    title: 'Other',
    data: [
      {name: 'Unity', score: 44},
      {name: 'Docker', score: 21}
    ]
  }
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
      date: '2017'
    },
    {
      medal: 'gold',
      title: 'Telefonica Equinox',
      date: 'Autumn 2017'
    },
    {
      medal: 'gold',
      title: 'Week of Code 38',
      date: 'Hackerrank - Jun 2018'
    },
    {
      medal: 'silver',
      title: 'Week of Code 37',
      date: 'Hackerrank - Apr 2018'
    },
  ],
  Other: [
    {
      medal: 'gold',
      title: '#1 at Puzzlerama',
      date: '(Ranking > 1M players) June 2017'
    }
  ],
  'Rock Climbing': [
    {
      medal: 'gold',
      title: '1st Comp. Rivaskla',
      date: '(Intermediate category) 2017'
    },
    {
      medal: 'silver',
      title: '1st Comp. CaraSur',
      date: '(UC3M) 2018'
    },
    {
      medal: 'bronze',
      title: '2nd Open Boulder Manotas Climb',
      date: '(Intermediate category) 2015'
    }
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
                {name: 'Boulder (7b)', size: 18},
                {name: 'Sport climbing (7b+)', size: 8}
              ]
            },
            {
              name: 'Skating',
              children: [
                {name: 'Line skating', size: 6}
              ]
            }
          ]
        },
        {
          name: 'Programming',
          children: [
            {
              name: 'Personal Projects',
              children: [
                {name: 'Web related', size: 15},
                {name: 'Others', size: 5}
              ]
            },
            {
              name: 'Problems',
              children: [
                {name: 'Competitive programming', size: 10}
              ]
            },
          ]
        },
        {
          name: 'Graphic design',
          children: [
            {
              name: 'Image',
              children: [
                {name: 'Edition and creation', size: 16}
              ]
            },
            {
              name: 'Video',
              children: [
                {name: 'Edition', size: 4}
              ]
            },
          ]
        },
        {
          name: 'Music and cinema',
          children: [
            {
              name: 'Music',
              children: [
                {name: 'Soundtracks', size: 3},
                {name: 'Rock', size: 1.5},
                {name: 'Other', size: 2}
              ]
            },
            {
              name: 'Instruments',
              children: [
                {name: 'Guitar', size: 2},
                {name: 'Piano', size: 0.5}
              ]
            },
            {
              name: 'Cinema',
              children: [
                {name: 'TV Shows', size: 6},
                {name: 'Movies', size: 3}
              ]
            },
          ]
        }
      ]
    }
  ]
};
