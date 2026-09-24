import { UnitKnowledgeBase } from '../../types/knowledge_base';

export const unit01: UnitKnowledgeBase = {
  unitNumber: 1,
  title: 'Family Life',
  topic: 'Household chores and family values',
  theme: 'Our Lives',
  objectives: {
    language: [
      'Pronounce consonant blends /br/, /kr/, and /tr/ correctly in isolation and in sentences.',
      'Understand and use words and phrases related to family life (household chores, family responsibilities).',
      'Use the present simple vs. present continuous correctly to talk about daily routines and temporary actions.'
    ],
    skills: [
      'Reading for specific information in a text about the benefits of doing housework for children.',
      'Explaining why children should or shouldn\'t do housework.',
      'Listening for specific information in a talk show about family life and family support.',
      'Writing an email (120 - 150 words) about family routines and bonding activities.'
    ],
    lifeSkillsAndCulture: [
      'Expressing opinions using strong and neutral opinion phrases.',
      'Understanding traditional British family values and comparing them with Vietnamese family values.',
      'Conducting research on Family Day in Viet Nam or other countries.'
    ]
  },
  relationships: {
    coreThemeInterconnection: 'Tất cả các phần trong Unit 1 xoay quanh chủ đề cuộc sống gia đình (Family life), bắt đầu từ việc phân chia công việc nhà hàng ngày (Household chores), mở rộng sang vai trò giáo dục và gắn kết của việc chia sẻ việc nhà (Benefits of doing housework), cách gia đình hỗ trợ nhau (Family support), các thói quen sinh hoạt tạo sự gắn kết (Family routines), và các giá trị nền tảng của gia đình (Family values).',
    languageToSkillsLink: 'Hệ thống từ vựng về việc nhà (do the cooking, do the laundry, put out the rubbish, heavy lifting, breadwinner, homemaker) và ngữ pháp thì Hiện tại đơn / Hiện tại tiếp diễn được kích hoạt ngay trong bài đọc (lợi ích việc nhà), bài nói (tranh luận trẻ có nên làm việc nhà), bài nghe (chương trình talk show về gia đình Hiếu), bài viết (viết email kể về thói quen gia đình) và phần Giao tiếp (bày tỏ quan điểm cá nhân).',
    progressionFlow: 'Getting Started giới thiệu ngữ cảnh tự nhiên (Nam bận chuẩn bị bữa tối, trao đổi với Minh về việc phân chia việc nhà) -> Language củng cố ngữ âm (/br/, /kr/, /tr/), từ vựng và ngữ pháp đối chiếu HTĐ vs HTTD -> Reading phân tích sâu lợi ích việc nhà đối với nhân cách và kỹ năng sống của trẻ -> Speaking thực hành phản biện Should/Shouldn\'t -> Listening mở rộng sang khía cạnh tinh thần và hỗ trợ của gia đình -> Writing tổng hợp kỹ năng viết email mô tả thói quen gia đình -> Communication & Culture kết nối với đời sống thực tế (cách nêu quan điểm và giá trị gia đình tại Anh) -> Looking Back ôn tập -> Project nghiên cứu ngày Gia đình.'
  },
  vocabulary: [
    {
      id: 'u1-v01',
      word: 'breadwinner',
      partOfSpeech: 'n',
      pronunciation: "/'bredwɪnə/",
      vietnameseMeaning: 'người trụ cột đi làm nuôi gia đình',
      simpleEnglishDefinition: 'someone who earns money to support their family',
      exampleSentence: 'My dad is the breadwinner; he earns money.',
      unit: 1,
      lesson: 'Getting Started',
      sourceContext: 'Minh: Mum is the homemaker, so she does the chores. My dad is the breadwinner; he earns money. And we, the kids, study.',
      status: 'verified'
    },
    {
      id: 'u1-v02',
      word: 'homemaker',
      partOfSpeech: 'n',
      pronunciation: "/'həʊmmeɪkə/",
      vietnameseMeaning: 'người nội trợ',
      simpleEnglishDefinition: 'a person who manages a home and often raises children instead of earning money',
      exampleSentence: 'Mum is the homemaker, so she does the chores.',
      unit: 1,
      lesson: 'Getting Started',
      sourceContext: 'Minh: Mum is the homemaker, so she does the chores. My dad is the breadwinner...',
      status: 'verified'
    },
    {
      id: 'u1-v03',
      word: 'heavy lifting',
      partOfSpeech: 'n',
      pronunciation: "/,hevi 'lɪftɪŋ/",
      vietnameseMeaning: 'việc nặng nhọc, mang vác nặng',
      simpleEnglishDefinition: 'picking up and carrying heavy objects',
      exampleSentence: 'Dad cleans the house and does the heavy lifting.',
      unit: 1,
      lesson: 'Getting Started',
      sourceContext: 'Nam: Dad cleans the house and does the heavy lifting.',
      status: 'verified'
    },
    {
      id: 'u1-v04',
      word: 'groceries',
      partOfSpeech: 'n',
      pronunciation: "/'grəʊsəriz/",
      vietnameseMeaning: 'thực phẩm và hàng tạp hóa',
      simpleEnglishDefinition: 'food and other goods sold at a shop or a supermarket',
      exampleSentence: 'Mum usually cooks and shops for groceries.',
      unit: 1,
      lesson: 'Getting Started',
      sourceContext: 'Nam: Mum usually cooks and shops for groceries; Dad cleans the house...',
      status: 'verified'
    },
    {
      id: 'u1-v05',
      word: 'housework',
      partOfSpeech: 'n',
      pronunciation: "/'haʊswɜ:k/",
      vietnameseMeaning: 'công việc nhà',
      simpleEnglishDefinition: 'work around the house such as cooking, cleaning or washing clothes',
      exampleSentence: 'In my family, we divide the housework equally.',
      unit: 1,
      lesson: 'Getting Started',
      sourceContext: 'Nam: Well, in my family, we divide the housework equally.',
      status: 'verified'
    },
    {
      id: 'u1-v06',
      word: 'laundry',
      partOfSpeech: 'n',
      pronunciation: "/'lɔ:ndri/",
      vietnameseMeaning: 'quần áo, đồ giặt là',
      simpleEnglishDefinition: 'clothes that need to be washed or have just been washed',
      exampleSentence: 'My sister does the laundry.',
      unit: 1,
      lesson: 'Getting Started',
      sourceContext: 'Nam: My sister does the laundry. I do the washing-up and put out the rubbish.',
      status: 'verified'
    },
    {
      id: 'u1-v07',
      word: 'washing-up',
      partOfSpeech: 'n',
      pronunciation: "/,wɒʃɪŋ 'ʌp/",
      vietnameseMeaning: 'việc rửa chén bát',
      simpleEnglishDefinition: 'the act of cleaning plates, dishes, and cooking pans after a meal',
      exampleSentence: 'I do the washing-up and put out the rubbish.',
      unit: 1,
      lesson: 'Getting Started',
      sourceContext: 'Nam: I do the washing-up and put out the rubbish.',
      status: 'verified'
    },
    {
      id: 'u1-v08',
      word: 'rubbish',
      partOfSpeech: 'n',
      pronunciation: "/'rʌbɪʃ/",
      vietnameseMeaning: 'rác rưởi',
      simpleEnglishDefinition: 'things that you throw away because you no longer want or need them',
      exampleSentence: 'He is putting out the rubbish.',
      unit: 1,
      lesson: 'Getting Started',
      sourceContext: 'Nam: I do the washing-up and put out the rubbish.',
      status: 'verified'
    },
    {
      id: 'u1-v09',
      word: 'responsibility',
      partOfSpeech: 'n',
      pronunciation: "/rɪ,spɒnsə'bɪləti/",
      vietnameseMeaning: 'trách nhiệm, bổn phận',
      simpleEnglishDefinition: 'duty to take care of something or carry out a task',
      exampleSentence: 'Sharing housework helps young people learn to take responsibility.',
      unit: 1,
      lesson: 'Reading',
      sourceContext: 'Sharing housework also helps young people learn to take responsibility. They know that they have to try to finish their tasks...',
      status: 'verified'
    },
    {
      id: 'u1-v10',
      word: 'gratitude',
      partOfSpeech: 'n',
      pronunciation: "/'grætɪtju:d/",
      vietnameseMeaning: 'lòng biết ơn',
      simpleEnglishDefinition: 'the feeling of being grateful and showing appreciation',
      exampleSentence: 'Doing chores also helps develop children’s gratitude to their parents.',
      unit: 1,
      lesson: 'Reading',
      sourceContext: 'Doing chores also helps develop children’s gratitude to their parents. When doing housework, they learn to appreciate all the hard work their parents do...',
      status: 'verified'
    },
    {
      id: 'u1-v11',
      word: 'strengthen',
      partOfSpeech: 'v',
      pronunciation: "/'streŋθn/",
      vietnameseMeaning: 'củng cố, làm mạnh thêm',
      simpleEnglishDefinition: 'to make something stronger',
      exampleSentence: 'Doing chores together helps strengthen family bonds.',
      unit: 1,
      lesson: 'Reading',
      sourceContext: 'In addition, doing chores together helps strengthen family bonds, creating special moments between children and parents.',
      status: 'verified'
    },
    {
      id: 'u1-v12',
      word: 'bond',
      partOfSpeech: 'n',
      pronunciation: "/bɒnd/",
      vietnameseMeaning: 'sự gắn bó, mối liên kết',
      simpleEnglishDefinition: 'close connections or ties between people',
      exampleSentence: 'Doing chores together creates special moments and builds family bonds.',
      unit: 1,
      lesson: 'Reading',
      sourceContext: '...helping strengthen family bonds, creating special moments between children and parents.',
      status: 'verified'
    },
    {
      id: 'u1-v13',
      word: 'character',
      partOfSpeech: 'n',
      pronunciation: "/'kærəktə/",
      vietnameseMeaning: 'tính cách, phẩm chất nhân cách',
      simpleEnglishDefinition: 'qualities that make a person who they are',
      exampleSentence: 'Doing housework can bring a lot of benefits to children and helps build their character.',
      unit: 1,
      lesson: 'Reading',
      sourceContext: 'It teaches them life skills and helps build their character. Therefore, parents should encourage their kids to share the housework...',
      status: 'verified'
    },
    {
      id: 'u1-v14',
      word: 'routine',
      partOfSpeech: 'n',
      pronunciation: "/ru:'ti:n/",
      vietnameseMeaning: 'thói quen, lệ thường, công việc lặp lại hàng ngày',
      simpleEnglishDefinition: 'a usual or regular way of doing things',
      exampleSentence: 'We have quite a few routines to help us learn life skills and build family bonds.',
      unit: 1,
      lesson: 'Writing',
      sourceContext: 'Well, we have quite a few routines to help us learn life skills and build family bonds, but I’ll tell you about three main ones.',
      status: 'verified'
    },
    {
      id: 'u1-v15',
      word: 'spotlessly',
      partOfSpeech: 'adv',
      pronunciation: "/'spɒtləsli/",
      vietnameseMeaning: 'không tì vết, sạch bong',
      simpleEnglishDefinition: 'extremely cleanly, without any dirt or marks',
      exampleSentence: 'We all feel happy and proud when we see our home spotlessly clean at the end of the day.',
      unit: 1,
      lesson: 'Writing',
      sourceContext: 'We all feel happy and proud when we see our home spotlessly clean at the end of the day.',
      status: 'verified'
    },
    {
      id: 'u1-v16',
      word: 'cheer up',
      partOfSpeech: 'phr v',
      pronunciation: "/,tʃɪər 'ʌp/",
      vietnameseMeaning: 'cổ vũ, làm cho ai vui lên',
      simpleEnglishDefinition: 'to make someone feel happier',
      exampleSentence: 'Hieu’s parents always listen to him and cheer him up whenever he has difficulties.',
      unit: 1,
      lesson: 'Listening',
      sourceContext: 'Hieu\'s parents always listen to him and cheer him up whenever he has difficulties.',
      status: 'verified'
    },
    {
      id: 'u1-v17',
      word: 'support',
      partOfSpeech: 'n, v',
      pronunciation: "/sə'pɔ:t/",
      vietnameseMeaning: 'sự ủng hộ, hỗ trợ; ủng hộ, hỗ trợ',
      simpleEnglishDefinition: 'giving help, encouragement, or approval to someone',
      exampleSentence: 'His parents’ support and trust give him strength to carry on.',
      unit: 1,
      lesson: 'Listening',
      sourceContext: 'His parents\' support and trust give him strength to carry on.',
      status: 'verified'
    },
    {
      id: 'u1-v18',
      word: 'truthful',
      partOfSpeech: 'adj',
      pronunciation: "/'tru:θfl/",
      vietnameseMeaning: 'trung thực, chân thật',
      simpleEnglishDefinition: 'honest and not saying things that are not true',
      exampleSentence: 'Children are taught to tell the truth and be truthful from an early age.',
      unit: 1,
      lesson: 'Communication and Culture / CLIL',
      sourceContext: 'On top of the list are the values of being truthful and honest, and respecting older people.',
      status: 'verified'
    },
    {
      id: 'u1-v19',
      word: 'manner',
      partOfSpeech: 'n',
      pronunciation: "/'mænə/",
      vietnameseMeaning: 'tác phong, cách ứng xử, phép lịch sự',
      simpleEnglishDefinition: 'the polite ways of treating other people and behaving socially',
      exampleSentence: 'Having good table manners is the third important family value in the UK.',
      unit: 1,
      lesson: 'Communication and Culture / CLIL',
      sourceContext: 'Having good table manners is the third important family value.',
      status: 'verified'
    },
    {
      id: 'u1-v20',
      word: 'benefit',
      partOfSpeech: 'n',
      pronunciation: "/'benɪfɪt/",
      vietnameseMeaning: 'lợi ích',
      simpleEnglishDefinition: 'an advantage or good effect that something gives',
      exampleSentence: 'Doing housework can bring a lot of benefits to children.',
      unit: 1,
      lesson: 'Reading',
      sourceContext: 'All in all, doing housework can bring a lot of benefits to children.',
      status: 'verified'
    }
  ],
  pronunciation: {
    topic: 'Consonant blends /br/, /kr/, and /tr/',
    rulesAndTips: [
      'Phát âm liền mạch các tổ hợp phụ âm đầu từ mà không chèn nguyên âm /ə/ ở giữa.',
      '/br/: mím hai môi nhẹ và bật âm hữu thanh kết hợp uốn lưỡi cho /r/ (breadwinner, breakfast, brown, brush, brain, bread).',
      '/kr/: cuống lưỡi chạm ngạc mềm bật âm vô thanh /k/ lướt nhanh sang /r/ (crash, crane, cream, create).',
      '/tr/: đầu lưỡi chạm lợi trên bật âm tắc xát kết hợp /r/ (track, tree, train, trash, tread).'
    ],
    targetSoundsOrPatterns: ['/br/', '/kr/', '/tr/'],
    practiceWords: [
      { word: 'breadwinner', patternOrBlend: '/br/', phonetic: "/'bredwɪnə/" },
      { word: 'breakfast', patternOrBlend: '/br/', phonetic: "/'brekfəst/" },
      { word: 'brown', patternOrBlend: '/br/', phonetic: '/braʊn/' },
      { word: 'brush', patternOrBlend: '/br/', phonetic: '/brʌʃ/' },
      { word: 'brain', patternOrBlend: '/br/', phonetic: '/breɪn/' },
      { word: 'bread', patternOrBlend: '/br/', phonetic: '/bred/' },
      { word: 'crash', patternOrBlend: '/kr/', phonetic: '/kræʃ/' },
      { word: 'crane', patternOrBlend: '/kr/', phonetic: '/kreɪn/' },
      { word: 'cream', patternOrBlend: '/kr/', phonetic: '/kri:m/' },
      { word: 'create', patternOrBlend: '/kr/', phonetic: '/kri'eɪt/' },
      { word: 'track', patternOrBlend: '/tr/', phonetic: '/træk/' },
      { word: 'tree', patternOrBlend: '/tr/', phonetic: '/tri:/' },
      { word: 'train', patternOrBlend: '/tr/', phonetic: '/treɪn/' },
      { word: 'trash', patternOrBlend: '/tr/', phonetic: '/træʃ/' },
      { word: 'tread', patternOrBlend: '/tr/', phonetic: '/tred/' }
    ],
    practiceSentences: [
      'I like ice cream, but my brother likes bread pudding.',
      'Tracy crashed her car into a tree and broke her leg.',
      'They often have crab soup for breakfast.'
    ]
  },
  grammar: [
    {
      id: 'u1-g01',
      title: 'Present simple vs. Present continuous (Thì hiện tại đơn và hiện tại tiếp diễn)',
      rules: [
        'We use the present simple to talk about habits or things we do regularly (thói quen, hành động lặp đi lặp lại).',
        'We use the present continuous to talk about things which are happening at the moment of speaking (hành động đang diễn ra ngay lúc nói).',
        'Note: We don’t usually use the present continuous tense with stative verbs (động từ chỉ trạng thái: like, love, need, want, know, agree, believe, understand, etc.).'
      ],
      formulas: [
        {
          label: 'Present Simple - Affirmative & Negative',
          structure: 'S + V(s/es) / S + do/does not + V-inf',
          notes: 'Dấu hiệu: usually, always, often, every day, twice a week.'
        },
        {
          label: 'Present Continuous',
          structure: 'S + am/is/are + V-ing',
          notes: 'Dấu hiệu: now, at the moment, right now, currently, late today.'
        }
      ],
      examplesFromBook: [
        'My mother cooks every day. (Thói quen - Present Simple)',
        'My mother isn’t cooking now. She’s working in her office. (Hành động lúc nói - Present Continuous)',
        'My mum usually does the cooking, but she’s working late today. (Đối chiếu thói quen vs hành động tạm thời)',
        'Mrs Lam usually does the cooking in her family.',
        'I\'m afraid he can\'t answer the phone now. He is putting out the rubbish.'
      ],
      commonMistakesOrNotes: [
        'Lỗi dùng sai dạng tiếp diễn với stative verbs: *I am wanting to tell you* -> Sửa thành: *I want to tell you*.',
        'Nhầm lẫn giữa hành động thường nhật và tạm thời: *She cooks dinner now* -> Sửa thành: *She is cooking dinner*.'
      ],
      exercisesInBook: [
        {
          task: 'Choose the correct form of the verb in each sentence (p. 10)',
          sampleItem: 'Mrs Lam usually does / is doing the cooking in her family. (Answer: does)'
        },
        {
          task: 'Find the mistake and correct it (p. 16)',
          sampleItem: 'I’m wanting to you to tell you how much I’m wanting to see you. -> want'
        }
      ]
    }
  ],
  reading: {
    title: 'Benefits of doing housework',
    subtopic: 'Why doing chores helps children grow up responsibly',
    passageText: `Most people think that housework is boring and is the responsibility of wives and mothers only. Many parents don’t ask their children to do housework so that they have more time to play or study. However, studies show doing chores is good for children.
Kids who do housework develop important life skills that they will need for the rest of their lives. Doing the laundry, cleaning the house, and taking care of others are among the important skills that children will need when they start their own families. These are the things that schools cannot fully teach, so it’s important for children to learn them at home. Sharing housework also helps young people learn to take responsibility. They know that they have to try to finish their tasks even though they do not enjoy doing them.
Doing chores also helps develop children’s gratitude to their parents. When doing housework, they learn to appreciate all the hard work their parents do around the house for them. In addition, doing chores together helps strengthen family bonds, creating special moments between children and parents. It makes children feel they are members of a team.
All in all, doing housework can bring a lot of benefits to children. It teaches them life skills and helps build their character. Therefore, parents should encourage their kids to share the housework for their own good as well as the good of the whole family.`,
    vocabularyInFocus: ['responsibility (duty)', 'gratitude (the feeling of being grateful)', 'strengthen (make something stronger)', 'bonds (close connections)', 'character (qualities that make a person different from others)'],
    comprehensionFocus: [
      'What do most people think about housework? (They think it is boring and is the responsibility of wives and mothers only.)',
      'Why don’t many parents make their children do housework? (So that they have more time to play or study.)',
      'What are some important life skills children can learn when doing housework? (Doing laundry, cleaning the house, taking care of others.)',
      'What do children learn as they finish household tasks that they don’t enjoy? (They learn to take responsibility.)',
      'Why does sharing housework strengthen family bonds? (Because it creates special moments and makes children feel they are members of a team.)'
    ],
    discussionQuestion: 'What benefits do you think you can get from sharing housework?'
  },
  speaking: {
    title: 'Why should / shouldn\'t children do housework?',
    topic: 'Debating children\'s involvement in household chores',
    usefulExpressions: [
      {
        category: 'Giving reasons for "Should"',
        expressions: [
          'Doing housework helps them develop life skills.',
          'Doing housework teaches them to take responsibility.',
          'Doing housework helps strengthen family bonds.'
        ]
      },
      {
        category: 'Giving reasons for "Shouldn\'t"',
        expressions: [
          'Kids should be given plenty of playtime when they are young.',
          'They may break or damage things when doing housework.',
          'They need more time to study and do homework.'
        ]
      }
    ],
    discussionPrompts: [
      'In pairs, discuss whether children should or shouldn\'t do housework and give supporting reasons.',
      'Exchange opinions with friends using model dialogue: "Nam, why do you think children should do housework? - Because it teaches them life skills..."'
    ],
    sampleModelOrDialogue: 'Anna: Nam, why do you think children should do housework? \nNam: Because doing housework helps them develop life skills. \nAnna: It\'s true. Life skills such as cooking, cleaning or taking care of others are really necessary for kids when they grow up.'
  },
  listening: {
    title: 'Family support',
    context: 'A TV talk show called "Family Life" where student Hieu talks about his family support',
    audioContentSummary: 'Hieu talks about his family consisting of his parents and his brother. His parents encourage him, teach him physics, listen to him and cheer him up when he is stressed. His brother shares happy and sad moments with him and helps him with studies. Family routines keep them bonded.',
    listeningTasks: [
      'True / False statements about Hieu\'s family members and support activities.',
      'Gap-filling with ONE word from recording: cheer him up, parents\' support and trust, shares his happy and sad moments.'
    ],
    discussionQuestion: 'How can parents help their children achieve success in their studies?'
  },
  writing: {
    title: 'Writing about family routines',
    genre: 'An email describing 3 key family routines that strengthen family bonds',
    wordCountTarget: '120 - 150 words',
    writingOutline: [
      { step: 'Greeting & Opening', prompt: 'Hi Joey / Dong, ... In your last email you asked me about my family routines. We have quite a few routines to help us learn life skills and build family bonds, but I\'ll tell you about three main ones.' },
      { step: 'Routine 1 (Daily)', prompt: 'First, having dinner / breakfast together every day (share daily experiences, talk about plans for the day).' },
      { step: 'Routine 2 (Weekly)', prompt: 'Second, watching TV / favourite game show together every Friday/Saturday evening (watch a film, share snacks, guess answers).' },
      { step: 'Routine 3 (Bi-weekly or Monthly)', prompt: 'Third, cleaning the house together / visiting grandparents (do housework together, make chores list, feel proud).' },
      { step: 'Closing', prompt: 'Do you have similar family routines? I\'d be interested to know about your family. Write back soon. Best wishes.' }
    ],
    usefulExpressions: [
      'First, my family always...',
      'Second, we watch our favourite game show on TV together every Friday evening...',
      'Third, every two weeks, on Saturday we clean the house together...',
      'We all feel happy and proud when we see our home spotlessly clean...'
    ]
  },
  communication: {
    everydayEnglish: {
      function: 'Expressing opinions (Bày tỏ ý kiến: khẳng định mạnh mẽ hoặc trung tính)',
      usefulExpressions: [
        {
          category: 'Strong opinion',
          phrases: [
            'I strongly believe that...',
            'I\'m sure that...',
            'I have no doubt that...'
          ]
        },
        {
          category: 'Neutral opinion',
          phrases: [
            'In my opinion, ...',
            'To my mind, ...',
            'I suppose that...'
          ]
        }
      ],
      sampleDialogue: 'Anna: Do you guys think that teenagers should do housework?\nMinh: Yes, I strongly believe that teenagers as well as other members of the family should share the housework.\nAnna: Do you mean everybody in the family has to help with the housework?\nMinh: That\'s right. I have no doubt that doing household chores together helps build family bonds.\nTu: Well, I\'m not sure about that. Teenagers should spend all their time studying instead of doing housework.'
    }
  },
  culture: {
    type: 'Culture',
    title: 'British Family Values',
    summary: 'A recent survey in the UK reveals that despite modern changes, traditional family values remain essential. The top five values are: 1. Being truthful and honest; 2. Respecting older people; 3. Having good table manners; 4. Remembering to say "please" and "thank you"; 5. Helping with family chores.',
    keyFacts: [
      '1st value: Being truthful and honest (children taught to tell truth from early age).',
      '2nd value: Respecting older people (who have a wealth of life experiences).',
      '3rd value: Having good table manners.',
      '4th value: Remembering to say "please" and "thank you".',
      '5th value: Helping with family chores.'
    ],
    comparisonOrDiscussionTask: 'Discuss whether Vietnamese people have similar family values (e.g. kính trên nhường dưới, hiếu thảo, trung thực, lễ phép "cảm ơn" và "xin lỗi", giúp đỡ gia đình).'
  },
  lookingBack: {
    pronunciationReview: [
      '/br/: brother, bread pudding, broke, breakfast',
      '/kr/: ice cream, crashed, crab',
      '/tr/: Tracy, tree'
    ],
    vocabularyReviewTask: 'Complete the text about Thanh\'s family using correct forms: do the cooking, do the heavy lifting, laundry, clean the house, do the washing-up.',
    grammarReviewTask: 'Find and correct mistakes regarding Present simple vs. Present continuous: stative verb errors (*I am wanting* -> want, *I look* -> am looking, *she cooks* -> is cooking, *do you read* -> are you reading, *What are your family doing* -> does your family do).'
  },
  project: {
    title: 'Happy Family Day!',
    aim: 'Research Family Day in Viet Nam (28 June) or other countries in the world (e.g., Canada, South Africa, USA) and give a group presentation.',
    guidingQuestionsOrSteps: [
      'Where it is celebrated',
      'When it is celebrated (e.g. Vietnamese Family Day is celebrated on June 28th)',
      'When it was first celebrated',
      'Why it is celebrated',
      'What people often do to celebrate the day (family gatherings, cooking meals, giving gifts, honoring family bonds)'
    ],
    outputType: 'Poster & Oral Group Presentation'
  }
};
