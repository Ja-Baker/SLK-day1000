// Complete skill pages content based on SLK Curriculum markdown
// Each skill page contains detailed content, activities, and external links

const skillPagesContent = {
    // Early Interactions Skills
    respondingToName: {
        title: "Responding to Name",
        category: "Early Interactions",
        externalLink: "https://hub.speechandlanguagekids.com/posts/social-communication-skills-responding-to-their-name",
        content: `
            <p>This skill focuses on helping children consistently respond when their name is called, which is foundational for social engagement and communication.</p>
            <h4>Key Activities:</h4>
            <ul>
                <li>Practice name-calling during preferred activities</li>
                <li>Use visual cues along with verbal name-calling</li>
                <li>Start close and gradually increase distance</li>
                <li>Pair name with positive interactions</li>
            </ul>
        `
    },

    jointAttentionTurnTaking: {
        title: "Joint Attention and Turn Taking",
        category: "Early Interactions",
        externalLink: "https://hub.speechandlanguagekids.com/posts/social-communication-skills-improving-joint-attention-and-turn-taking",
        content: `
            <p>Joint attention and turn-taking are crucial early social skills that form the foundation for later communication development.</p>
            <h4>Key Activities:</h4>
            <ul>
                <li>Practice looking back and forth between objects and people</li>
                <li>Simple turn-taking games like rolling a ball</li>
                <li>Pointing and following pointing gestures</li>
                <li>Shared book reading with commenting</li>
            </ul>
        `
    },

    followingBasicDirections: {
        title: "Following Basic Directions",
        category: "Early Interactions",
        externalLink: "https://hub.speechandlanguagekids.com/posts/functional-communication-following-directions-for-functional-communication",
        content: `
            <p>This skill involves understanding and following simple one-step instructions in various contexts.</p>
            <h4>Key Activities:</h4>
            <ul>
                <li>Start with familiar routines and actions</li>
                <li>Use visual supports and gestures</li>
                <li>Practice with preferred objects and activities</li>
                <li>Gradually increase complexity</li>
            </ul>
        `
    },

    answeringYesNoQuestions: {
        title: "Answering Yes/No Questions",
        category: "Early Interactions",
        externalLink: "https://hub.speechandlanguagekids.com/posts/language-skills-answering-yesno-questions",
        content: `
            <p>Learning to answer yes/no questions helps children express preferences and participate in decision-making.</p>
            <h4>Key Activities:</h4>
            <ul>
                <li>Start with concrete preference questions</li>
                <li>Use visual supports (thumbs up/down, head nods)</li>
                <li>Practice with real choices during daily activities</li>
                <li>Gradually move to more abstract questions</li>
            </ul>
        `
    },

    makingChoiceBetweenOptions: {
        title: "Making a Choice Between Two Options",
        category: "Early Interactions",
        externalLink: "https://hub.speechandlanguagekids.com/posts/functional-communication-requesting",
        content: `
            <p>This skill empowers children to express preferences and make decisions between presented options.</p>
            <h4>Key Activities:</h4>
            <ul>
                <li>Present two clearly different preferred items</li>
                <li>Use visual presentation of choices</li>
                <li>Start with highly preferred vs. non-preferred items</li>
                <li>Gradually make choices more similar</li>
            </ul>
        `
    },

    participatingEarlySocialRoutines: {
        title: "Participating in Early Social Routines",
        category: "Early Interactions",
        externalLink: "https://hub.speechandlanguagekids.com/posts/social-communication-skills-improving-play-skills",
        content: `
            <p>Social routines provide predictable frameworks for interaction and communication practice.</p>
            <h4>Key Activities:</h4>
            <ul>
                <li>Simple games like peek-a-boo, pat-a-cake</li>
                <li>Greeting and farewell routines</li>
                <li>Song and movement activities</li>
                <li>Turn-taking during play routines</li>
            </ul>
        `
    },

    // Analytic Language Processor Skills
    encouragingFirstWords: {
        title: "Encouraging First Words through Indirect Language Stimulation",
        category: "Analytic Language Processors",
        externalLink: "https://hub.speechandlanguagekids.com/posts/functional-communication-indirect-language-stimulation-for-late-talkers-or-non-speaking-children",
        content: `
            <p>Indirect language stimulation creates a rich communication environment that encourages spontaneous word use.</p>
            <h4>Key Strategies:</h4>
            <ul>
                <li>Self-talk and parallel talk during activities</li>
                <li>Shortened utterances and simple vocabulary</li>
                <li>Wait time and expectant pauses</li>
                <li>Follow the child's interests and lead</li>
            </ul>
        `
    },

    producingCVCWords: {
        title: "Producing CV, VC, and CVC Words for Functional Communication",
        category: "Analytic Language Processors",
        externalLink: "https://hub.speechandlanguagekids.com/posts/functional-communication-speaking-cv-vc-and-cvc-words-for-functional-communication",
        content: `
            <p>This focuses on building clear word shapes for functional communication using consonant-vowel patterns.</p>
            <h4>Word Structure Practice:</h4>
            <ul>
                <li>CV words: "go", "no", "hi", "bye"</li>
                <li>VC words: "up", "on", "in", "it"</li>
                <li>CVC words: "mom", "dad", "cat", "dog"</li>
                <li>Use in functional contexts for requests and comments</li>
            </ul>
        `
    },

    buildingFirst50Words: {
        title: "Building an Expressive Vocabulary of First 50 Words",
        category: "Analytic Language Processors",
        externalLink: "https://hub.speechandlanguagekids.com/posts/functional-communication-building-an-expressive-vocabulary-of-the-first-50-words",
        content: `
            <p>Developing a core vocabulary of functional words across different categories for daily communication.</p>
            <h4>Word Categories:</h4>
            <ul>
                <li>Social words: hi, bye, please, thank you</li>
                <li>People: mama, dada, baby</li>
                <li>Actions: go, stop, up, more</li>
                <li>Objects: ball, book, car, cup</li>
                <li>Descriptors: big, hot, yummy</li>
            </ul>
        `
    },

    producing2WordUtterances: {
        title: "Producing 2-Word Utterances",
        category: "Analytic Language Processors",
        externalLink: "https://hub.speechandlanguagekids.com/posts/language-skills-producing-2-word-utterances-combining-words-together",
        content: `
            <p>Moving from single words to two-word combinations increases communicative power and specificity.</p>
            <h4>Common 2-Word Patterns:</h4>
            <ul>
                <li>Action + Object: "want cookie", "throw ball"</li>
                <li>Attribute + Object: "big truck", "hot soup"</li>
                <li>Possessor + Object: "mommy car", "my book"</li>
                <li>Action + Location: "go outside", "sit chair"</li>
            </ul>
        `
    },

    // Gestalt Language Processor Skills
    modelingEarlyGestalts: {
        title: "Responding to and Modeling Early Gestalts",
        category: "Gestalt Language Processors",
        externalLink: "https://hub.speechandlanguagekids.com/posts/gestalt-language-processing",
        content: `
            <p>Supporting gestalt language processors by understanding their scripts and modeling mitigable gestalts.</p>
            <h4>Key Strategies:</h4>
            <ul>
                <li>Find meaning in the child's scripts and echolalia</li>
                <li>Respond naturally to communicative intent</li>
                <li>Model shorter, more flexible gestalts</li>
                <li>Use rich intonation and prosody</li>
            </ul>
        `
    },

    breakingDownGestalts: {
        title: "Breaking Down and Mixing and Matching Gestalts",
        category: "Gestalt Language Processors",
        externalLink: "https://hub.speechandlanguagekids.com/posts/gestalt-language-processing",
        content: `
            <p>Helping children analyze their gestalts and create novel combinations from familiar scripts.</p>
            <h4>Key Strategies:</h4>
            <ul>
                <li>Model shorter versions of the child's gestalts</li>
                <li>Combine pieces from different familiar scripts</li>
                <li>Emphasize key words within longer gestalts</li>
                <li>Support natural gestalt mitigation process</li>
            </ul>
        `
    },

    // AAC Skills
    earlyFunctionalAAC: {
        title: "Early Functional Communication Using AAC",
        category: "AAC",
        externalLink: "https://hub.speechandlanguagekids.com/posts/functional-communication-beginning-aac-use-early-functional-communication",
        content: `
            <p>Establishing basic AAC use for requesting, commenting, and social interaction.</p>
            <h4>Key Focus Areas:</h4>
            <ul>
                <li>Core vocabulary for basic needs</li>
                <li>Requesting preferred items and activities</li>
                <li>Commenting on immediate environment</li>
                <li>Social greetings and interactions</li>
            </ul>
        `
    },

    expandingAAC: {
        title: "Expanding Communication through AAC",
        category: "AAC",
        externalLink: "https://hub.speechandlanguagekids.com/posts/functional-communication-expanding-language-skills-through-aac",
        content: `
            <p>Building more complex language skills and expanding communicative functions through AAC.</p>
            <h4>Advanced AAC Skills:</h4>
            <ul>
                <li>Multi-word combinations and sentences</li>
                <li>Abstract concepts and temporal language</li>
                <li>Narrative and storytelling</li>
                <li>Academic and literacy support</li>
            </ul>
        `
    },

    // Speech Sound Skills
    bSound: {
        title: "/b/ Sound",
        category: "Articulation",
        externalLink: "https://hub.speechandlanguagekids.com/posts/speech-sound-skills-b-sound",
        content: `
            <p>The /b/ sound is a voiced bilabial stop, made by bringing both lips together and releasing with voice.</p>
            <h4>Teaching Strategies:</h4>
            <ul>
                <li>Visual cues: lips together, then pop apart</li>
                <li>Tactile cues: feel vibration on throat</li>
                <li>Practice in different word positions</li>
                <li>Use in functional words like "ball", "book", "bye"</li>
            </ul>
        `
    },

    mSound: {
        title: "/m/ Sound",
        category: "Articulation",
        externalLink: "https://hub.speechandlanguagekids.com/posts/speech-sound-skills-m-sound",
        content: `
            <p>The /m/ sound is a voiced bilabial nasal, produced with lips together and air flowing through the nose.</p>
            <h4>Teaching Strategies:</h4>
            <ul>
                <li>Humming with lips closed</li>
                <li>Feel vibration on lips and nose</li>
                <li>Practice with "mmm" for yummy foods</li>
                <li>Use in early words like "mama", "more", "milk"</li>
            </ul>
        `
    },

    // Following Directions Skills
    oneStepDirections: {
        title: "Following One-Step Directions (Routine and Novel)",
        category: "Following Directions",
        externalLink: "https://hub.speechandlanguagekids.com/posts/language-skills-following-directions-42140345",
        content: `
            <p>Building the foundation for instruction-following with simple, single-step commands.</p>
            <h4>Teaching Strategies:</h4>
            <ul>
                <li>Start with familiar actions and objects</li>
                <li>Use visual supports and gestures</li>
                <li>Practice during preferred activities</li>
                <li>Gradually introduce novel directions</li>
            </ul>
        `
    },

    twoStepDirections: {
        title: "Following 2-Step Directions (Routine and Novel)",
        category: "Following Directions",
        externalLink: "https://hub.speechandlanguagekids.com/posts/language-skills-following-2-step-directions",
        content: `
            <p>Advancing to more complex instruction-following with sequential two-step commands.</p>
            <h4>Teaching Strategies:</h4>
            <ul>
                <li>Break down into individual steps initially</li>
                <li>Use visual sequence cards</li>
                <li>Practice with related actions first</li>
                <li>Gradually increase to unrelated steps</li>
            </ul>
        `
    },

    // Question Skills
    answeringWhat: {
        title: "Answering \"What\" Questions",
        category: "Asking and Answering Questions",
        externalLink: "https://hub.speechandlanguagekids.com/posts/language-skills-answering-what-questions",
        content: `
            <p>Teaching children to identify and name objects, actions, and concepts in response to "what" questions.</p>
            <h4>Teaching Progression:</h4>
            <ul>
                <li>What is this? (concrete objects)</li>
                <li>What are you doing? (actions)</li>
                <li>What do you want? (preferences)</li>
                <li>What happened? (events)</li>
            </ul>
        `
    },

    answeringWho: {
        title: "Answering \"Who\" Questions",
        category: "Asking and Answering Questions",
        externalLink: "https://hub.speechandlanguagekids.com/posts/language-skills-answering-who-questions",
        content: `
            <p>Helping children identify people and characters in response to "who" questions.</p>
            <h4>Teaching Progression:</h4>
            <ul>
                <li>Who is this? (familiar people)</li>
                <li>Who is in the picture? (photos)</li>
                <li>Who did it? (action identification)</li>
                <li>Who can help? (problem-solving)</li>
            </ul>
        `
    },

    answeringWhere: {
        title: "Answering \"Where\" Questions",
        category: "Asking and Answering Questions",
        externalLink: "https://hub.speechandlanguagekids.com/posts/language-skills-answering-where-questions-42457446",
        content: `
            <p>Teaching location concepts and spatial relationships through "where" questions.</p>
            <h4>Teaching Progression:</h4>
            <ul>
                <li>Where is it? (visible locations)</li>
                <li>Where do you go? (familiar places)</li>
                <li>Where does it belong? (categorization)</li>
                <li>Where did it happen? (event locations)</li>
            </ul>
        `
    },

    // Abstract Language Skills
    idiomsLanguage: {
        title: "Idioms and Figurative Language",
        category: "Abstract Language",
        externalLink: "https://hub.speechandlanguagekids.com/posts/language-skills-idioms-and-figurative-language",
        content: `
            <p>Teaching the meaning behind non-literal expressions and figurative language.</p>
            <h4>Teaching Strategies:</h4>
            <ul>
                <li>Start with common, concrete idioms</li>
                <li>Use visual representations</li>
                <li>Practice in context</li>
                <li>Explain literal vs. figurative meanings</li>
            </ul>
        `
    },

    makingInferences: {
        title: "Making Inferences",
        category: "Abstract Language",
        externalLink: "https://hub.speechandlanguagekids.com/posts/language-skills-making-inferences",
        content: `
            <p>Teaching children to use context clues and background knowledge to understand implied information.</p>
            <h4>Teaching Strategies:</h4>
            <ul>
                <li>Start with obvious visual clues</li>
                <li>Use "I wonder..." statements</li>
                <li>Practice with picture books</li>
                <li>Connect to personal experiences</li>
            </ul>
        `
    },

    // Social Communication Skills
    initiatingInteractions: {
        title: "Initiating Interactions with Others",
        category: "Social Communication",
        externalLink: "https://hub.speechandlanguagekids.com/posts/social-communication-skills-initiating-interactions-with-others",
        content: `
            <p>Teaching children how to start conversations and social interactions appropriately.</p>
            <h4>Key Skills:</h4>
            <ul>
                <li>Getting attention appropriately</li>
                <li>Using greetings and social starters</li>
                <li>Reading social cues for good timing</li>
                <li>Choosing appropriate topics</li>
            </ul>
        `
    },

    topicMaintenance: {
        title: "Topic Maintenance and Providing Relevant Info",
        category: "Social Communication",
        externalLink: "https://hub.speechandlanguagekids.com/posts/social-communication-skills-topic-maintenance-and-providing-relevant-info",
        content: `
            <p>Helping children stay on topic and contribute meaningful information to conversations.</p>
            <h4>Key Skills:</h4>
            <ul>
                <li>Identifying the current topic</li>
                <li>Adding relevant comments</li>
                <li>Asking related questions</li>
                <li>Recognizing topic changes</li>
            </ul>
        `
    },

    // Fluency Skills
    breathControl: {
        title: "Improving Breath Control for Fluency and Voice",
        category: "Fluency",
        externalLink: "https://hub.speechandlanguagekids.com/posts/fluency-skills-improving-breath-control-for-fluency-and-voice",
        content: `
            <p>Teaching proper breathing techniques to support fluent speech and healthy voice use.</p>
            <h4>Key Techniques:</h4>
            <ul>
                <li>Diaphragmatic breathing exercises</li>
                <li>Coordinating breath with speech</li>
                <li>Pacing and pausing strategies</li>
                <li>Breath support for longer utterances</li>
            </ul>
        `
    },

    fluencyShaping: {
        title: "Fluency Shaping/Enhancing Strategies",
        category: "Fluency",
        externalLink: "https://hub.speechandlanguagekids.com/posts/fluency-skills-fluency-shapingenhancing-strategies",
        content: `
            <p>Teaching techniques to promote smooth, fluent speech patterns.</p>
            <h4>Key Strategies:</h4>
            <ul>
                <li>Slow, easy speech</li>
                <li>Gentle voice onset</li>
                <li>Continuous phonation</li>
                <li>Light articulatory contacts</li>
            </ul>
        `
    },

    // Voice/Resonance Skills
    vocalHygiene: {
        title: "Vocal Hygiene/Eliminating Vocal Abuse",
        category: "Voice/Resonance",
        externalLink: "https://hub.speechandlanguagekids.com/posts/voiceresonance-vocal-hygieneeliminating-vocal-abuse",
        content: `
            <p>Teaching healthy voice use habits and eliminating behaviors that harm the voice.</p>
            <h4>Key Concepts:</h4>
            <ul>
                <li>Avoiding yelling and excessive throat clearing</li>
                <li>Staying hydrated</li>
                <li>Proper breathing for voice</li>
                <li>Recognizing voice fatigue</li>
            </ul>
        `
    },

    hypernasality: {
        title: "Hypernasality/Nasal Emission",
        category: "Voice/Resonance",
        externalLink: "https://hub.speechandlanguagekids.com/posts/voiceresonance-hypernasalitynasal-emission",
        content: `
            <p>Addressing excessive nasal resonance and air escape through the nose during speech.</p>
            <h4>Treatment Approaches:</h4>
            <ul>
                <li>Oral vs. nasal contrast activities</li>
                <li>Visual feedback techniques</li>
                <li>Pressure-sensitive activities</li>
                <li>Articulation precision work</li>
            </ul>
        `
    }
};

// Screening checklists content
const screeningContent = {
    title: "Screening Checklists for Caregivers and Educators",
    description: "Use these checklists to gather data from caregivers and/or educators that you can use to complete the assessment tool.",
    step1: {
        title: "Step 1: Screening Checklist",
        description: "This will narrow down the specific communication domain(s) that need to be addressed.",
        downloadLink: "https://www.dropbox.com/scl/fi/n6wvrdzk812tzu87z3704/Speech_Language_Screening_Checklist.pdf?rlkey=hj9wq00r0s1ypl4bfwvrea69o&dl=0"
    },
    step2: {
        title: "Step 2: Progress Monitoring Tools and In-Depth Checklist",
        description: "Once you have identified the area(s) that you want to pursue, use the corresponding progress monitoring tool and checklist to gather more data.",
        tools: [
            {
                name: "Speech Sounds",
                description: "Individuals with speech sound problems have difficulty pronouncing sounds correctly. Their speech is difficult to understand.",
                downloadLink: "https://www.dropbox.com/scl/fi/o6q8oucn96p33git5q62u/Speech_Sound_Progress_Monitoring_Tool.pdf?rlkey=a0myfmo3j8bhpb3a38objn4p6&dl=0"
            },
            {
                name: "Language",
                description: "Individuals with language difficulties struggle to understand or use words effectively. This can impact their ability to follow directions, express thoughts, or build sentences correctly.",
                downloadLink: "https://www.dropbox.com/scl/fi/59l86kz4udmmv5d3zline/Language_Progress_Monitoring_Tool.pdf?rlkey=u5g0ary94fptp8bgfs6vh6l4w&dl=0"
            },
            {
                name: "Voice/Resonance",
                description: "Individuals with voice or resonance concerns may have voices that sound hoarse, too nasal, too quiet, or otherwise unusual.",
                downloadLink: "https://www.dropbox.com/scl/fi/wogx8yo1zuf97pnul4rlz/Voice-Resonance_Progress_Monitoring_Tool.pdf?rlkey=0d428rej37hfe3nwj181x6hz8&dl=0"
            },
            {
                name: "Fluency",
                description: "Individuals with fluency difficulties may experience stuttering or interruptions in their speech.",
                downloadLink: "https://www.dropbox.com/scl/fi/g7km69459qicdiyqkq0oa/Fluency_Progress_Monitoring_Tool.pdf?rlkey=ianc9quid0oft8pg99tfyrmya&dl=0"
            },
            {
                name: "Functional Communication",
                description: "Individuals with functional communication difficulties struggle to get their needs met using speech, gestures, or other means of communication.",
                downloadLink: "https://www.dropbox.com/scl/fi/zpwztvvcv2lwxtjs50if7/Functional_Communication_Progress_Monitoring_Tool.pdf?rlkey=1k7k46ra8xn6860kxi0h8q1rw&dl=0"
            },
            {
                name: "Social Communication",
                description: "Individuals with social communication challenges may struggle with conversational skills, understanding social cues, or using language appropriately in different social interactions.",
                downloadLink: "https://www.dropbox.com/scl/fi/1hq6jek4t9d0ccb0v5z4f/Social_Communication_Progress_Monitoring_Tool.pdf?rlkey=cv4pa4kpj50cm8vjjb6af9tkw&dl=0"
            }
        ]
    }
};

// Handouts and Visuals content
const resourceContent = {
    handouts: {
        title: "Handouts",
        description: "Download caregiver and educator handouts with communication supports for specific conditions.",
        link: "https://hub.speechandlanguagekids.com/spaces/13217776/content"
    },
    visuals: {
        title: "Visual Supports",
        description: "Download visual cues and aids that you can use to support children with communication challenges.",
        link: "https://hub.speechandlanguagekids.com/spaces/17816743/content"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        skillPagesContent,
        screeningContent,
        resourceContent
    };
}