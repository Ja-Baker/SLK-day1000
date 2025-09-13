// Search data structure for SLK Curriculum Planning Tool
// Extracted from existing curriculum and skill pages

const searchData = {
    // Main navigation pages
    pages: [
        {
            id: 'homePage',
            title: 'Home Page',
            type: 'Page',
            description: 'SLK Modular Therapy Curriculum main page with access to all features',
            keywords: ['home', 'main', 'start', 'welcome'],
            pageId: 'homePage'
        },
        {
            id: 'decisionGuide',
            title: 'Decision Guide',
            type: 'Page',
            description: 'Interactive guide to find the right curriculum for an individual',
            keywords: ['decision', 'guide', 'help', 'choose', 'find', 'which', 'curriculum'],
            pageId: 'decisionGuide'
        },
        {
            id: 'curriculumList',
            title: 'Curriculum List',
            type: 'Page',
            description: 'Browse all available curriculums by communication challenge',
            keywords: ['curriculum', 'list', 'browse', 'all', 'challenges'],
            pageId: 'curriculumList'
        },
        {
            id: 'skillsList',
            title: 'Skills List',
            type: 'Page',
            description: 'Browse all available skills for therapy planning',
            keywords: ['skills', 'list', 'browse', 'specific', 'therapy'],
            pageId: 'skillsList'
        },
        {
            id: 'checklists',
            title: 'Screening Checklists',
            type: 'Page',
            description: 'Download screening checklists for caregivers and educators',
            keywords: ['checklists', 'screening', 'caregiver', 'educator', 'forms', 'input'],
            pageId: 'checklists'
        },
        {
            id: 'handouts',
            title: 'Handouts',
            type: 'Page',
            description: 'Download caregiver and educator handouts with communication supports',
            keywords: ['handouts', 'caregiver', 'educator', 'communication', 'supports'],
            pageId: 'handouts'
        },
        {
            id: 'visuals',
            title: 'Visual Supports',
            type: 'Page',
            description: 'Download visual cues and aids for communication challenges',
            keywords: ['visuals', 'visual', 'supports', 'cues', 'aids', 'communication'],
            pageId: 'visuals'
        }
    ],

    // Curriculum pages extracted from HTML
    curriculums: [
        {
            id: 'earlyInteractions',
            title: 'Early Interactions Curriculum',
            type: 'Curriculum',
            description: 'Encourage individuals to engage, respond, and participate in social interactions',
            keywords: ['early', 'interactions', 'social', 'engagement', 'respond', 'participate', 'name', 'joint', 'attention', 'turn', 'taking'],
            pageId: 'earlyInteractions',
            ageRange: '9-15 months and beyond'
        },
        {
            id: 'analyticLanguage',
            title: 'Analytic Language Processor Curriculum',
            type: 'Curriculum',
            description: 'Support individuals who process language analytically, breaking down communication into parts',
            keywords: ['analytic', 'language', 'processor', 'analytical', 'processing', 'breaking', 'down', 'parts'],
            pageId: 'analyticLanguage'
        },
        {
            id: 'gestaltLanguage',
            title: 'Gestalt Language Processor Curriculum',
            type: 'Curriculum',
            description: 'Support individuals who process language holistically, understanding whole chunks first',
            keywords: ['gestalt', 'language', 'processor', 'holistic', 'processing', 'chunks', 'whole', 'echolalia'],
            pageId: 'gestaltLanguage'
        },
        {
            id: 'aacCurriculum',
            title: 'AAC Curriculum',
            type: 'Curriculum',
            description: 'Augmentative and Alternative Communication curriculum for individuals who need communication support',
            keywords: ['aac', 'augmentative', 'alternative', 'communication', 'device', 'pictures', 'symbols'],
            pageId: 'aacCurriculum'
        },
        {
            id: 'articulation',
            title: 'Articulation Curriculum',
            type: 'Curriculum',
            description: 'Help individuals improve speech sound production and clarity',
            keywords: ['articulation', 'speech', 'sounds', 'production', 'clarity', 'pronunciation'],
            pageId: 'articulation'
        },
        {
            id: 'phonology',
            title: 'Phonology Curriculum',
            type: 'Curriculum',
            description: 'Address phonological patterns and sound system organization',
            keywords: ['phonology', 'phonological', 'patterns', 'sound', 'system', 'processes'],
            pageId: 'phonology'
        },
        {
            id: 'cyclesApproach',
            title: 'Cycles Approach to Speech Sounds',
            type: 'Curriculum',
            description: 'Systematic approach to treating multiple phonological patterns',
            keywords: ['cycles', 'approach', 'speech', 'sounds', 'phonological', 'systematic', 'multiple', 'patterns'],
            pageId: 'cyclesApproach'
        },
        {
            id: 'motorSpeech',
            title: 'Motor Speech Curriculum',
            type: 'Curriculum',
            description: 'Address motor planning and execution difficulties in speech production',
            keywords: ['motor', 'speech', 'planning', 'execution', 'apraxia', 'dysarthria'],
            pageId: 'motorSpeech'
        },
        {
            id: 'mumbling',
            title: 'Mumbling Curriculum',
            type: 'Curriculum',
            description: 'Improve speech clarity and reduce mumbling patterns',
            keywords: ['mumbling', 'clarity', 'unclear', 'speech', 'articulation'],
            pageId: 'mumbling'
        },
        {
            id: 'followingDirections',
            title: 'Following Directions Curriculum',
            type: 'Curriculum',
            description: 'Help individuals understand and follow verbal instructions',
            keywords: ['following', 'directions', 'instructions', 'commands', 'understanding', 'listening'],
            pageId: 'followingDirections'
        },
        {
            id: 'askingAnsweringQuestions',
            title: 'Asking and Answering Questions Curriculum',
            type: 'Curriculum',
            description: 'Develop questioning skills and appropriate responses',
            keywords: ['asking', 'answering', 'questions', 'wh', 'who', 'what', 'where', 'when', 'why', 'how'],
            pageId: 'askingAnsweringQuestions'
        },
        {
            id: 'sequencing',
            title: 'Sequencing Curriculum',
            type: 'Curriculum',
            description: 'Improve understanding and expression of sequential information',
            keywords: ['sequencing', 'order', 'steps', 'first', 'then', 'next', 'last', 'temporal'],
            pageId: 'sequencing'
        },
        {
            id: 'abstractLanguage',
            title: 'Abstract Language Curriculum',
            type: 'Curriculum',
            description: 'Develop understanding of abstract concepts and figurative language',
            keywords: ['abstract', 'language', 'figurative', 'metaphors', 'idioms', 'concepts'],
            pageId: 'abstractLanguage'
        },
        {
            id: 'grammarSyntax',
            title: 'Grammar/Syntax Curriculum',
            type: 'Curriculum',
            description: 'Improve sentence structure and grammatical accuracy',
            keywords: ['grammar', 'syntax', 'sentence', 'structure', 'grammatical', 'morphology'],
            pageId: 'grammarSyntax'
        },
        {
            id: 'vocabulary',
            title: 'Vocabulary Curriculum',
            type: 'Curriculum',
            description: 'Expand and strengthen vocabulary knowledge and usage',
            keywords: ['vocabulary', 'words', 'meaning', 'definitions', 'semantic'],
            pageId: 'vocabulary'
        },
        {
            id: 'languageFoundationsLiteracy',
            title: 'Language Foundations for Literacy Curriculum',
            type: 'Curriculum',
            description: 'Build language skills that support reading and writing development',
            keywords: ['language', 'foundations', 'literacy', 'reading', 'writing', 'phonemic', 'awareness'],
            pageId: 'languageFoundationsLiteracy'
        },
        {
            id: 'cyclesLanguage',
            title: 'Cycles Approach for Language Curriculum',
            type: 'Curriculum',
            description: 'Systematic approach to language intervention using cycles methodology',
            keywords: ['cycles', 'language', 'approach', 'systematic', 'intervention'],
            pageId: 'cyclesLanguage'
        },
        {
            id: 'voiceFoundations',
            title: 'Foundations for Healthy Voice Use Curriculum',
            type: 'Curriculum',
            description: 'Establish healthy voice habits and prevent vocal trauma',
            keywords: ['voice', 'foundations', 'healthy', 'habits', 'vocal', 'hygiene'],
            pageId: 'voiceFoundations'
        },
        {
            id: 'voice',
            title: 'Voice Curriculum',
            type: 'Curriculum',
            description: 'Address voice disorders and improve vocal quality',
            keywords: ['voice', 'vocal', 'quality', 'hoarseness', 'breathiness', 'disorders'],
            pageId: 'voice'
        },
        {
            id: 'resonance',
            title: 'Resonance (Nasality) Curriculum',
            type: 'Curriculum',
            description: 'Address resonance disorders including hypernasality and hyponasality',
            keywords: ['resonance', 'nasality', 'hypernasality', 'hyponasality', 'nasal'],
            pageId: 'resonance'
        },
        {
            id: 'prosody',
            title: 'Prosody Curriculum',
            type: 'Curriculum',
            description: 'Improve rhythm, stress, and intonation patterns in speech',
            keywords: ['prosody', 'rhythm', 'stress', 'intonation', 'melody', 'pitch'],
            pageId: 'prosody'
        },
        {
            id: 'socialAwareness',
            title: 'Social Awareness and Interaction Curriculum',
            type: 'Curriculum',
            description: 'Develop social communication skills and awareness',
            keywords: ['social', 'awareness', 'interaction', 'pragmatics', 'communication', 'skills'],
            pageId: 'socialAwareness'
        },
        {
            id: 'emotionalRegulation',
            title: 'Emotional Regulation and Self-Advocacy Curriculum',
            type: 'Curriculum',
            description: 'Build emotional regulation skills and self-advocacy abilities',
            keywords: ['emotional', 'regulation', 'self', 'advocacy', 'emotions', 'feelings'],
            pageId: 'emotionalRegulation'
        },
        {
            id: 'conversationalSkills',
            title: 'Conversational Skills Curriculum',
            type: 'Curriculum',
            description: 'Develop conversation initiation, maintenance, and turn-taking skills',
            keywords: ['conversational', 'conversation', 'skills', 'turn', 'taking', 'initiation', 'maintenance'],
            pageId: 'conversationalSkills'
        },
        {
            id: 'selectiveMutism',
            title: 'Selective Mutism Curriculum',
            type: 'Curriculum',
            description: 'Support individuals with selective mutism to increase communication',
            keywords: ['selective', 'mutism', 'anxiety', 'communication', 'speaking', 'silence'],
            pageId: 'selectiveMutism'
        },
        {
            id: 'fluencyFoundations',
            title: 'Foundations for Fluency Curriculum',
            type: 'Curriculum',
            description: 'Build foundational skills for fluent speech production',
            keywords: ['fluency', 'foundations', 'smooth', 'speech', 'flow'],
            pageId: 'fluencyFoundations'
        },
        {
            id: 'wordFinding',
            title: 'Word Finding Curriculum',
            type: 'Curriculum',
            description: 'Help individuals with word retrieval difficulties',
            keywords: ['word', 'finding', 'retrieval', 'tip', 'tongue', 'naming'],
            pageId: 'wordFinding'
        },
        {
            id: 'stuttering',
            title: 'Stuttering Curriculum',
            type: 'Curriculum',
            description: 'Address stuttering and improve fluency of speech',
            keywords: ['stuttering', 'fluency', 'disfluency', 'blocks', 'repetitions'],
            pageId: 'stuttering'
        },
        {
            id: 'cluttering',
            title: 'Cluttering Curriculum',
            type: 'Curriculum',
            description: 'Address cluttering and improve speech intelligibility and rate',
            keywords: ['cluttering', 'rate', 'intelligibility', 'fast', 'speech', 'unclear'],
            pageId: 'cluttering'
        }
    ],

    // Key skills extracted from skill-pages-complete.js
    skills: [
        {
            id: 'respondingToName',
            title: 'Responding to Name',
            type: 'Skill',
            description: 'Help individuals learn to respond when their name is called',
            keywords: ['responding', 'name', 'attention', 'social', 'awareness'],
            pageId: 'respondingToName',
            category: 'Early Interactions'
        },
        {
            id: 'jointAttentionTurnTaking',
            title: 'Joint Attention and Turn Taking',
            type: 'Skill',
            description: 'Develop shared focus and turn-taking in interactions',
            keywords: ['joint', 'attention', 'turn', 'taking', 'shared', 'focus'],
            pageId: 'jointAttentionTurnTaking',
            category: 'Early Interactions'
        },
        {
            id: 'followingBasicDirections',
            title: 'Following One-Step Directions (Routine and Novel)',
            type: 'Skill',
            description: 'Build ability to understand and follow simple instructions',
            keywords: ['following', 'directions', 'one', 'step', 'instructions', 'commands'],
            pageId: 'followingBasicDirections',
            category: 'Following Directions'
        },
        {
            id: 'followingTwoStepDirections',
            title: 'Following 2-Step Directions (Routine and Novel)',
            type: 'Skill',
            description: 'Build ability to follow multi-step instructions',
            keywords: ['following', 'directions', 'two', 'step', 'multi', 'instructions'],
            pageId: 'followingTwoStepDirections',
            category: 'Following Directions'
        },
        {
            id: 'producingCVCWords',
            title: 'Producing CV, VC, and CVC Words for Functional Communication',
            type: 'Skill',
            description: 'Improve production of simple word structures',
            keywords: ['producing', 'words', 'cv', 'vc', 'cvc', 'functional', 'communication'],
            pageId: 'producingCVCWords',
            category: 'Functional Communication'
        },
        {
            id: 'buildingFirst50Words',
            title: 'Building an Expressive Vocabulary of First 50 Words',
            type: 'Skill',
            description: 'Develop core vocabulary for early communication',
            keywords: ['vocabulary', 'first', '50', 'words', 'expressive', 'core'],
            pageId: 'buildingFirst50Words',
            category: 'Functional Communication'
        },
        {
            id: 'producing2WordUtterances',
            title: 'Producing 2-Word Utterances',
            type: 'Skill',
            description: 'Combine words together for basic communication',
            keywords: ['producing', '2', 'word', 'utterances', 'combining', 'words'],
            pageId: 'producing2WordUtterances',
            category: 'Functional Communication'
        },
        {
            id: 'respondingToEarlyGestalts',
            title: 'Responding to and Modeling Early Gestalts',
            type: 'Skill',
            description: 'Support gestalt language processing at early stages',
            keywords: ['gestalts', 'gestalt', 'language', 'processing', 'modeling'],
            pageId: 'respondingToEarlyGestalts',
            category: 'Gestalt Language Processing'
        },
        {
            id: 'breakingDownGestalts',
            title: 'Breaking Down and Mixing and Matching Gestalts',
            type: 'Skill',
            description: 'Help break down language chunks into flexible communication',
            keywords: ['breaking', 'down', 'gestalts', 'mixing', 'matching', 'flexible'],
            pageId: 'breakingDownGestalts',
            category: 'Gestalt Language Processing'
        },
        {
            id: 'earlyFunctionalAAC',
            title: 'Early Functional Communication Using AAC',
            type: 'Skill',
            description: 'Begin using augmentative communication for basic needs',
            keywords: ['aac', 'early', 'functional', 'communication', 'augmentative', 'alternative'],
            pageId: 'earlyFunctionalAAC',
            category: 'AAC'
        }
    ]
};

// Combined search array for easy searching
const allSearchData = [
    ...searchData.pages,
    ...searchData.curriculums,
    ...searchData.skills
];