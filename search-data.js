// Complete Search data structure for SLK Curriculum Planning Tool
// Includes ALL curriculum pages, ALL skill pages, and navigation pages

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
            id: 'jumpToCurriculum',
            title: 'Jump to Curriculum or Skill',
            type: 'Page',
            description: 'Quick access to browse curriculums and skills directly',
            keywords: ['jump', 'curriculum', 'skill', 'browse', 'direct', 'access'],
            pageId: 'jumpToCurriculum'
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
        },
        {
            id: 'needsFunctionalComm',
            title: 'Needs Functional Communication',
            type: 'Page',
            description: 'Assessment and curriculum selection for individuals who need functional communication',
            keywords: ['functional', 'communication', 'needs', 'assessment'],
            pageId: 'needsFunctionalComm'
        },
        {
            id: 'noFunctionalComm',
            title: 'Has Functional Communication',
            type: 'Page',
            description: 'Assessment and curriculum selection for individuals with functional communication',
            keywords: ['functional', 'communication', 'has', 'assessment'],
            pageId: 'noFunctionalComm'
        },
        {
            id: 'speechSounds',
            title: 'Speech Sounds Area',
            type: 'Page',
            description: 'Speech sound production and articulation curriculums',
            keywords: ['speech', 'sounds', 'articulation', 'production'],
            pageId: 'speechSounds'
        },
        {
            id: 'language',
            title: 'Language Area',
            type: 'Page',
            description: 'Language comprehension and expression curriculums',
            keywords: ['language', 'comprehension', 'expression'],
            pageId: 'language'
        },
        {
            id: 'voiceResonance',
            title: 'Voice and Resonance Area',
            type: 'Page',
            description: 'Voice quality and resonance curriculums',
            keywords: ['voice', 'resonance', 'quality', 'vocal'],
            pageId: 'voiceResonance'
        },
        {
            id: 'socialCommunication',
            title: 'Social Communication Area',
            type: 'Page',
            description: 'Social interaction and communication skills curriculums',
            keywords: ['social', 'communication', 'interaction', 'skills'],
            pageId: 'socialCommunication'
        },
        {
            id: 'fluency',
            title: 'Fluency Area',
            type: 'Page',
            description: 'Fluency disorders and stuttering curriculums',
            keywords: ['fluency', 'stuttering', 'disorders'],
            pageId: 'fluency'
        }
    ],

    // ALL Curriculum pages from HTML
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
            id: 'cyclesPhonology',
            title: 'Cycles Approach to Speech Sounds',
            type: 'Curriculum',
            description: 'Systematic approach to treating multiple phonological patterns',
            keywords: ['cycles', 'approach', 'speech', 'sounds', 'phonological', 'systematic', 'multiple', 'patterns'],
            pageId: 'cyclesPhonology'
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
            id: 'askingAnswering',
            title: 'Asking and Answering Questions Curriculum',
            type: 'Curriculum',
            description: 'Develop questioning skills and appropriate responses',
            keywords: ['asking', 'answering', 'questions', 'wh', 'who', 'what', 'where', 'when', 'why', 'how'],
            pageId: 'askingAnswering'
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
            id: 'abstractLanguageSocial',
            title: 'Abstract Language for Social Communication',
            type: 'Curriculum',
            description: 'Apply abstract language skills in social communication contexts',
            keywords: ['abstract', 'language', 'social', 'communication', 'figurative', 'pragmatics'],
            pageId: 'abstractLanguageSocial'
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
            id: 'literacyFoundations',
            title: 'Language Foundations for Literacy Curriculum',
            type: 'Curriculum',
            description: 'Build language skills that support reading and writing development',
            keywords: ['language', 'foundations', 'literacy', 'reading', 'writing', 'phonemic', 'awareness'],
            pageId: 'literacyFoundations'
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
            id: 'healthyVoice',
            title: 'Foundations for Healthy Voice Use Curriculum',
            type: 'Curriculum',
            description: 'Establish healthy voice habits and prevent vocal trauma',
            keywords: ['voice', 'foundations', 'healthy', 'habits', 'vocal', 'hygiene'],
            pageId: 'healthyVoice'
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
            id: 'foundationsFluency',
            title: 'Foundations for Fluency Curriculum',
            type: 'Curriculum',
            description: 'Build foundational skills for fluent speech production',
            keywords: ['fluency', 'foundations', 'smooth', 'speech', 'flow'],
            pageId: 'foundationsFluency'
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

    // ALL Skills extracted from skill-pages-complete.js
    skills: [
        {
                "id": "respondingToName",
                "title": "Responding to Name",
                "type": "Skill",
                "description": "Responding to Name - Part of Early Interactions skills",
                "keywords": [
                        "responding",
                        "name",
                        "early",
                        "interactions"
                ],
                "pageId": "respondingToName",
                "category": "Early Interactions"
        },
        {
                "id": "jointAttentionTurnTaking",
                "title": "Joint Attention and Turn Taking",
                "type": "Skill",
                "description": "Joint Attention and Turn Taking - Part of Early Interactions skills",
                "keywords": [
                        "joint",
                        "attention",
                        "and",
                        "turn",
                        "taking",
                        "early",
                        "interactions"
                ],
                "pageId": "jointAttentionTurnTaking",
                "category": "Early Interactions"
        },
        {
                "id": "followingBasicDirections",
                "title": "Following One-Step Directions (Routine and Novel)",
                "type": "Skill",
                "description": "Following One-Step Directions (Routine and Novel) - Part of Following Directions skills",
                "keywords": [
                        "following",
                        "one",
                        "step",
                        "directions",
                        "routine",
                        "and",
                        "novel"
                ],
                "pageId": "followingBasicDirections",
                "category": "Following Directions"
        },
        {
                "id": "followingTwoStepDirections",
                "title": "Following 2-Step Directions (Routine and Novel)",
                "type": "Skill",
                "description": "Following 2-Step Directions (Routine and Novel) - Part of Following Directions skills",
                "keywords": [
                        "following",
                        "step",
                        "directions",
                        "routine",
                        "and",
                        "novel"
                ],
                "pageId": "followingTwoStepDirections",
                "category": "Following Directions"
        },
        {
                "id": "followingThreeStepDirections",
                "title": "3-Step Directions (Routine and Novel)",
                "type": "Skill",
                "description": "3-Step Directions (Routine and Novel) - Part of Following Directions skills",
                "keywords": [
                        "step",
                        "directions",
                        "routine",
                        "and",
                        "novel",
                        "following"
                ],
                "pageId": "followingThreeStepDirections",
                "category": "Following Directions"
        },
        {
                "id": "followingClassroomDirections",
                "title": "Following Classroom, Academic, and Larger Functional Directions",
                "type": "Skill",
                "description": "Following Classroom, Academic, and Larger Functional Directions - Part of Following Directions skills",
                "keywords": [
                        "following",
                        "classroom",
                        "academic",
                        "and",
                        "larger",
                        "functional",
                        "directions"
                ],
                "pageId": "followingClassroomDirections",
                "category": "Following Directions"
        },
        {
                "id": "answeringYesNoQuestions",
                "title": "Answering Yes/No Questions",
                "type": "Skill",
                "description": "Answering Yes/No Questions - Part of Early Interactions skills",
                "keywords": [
                        "answering",
                        "yes",
                        "questions",
                        "early",
                        "interactions"
                ],
                "pageId": "answeringYesNoQuestions",
                "category": "Early Interactions"
        },
        {
                "id": "encouragingFirstWords",
                "title": "Encouraging First Words through Indirect Language Stimulation",
                "type": "Skill",
                "description": "Encouraging First Words through Indirect Language Stimulation - Part of Functional Communication skills",
                "keywords": [
                        "encouraging",
                        "first",
                        "words",
                        "through",
                        "indirect",
                        "language",
                        "stimulation",
                        "functional",
                        "communication"
                ],
                "pageId": "encouragingFirstWords",
                "category": "Functional Communication"
        },
        {
                "id": "producingCVCWords",
                "title": "Producing CV, VC, and CVC Words for Functional Communication",
                "type": "Skill",
                "description": "Producing CV, VC, and CVC Words for Functional Communication - Part of Functional Communication skills",
                "keywords": [
                        "producing",
                        "and",
                        "cvc",
                        "words",
                        "for",
                        "functional",
                        "communication"
                ],
                "pageId": "producingCVCWords",
                "category": "Functional Communication"
        },
        {
                "id": "buildingFirst50Words",
                "title": "Building an Expressive Vocabulary of First 50 Words",
                "type": "Skill",
                "description": "Building an Expressive Vocabulary of First 50 Words - Part of Functional Communication skills",
                "keywords": [
                        "building",
                        "expressive",
                        "vocabulary",
                        "first",
                        "words",
                        "functional",
                        "communication"
                ],
                "pageId": "buildingFirst50Words",
                "category": "Functional Communication"
        },
        {
                "id": "producing2WordUtterances",
                "title": "Producing 2-Word Utterances",
                "type": "Skill",
                "description": "Producing 2-Word Utterances - Part of Functional Communication skills",
                "keywords": [
                        "producing",
                        "word",
                        "utterances",
                        "functional",
                        "communication"
                ],
                "pageId": "producing2WordUtterances",
                "category": "Functional Communication"
        },
        {
                "id": "respondingToEarlyGestalts",
                "title": "Responding to and Modeling Early Gestalts",
                "type": "Skill",
                "description": "Responding to and Modeling Early Gestalts - Part of Gestalt Language Processing skills",
                "keywords": [
                        "responding",
                        "and",
                        "modeling",
                        "early",
                        "gestalts",
                        "gestalt",
                        "language",
                        "processing"
                ],
                "pageId": "respondingToEarlyGestalts",
                "category": "Gestalt Language Processing"
        },
        {
                "id": "breakingDownGestalts",
                "title": "Breaking Down and Mixing and Matching Gestalts",
                "type": "Skill",
                "description": "Breaking Down and Mixing and Matching Gestalts - Part of Gestalt Language Processing skills",
                "keywords": [
                        "breaking",
                        "down",
                        "and",
                        "mixing",
                        "matching",
                        "gestalts",
                        "gestalt",
                        "language",
                        "processing"
                ],
                "pageId": "breakingDownGestalts",
                "category": "Gestalt Language Processing"
        },
        {
                "id": "earlyFunctionalAAC",
                "title": "Early Functional Communication Using AAC",
                "type": "Skill",
                "description": "Early Functional Communication Using AAC - Part of AAC skills",
                "keywords": [
                        "early",
                        "functional",
                        "communication",
                        "using",
                        "aac"
                ],
                "pageId": "earlyFunctionalAAC",
                "category": "AAC"
        },
        {
                "id": "expandingCommunicationAAC",
                "title": "Expanding Communication through AAC",
                "type": "Skill",
                "description": "Expanding Communication through AAC - Part of AAC skills",
                "keywords": [
                        "expanding",
                        "communication",
                        "through",
                        "aac"
                ],
                "pageId": "expandingCommunicationAAC",
                "category": "AAC"
        },
        {
                "id": "bSound",
                "title": "/b/ Sound",
                "type": "Skill",
                "description": "/b/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "bSound",
                "category": "Articulation"
        },
        {
                "id": "mSound",
                "title": "/m/ Sound",
                "type": "Skill",
                "description": "/m/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "mSound",
                "category": "Articulation"
        },
        {
                "id": "nSound",
                "title": "/n/ Sound",
                "type": "Skill",
                "description": "/n/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "nSound",
                "category": "Articulation"
        },
        {
                "id": "pSound",
                "title": "/p/ Sound",
                "type": "Skill",
                "description": "/p/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "pSound",
                "category": "Articulation"
        },
        {
                "id": "hSound",
                "title": "/h/ Sound",
                "type": "Skill",
                "description": "/h/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "hSound",
                "category": "Articulation"
        },
        {
                "id": "wSound",
                "title": "/w/ Sound",
                "type": "Skill",
                "description": "/w/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "wSound",
                "category": "Articulation"
        },
        {
                "id": "dSound",
                "title": "/d/ Sound",
                "type": "Skill",
                "description": "/d/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "dSound",
                "category": "Articulation"
        },
        {
                "id": "vowelSounds",
                "title": "Vowel Sounds",
                "type": "Skill",
                "description": "Vowel Sounds - Part of Articulation skills",
                "keywords": [
                        "vowel",
                        "sounds",
                        "articulation"
                ],
                "pageId": "vowelSounds",
                "category": "Articulation"
        },
        {
                "id": "kSound",
                "title": "/k/ Sound",
                "type": "Skill",
                "description": "/k/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "kSound",
                "category": "Articulation"
        },
        {
                "id": "gSound",
                "title": "/g/ Sound",
                "type": "Skill",
                "description": "/g/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "gSound",
                "category": "Articulation"
        },
        {
                "id": "fSound",
                "title": "/f/ Sound",
                "type": "Skill",
                "description": "/f/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "fSound",
                "category": "Articulation"
        },
        {
                "id": "gestaltLanguageProcessing",
                "title": "Supporting Gestalt Language Processors",
                "type": "Skill",
                "description": "Supporting Gestalt Language Processors - Part of Functional Communication skills",
                "keywords": [
                        "supporting",
                        "gestalt",
                        "language",
                        "processors",
                        "functional",
                        "communication"
                ],
                "pageId": "gestaltLanguageProcessing",
                "category": "Functional Communication"
        },
        {
                "id": "beginningAACUse",
                "title": "Beginning AAC Use",
                "type": "Skill",
                "description": "Beginning AAC Use - Part of AAC skills",
                "keywords": [
                        "beginning",
                        "aac",
                        "use"
                ],
                "pageId": "beginningAACUse",
                "category": "AAC"
        },
        {
                "id": "expandingAAC",
                "title": "Expanding Language Through AAC",
                "type": "Skill",
                "description": "Expanding Language Through AAC - Part of AAC skills",
                "keywords": [
                        "expanding",
                        "language",
                        "through",
                        "aac"
                ],
                "pageId": "expandingAAC",
                "category": "AAC"
        },
        {
                "id": "bSound",
                "title": "/b/ Sound",
                "type": "Skill",
                "description": "/b/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "bSound",
                "category": "Articulation"
        },
        {
                "id": "dSound",
                "title": "/d/ Sound",
                "type": "Skill",
                "description": "/d/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "dSound",
                "category": "Articulation"
        },
        {
                "id": "fSound",
                "title": "/f/ Sound",
                "type": "Skill",
                "description": "/f/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "fSound",
                "category": "Articulation"
        },
        {
                "id": "gSound",
                "title": "/g/ Sound",
                "type": "Skill",
                "description": "/g/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "gSound",
                "category": "Articulation"
        },
        {
                "id": "hSound",
                "title": "/h/ Sound",
                "type": "Skill",
                "description": "/h/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "hSound",
                "category": "Articulation"
        },
        {
                "id": "kSound",
                "title": "/k/ Sound",
                "type": "Skill",
                "description": "/k/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "kSound",
                "category": "Articulation"
        },
        {
                "id": "lSound",
                "title": "/l/ Sound",
                "type": "Skill",
                "description": "/l/ Sound - Part of Speech Sounds skills",
                "keywords": [
                        "sound",
                        "speech",
                        "sounds"
                ],
                "pageId": "lSound",
                "category": "Speech Sounds"
        },
        {
                "id": "mSound",
                "title": "/m/ Sound",
                "type": "Skill",
                "description": "/m/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "mSound",
                "category": "Articulation"
        },
        {
                "id": "nSound",
                "title": "/n/ Sound",
                "type": "Skill",
                "description": "/n/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "nSound",
                "category": "Articulation"
        },
        {
                "id": "ngSound",
                "title": "NG Sound",
                "type": "Skill",
                "description": "NG Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "ngSound",
                "category": "Articulation"
        },
        {
                "id": "pSound",
                "title": "/p/ Sound",
                "type": "Skill",
                "description": "/p/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "pSound",
                "category": "Articulation"
        },
        {
                "id": "rSound",
                "title": "/r/ Sound",
                "type": "Skill",
                "description": "/r/ Sound - Part of Speech Sounds skills",
                "keywords": [
                        "sound",
                        "speech",
                        "sounds"
                ],
                "pageId": "rSound",
                "category": "Speech Sounds"
        },
        {
                "id": "sSound",
                "title": "/s/ Sound",
                "type": "Skill",
                "description": "/s/ Sound - Part of Speech Sounds skills",
                "keywords": [
                        "sound",
                        "speech",
                        "sounds"
                ],
                "pageId": "sSound",
                "category": "Speech Sounds"
        },
        {
                "id": "tSound",
                "title": "/t/ Sound",
                "type": "Skill",
                "description": "/t/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "tSound",
                "category": "Articulation"
        },
        {
                "id": "vSound",
                "title": "/v/ Sound",
                "type": "Skill",
                "description": "/v/ Sound - Part of Speech Sounds skills",
                "keywords": [
                        "sound",
                        "speech",
                        "sounds"
                ],
                "pageId": "vSound",
                "category": "Speech Sounds"
        },
        {
                "id": "wSound",
                "title": "/w/ Sound",
                "type": "Skill",
                "description": "/w/ Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "wSound",
                "category": "Articulation"
        },
        {
                "id": "ySound",
                "title": "Y Sound",
                "type": "Skill",
                "description": "Y Sound - Part of Articulation skills",
                "keywords": [
                        "sound",
                        "articulation"
                ],
                "pageId": "ySound",
                "category": "Articulation"
        },
        {
                "id": "zSound",
                "title": "/z/ Sound",
                "type": "Skill",
                "description": "/z/ Sound - Part of Speech Sounds skills",
                "keywords": [
                        "sound",
                        "speech",
                        "sounds"
                ],
                "pageId": "zSound",
                "category": "Speech Sounds"
        },
        {
                "id": "vowelSounds",
                "title": "Vowel Sounds",
                "type": "Skill",
                "description": "Vowel Sounds - Part of Articulation skills",
                "keywords": [
                        "vowel",
                        "sounds",
                        "articulation"
                ],
                "pageId": "vowelSounds",
                "category": "Articulation"
        },
        {
                "id": "consonantBlends",
                "title": "Consonant Clusters (like /st/ and /tw/)",
                "type": "Skill",
                "description": "Consonant Clusters (like /st/ and /tw/) - Part of Speech Sounds skills",
                "keywords": [
                        "consonant",
                        "clusters",
                        "like",
                        "and",
                        "speech",
                        "sounds"
                ],
                "pageId": "consonantBlends",
                "category": "Speech Sounds"
        },
        {
                "id": "finalConsonantDeletion",
                "title": "Final Consonant Deletion",
                "type": "Skill",
                "description": "Final Consonant Deletion - Part of Speech Sounds skills",
                "keywords": [
                        "final",
                        "consonant",
                        "deletion",
                        "speech",
                        "sounds"
                ],
                "pageId": "finalConsonantDeletion",
                "category": "Speech Sounds"
        },
        {
                "id": "unstressedSyllableDeletion",
                "title": "Unstressed Syllable Deletion",
                "type": "Skill",
                "description": "Unstressed Syllable Deletion - Part of Speech Sounds skills",
                "keywords": [
                        "unstressed",
                        "syllable",
                        "deletion",
                        "speech",
                        "sounds"
                ],
                "pageId": "unstressedSyllableDeletion",
                "category": "Speech Sounds"
        },
        {
                "id": "initialConsonantDeletion",
                "title": "Initial Consonant Deletion",
                "type": "Skill",
                "description": "Initial Consonant Deletion - Part of Speech Sounds skills",
                "keywords": [
                        "initial",
                        "consonant",
                        "deletion",
                        "speech",
                        "sounds"
                ],
                "pageId": "initialConsonantDeletion",
                "category": "Speech Sounds"
        },
        {
                "id": "fronting",
                "title": "Velar Fronting",
                "type": "Skill",
                "description": "Velar Fronting - Part of Speech Sounds skills",
                "keywords": [
                        "velar",
                        "fronting",
                        "speech",
                        "sounds"
                ],
                "pageId": "fronting",
                "category": "Speech Sounds"
        },
        {
                "id": "backing",
                "title": "Backing",
                "type": "Skill",
                "description": "Backing - Part of Speech Sounds skills",
                "keywords": [
                        "backing",
                        "speech",
                        "sounds"
                ],
                "pageId": "backing",
                "category": "Speech Sounds"
        },
        {
                "id": "stopping",
                "title": "Stopping of Fricatives",
                "type": "Skill",
                "description": "Stopping of Fricatives - Part of Speech Sounds skills",
                "keywords": [
                        "stopping",
                        "fricatives",
                        "speech",
                        "sounds"
                ],
                "pageId": "stopping",
                "category": "Speech Sounds"
        },
        {
                "id": "clusterReduction",
                "title": "Cluster Reduction",
                "type": "Skill",
                "description": "Cluster Reduction - Part of Speech Sounds skills",
                "keywords": [
                        "cluster",
                        "reduction",
                        "speech",
                        "sounds"
                ],
                "pageId": "clusterReduction",
                "category": "Speech Sounds"
        },
        {
                "id": "gliding",
                "title": "Gliding of Liquids",
                "type": "Skill",
                "description": "Gliding of Liquids - Part of Speech Sounds skills",
                "keywords": [
                        "gliding",
                        "liquids",
                        "speech",
                        "sounds"
                ],
                "pageId": "gliding",
                "category": "Speech Sounds"
        },
        {
                "id": "prevocalicVoicing",
                "title": "Prevocalic Voicing",
                "type": "Skill",
                "description": "Prevocalic Voicing - Part of Speech Sounds skills",
                "keywords": [
                        "prevocalic",
                        "voicing",
                        "speech",
                        "sounds"
                ],
                "pageId": "prevocalicVoicing",
                "category": "Speech Sounds"
        },
        {
                "id": "postvocalicDevoicing",
                "title": "Postvocalic Devoicing",
                "type": "Skill",
                "description": "Postvocalic Devoicing - Part of Speech Sounds skills",
                "keywords": [
                        "postvocalic",
                        "devoicing",
                        "speech",
                        "sounds"
                ],
                "pageId": "postvocalicDevoicing",
                "category": "Speech Sounds"
        },
        {
                "id": "cyclesApproach",
                "title": "Cycles Approach to Phonology",
                "type": "Skill",
                "description": "Cycles Approach to Phonology - Part of Phonology skills",
                "keywords": [
                        "cycles",
                        "approach",
                        "phonology"
                ],
                "pageId": "cyclesPhonology",
                "category": "Phonology"
        },
        {
                "id": "idioms",
                "title": "Idioms and Figures of Speech",
                "type": "Skill",
                "description": "Idioms and Figures of Speech - Part of Abstract Language skills",
                "keywords": [
                        "idioms",
                        "and",
                        "figures",
                        "speech",
                        "abstract",
                        "language"
                ],
                "pageId": "idioms",
                "category": "Abstract Language"
        },
        {
                "id": "similesMetaphors",
                "title": "Similes and Metaphors",
                "type": "Skill",
                "description": "Similes and Metaphors - Part of Abstract Language skills",
                "keywords": [
                        "similes",
                        "and",
                        "metaphors",
                        "abstract",
                        "language"
                ],
                "pageId": "similesMetaphors",
                "category": "Abstract Language"
        },
        {
                "id": "inferences",
                "title": "Inferencing in Text and Social Inferencing",
                "type": "Skill",
                "description": "Inferencing in Text and Social Inferencing - Part of Abstract Language skills",
                "keywords": [
                        "inferencing",
                        "text",
                        "and",
                        "social",
                        "abstract",
                        "language"
                ],
                "pageId": "inferences",
                "category": "Abstract Language"
        },
        {
                "id": "askingQuestions",
                "title": "Asking Questions with Correct Syntax",
                "type": "Skill",
                "description": "Asking Questions with Correct Syntax - Part of Asking & Answering Questions skills",
                "keywords": [
                        "asking",
                        "questions",
                        "with",
                        "correct",
                        "syntax",
                        "answering"
                ],
                "pageId": "askingQuestions",
                "category": "Asking & Answering Questions"
        },
        {
                "id": "whatQuestions",
                "title": "Answering What Questions",
                "type": "Skill",
                "description": "Answering What Questions - Part of Asking & Answering Questions skills",
                "keywords": [
                        "answering",
                        "what",
                        "questions",
                        "asking"
                ],
                "pageId": "whatQuestions",
                "category": "Asking & Answering Questions"
        },
        {
                "id": "whoQuestions",
                "title": "Answering Who Questions",
                "type": "Skill",
                "description": "Answering Who Questions - Part of Asking & Answering Questions skills",
                "keywords": [
                        "answering",
                        "who",
                        "questions",
                        "asking"
                ],
                "pageId": "whoQuestions",
                "category": "Asking & Answering Questions"
        },
        {
                "id": "whereQuestions",
                "title": "Answering Where Questions",
                "type": "Skill",
                "description": "Answering Where Questions - Part of Asking & Answering Questions skills",
                "keywords": [
                        "answering",
                        "where",
                        "questions",
                        "asking"
                ],
                "pageId": "whereQuestions",
                "category": "Asking & Answering Questions"
        },
        {
                "id": "whenQuestions",
                "title": "Answering When Questions",
                "type": "Skill",
                "description": "Answering When Questions - Part of Asking & Answering Questions skills",
                "keywords": [
                        "answering",
                        "when",
                        "questions",
                        "asking"
                ],
                "pageId": "whenQuestions",
                "category": "Asking & Answering Questions"
        },
        {
                "id": "whyQuestions",
                "title": "Answering Why Questions",
                "type": "Skill",
                "description": "Answering Why Questions - Part of Asking & Answering Questions skills",
                "keywords": [
                        "answering",
                        "why",
                        "questions",
                        "asking"
                ],
                "pageId": "whyQuestions",
                "category": "Asking & Answering Questions"
        },
        {
                "id": "howQuestions",
                "title": "Answering How Questions",
                "type": "Skill",
                "description": "Answering How Questions - Part of Asking & Answering Questions skills",
                "keywords": [
                        "answering",
                        "how",
                        "questions",
                        "asking"
                ],
                "pageId": "howQuestions",
                "category": "Asking & Answering Questions"
        },
        {
                "id": "whichQuestions",
                "title": "Answering Which Questions",
                "type": "Skill",
                "description": "Answering Which Questions - Part of Asking & Answering Questions skills",
                "keywords": [
                        "answering",
                        "which",
                        "questions",
                        "asking"
                ],
                "pageId": "whichQuestions",
                "category": "Asking & Answering Questions"
        },
        {
                "id": "mixedQuestions",
                "title": "Answering Mixed Questions",
                "type": "Skill",
                "description": "Answering Mixed Questions - Part of Asking & Answering Questions skills",
                "keywords": [
                        "answering",
                        "mixed",
                        "questions",
                        "asking"
                ],
                "pageId": "mixedQuestions",
                "category": "Asking & Answering Questions"
        },
        {
                "id": "pastEventsQuestions",
                "title": "Answering Questions about Past Events",
                "type": "Skill",
                "description": "Answering Questions about Past Events - Part of Asking & Answering Questions skills",
                "keywords": [
                        "answering",
                        "questions",
                        "about",
                        "past",
                        "events",
                        "asking"
                ],
                "pageId": "pastEventsQuestions",
                "category": "Asking & Answering Questions"
        },
        {
                "id": "articles",
                "title": "Articles (a, an, the)",
                "type": "Skill",
                "description": "Articles (a, an, the) - Part of Grammar & Syntax skills",
                "keywords": [
                        "articles",
                        "the",
                        "grammar",
                        "syntax"
                ],
                "pageId": "articles",
                "category": "Grammar & Syntax"
        },
        {
                "id": "presentProgressive",
                "title": "Present progressive (-ing verbs)",
                "type": "Skill",
                "description": "Present progressive (-ing verbs) - Part of Grammar & Syntax skills",
                "keywords": [
                        "present",
                        "progressive",
                        "ing",
                        "verbs",
                        "grammar",
                        "syntax"
                ],
                "pageId": "presentProgressive",
                "category": "Grammar & Syntax"
        },
        {
                "id": "pronouns",
                "title": "Pronouns (he, she, they, it, we, etc.)",
                "type": "Skill",
                "description": "Pronouns (he, she, they, it, we, etc.) - Part of Grammar & Syntax skills",
                "keywords": [
                        "pronouns",
                        "she",
                        "they",
                        "etc",
                        "grammar",
                        "syntax"
                ],
                "pageId": "pronouns",
                "category": "Grammar & Syntax"
        },
        {
                "id": "plurals",
                "title": "Plurals (regular and irregular)",
                "type": "Skill",
                "description": "Plurals (regular and irregular) - Part of Grammar & Syntax skills",
                "keywords": [
                        "plurals",
                        "regular",
                        "and",
                        "irregular",
                        "grammar",
                        "syntax"
                ],
                "pageId": "plurals",
                "category": "Grammar & Syntax"
        },
        {
                "id": "pastTense",
                "title": "Past tense (-ed endings, irregular verbs)",
                "type": "Skill",
                "description": "Past tense (-ed endings, irregular verbs) - Part of Grammar & Syntax skills",
                "keywords": [
                        "past",
                        "tense",
                        "endings",
                        "irregular",
                        "verbs",
                        "grammar",
                        "syntax"
                ],
                "pageId": "pastTense",
                "category": "Grammar & Syntax"
        },
        {
                "id": "possessives",
                "title": "Possessive forms ('s)",
                "type": "Skill",
                "description": "Possessive forms ('s) - Part of Grammar & Syntax skills",
                "keywords": [
                        "possessive",
                        "forms",
                        "grammar",
                        "syntax"
                ],
                "pageId": "possessives",
                "category": "Grammar & Syntax"
        },
        {
                "id": "simpleConjunctions",
                "title": "Simple conjunctions (and, but, because)",
                "type": "Skill",
                "description": "Simple conjunctions (and, but, because) - Part of Grammar & Syntax skills",
                "keywords": [
                        "simple",
                        "conjunctions",
                        "and",
                        "but",
                        "because",
                        "grammar",
                        "syntax"
                ],
                "pageId": "simpleConjunctions",
                "category": "Grammar & Syntax"
        },
        {
                "id": "basicSentenceStructure",
                "title": "Basic Sentence Structure: Subject + Verb + Object",
                "type": "Skill",
                "description": "Basic Sentence Structure: Subject + Verb + Object - Part of Grammar & Syntax skills",
                "keywords": [
                        "basic",
                        "sentence",
                        "structure",
                        "subject",
                        "verb",
                        "object",
                        "grammar",
                        "syntax"
                ],
                "pageId": "basicSentenceStructure",
                "category": "Grammar & Syntax"
        },
        {
                "id": "compoundSentences",
                "title": "Compound sentences (coordinating conjunctions: and, but, or, so, yet)",
                "type": "Skill",
                "description": "Compound sentences (coordinating conjunctions: and, but, or, so, yet) - Part of Grammar & Syntax skills",
                "keywords": [
                        "compound",
                        "sentences",
                        "coordinating",
                        "conjunctions",
                        "and",
                        "but",
                        "yet",
                        "grammar",
                        "syntax"
                ],
                "pageId": "compoundSentences",
                "category": "Grammar & Syntax"
        },
        {
                "id": "complexSentences",
                "title": "Complex sentences (subordinating conjunctions: because, although, unless, while, after)",
                "type": "Skill",
                "description": "Complex sentences (subordinating conjunctions: because, although, unless, while, after) - Part of Grammar & Syntax skills",
                "keywords": [
                        "complex",
                        "sentences",
                        "subordinating",
                        "conjunctions",
                        "because",
                        "although",
                        "unless",
                        "while",
                        "after",
                        "grammar",
                        "syntax"
                ],
                "pageId": "complexSentences",
                "category": "Grammar & Syntax"
        },
        {
                "id": "verbTenseSubject",
                "title": "Matching verb tense to subject (e.g., He runs vs. They run)",
                "type": "Skill",
                "description": "Matching verb tense to subject (e.g., He runs vs. They run) - Part of Grammar & Syntax skills",
                "keywords": [
                        "matching",
                        "verb",
                        "tense",
                        "subject",
                        "runs",
                        "they",
                        "run",
                        "grammar",
                        "syntax"
                ],
                "pageId": "verbTenseSubject",
                "category": "Grammar & Syntax"
        },
        {
                "id": "comparativeSuperlative",
                "title": "Comparative and superlative adjectives (bigger, biggest)",
                "type": "Skill",
                "description": "Comparative and superlative adjectives (bigger, biggest) - Part of Grammar & Syntax skills",
                "keywords": [
                        "comparative",
                        "and",
                        "superlative",
                        "adjectives",
                        "bigger",
                        "biggest",
                        "grammar",
                        "syntax"
                ],
                "pageId": "comparativeSuperlative",
                "category": "Grammar & Syntax"
        },
        {
                "id": "modalVerbs",
                "title": "Using modal verbs for polite requests or hypotheticals (can, could, should, would, might)",
                "type": "Skill",
                "description": "Using modal verbs for polite requests or hypotheticals (can, could, should, would, might) - Part of Grammar & Syntax skills",
                "keywords": [
                        "using",
                        "modal",
                        "verbs",
                        "for",
                        "polite",
                        "requests",
                        "hypotheticals",
                        "can",
                        "could",
                        "should",
                        "would",
                        "might",
                        "grammar",
                        "syntax"
                ],
                "pageId": "modalVerbs",
                "category": "Grammar & Syntax"
        },
        {
                "id": "sentenceFragments",
                "title": "Correcting sentence fragments and run-on sentences",
                "type": "Skill",
                "description": "Correcting sentence fragments and run-on sentences - Part of Grammar & Syntax skills",
                "keywords": [
                        "correcting",
                        "sentence",
                        "fragments",
                        "and",
                        "run",
                        "sentences",
                        "grammar",
                        "syntax"
                ],
                "pageId": "sentenceFragments",
                "category": "Grammar & Syntax"
        },
        {
                "id": "expandingSentences",
                "title": "Expanding, combining, or reducing sentences for meaning, style, and emphasis",
                "type": "Skill",
                "description": "Expanding, combining, or reducing sentences for meaning, style, and emphasis - Part of Grammar & Syntax skills",
                "keywords": [
                        "expanding",
                        "combining",
                        "reducing",
                        "sentences",
                        "for",
                        "meaning",
                        "style",
                        "and",
                        "emphasis",
                        "grammar",
                        "syntax"
                ],
                "pageId": "expandingSentences",
                "category": "Grammar & Syntax"
        },
        {
                "id": "activePassiveVoice",
                "title": "Differentiating between active and passive voice",
                "type": "Skill",
                "description": "Differentiating between active and passive voice - Part of Grammar & Syntax skills",
                "keywords": [
                        "differentiating",
                        "between",
                        "active",
                        "and",
                        "passive",
                        "voice",
                        "grammar",
                        "syntax"
                ],
                "pageId": "activePassiveVoice",
                "category": "Grammar & Syntax"
        },
        {
                "id": "advancedTransitions",
                "title": "Using advanced transition words (therefore, however, consequently, in contrast)",
                "type": "Skill",
                "description": "Using advanced transition words (therefore, however, consequently, in contrast) - Part of Grammar & Syntax skills",
                "keywords": [
                        "using",
                        "advanced",
                        "transition",
                        "words",
                        "therefore",
                        "however",
                        "consequently",
                        "contrast",
                        "grammar",
                        "syntax"
                ],
                "pageId": "advancedTransitions",
                "category": "Grammar & Syntax"
        },
        {
                "id": "auxiliaryVerbs",
                "title": "Auxiliary verbs (is, am, are, was, were, has, have)",
                "type": "Skill",
                "description": "Auxiliary verbs (is, am, are, was, were, has, have) - Part of Grammar & Syntax skills",
                "keywords": [
                        "auxiliary",
                        "verbs",
                        "are",
                        "was",
                        "were",
                        "has",
                        "have",
                        "grammar",
                        "syntax"
                ],
                "pageId": "auxiliaryVerbs",
                "category": "Grammar & Syntax"
        },
        {
                "id": "first50Words",
                "title": "First 50 Words",
                "type": "Skill",
                "description": "First 50 Words - Part of Vocabulary skills",
                "keywords": [
                        "first",
                        "words",
                        "vocabulary"
                ],
                "pageId": "first50Words",
                "category": "Vocabulary"
        },
        {
                "id": "spatialConcepts",
                "title": "Spatial Concepts",
                "type": "Skill",
                "description": "Spatial Concepts - Part of Vocabulary skills",
                "keywords": [
                        "spatial",
                        "concepts",
                        "vocabulary"
                ],
                "pageId": "spatialConcepts",
                "category": "Vocabulary"
        },
        {
                "id": "temporalConcepts",
                "title": "Temporal Concepts",
                "type": "Skill",
                "description": "Temporal Concepts - Part of Vocabulary skills",
                "keywords": [
                        "temporal",
                        "concepts",
                        "vocabulary"
                ],
                "pageId": "temporalConcepts",
                "category": "Vocabulary"
        },
        {
                "id": "quantitativeConcepts",
                "title": "Quantitative Concepts",
                "type": "Skill",
                "description": "Quantitative Concepts - Part of Vocabulary skills",
                "keywords": [
                        "quantitative",
                        "concepts",
                        "vocabulary"
                ],
                "pageId": "quantitativeConcepts",
                "category": "Vocabulary"
        },
        {
                "id": "adjectives",
                "title": "Adjectives",
                "type": "Skill",
                "description": "Adjectives - Part of Vocabulary skills",
                "keywords": [
                        "adjectives",
                        "vocabulary"
                ],
                "pageId": "adjectives",
                "category": "Vocabulary"
        },
        {
                "id": "expandingVocabulary",
                "title": "Expanding Vocabulary of Nouns from Basic Categories",
                "type": "Skill",
                "description": "Expanding Vocabulary of Nouns from Basic Categories - Part of Vocabulary skills",
                "keywords": [
                        "expanding",
                        "vocabulary",
                        "nouns",
                        "from",
                        "basic",
                        "categories"
                ],
                "pageId": "expandingVocabulary",
                "category": "Vocabulary"
        },
        {
                "id": "comparingContrasting",
                "title": "Comparing and Contrasting",
                "type": "Skill",
                "description": "Comparing and Contrasting - Part of Vocabulary skills",
                "keywords": [
                        "comparing",
                        "and",
                        "contrasting",
                        "vocabulary"
                ],
                "pageId": "comparingContrasting",
                "category": "Vocabulary"
        },
        {
                "id": "synonymsAntonyms",
                "title": "Understand and Use Antonyms and Synonyms",
                "type": "Skill",
                "description": "Understand and Use Antonyms and Synonyms - Part of Vocabulary skills",
                "keywords": [
                        "understand",
                        "and",
                        "use",
                        "antonyms",
                        "synonyms",
                        "vocabulary"
                ],
                "pageId": "synonymsAntonyms",
                "category": "Vocabulary"
        },
        {
                "id": "multipleMeanings",
                "title": "Understand and Use Multiple Meaning Words",
                "type": "Skill",
                "description": "Understand and Use Multiple Meaning Words - Part of Vocabulary skills",
                "keywords": [
                        "understand",
                        "and",
                        "use",
                        "multiple",
                        "meaning",
                        "words",
                        "vocabulary"
                ],
                "pageId": "multipleMeanings",
                "category": "Vocabulary"
        },
        {
                "id": "sequencing",
                "title": "Sequencing and Describing Steps to Common Activities",
                "type": "Skill",
                "description": "Sequencing and Describing Steps to Common Activities - Part of Sequencing skills",
                "keywords": [
                        "sequencing",
                        "and",
                        "describing",
                        "steps",
                        "common",
                        "activities"
                ],
                "pageId": "sequencing",
                "category": "Sequencing"
        },
        {
                "id": "retellingEvents",
                "title": "Sequencing and Retelling Past Events",
                "type": "Skill",
                "description": "Sequencing and Retelling Past Events - Part of Sequencing skills",
                "keywords": [
                        "sequencing",
                        "and",
                        "retelling",
                        "past",
                        "events"
                ],
                "pageId": "retellingEvents",
                "category": "Sequencing"
        },
        {
                "id": "phonologicalAwareness",
                "title": "Phonological Awareness",
                "type": "Skill",
                "description": "Phonological Awareness - Part of Literacy Foundations skills",
                "keywords": [
                        "phonological",
                        "awareness",
                        "literacy",
                        "foundations"
                ],
                "pageId": "phonologicalAwareness",
                "category": "Literacy Foundations"
        },
        {
                "id": "affixes",
                "title": "Using Affixes (Prefixes and Suffixes) and Roots to Decode Unknown Words",
                "type": "Skill",
                "description": "Using Affixes (Prefixes and Suffixes) and Roots to Decode Unknown Words - Part of Literacy Foundations skills",
                "keywords": [
                        "using",
                        "affixes",
                        "prefixes",
                        "and",
                        "suffixes",
                        "roots",
                        "decode",
                        "unknown",
                        "words",
                        "literacy",
                        "foundations"
                ],
                "pageId": "affixes",
                "category": "Literacy Foundations"
        },
        {
                "id": "wordAttackStrategies",
                "title": "Other Word Attack and Word Learning Strategies as Appropriate",
                "type": "Skill",
                "description": "Other Word Attack and Word Learning Strategies as Appropriate - Part of Literacy Foundations skills",
                "keywords": [
                        "other",
                        "word",
                        "attack",
                        "and",
                        "learning",
                        "strategies",
                        "appropriate",
                        "literacy",
                        "foundations"
                ],
                "pageId": "wordAttackStrategies",
                "category": "Literacy Foundations"
        },
        {
                "id": "printAwareness",
                "title": "Print Awareness",
                "type": "Skill",
                "description": "Print Awareness - Part of Literacy Foundations skills",
                "keywords": [
                        "print",
                        "awareness",
                        "literacy",
                        "foundations"
                ],
                "pageId": "printAwareness",
                "category": "Literacy Foundations"
        },
        {
                "id": "basicStoryStructure",
                "title": "Basic Story Structure",
                "type": "Skill",
                "description": "Basic Story Structure - Part of Literacy Foundations skills",
                "keywords": [
                        "basic",
                        "story",
                        "structure",
                        "literacy",
                        "foundations"
                ],
                "pageId": "basicStoryStructure",
                "category": "Literacy Foundations"
        },
        {
                "id": "readingComprehension",
                "title": "Reading Comprehension",
                "type": "Skill",
                "description": "Reading Comprehension - Part of Literacy skills",
                "keywords": [
                        "reading",
                        "comprehension",
                        "literacy"
                ],
                "pageId": "readingComprehension",
                "category": "Literacy"
        },
        {
                "id": "narratives",
                "title": "Understanding, Retelling, and Producing Narratives",
                "type": "Skill",
                "description": "Understanding, Retelling, and Producing Narratives - Part of Literacy skills",
                "keywords": [
                        "understanding",
                        "retelling",
                        "and",
                        "producing",
                        "narratives",
                        "literacy"
                ],
                "pageId": "narratives",
                "category": "Literacy"
        },
        {
                "id": "literalNonliteral",
                "title": "Identify Literal vs. Nonliteral Language",
                "type": "Skill",
                "description": "Identify Literal vs. Nonliteral Language - Part of Abstract Language skills",
                "keywords": [
                        "identify",
                        "literal",
                        "nonliteral",
                        "language",
                        "abstract"
                ],
                "pageId": "literalNonliteral",
                "category": "Abstract Language"
        },
        {
                "id": "stutteringAwareness",
                "title": "Stuttering Awareness",
                "type": "Skill",
                "description": "Stuttering Awareness - Part of Fluency skills",
                "keywords": [
                        "stuttering",
                        "awareness",
                        "fluency"
                ],
                "pageId": "stutteringAwareness",
                "category": "Fluency"
        },
        {
                "id": "breathControl",
                "title": "Breath Control",
                "type": "Skill",
                "description": "Breath Control - Part of Fluency skills",
                "keywords": [
                        "breath",
                        "control",
                        "fluency"
                ],
                "pageId": "breathControl",
                "category": "Fluency"
        },
        {
                "id": "fluencyShaping",
                "title": "Fluency Shaping",
                "type": "Skill",
                "description": "Fluency Shaping - Part of Fluency skills",
                "keywords": [
                        "fluency",
                        "shaping"
                ],
                "pageId": "fluencyShaping",
                "category": "Fluency"
        },
        {
                "id": "stutteringModification",
                "title": "Stuttering Modification",
                "type": "Skill",
                "description": "Stuttering Modification - Part of Fluency skills",
                "keywords": [
                        "stuttering",
                        "modification",
                        "fluency"
                ],
                "pageId": "stutteringModification",
                "category": "Fluency"
        },
        {
                "id": "cluttering",
                "title": "Cluttering Management",
                "type": "Skill",
                "description": "Cluttering Management - Part of Fluency skills",
                "keywords": [
                        "cluttering",
                        "management",
                        "fluency"
                ],
                "pageId": "cluttering",
                "category": "Fluency"
        },
        {
                "id": "wordFinding",
                "title": "Word Finding",
                "type": "Skill",
                "description": "Word Finding - Part of Fluency skills",
                "keywords": [
                        "word",
                        "finding",
                        "fluency"
                ],
                "pageId": "wordFinding",
                "category": "Fluency"
        },
        {
                "id": "behaviorCommunication",
                "title": "Replacing Behaviors with Communication",
                "type": "Skill",
                "description": "Replacing Behaviors with Communication - Part of Social Communication skills",
                "keywords": [
                        "replacing",
                        "behaviors",
                        "with",
                        "communication",
                        "social"
                ],
                "pageId": "behaviorCommunication",
                "category": "Social Communication"
        },
        {
                "id": "emotionalRegulation",
                "title": "Emotional Regulation",
                "type": "Skill",
                "description": "Emotional Regulation - Part of Social Communication skills",
                "keywords": [
                        "emotional",
                        "regulation",
                        "social",
                        "communication"
                ],
                "pageId": "emotionalRegulation",
                "category": "Social Communication"
        },
        {
                "id": "perspectiveTaking",
                "title": "Perspective Taking",
                "type": "Skill",
                "description": "Perspective Taking - Part of Social Communication skills",
                "keywords": [
                        "perspective",
                        "taking",
                        "social",
                        "communication"
                ],
                "pageId": "perspectiveTaking",
                "category": "Social Communication"
        },
        {
                "id": "personalSpace",
                "title": "Personal Space",
                "type": "Skill",
                "description": "Personal Space - Part of Social Communication skills",
                "keywords": [
                        "personal",
                        "space",
                        "social",
                        "communication"
                ],
                "pageId": "personalSpace",
                "category": "Social Communication"
        },
        {
                "id": "initiatingInteractions",
                "title": "Initiating Interactions",
                "type": "Skill",
                "description": "Initiating Interactions - Part of Social Communication skills",
                "keywords": [
                        "initiating",
                        "interactions",
                        "social",
                        "communication"
                ],
                "pageId": "initiatingInteractions",
                "category": "Social Communication"
        },
        {
                "id": "topicMaintenance",
                "title": "Topic Maintenance",
                "type": "Skill",
                "description": "Topic Maintenance - Part of Social Communication skills",
                "keywords": [
                        "topic",
                        "maintenance",
                        "social",
                        "communication"
                ],
                "pageId": "topicMaintenance",
                "category": "Social Communication"
        },
        {
                "id": "selfAdvocacy",
                "title": "Self-Advocacy and Speaking Up for What you Want/Need",
                "type": "Skill",
                "description": "Self-Advocacy and Speaking Up for What you Want/Need - Part of Social Communication skills",
                "keywords": [
                        "self",
                        "advocacy",
                        "and",
                        "speaking",
                        "for",
                        "what",
                        "you",
                        "want",
                        "need",
                        "social",
                        "communication"
                ],
                "pageId": "selfAdvocacy",
                "category": "Social Communication"
        },
        {
                "id": "conversationMaintenance",
                "title": "Continuing/Maintaining an Interaction",
                "type": "Skill",
                "description": "Continuing/Maintaining an Interaction - Part of Conversational Skills skills",
                "keywords": [
                        "continuing",
                        "maintaining",
                        "interaction",
                        "conversational",
                        "skills"
                ],
                "pageId": "conversationMaintenance",
                "category": "Conversational Skills"
        },
        {
                "id": "communicationRepair",
                "title": "Identifying Signs of Communication Breakdown and Using Repair Strategies",
                "type": "Skill",
                "description": "Identifying Signs of Communication Breakdown and Using Repair Strategies - Part of Social Communication skills",
                "keywords": [
                        "identifying",
                        "signs",
                        "communication",
                        "breakdown",
                        "and",
                        "using",
                        "repair",
                        "strategies",
                        "social"
                ],
                "pageId": "communicationRepair",
                "category": "Social Communication"
        },
        {
                "id": "conflictResolution",
                "title": "Navigating Disagreements",
                "type": "Skill",
                "description": "Navigating Disagreements - Part of Social Communication skills",
                "keywords": [
                        "navigating",
                        "disagreements",
                        "social",
                        "communication"
                ],
                "pageId": "conflictResolution",
                "category": "Social Communication"
        },
        {
                "id": "figurativeLanguageSocial",
                "title": "Figurative Language in Social Contexts",
                "type": "Skill",
                "description": "Figurative Language in Social Contexts - Part of Social Communication skills",
                "keywords": [
                        "figurative",
                        "language",
                        "social",
                        "contexts",
                        "communication"
                ],
                "pageId": "figurativeLanguageSocial",
                "category": "Social Communication"
        },
        {
                "id": "socialInferences",
                "title": "Making Social Inferences",
                "type": "Skill",
                "description": "Making Social Inferences - Part of Social Communication skills",
                "keywords": [
                        "making",
                        "social",
                        "inferences",
                        "communication"
                ],
                "pageId": "socialInferences",
                "category": "Social Communication"
        },
        {
                "id": "sarcasm",
                "title": "Understanding Sarcasm and Irony",
                "type": "Skill",
                "description": "Understanding Sarcasm and Irony - Part of Social Communication skills",
                "keywords": [
                        "understanding",
                        "sarcasm",
                        "and",
                        "irony",
                        "social",
                        "communication"
                ],
                "pageId": "sarcasm",
                "category": "Social Communication"
        },
        {
                "id": "selectiveMutism",
                "title": "Selective Mutism Support",
                "type": "Skill",
                "description": "Selective Mutism Support - Part of Social Communication skills",
                "keywords": [
                        "selective",
                        "mutism",
                        "support",
                        "social",
                        "communication"
                ],
                "pageId": "selectiveMutism",
                "category": "Social Communication"
        },
        {
                "id": "vocalVolume",
                "title": "Vocal Volume",
                "type": "Skill",
                "description": "Vocal Volume - Part of Voice skills",
                "keywords": [
                        "vocal",
                        "volume",
                        "voice"
                ],
                "pageId": "vocalVolume",
                "category": "Voice"
        },
        {
                "id": "prosody",
                "title": "Prosody",
                "type": "Skill",
                "description": "Prosody - Part of Voice skills",
                "keywords": [
                        "prosody",
                        "voice"
                ],
                "pageId": "prosody",
                "category": "Voice"
        },
        {
                "id": "hypernasality",
                "title": "Hypernasality",
                "type": "Skill",
                "description": "Hypernasality - Part of Resonance skills",
                "keywords": [
                        "hypernasality",
                        "resonance"
                ],
                "pageId": "hypernasality",
                "category": "Resonance"
        },
        {
                "id": "vocalHygiene",
                "title": "Vocal Hygiene",
                "type": "Skill",
                "description": "Vocal Hygiene - Part of Voice skills",
                "keywords": [
                        "vocal",
                        "hygiene",
                        "voice"
                ],
                "pageId": "vocalHygiene",
                "category": "Voice"
        },
        {
                "id": "vocalQuality",
                "title": "Vocal Quality",
                "type": "Skill",
                "description": "Vocal Quality - Part of Voice skills",
                "keywords": [
                        "vocal",
                        "quality",
                        "voice"
                ],
                "pageId": "vocalQuality",
                "category": "Voice"
        },
        {
                "id": "breathSupport",
                "title": "Breath Support",
                "type": "Skill",
                "description": "Breath Support - Part of Voice skills",
                "keywords": [
                        "breath",
                        "support",
                        "voice"
                ],
                "pageId": "breathSupport",
                "category": "Voice"
        },
        {
                "id": "mumbling",
                "title": "Overarticulation in Words, Phrases, and Sentences",
                "type": "Skill",
                "description": "Overarticulation in Words, Phrases, and Sentences - Part of Speech Sounds skills",
                "keywords": [
                        "overarticulation",
                        "words",
                        "phrases",
                        "and",
                        "sentences",
                        "speech",
                        "sounds"
                ],
                "pageId": "mumbling",
                "category": "Speech Sounds"
        },
        {
                "id": "overarticulateConversation",
                "title": "Overarticulate in Structured Conversation when Prompted",
                "type": "Skill",
                "description": "Overarticulate in Structured Conversation when Prompted - Part of Speech Sounds skills",
                "keywords": [
                        "overarticulate",
                        "structured",
                        "conversation",
                        "when",
                        "prompted",
                        "speech",
                        "sounds"
                ],
                "pageId": "overarticulateConversation",
                "category": "Speech Sounds"
        },
        {
                "id": "oralMotor",
                "title": "Improving Oral Proprioception and Coordination for Speech and Saliva Management",
                "type": "Skill",
                "description": "Improving Oral Proprioception and Coordination for Speech and Saliva Management - Part of Speech Sounds skills",
                "keywords": [
                        "improving",
                        "oral",
                        "proprioception",
                        "and",
                        "coordination",
                        "for",
                        "speech",
                        "saliva",
                        "management",
                        "sounds"
                ],
                "pageId": "oralMotor",
                "category": "Speech Sounds"
        },
        {
                "id": "expandedWordStructures",
                "title": "Produce Expanded Word Structures, such as CVCV, CCVC, etc.",
                "type": "Skill",
                "description": "Produce Expanded Word Structures, such as CVCV, CCVC, etc. - Part of Speech Sounds skills",
                "keywords": [
                        "produce",
                        "expanded",
                        "word",
                        "structures",
                        "such",
                        "cvcv",
                        "ccvc",
                        "etc",
                        "speech",
                        "sounds"
                ],
                "pageId": "expandedWordStructures",
                "category": "Speech Sounds"
        },
        {
                "id": "multisyllabicWords",
                "title": "Producing Multisyllabic Words",
                "type": "Skill",
                "description": "Producing Multisyllabic Words - Part of Speech Sounds skills",
                "keywords": [
                        "producing",
                        "multisyllabic",
                        "words",
                        "speech",
                        "sounds"
                ],
                "pageId": "multisyllabicWords",
                "category": "Speech Sounds"
        },
        {
                "id": "identifyingMainIdea",
                "title": "Identifying Main Idea and Detail",
                "type": "Skill",
                "description": "Identifying Main Idea and Detail - Part of Abstract Language skills",
                "keywords": [
                        "identifying",
                        "main",
                        "idea",
                        "and",
                        "detail",
                        "abstract",
                        "language"
                ],
                "pageId": "identifyingMainIdea",
                "category": "Abstract Language"
        },
        {
                "id": "understandingRetellingInfo",
                "title": "Understanding, Retelling, and Providing Information",
                "type": "Skill",
                "description": "Understanding, Retelling, and Providing Information - Part of Abstract Language skills",
                "keywords": [
                        "understanding",
                        "retelling",
                        "and",
                        "providing",
                        "information",
                        "abstract",
                        "language"
                ],
                "pageId": "understandingRetellingInfo",
                "category": "Abstract Language"
        },
        {
                "id": "understandingRetellingOpinions",
                "title": "Understanding, Retelling, and Stating Opinions",
                "type": "Skill",
                "description": "Understanding, Retelling, and Stating Opinions - Part of Abstract Language skills",
                "keywords": [
                        "understanding",
                        "retelling",
                        "and",
                        "stating",
                        "opinions",
                        "abstract",
                        "language"
                ],
                "pageId": "understandingRetellingOpinions",
                "category": "Abstract Language"
        },
        {
                "id": "makingPredictions",
                "title": "Making Predictions",
                "type": "Skill",
                "description": "Making Predictions - Part of Abstract Language skills",
                "keywords": [
                        "making",
                        "predictions",
                        "abstract",
                        "language"
                ],
                "pageId": "makingPredictions",
                "category": "Abstract Language"
        },
        {
                "id": "identifyingAuthorPurpose",
                "title": "Identifying author's purpose and perspective",
                "type": "Skill",
                "description": "Identifying author's purpose and perspective - Part of Abstract Language skills",
                "keywords": [
                        "identifying",
                        "author",
                        "purpose",
                        "and",
                        "perspective",
                        "abstract",
                        "language"
                ],
                "pageId": "identifyingAuthorPurpose",
                "category": "Abstract Language"
        },
        {
                "id": "synthesizingInformation",
                "title": "Synthesizing information from multiple sources",
                "type": "Skill",
                "description": "Synthesizing information from multiple sources - Part of Abstract Language skills",
                "keywords": [
                        "synthesizing",
                        "information",
                        "from",
                        "multiple",
                        "sources",
                        "abstract",
                        "language"
                ],
                "pageId": "synthesizingInformation",
                "category": "Abstract Language"
        },
        {
                "id": "organizingExpressing",
                "title": "Organizing and Expressing Ideas in Writing",
                "type": "Skill",
                "description": "Organizing and Expressing Ideas in Writing - Part of Abstract Language skills",
                "keywords": [
                        "organizing",
                        "and",
                        "expressing",
                        "ideas",
                        "writing",
                        "abstract",
                        "language"
                ],
                "pageId": "organizingExpressing",
                "category": "Abstract Language"
        },
        {
                "id": "kindergartenLanguage",
                "title": "Kindergarten (5-6 yrs) Language Cycles",
                "type": "Skill",
                "description": "Kindergarten (5-6 yrs) Language Cycles - Part of Cycles Language skills",
                "keywords": [
                        "kindergarten",
                        "yrs",
                        "language",
                        "cycles"
                ],
                "pageId": "kindergartenLanguage",
                "category": "Cycles Language"
        },
        {
                "id": "firstGradeLanguage",
                "title": "1st Grade (6-7 yrs) Language Cycles",
                "type": "Skill",
                "description": "1st Grade (6-7 yrs) Language Cycles - Part of Cycles Language skills",
                "keywords": [
                        "1st",
                        "grade",
                        "yrs",
                        "language",
                        "cycles"
                ],
                "pageId": "firstGradeLanguage",
                "category": "Cycles Language"
        },
        {
                "id": "secondGradeLanguage",
                "title": "2nd Grade (7-8 yrs) Language Cycles",
                "type": "Skill",
                "description": "2nd Grade (7-8 yrs) Language Cycles - Part of Cycles Language skills",
                "keywords": [
                        "2nd",
                        "grade",
                        "yrs",
                        "language",
                        "cycles"
                ],
                "pageId": "secondGradeLanguage",
                "category": "Cycles Language"
        },
        {
                "id": "thirdGradeLanguage",
                "title": "3rd Grade (8-9 yrs) Language Cycles",
                "type": "Skill",
                "description": "3rd Grade (8-9 yrs) Language Cycles - Part of Cycles Language skills",
                "keywords": [
                        "3rd",
                        "grade",
                        "yrs",
                        "language",
                        "cycles"
                ],
                "pageId": "thirdGradeLanguage",
                "category": "Cycles Language"
        },
        {
                "id": "fourthGradeLanguage",
                "title": "4th Grade (9-10 yrs) Language Cycles",
                "type": "Skill",
                "description": "4th Grade (9-10 yrs) Language Cycles - Part of Cycles Language skills",
                "keywords": [
                        "4th",
                        "grade",
                        "yrs",
                        "language",
                        "cycles"
                ],
                "pageId": "fourthGradeLanguage",
                "category": "Cycles Language"
        },
        {
                "id": "fifthGradeLanguage",
                "title": "5th Grade (10-11+ yrs) Language Cycles",
                "type": "Skill",
                "description": "5th Grade (10-11+ yrs) Language Cycles - Part of Cycles Language skills",
                "keywords": [
                        "5th",
                        "grade",
                        "yrs",
                        "language",
                        "cycles"
                ],
                "pageId": "fifthGradeLanguage",
                "category": "Cycles Language"
        },
        {
                "id": "eliminatingVocalAbuse",
                "title": "Eliminating Vocal Abuse",
                "type": "Skill",
                "description": "Eliminating Vocal Abuse - Part of Healthy Voice skills",
                "keywords": [
                        "eliminating",
                        "vocal",
                        "abuse",
                        "healthy",
                        "voice"
                ],
                "pageId": "eliminatingVocalAbuse",
                "category": "Healthy Voice"
        },
        {
                "id": "coordinatingBreath",
                "title": "Coordinating Breath with Speech",
                "type": "Skill",
                "description": "Coordinating Breath with Speech - Part of Healthy Voice skills",
                "keywords": [
                        "coordinating",
                        "breath",
                        "with",
                        "speech",
                        "healthy",
                        "voice"
                ],
                "pageId": "coordinatingBreath",
                "category": "Healthy Voice"
        },
        {
                "id": "improvingVocalQuality",
                "title": "Improving vocal quality",
                "type": "Skill",
                "description": "Improving vocal quality - Part of Voice skills",
                "keywords": [
                        "improving",
                        "vocal",
                        "quality",
                        "voice"
                ],
                "pageId": "improvingVocalQuality",
                "category": "Voice"
        },
        {
                "id": "establishingVocalVolume",
                "title": "Establishing Appropriate Vocal Volume",
                "type": "Skill",
                "description": "Establishing Appropriate Vocal Volume - Part of Voice skills",
                "keywords": [
                        "establishing",
                        "appropriate",
                        "vocal",
                        "volume",
                        "voice"
                ],
                "pageId": "establishingVocalVolume",
                "category": "Voice"
        },
        {
                "id": "establishingIntonation",
                "title": "Establishing Natural Intonation/Prosody",
                "type": "Skill",
                "description": "Establishing Natural Intonation/Prosody - Part of Prosody skills",
                "keywords": [
                        "establishing",
                        "natural",
                        "intonation",
                        "prosody"
                ],
                "pageId": "establishingIntonation",
                "category": "Prosody"
        },
        {
                "id": "establishingRate",
                "title": "Establishing Natural Rate/Rhythm",
                "type": "Skill",
                "description": "Establishing Natural Rate/Rhythm - Part of Prosody skills",
                "keywords": [
                        "establishing",
                        "natural",
                        "rate",
                        "rhythm",
                        "prosody"
                ],
                "pageId": "establishingRate",
                "category": "Prosody"
        },
        {
                "id": "establishingPhrasing",
                "title": "Establishing Natural Phrasing and Pausing",
                "type": "Skill",
                "description": "Establishing Natural Phrasing and Pausing - Part of Prosody skills",
                "keywords": [
                        "establishing",
                        "natural",
                        "phrasing",
                        "and",
                        "pausing",
                        "prosody"
                ],
                "pageId": "establishingPhrasing",
                "category": "Prosody"
        },
        {
                "id": "selfMonitoringVoice",
                "title": "Self-Monitoring and Carrying Over Voice Strategies to Everyday Situations",
                "type": "Skill",
                "description": "Self-Monitoring and Carrying Over Voice Strategies to Everyday Situations - Part of Voice skills",
                "keywords": [
                        "self",
                        "monitoring",
                        "and",
                        "carrying",
                        "over",
                        "voice",
                        "strategies",
                        "everyday",
                        "situations"
                ],
                "pageId": "selfMonitoringVoice",
                "category": "Voice"
        },
        {
                "id": "discriminatingResonance",
                "title": "Discriminating Between Oral vs. Hypernasal Resonance",
                "type": "Skill",
                "description": "Discriminating Between Oral vs. Hypernasal Resonance - Part of Resonance skills",
                "keywords": [
                        "discriminating",
                        "between",
                        "oral",
                        "hypernasal",
                        "resonance"
                ],
                "pageId": "discriminatingResonance",
                "category": "Resonance"
        },
        {
                "id": "usingOralResonance",
                "title": "Using Oral Resonance in Structured Speech Tasks",
                "type": "Skill",
                "description": "Using Oral Resonance in Structured Speech Tasks - Part of Resonance skills",
                "keywords": [
                        "using",
                        "oral",
                        "resonance",
                        "structured",
                        "speech",
                        "tasks"
                ],
                "pageId": "usingOralResonance",
                "category": "Resonance"
        },
        {
                "id": "generalizingOralResonance",
                "title": "Generalizing Oral Resonance to All Environments",
                "type": "Skill",
                "description": "Generalizing Oral Resonance to All Environments - Part of Resonance skills",
                "keywords": [
                        "generalizing",
                        "oral",
                        "resonance",
                        "all",
                        "environments"
                ],
                "pageId": "generalizingOralResonance",
                "category": "Resonance"
        },
        {
                "id": "demonstratingProsody",
                "title": "Demonstrating Prosody Variations in Sounds and Speech",
                "type": "Skill",
                "description": "Demonstrating Prosody Variations in Sounds and Speech - Part of Prosody skills",
                "keywords": [
                        "demonstrating",
                        "prosody",
                        "variations",
                        "sounds",
                        "and",
                        "speech"
                ],
                "pageId": "demonstratingProsody",
                "category": "Prosody"
        },
        {
                "id": "usingExpectedProsody",
                "title": "Using Expected Prosody in Phrases and Sentences",
                "type": "Skill",
                "description": "Using Expected Prosody in Phrases and Sentences - Part of Prosody skills",
                "keywords": [
                        "using",
                        "expected",
                        "prosody",
                        "phrases",
                        "and",
                        "sentences"
                ],
                "pageId": "usingExpectedProsody",
                "category": "Prosody"
        },
        {
                "id": "generalizingExpectedProsody",
                "title": "Generalizing Expected Prosody to All Environments",
                "type": "Skill",
                "description": "Generalizing Expected Prosody to All Environments - Part of Prosody skills",
                "keywords": [
                        "generalizing",
                        "expected",
                        "prosody",
                        "all",
                        "environments"
                ],
                "pageId": "generalizingExpectedProsody",
                "category": "Prosody"
        },
        {
                "id": "understandingProximity",
                "title": "Understanding Proximity and Personal Space",
                "type": "Skill",
                "description": "Understanding Proximity and Personal Space - Part of Social Awareness skills",
                "keywords": [
                        "understanding",
                        "proximity",
                        "and",
                        "personal",
                        "space",
                        "social",
                        "awareness"
                ],
                "pageId": "understandingProximity",
                "category": "Social Awareness"
        },
        {
                "id": "topicMaintenanceRelevant",
                "title": "Topic Maintenance and Providing Relevant Information",
                "type": "Skill",
                "description": "Topic Maintenance and Providing Relevant Information - Part of Conversational Skills skills",
                "keywords": [
                        "topic",
                        "maintenance",
                        "and",
                        "providing",
                        "relevant",
                        "information",
                        "conversational",
                        "skills"
                ],
                "pageId": "topicMaintenanceRelevant",
                "category": "Conversational Skills"
        },
        {
                "id": "perspectiveTakingEmpathy",
                "title": "Perspective-Taking, Empathy, and Understanding Others",
                "type": "Skill",
                "description": "Perspective-Taking, Empathy, and Understanding Others - Part of Social Awareness skills",
                "keywords": [
                        "perspective",
                        "taking",
                        "empathy",
                        "and",
                        "understanding",
                        "others",
                        "social",
                        "awareness"
                ],
                "pageId": "perspectiveTakingEmpathy",
                "category": "Social Awareness"
        },
        {
                "id": "emotionalRegulationSelfCalming",
                "title": "Emotional regulation and self-calming",
                "type": "Skill",
                "description": "Emotional regulation and self-calming - Part of Emotional Regulation skills",
                "keywords": [
                        "emotional",
                        "regulation",
                        "and",
                        "self",
                        "calming"
                ],
                "pageId": "emotionalRegulationSelfCalming",
                "category": "Emotional Regulation"
        },
        {
                "id": "nonverbalCommunication",
                "title": "Nonverbal Communication (Understanding and Using)",
                "type": "Skill",
                "description": "Nonverbal Communication (Understanding and Using) - Part of Conversational Skills skills",
                "keywords": [
                        "nonverbal",
                        "communication",
                        "understanding",
                        "and",
                        "using",
                        "conversational",
                        "skills"
                ],
                "pageId": "nonverbalCommunication",
                "category": "Conversational Skills"
        },
        {
                "id": "jokesTeasingIrony",
                "title": "Jokes, Teasing, Irony, Metaphors, Sarcasm",
                "type": "Skill",
                "description": "Jokes, Teasing, Irony, Metaphors, Sarcasm - Part of Conversational Skills skills",
                "keywords": [
                        "jokes",
                        "teasing",
                        "irony",
                        "metaphors",
                        "sarcasm",
                        "conversational",
                        "skills"
                ],
                "pageId": "jokesTeasingIrony",
                "category": "Conversational Skills"
        },
        {
                "id": "conflictResolution",
                "title": "Conflict Resolution and Problem Solving",
                "type": "Skill",
                "description": "Conflict Resolution and Problem Solving - Part of Conversational Skills skills",
                "keywords": [
                        "conflict",
                        "resolution",
                        "and",
                        "problem",
                        "solving",
                        "conversational",
                        "skills"
                ],
                "pageId": "conflictResolution",
                "category": "Conversational Skills"
        },
        {
                "id": "communicationBreakdowns",
                "title": "Managing Communication Breakdowns and Misunderstandings",
                "type": "Skill",
                "description": "Managing Communication Breakdowns and Misunderstandings - Part of Conversational Skills skills",
                "keywords": [
                        "managing",
                        "communication",
                        "breakdowns",
                        "and",
                        "misunderstandings",
                        "conversational",
                        "skills"
                ],
                "pageId": "communicationBreakdowns",
                "category": "Conversational Skills"
        },
        {
                "id": "replacingChallengingBehaviors",
                "title": "Replacing Challenging Behaviors with Communication",
                "type": "Skill",
                "description": "Replacing Challenging Behaviors with Communication - Part of Emotional Regulation skills",
                "keywords": [
                        "replacing",
                        "challenging",
                        "behaviors",
                        "with",
                        "communication",
                        "emotional",
                        "regulation"
                ],
                "pageId": "replacingChallengingBehaviors",
                "category": "Emotional Regulation"
        },
        {
                "id": "regulatingEmotionsCalming",
                "title": "Regulating Emotions and Self Calming",
                "type": "Skill",
                "description": "Regulating Emotions and Self Calming - Part of Emotional Regulation skills",
                "keywords": [
                        "regulating",
                        "emotions",
                        "and",
                        "self",
                        "calming",
                        "emotional",
                        "regulation"
                ],
                "pageId": "regulatingEmotionsCalming",
                "category": "Emotional Regulation"
        },
        {
                "id": "respondingToOthers",
                "title": "Responding to Others",
                "type": "Skill",
                "description": "Responding to Others - Part of Conversational Skills skills",
                "keywords": [
                        "responding",
                        "others",
                        "conversational",
                        "skills"
                ],
                "pageId": "respondingToOthers",
                "category": "Conversational Skills"
        },
        {
                "id": "navigatingDisagreements",
                "title": "Navigating Disagreements with Others",
                "type": "Skill",
                "description": "Navigating Disagreements with Others - Part of Conversational Skills skills",
                "keywords": [
                        "navigating",
                        "disagreements",
                        "with",
                        "others",
                        "conversational",
                        "skills"
                ],
                "pageId": "navigatingDisagreements",
                "category": "Conversational Skills"
        },
        {
                "id": "pragmaticSkillsConversation",
                "title": "Pragmatic Skills for Conversation",
                "type": "Skill",
                "description": "Pragmatic Skills for Conversation - Part of Selective Mutism skills",
                "keywords": [
                        "pragmatic",
                        "skills",
                        "for",
                        "conversation",
                        "selective",
                        "mutism"
                ],
                "pageId": "pragmaticSkillsConversation",
                "category": "Selective Mutism"
        },
        {
                "id": "selectiveMutismSupport",
                "title": "Selective Mutism Support Techniques",
                "type": "Skill",
                "description": "Selective Mutism Support Techniques - Part of Selective Mutism skills",
                "keywords": [
                        "selective",
                        "mutism",
                        "support",
                        "techniques"
                ],
                "pageId": "selectiveMutismSupport",
                "category": "Selective Mutism"
        },
        {
                "id": "fluentPhraseProduction",
                "title": "Fluent Phrase Production",
                "type": "Skill",
                "description": "Fluent Phrase Production - Part of Foundations of Fluency skills",
                "keywords": [
                        "fluent",
                        "phrase",
                        "production",
                        "foundations",
                        "fluency"
                ],
                "pageId": "fluentPhraseProduction",
                "category": "Foundations of Fluency"
        },
        {
                "id": "fluentSentenceProduction",
                "title": "Fluent Sentence Production",
                "type": "Skill",
                "description": "Fluent Sentence Production - Part of Foundations of Fluency skills",
                "keywords": [
                        "fluent",
                        "sentence",
                        "production",
                        "foundations",
                        "fluency"
                ],
                "pageId": "fluentSentenceProduction",
                "category": "Foundations of Fluency"
        },
        {
                "id": "fluentConversationSkills",
                "title": "Fluent Conversation Skills",
                "type": "Skill",
                "description": "Fluent Conversation Skills - Part of Foundations of Fluency skills",
                "keywords": [
                        "fluent",
                        "conversation",
                        "skills",
                        "foundations",
                        "fluency"
                ],
                "pageId": "fluentConversationSkills",
                "category": "Foundations of Fluency"
        },
        {
                "id": "codeSwitching",
                "title": "Code Switching",
                "type": "Skill",
                "description": "Code Switching - Part of Conversational Skills skills",
                "keywords": [
                        "code",
                        "switching",
                        "conversational",
                        "skills"
                ],
                "pageId": "codeSwitching",
                "category": "Conversational Skills"
        },
        {
                "id": "environmentalModifications",
                "title": "Providing Environmental Modifications to Promote Communication for Individuals with Anxiety-Based Communication Challenges",
                "type": "Skill",
                "description": "Providing Environmental Modifications to Promote Communication for Individuals with Anxiety-Based Communication Challenges - Part of Selective Mutism skills",
                "keywords": [
                        "providing",
                        "environmental",
                        "modifications",
                        "promote",
                        "communication",
                        "for",
                        "individuals",
                        "with",
                        "anxiety",
                        "based",
                        "challenges",
                        "selective",
                        "mutism"
                ],
                "pageId": "environmentalModifications",
                "category": "Selective Mutism"
        },
        {
                "id": "identifyingMotivation",
                "title": "Identifying Motivation for Speech and Calming Strategies for Individuals with Anxiety-Based Communication Challenges",
                "type": "Skill",
                "description": "Identifying Motivation for Speech and Calming Strategies for Individuals with Anxiety-Based Communication Challenges - Part of Selective Mutism skills",
                "keywords": [
                        "identifying",
                        "motivation",
                        "for",
                        "speech",
                        "and",
                        "calming",
                        "strategies",
                        "individuals",
                        "with",
                        "anxiety",
                        "based",
                        "communication",
                        "challenges",
                        "selective",
                        "mutism"
                ],
                "pageId": "identifyingMotivation",
                "category": "Selective Mutism"
        },
        {
                "id": "increasingSpeechGradual",
                "title": "Increasing Speech with Gradual Expansion of Communication Situations for Individuals with Anxiety-Based Communication Challenges",
                "type": "Skill",
                "description": "Increasing Speech with Gradual Expansion of Communication Situations for Individuals with Anxiety-Based Communication Challenges - Part of Selective Mutism skills",
                "keywords": [
                        "increasing",
                        "speech",
                        "with",
                        "gradual",
                        "expansion",
                        "communication",
                        "situations",
                        "for",
                        "individuals",
                        "anxiety",
                        "based",
                        "challenges",
                        "selective",
                        "mutism"
                ],
                "pageId": "increasingSpeechGradual",
                "category": "Selective Mutism"
        },
        {
                "id": "improvingSelfAwareness",
                "title": "Improving Self-Awareness of Stuttering",
                "type": "Skill",
                "description": "Improving Self-Awareness of Stuttering - Part of Stuttering skills",
                "keywords": [
                        "improving",
                        "self",
                        "awareness",
                        "stuttering"
                ],
                "pageId": "improvingSelfAwareness",
                "category": "Stuttering"
        },
        {
                "id": "dealingWithNegativeEmotions",
                "title": "Dealing with Negative Emotions Regarding Stuttering",
                "type": "Skill",
                "description": "Dealing with Negative Emotions Regarding Stuttering - Part of Stuttering skills",
                "keywords": [
                        "dealing",
                        "with",
                        "negative",
                        "emotions",
                        "regarding",
                        "stuttering"
                ],
                "pageId": "dealingWithNegativeEmotions",
                "category": "Stuttering"
        },
        {
                "id": "integratingFluencyStrategies",
                "title": "Integrating fluency strategies in real-world communication",
                "type": "Skill",
                "description": "Integrating fluency strategies in real-world communication - Part of Stuttering skills",
                "keywords": [
                        "integrating",
                        "fluency",
                        "strategies",
                        "real",
                        "world",
                        "communication",
                        "stuttering"
                ],
                "pageId": "integratingFluencyStrategies",
                "category": "Stuttering"
        },
        {
                "id": "semanticWordAssociation",
                "title": "Semantic Word Association Activities",
                "type": "Skill",
                "description": "Semantic Word Association Activities - Part of Word Finding skills",
                "keywords": [
                        "semantic",
                        "word",
                        "association",
                        "activities",
                        "finding"
                ],
                "pageId": "semanticWordAssociation",
                "category": "Word Finding"
        },
        {
                "id": "phonologicalWordAssociation",
                "title": "Phonological Word Association Activities",
                "type": "Skill",
                "description": "Phonological Word Association Activities - Part of Word Finding skills",
                "keywords": [
                        "phonological",
                        "word",
                        "association",
                        "activities",
                        "finding"
                ],
                "pageId": "phonologicalWordAssociation",
                "category": "Word Finding"
        },
        {
                "id": "conversationalWordFinding",
                "title": "Conversational Word-Finding Strategies",
                "type": "Skill",
                "description": "Conversational Word-Finding Strategies - Part of Word Finding skills",
                "keywords": [
                        "conversational",
                        "word",
                        "finding",
                        "strategies"
                ],
                "pageId": "conversationalWordFinding",
                "category": "Word Finding"
        },
        {
                "id": "improveFluencyIndirect",
                "title": "Improve Fluency through Indirect Strategies and Parent Training",
                "type": "Skill",
                "description": "Improve Fluency through Indirect Strategies and Parent Training - Part of Stuttering skills",
                "keywords": [
                        "improve",
                        "fluency",
                        "through",
                        "indirect",
                        "strategies",
                        "and",
                        "parent",
                        "training",
                        "stuttering"
                ],
                "pageId": "improveFluencyIndirect",
                "category": "Stuttering"
        },
        {
                "id": "teachingFastSlow",
                "title": "Teaching Fast/Slow and Bumpy/Smooth",
                "type": "Skill",
                "description": "Teaching Fast/Slow and Bumpy/Smooth - Part of Stuttering skills",
                "keywords": [
                        "teaching",
                        "fast",
                        "slow",
                        "and",
                        "bumpy",
                        "smooth",
                        "stuttering"
                ],
                "pageId": "teachingFastSlow",
                "category": "Stuttering"
        },
        {
                "id": "fluencyShapingTechniques",
                "title": "Fluency Shaping Techniques",
                "type": "Skill",
                "description": "Fluency Shaping Techniques - Part of Stuttering skills",
                "keywords": [
                        "fluency",
                        "shaping",
                        "techniques",
                        "stuttering"
                ],
                "pageId": "fluencyShapingTechniques",
                "category": "Stuttering"
        },
        {
                "id": "stutteringModificationTechniques",
                "title": "Stuttering Modification Techniques",
                "type": "Skill",
                "description": "Stuttering Modification Techniques - Part of Stuttering skills",
                "keywords": [
                        "stuttering",
                        "modification",
                        "techniques"
                ],
                "pageId": "stutteringModificationTechniques",
                "category": "Stuttering"
        },
        {
                "id": "usingSlowClearSpeech",
                "title": "Using Slow and Clear Speech in Structured Speech Tasks (for Cluttering)",
                "type": "Skill",
                "description": "Using Slow and Clear Speech in Structured Speech Tasks (for Cluttering) - Part of Cluttering skills",
                "keywords": [
                        "using",
                        "slow",
                        "and",
                        "clear",
                        "speech",
                        "structured",
                        "tasks",
                        "for",
                        "cluttering"
                ],
                "pageId": "usingSlowClearSpeech",
                "category": "Cluttering"
        },
        {
                "id": "usingSlowClearPractice",
                "title": "Using Slow, Clear Speech During Practice Scenarios (for Cluttering)",
                "type": "Skill",
                "description": "Using Slow, Clear Speech During Practice Scenarios (for Cluttering) - Part of Cluttering skills",
                "keywords": [
                        "using",
                        "slow",
                        "clear",
                        "speech",
                        "during",
                        "practice",
                        "scenarios",
                        "for",
                        "cluttering"
                ],
                "pageId": "usingSlowClearPractice",
                "category": "Cluttering"
        },
        {
                "id": "generalization",
                "title": "Generalizing Skills to Conversation",
                "type": "Skill",
                "description": "Generalizing Skills to Conversation - Part of Generalization skills",
                "keywords": [
                        "generalizing",
                        "skills",
                        "conversation",
                        "generalization"
                ],
                "pageId": "generalization",
                "category": "Generalization"
        },
        {
                "id": "tSound",
                "title": "/t/ Sound",
                "type": "Skill",
                "description": "/t/ Sound - Part of Speech Sounds skills",
                "keywords": [
                        "sound",
                        "speech",
                        "sounds"
                ],
                "pageId": "tSound",
                "category": "Speech Sounds"
        }
]
};

// Combined search array for easy searching
const allSearchData = [
    ...searchData.pages,
    ...searchData.curriculums,
    ...searchData.skills
];