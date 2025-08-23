// Additional Curriculum Content - Part 2
// This file contains the remaining curriculum implementations

// Abstract Language Curriculum
const abstractLanguageCurriculum = {
    beginner: {
        title: "Beginner Level: Literal vs. Nonliteral Language",
        ageRange: "(Ages: 5 - 7 yrs and beyond)",
        skills: ["Identify literal vs. nonliteral language"],
        content: `
            <p>At this level, therapy focuses on helping children differentiate between literal and nonliteral meanings in everyday language. Many children who struggle with abstract language take phrases at face value, leading to misunderstandings in conversations and academic settings.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will identify if a statement from a story or short scenario is literal or nonliteral with 80% accuracy.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, use the suggested activities below:</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('literalNonliteral')">Identify Literal vs. Nonliteral Language</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Figurative Language",
        ageRange: "(Ages: 6 - 10 yrs and beyond)",
        skills: ["Idioms and Figures of Speech", "Similes and Metaphors"],
        content: `
            <p>At this stage, therapy introduces a variety of figurative language types, helping children understand and use them appropriately. Children learn to recognize idioms, similes, and metaphors in conversation, reading, and writing.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, __________ will correctly explain the nonliteral meaning of an idiom, simile, or metaphor that was presented in context (within a story or short scenario) on 80% of observed opportunities across three data collection days.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('idiomsAndFigures')">Idioms and Figures of Speech</button>
                <button class="activity-btn" onclick="showSkill('similesMetaphors')">Similes and Metaphors</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Inferencing and Social Nuance",
        ageRange: "(Ages: 7 - 12 yrs and beyond)",
        skills: ["Inferencing in Text and Social Inferencing", "Understanding Sarcasm and Irony"],
        content: `
            <p>At the Advanced Level, individuals learn to interpret implied meanings, sarcasm, and humor, which require strong inferencing skills and social awareness.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p><strong>In Text:</strong> By the end of the reporting period, after reading a text, _____________ will make an appropriate inference from the text and refer to details and examples in the text when explaining how he/she drew that inference on four of five observed opportunities.</p>
                <p><strong>Social Inferencing:</strong> By the end of the reporting period, after reading, watching, or hearing a description of a social scenario (some including sarcasm), _____________ will use social cues plus background information to make an appropriate inference of what has happened or is happening on four of five observed opportunities.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('inferencingSkills')">Inferencing in Text and Social Inferencing</button>
                <button class="activity-btn" onclick="showSkill('sarcasmIrony')">Understanding Sarcasm and Irony</button>
            </div>
        `
    }
};

// Grammar/Syntax Curriculum
const grammarSyntaxCurriculum = {
    beginner: {
        title: "Beginner Level: Foundational Grammar Skills",
        ageRange: "(Ages: 2 - 5 yrs and beyond)",
        skills: ["Articles (a, an, the)", "Present progressive (-ing verbs)", "Pronouns (he, she, they, it, we, etc.)", "Plurals (regular and irregular)", "Past tense (-ed endings, irregular verbs)", "Auxiliary verbs (is, am, are, was, were, has, have)", "Possessive forms ('s)", "Simple conjunctions (and, but, because)", "Basic Sentence Structure: Subject + Verb + Object"],
        content: `
            <p>At the Beginner Level, therapy focuses on building a strong foundation in essential grammatical structures that form the backbone of clear and effective communication. Many children at this stage may struggle with forming complete sentences, using the correct verb tense, or understanding basic grammatical markers like plurals and possessives.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will produce simple, grammatically correct sentences in conversational speech, making no more than 5 grammatical errors within a 10-minute conversation in the therapy room on three consecutive data collection days.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('articles')">Articles (a, an, the)</button>
                <button class="activity-btn" onclick="showSkill('presentProgressive')">Present progressive (-ing verbs)</button>
                <button class="activity-btn" onclick="showSkill('pronouns')">Pronouns (he, she, they, it, we, etc.)</button>
                <button class="activity-btn" onclick="showSkill('plurals')">Plurals (regular and irregular)</button>
                <button class="activity-btn" onclick="showSkill('pastTense')">Past tense (-ed endings, irregular verbs)</button>
                <button class="activity-btn" onclick="showSkill('auxiliaryVerbs')">Auxiliary verbs (is, am, are, was, were, has, have)</button>
                <button class="activity-btn" onclick="showSkill('possessiveForms')">Possessive forms ('s)</button>
                <button class="activity-btn" onclick="showSkill('simpleConjunctions')">Simple conjunctions (and, but, because)</button>
                <button class="activity-btn" onclick="showSkill('basicSentenceStructure')">Basic Sentence Structure: Subject + Verb + Object</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Expanding Sentence Complexity",
        ageRange: "(Ages: 4 - 8 yrs and beyond)",
        skills: ["Compound sentences (and, but, or, so, yet)", "Complex sentences (because, although, unless, while, after)", "Matching verb tense to subject (e.g., He runs vs. They run)", "Comparatives and superlatives (bigger, biggest)", "Prepositional phrases", "Modal verbs for polite requests or hypotheticals (can, could, should, would, might)"],
        content: `
            <p>At the Intermediate Level, therapy shifts from basic sentence formation to expanding sentence complexity and refining grammatical accuracy.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, given visual or verbal prompts as needed, _____________ will produce grammatically correct compound and complex sentences in structured conversation and storytelling, demonstrating correct verb tense, subject-verb agreement, and appropriate conjunction use, with no more than 3 errors in a 10-minute interaction, across three consecutive sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('compoundSentences')">Compound sentences (coordinating conjunctions: and, but, or, so, yet)</button>
                <button class="activity-btn" onclick="showSkill('complexSentences')">Complex sentences (subordinating conjunctions: because, although, unless, while, after)</button>
                <button class="activity-btn" onclick="showSkill('verbTenseSubject')">Matching verb tense to subject (e.g., He runs vs. They run)</button>
                <button class="activity-btn" onclick="showSkill('comparatives')">Comparative and superlative adjectives (bigger, biggest)</button>
                <button class="activity-btn" onclick="showSkill('prepositionalPhrases')">Using prepositional phrases for descriptive detail ("The cat sat under the table.")</button>
                <button class="activity-btn" onclick="showSkill('modalVerbs')">Using modal verbs for polite requests or hypotheticals (can, could, should, would, might)</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Mastering Grammar for Effective Communication",
        ageRange: "(Ages: 6 - 13 yrs and beyond)",
        skills: ["Correcting sentence fragments and run-ons", "Expanding, combining, or reducing sentences", "Active vs. passive voice", "Relative clauses", "Conditional sentences", "Parallel sentence structure", "Transition words"],
        content: `
            <p>At the Advanced Level, therapy focuses on refining and mastering grammar and syntax for clear, precise, and sophisticated communication.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, given minimal verbal or visual prompts, __________ will demonstrate mastery of advanced grammar and syntax in both spoken and written language, by achieving a 4 or 5 on the following rubric as measured by the classroom teacher.</p>
                
                <table class="rubric-table">
                    <tr>
                        <td><strong>5 - Mastery</strong></td>
                        <td>Uses complex sentences, advanced grammatical structures, and varied sentence types with 0-1 errors. Demonstrates ability to revise and refine sentences for clarity, meaning, and style independently.</td>
                    </tr>
                    <tr>
                        <td><strong>4 - Proficient</strong></td>
                        <td>Uses complex sentence structures and advanced grammar with 2-3 errors. Can self-correct most mistakes and shows strong sentence variety and cohesion.</td>
                    </tr>
                    <tr>
                        <td><strong>3 - Developing</strong></td>
                        <td>Produces complex sentences but with 4-5 errors. Some errors impact clarity, and self-correction is inconsistent. Sentence structure may still be repetitive or awkward at times.</td>
                    </tr>
                    <tr>
                        <td><strong>2 - Emerging</strong></td>
                        <td>Uses some complex structures but relies heavily on simple sentences. Makes 6-7 errors that affect clarity and meaning. Requires moderate prompting to revise grammar.</td>
                    </tr>
                    <tr>
                        <td><strong>1 - Beginning</strong></td>
                        <td>Struggles with complex sentence formation and makes 8+ errors. Sentences may be disorganized, with frequent run-ons or fragments. Requires significant support to revise and correct grammar.</td>
                    </tr>
                </table>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('sentenceFragments')">Correcting sentence fragments and run-on sentences</button>
                <button class="activity-btn" onclick="showSkill('expandingSentences')">Expanding, combining, or reducing sentences for meaning, style, and emphasis</button>
                <button class="activity-btn" onclick="showSkill('activePassiveVoice')">Differentiating between active and passive voice</button>
                <button class="activity-btn" onclick="showSkill('relativeClauses')">Using relative clauses ("The boy who won the race is my friend.")</button>
                <button class="activity-btn" onclick="showSkill('conditionalSentences')">Mastering conditional sentences ("If I had studied, I would have passed.")</button>
                <button class="activity-btn" onclick="showSkill('parallelStructure')">Parallel sentence structure ("She likes to swim, to bike, and to run.")</button>
                <button class="activity-btn" onclick="showSkill('transitionWords')">Using advanced transition words (therefore, however, consequently, in contrast)</button>
            </div>
        `
    }
};

// Vocabulary Curriculum
const vocabularyCurriculum = {
    beginner: {
        title: "Beginner Level: Building a Core Vocabulary",
        ageRange: "(Ages: 1 - 2.5 yrs and beyond)",
        skills: ["Building a Vocabulary of the First 50 Words", "Producing 2-Word Combinations", "Expanding Vocabulary of Nouns"],
        content: `
            <p>At this level, therapy focuses on helping children develop a strong foundation of essential words needed for everyday communication.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate functional use of core vocabulary for communication by achieving a 4 or 5 on the following rubric, as measured by parents/caregivers/teachers.</p>
                
                <table class="rubric-table">
                    <tr>
                        <td><strong>5 - Mastery</strong></td>
                        <td>Has a word or phrase for everything they need and consistently uses words to communicate wants, needs, and observations in various contexts. Uses at least 100+ words and begins combining words into simple phrases.</td>
                    </tr>
                    <tr>
                        <td><strong>4 - Proficient</strong></td>
                        <td>Uses words effectively to express wants and needs and labels familiar objects, actions, and people. Vocabulary includes 50-100 words, with some two-word combinations emerging.</td>
                    </tr>
                    <tr>
                        <td><strong>3 - Developing</strong></td>
                        <td>Has a growing vocabulary of 25-50 words, using labels for common objects and actions. Can express some basic wants and needs with words but still relies on gestures at times.</td>
                    </tr>
                    <tr>
                        <td><strong>2 - Emerging</strong></td>
                        <td>Uses 10-25 words, mostly for basic requests (e.g., "more," "up," "go") or labeling a few familiar objects. Heavily relies on gestures or sounds for communication.</td>
                    </tr>
                    <tr>
                        <td><strong>1 - Beginning</strong></td>
                        <td>Has fewer than 10 words and relies primarily on gestures, vocalizations, or nonverbal communication to express wants and needs. May imitate sounds but does not yet use words meaningfully.</td>
                    </tr>
                </table>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('first50Words')">Building a Vocabulary of the First 50 Words</button>
                <button class="activity-btn" onclick="showSkill('twoWordUtterances')">Producing 2-Word Combinations</button>
                <button class="activity-btn" onclick="showSkill('expandingNouns')">Expanding Vocabulary of Nouns from Basic Categories</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Increasing Word Knowledge and Usage",
        ageRange: "(Ages: 2 - 6 yrs and beyond)",
        skills: ["Spatial Concepts", "Adjectives", "Comparing and Contrasting", "Temporal Concepts", "Quantitative Concepts"],
        content: `
            <p>At this stage, children move beyond basic vocabulary and begin expanding their word knowledge across different categories.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _____________ will expand their vocabulary by using a variety of words to describe, categorize, and express ideas by achieving a 4 or 5 on the following rubric, as measured by the classroom teacher.</p>
                
                <table class="rubric-table">
                    <tr>
                        <td><strong>5 - Mastery</strong></td>
                        <td>Uses a wide variety of words across different categories (e.g., actions, emotions, descriptors) and can describe objects, events, and ideas in detail. Consistently uses synonyms and more specific vocabulary instead of generic words (e.g., "gigantic" instead of "big").</td>
                    </tr>
                    <tr>
                        <td><strong>4 - Proficient</strong></td>
                        <td>Uses a broad vocabulary to describe and categorize items, including some precise words for actions and emotions (e.g., "exhausted" instead of "tired").</td>
                    </tr>
                    <tr>
                        <td><strong>3 - Developing</strong></td>
                        <td>Has an expanding vocabulary including around 75-150 words, covering common categories like animals, food, transportation, and emotions. Can describe familiar objects with some detail and uses more than one word to express ideas (e.g., "big red truck" instead of just "truck"). Uses simple sentences but relies on basic, familiar words.</td>
                    </tr>
                    <tr>
                        <td><strong>2 - Emerging</strong></td>
                        <td>Uses 50-75 words, mainly for familiar nouns, verbs, and simple adjectives. Struggles to find precise words and often repeats the same basic vocabulary. Needs prompting to describe objects or explain ideas.</td>
                    </tr>
                    <tr>
                        <td><strong>1 - Beginning</strong></td>
                        <td>Uses fewer than 50 words, mostly relying on common nouns and a few verbs (e.g., "go," "eat"). Struggles to name new objects or actions without direct prompting. Often resorts to gestures or general words like "that" instead of specific vocabulary.</td>
                    </tr>
                </table>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('spatialConcepts')">Spatial Concepts</button>
                <button class="activity-btn" onclick="showSkill('adjectives')">Adjectives</button>
                <button class="activity-btn" onclick="showSkill('comparingContrasting')">Comparing and Contrasting</button>
                <button class="activity-btn" onclick="showSkill('temporalConcepts')">Temporal Concepts</button>
                <button class="activity-btn" onclick="showSkill('quantitativeConcepts')">Quantitative Concepts</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Academic Vocabulary and Independent Word Learning",
        ageRange: "(Ages: 5 - 12 yrs and beyond)",
        skills: ["Understand and Use Multiple Meaning Words", "Understand and Use Antonyms and Synonyms", "Using Affixes (Prefixes and Suffixes) and Roots to Decode Unknown Words", "Other Word Attack and Word Learning Strategies as Appropriate"],
        content: `
            <p>At the Advanced Level, therapy focuses on supporting students in understanding and using academic and curriculum-based vocabulary, as well as teaching them strategies to independently learn unfamiliar words.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, given a newly introduced curriculum-related word, ________ will apply multiple word-learning strategies (e.g., analyzing affixes, using context clues, identifying synonyms/antonyms, and recognizing multiple meanings) to determine and explain the word's meaning, by achieving a 4 or 5 on the following rubric as measured by the classroom teacher.</p>
                
                <table class="rubric-table">
                    <tr>
                        <td><strong>5 - Mastery</strong></td>
                        <td>Independently applies multiple strategies (morphology, context clues, synonyms/antonyms, multiple meanings) to determine word meaning and provides a well-explained definition using academic language. Can confidently use the word in a sentence and explain how they figured it out.</td>
                    </tr>
                    <tr>
                        <td><strong>4 - Proficient</strong></td>
                        <td>Uses two or more strategies to determine word meaning with minimal support. Can explain their reasoning and use the word in a meaningful sentence, though explanations may lack full academic depth.</td>
                    </tr>
                    <tr>
                        <td><strong>3 - Developing</strong></td>
                        <td>Uses at least one strategy (e.g., breaking the word into parts, using context clues) but needs prompting to apply additional strategies. Provides a general idea of the word's meaning but may struggle with accurate word use.</td>
                    </tr>
                    <tr>
                        <td><strong>2 - Emerging</strong></td>
                        <td>Recognizes the word as unfamiliar and attempts a strategy (e.g., guessing based on prior knowledge) but needs moderate prompting to apply effective word-learning techniques. Struggles to explain their reasoning.</td>
                    </tr>
                    <tr>
                        <td><strong>1 - Beginning</strong></td>
                        <td>Has difficulty identifying or analyzing new words independently. Needs maximum support to apply strategies and determine meaning. Often guesses without using a structured approach.</td>
                    </tr>
                </table>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('multipleMeaningWords')">Understand and Use Multiple Meaning Words</button>
                <button class="activity-btn" onclick="showSkill('antonymsSynonyms')">Understand and Use Antonyms and Synonyms</button>
                <button class="activity-btn" onclick="showSkill('affixesRoots')">Using Affixes (Prefixes and Suffixes) and Roots to Decode Unknown Words</button>
                <button class="activity-btn" onclick="showSkill('wordLearningStrategies')">Other Word Attack and Word Learning Strategies as Appropriate</button>
            </div>
        `
    }
};

// Language Foundations for Literacy Curriculum
const literacyFoundationsCurriculum = {
    beginner: {
        title: "Beginner Level: Pre-Literacy Foundations",
        ageRange: "(Ages: 2 - 6 yrs and beyond)",
        skills: ["Phonological Awareness", "Print Awareness", "Basic Story Structure"],
        content: `
            <p>At this level, therapy focuses on fundamental language and literacy readiness skills that set the stage for future reading and writing success.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate foundational literacy skills that indicate a readiness for formal literacy instruction by achieving at least a 4 out of 5 on the following rubric as graded by the classroom teacher over the preceding two weeks:</p>
                
                <table class="rubric-table">
                    <tr>
                        <th>Score</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><strong>5 – Strongly Ready</strong></td>
                        <td>The individual shows strong phonological awareness (e.g., blends and segments sounds, identifies rhymes), understands that print carries meaning, tracks print left to right, recognizes many letters, and engages appropriately with books. They can retell a familiar story with a clear beginning, middle, and end.</td>
                    </tr>
                    <tr>
                        <td><strong>4 – Ready</strong></td>
                        <td>The individual identifies rhyming words and some beginning sounds, can blend or segment simple words with minimal support, understands that print represents spoken language, handles books appropriately, and recognizes some letters. They can generally retell a familiar story with at least two parts (e.g., beginning and end), though the sequence may be incomplete or inconsistent.</td>
                    </tr>
                    <tr>
                        <td><strong>3 – Emerging Readiness</strong></td>
                        <td>The individual shows some awareness of sounds in words (e.g., noticing rhyme or initial sounds) but struggles with manipulating sounds (e.g. blending and segmentation). They show interest in books and may recognize that print has meaning but inconsistently track or engage with text. They may describe one or two parts of a story but lack clear understanding of full story structure.</td>
                    </tr>
                    <tr>
                        <td><strong>2 – Limited Readiness</strong></td>
                        <td>The individual occasionally notices sounds or rhymes but is unable to manipulate them. They may flip through books or look at pictures but lack understanding of print direction or purpose. Story recall is minimal or disorganized, with no clear beginning, middle, or end structure.</td>
                    </tr>
                    <tr>
                        <td><strong>1 – Not Yet Ready</strong></td>
                        <td>The individual does not demonstrate awareness of sound patterns, shows little interest in books or how print works, and is not yet identifying or retelling any parts of a story. Foundational literacy concepts have not yet developed.</td>
                    </tr>
                </table>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('phonologicalAwareness')">Phonological Awareness</button>
                <button class="activity-btn" onclick="showSkill('printAwareness')">Print Awareness</button>
                <button class="activity-btn" onclick="showSkill('basicStoryStructure')">Basic Story Structure</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Understanding and Using Discourse Structures",
        ageRange: "(Ages: 4 - 9 yrs and beyond)",
        skills: ["Understanding, Retelling, and Producing Narratives", "Identifying Main Idea and Detail", "Understanding, Retelling, and Providing Information", "Understanding, Retelling, and Stating Opinions"],
        content: `
            <p>At this stage, individuals move beyond basic literacy readiness and learn how different types of texts are structured. Understanding narratives, informational texts, and opinion-based writing is essential for both comprehension and writing skills. Therapy at this level focuses on helping individuals recognize, interpret, and organize information within various text structures.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate understanding and use of a variety of discourse structures in both spoken and written language by achieving at least a 4 out of 5 on the following rubric as graded by the classroom teacher over the preceding two weeks:</p>
                
                <table class="rubric-table">
                    <tr>
                        <th>Score</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><strong>5 – Mastery</strong></td>
                        <td>Demonstrates consistent, independent use of a variety of discourse structures across both spoken and written language. Narratives are coherent and well-structured with a clear beginning, middle, and end. Informational language includes clearly stated main ideas supported by relevant details. Opinions are expressed with clear reasoning and supporting evidence. These forms are used flexibly and purposefully in both conversation and writing.</td>
                    </tr>
                    <tr>
                        <td><strong>4 – Proficient</strong></td>
                        <td>Effectively uses narrative, informational, and opinion discourse in spoken language, with emerging consistency in written communication. Storytelling follows a logical sequence with some detail. Main ideas and supporting details are typically present when sharing information. Opinions are expressed clearly with basic justification. Written forms show developing organization but may lack clarity or full elaboration.</td>
                    </tr>
                    <tr>
                        <td><strong>3 – Developing</strong></td>
                        <td>Demonstrates emerging use of multiple discourse structures in spoken language, though performance may be inconsistent or incomplete. Narratives may have basic structure but limited detail or clarity. Informational content may include isolated facts without a clear main idea or organized structure. Opinions may be stated without support. Attempts at written discourse are present but minimal or disorganized.</td>
                    </tr>
                    <tr>
                        <td><strong>2 – Beginning</strong></td>
                        <td>Uses some discourse forms in spoken communication, but structure and clarity are limited. Narratives may be difficult to follow or missing key parts. Informational content may be vague or disconnected. Opinions may be expressed but without explanation. Written attempts are rare or lack recognizable structure.</td>
                    </tr>
                    <tr>
                        <td><strong>1 – Emerging</strong></td>
                        <td>Shows minimal use or understanding of distinct discourse structures in either spoken or written form. Communication lacks organization and purpose. Narratives, information sharing, and opinions may be present as isolated ideas without clear structure or intent. Written expression is not yet developed in these areas.</td>
                    </tr>
                </table>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('narrativeStructure')">Understanding, Retelling, and Producing Narratives</button>
                <button class="activity-btn" onclick="showSkill('mainIdeaDetail')">Identifying Main Idea and Detail</button>
                <button class="activity-btn" onclick="showSkill('providingInformation')">Understanding, Retelling, and Providing Information</button>
                <button class="activity-btn" onclick="showSkill('statingOpinions')">Understanding, Retelling, and Stating Opinions</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Critical Thinking for Reading and Writing",
        ageRange: "(Ages: 5 - 14 yrs and beyond)",
        skills: ["Inferencing", "Making Predictions", "Understanding abstract language", "Identifying author's purpose and perspective", "Synthesizing information from multiple sources", "Organizing and Expressing Ideas in Writing"],
        content: `
            <p>This level focuses on helping individuals use critical thinking and reasoning skills to deepen their understanding of written texts and clearly express their own ideas in writing.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate ability to use critical thinking and reasoning skills in reading and writing tasks by achieving at least a 4 out of 5 on the following rubric as graded by the classroom teacher over the preceding two weeks:</p>
                
                <table class="rubric-table">
                    <tr>
                        <th>Score</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><strong>5 – Mastery</strong></td>
                        <td>Consistently applies critical thinking skills to both reading and writing tasks. Demonstrates deep understanding of texts by making inferences, interpreting abstract language, and identifying author's purpose or perspective. Written responses are well-organized, clearly reasoned, and supported with relevant evidence or examples.</td>
                    </tr>
                    <tr>
                        <td><strong>4 – Proficient</strong></td>
                        <td>Effectively applies critical thinking to interpret and respond to texts. Shows understanding beyond basic comprehension by recognizing implied meaning or author intent. Writing is mostly organized and communicates ideas with some reasoning and support, though depth or clarity may vary.</td>
                    </tr>
                    <tr>
                        <td><strong>3 – Developing</strong></td>
                        <td>Shows emerging use of critical thinking when engaging with texts. Understands the general message but struggles to interpret deeper meaning or connect ideas. Written responses include basic ideas that are somewhat related to the text but may lack organization, reasoning, or support.</td>
                    </tr>
                    <tr>
                        <td><strong>2 – Beginning</strong></td>
                        <td>Applies limited critical thinking to reading and writing. Responses tend to be literal, with minimal interpretation or reflection. Written work may be unclear, unorganized, or lacking in logical development and supporting ideas.</td>
                    </tr>
                    <tr>
                        <td><strong>1 – Emerging</strong></td>
                        <td>Critical thinking skills are not yet evident in reading or writing tasks. Struggles to identify key ideas, make meaning from text, or express related thoughts in writing. Responses are minimal, off-topic, or absent.</td>
                    </tr>
                </table>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('inferencingSkills')">Inferencing</button>
                <button class="activity-btn" onclick="showSkill('makingPredictions')">Making Predictions</button>
                <button class="activity-btn" onclick="showSkill('abstractLanguageReading')">Understanding abstract language</button>
                <button class="activity-btn" onclick="showSkill('authorPurpose')">Identifying author's purpose and perspective</button>
                <button class="activity-btn" onclick="showSkill('synthesizingInformation')">Synthesizing information from multiple sources</button>
                <button class="activity-btn" onclick="showSkill('organizingWriting')">Organizing and Expressing Ideas in Writing</button>
            </div>
        `
    }
};

// Cycles Approach for Language Curriculum
const cyclesLanguageCurriculum = {
    beginner: {
        title: "Kindergarten Program",
        ageRange: "(Ages: 5-6 yrs)",
        skills: ["Following Directions", "Asking and Answering Questions", "Using Correct Syntax/Grammar", "Understanding and Using Vocabulary", "Telling Stories / Retelling Events", "Providing Information", "Stating Opinions"],
        content: `
            <p>A cyclical approach (also called a rotating or cycles approach) is a goal attack strategy where several therapy targets are addressed in succession for fixed intervals, rather than working on one goal until mastery or targeting all goals at once. This mirrors typical development – children gradually refine multiple language skills in parallel.</p>
            
            <p>If an individual is struggling in many areas of language, it may be beneficial to try a cyclical approach to therapy so that you can help them make progress in many areas of language simultaneously. Keep in mind though, if the individual is NOT making progress with this type of an approach, you can always switch back to a more narrow focus on one skill area or Curriculum at a time to ensure progress before moving on.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate overall growth in spoken language skills by achieving a _____ out of 21 or higher on the following rubric as assessed by the classroom teacher over the preceding two weeks.</p>
                
                <p><strong>Rubric:</strong> Circle the number that best represents this individual's skills in spoken/oral language over the most recent two weeks. Add those numbers together to obtain the total score.</p>
                
                <table class="rubric-table">
                    <tr>
                        <th>Skill Area</th>
                        <th>1 - Emerging</th>
                        <th>2 - Progressing Toward Grade Level</th>
                        <th>3 - At or Above Grade Level</th>
                    </tr>
                    <tr>
                        <td>Following Directions</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Asking and Answering Questions</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Using Correct Syntax/Grammar</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Understanding and Using Vocabulary</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Telling Stories / Retelling Events</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Providing Information</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Stating Opinions</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                </table>
                
                <p><strong>Total Score: ______ / 21</strong></p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose a level below and run through the program with this individual. Each program targets all of the skills from the rubric above in a cyclical manner. Many activities and skills are repeated across difficulty levels so don't worry too much about which level to pick. Choose the one that seems closest to their current ability level. Keep in mind that older children and teens (in middle school and high school) will likely benefit from explicit instruction in these areas so the 5th grade program can still be used for older students.</p>
            
            <p>Once you have finished one difficulty level, you can repeat it (if they need additional practice) or move up to the next grade level.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('kindergartenCycles')">Kindergarten (5-6 yrs)</button>
            </div>
        `
    },
    intermediate: {
        title: "Elementary Programs",
        ageRange: "(Ages: 6-10 yrs)",
        skills: ["1st Grade Program", "2nd Grade Program", "3rd Grade Program", "4th Grade Program"],
        content: `
            <p>Elementary level cycles programs continue to target all language skill areas while increasing complexity and academic demands appropriate for each grade level.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate overall growth in spoken language skills by achieving a _____ out of 21 or higher on the grade-appropriate rubric as assessed by the classroom teacher over the preceding two weeks.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('firstGradeCycles')">1st Grade (6-7 yrs)</button>
                <button class="activity-btn" onclick="showSkill('secondGradeCycles')">2nd Grade (7-8 yrs)</button>
                <button class="activity-btn" onclick="showSkill('thirdGradeCycles')">3rd Grade (8-9 yrs)</button>
                <button class="activity-btn" onclick="showSkill('fourthGradeCycles')">4th Grade (9-10 yrs)</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Program",
        ageRange: "(Ages: 10-11+ yrs)",
        skills: ["5th Grade Program and Beyond"],
        content: `
            <p>The advanced cycles program targets sophisticated language skills appropriate for upper elementary and beyond. This program can be used for older children and teens who need explicit instruction in these language areas.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate overall growth in spoken language skills by achieving a _____ out of 21 or higher on the advanced rubric as assessed by the classroom teacher over the preceding two weeks.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('fifthGradeCycles')">5th Grade (10-11+ yrs)</button>
            </div>
        `
    }
};

// Foundations for Healthy Voice Use Curriculum
const healthyVoiceCurriculum = {
    beginner: {
        title: "Beginner Level: Vocal Hygiene and Preventing Strain",
        ageRange: "(Ages: 5 - 12 yrs and beyond)",
        skills: ["Eliminating Vocal Abuse"],
        content: `
            <p>Taking care of your voice starts with understanding vocal hygiene and preventing strain. This level focuses on building awareness of healthy vocal habits and reducing behaviors that can lead to vocal fatigue or damage.</p>
            
            <div class="medical-disclaimer" style="background: #fff3cd; border-left: 4px solid #856404; padding: 15px; margin: 20px 0;">
                <h4 style="color: #856404;">Medical Clearance Disclaimer:</h4>
                <p>Before beginning voice therapy, it is essential for all clients referred for voice concerns to be evaluated by an Ear, Nose, and Throat (ENT) specialist. An ENT assessment ensures that any underlying medical conditions affecting the laryngeal structure and function are properly diagnosed and addressed. Voice therapy should only begin once the client has been medically cleared for treatment, as some voice issues may require medical intervention or specialized care beyond therapy.</p>
            </div>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate compliance with vocal hygiene measures in daily life by following healthy vocal habits by achieving a 4 or higher on the following rubric, as measured by teacher or caregiver.</p>
                <ul style="list-style: none;">
                    <li><strong>5 - Always:</strong> Consistently follows all vocal hygiene recommendations throughout the day, including maintaining hydration, avoiding vocally abusive behaviors, and using healthy voice strategies independently.</li>
                    <li><strong>4 - Most of the Time:</strong> Follows vocal hygiene recommendations most of the time, with only occasional lapses in hydration or vocal misuse, and self-corrects when reminded.</li>
                    <li><strong>3 - Sometimes:</strong> Inconsistently follows vocal hygiene recommendations, showing awareness but requiring frequent reminders to stay hydrated and avoid vocally abusive behaviors.</li>
                    <li><strong>2 - Rarely:</strong> Seldom follows vocal hygiene recommendations, frequently engaging in vocally abusive behaviors and needing significant prompting to use healthy voice strategies.</li>
                    <li><strong>1 - Never:</strong> Does not follow vocal hygiene recommendations, consistently engaging in vocally abusive behaviors and disregarding strategies for maintaining vocal health.</li>
                </ul>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, use the suggested activities below:</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('vocalHygiene')">Eliminating Vocal Abuse</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Breath Control and Support",
        ageRange: "(Ages: 6 - 14 yrs and beyond)",
        skills: ["Coordinating Breath with Speech"],
        content: `
            <p>Building on vocal hygiene, the intermediate level focuses on developing breath control and support to optimize voice production. Strong breath support is essential for a clear, steady, and efficient voice.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will engage in a 10-minute conversation on a familiar topic, demonstrating controlled breath support by using diaphragmatic breathing with no more than two incidents of disrupted breathing patterns (e.g., breathing mid-sentence, shallow or tension-filled breaths) as measured by the speech-language pathologist on 3 consecutive data collection days.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, use the suggested activities below:</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('breathControl')">Coordinating Breath with Speech</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Self-Monitoring and Carrying Over Voice Strategies",
        ageRange: "(Ages: 12 yrs - Adult)",
        skills: ["Making Environmental Modifications to Prevent Vocal Strain", "Using Preventative Strategies Across Environments", "Using Proper Breathing Techniques throughout Day"],
        content: `
            <p>At this level, the focus is on independent self-monitoring and carryover of vocal hygiene strategies across real-life speaking situations. Learners will apply breath support, modify their environment, and use preventative techniques without prompting to protect and preserve their vocal health.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate self-monitoring of healthy voice strategies by achieving at least a 4 out of 5 on the following self-rating scale over the preceding two weeks.</p>
                
                <h5>Self-Rating Scale: Over the past two weeks…</h5>
                <ul style="list-style: none;">
                    <li><strong>5 – Consistently Proactive:</strong> I consistently used vocal health strategies, adjusted my environment as needed, and monitored my voice and breath without needing to think twice.</li>
                    <li><strong>4 – Mostly Proactive:</strong> I used my strategies in most situations and rarely felt strain—but occasionally caught myself slipping and adjusted moving forward.</li>
                    <li><strong>3 – Increasing Awareness:</strong> I know the strategies, and I often realized afterward that I didn't use them when my voice started to feel tired or strained.</li>
                    <li><strong>2 – Inconsistent Use:</strong> I've learned some strategies but forgot to use them in the moment, and I often noticed strain before realizing I needed to do something differently.</li>
                    <li><strong>1 – Not Yet Using Tools:</strong> I didn't think much about how I was using my voice or how it felt during or after speaking, but I'm open to learning more.</li>
                </ul>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, use the suggested activities below:</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('voiceStrategyCarryover')">Self-Monitoring and Carrying Over Voice Strategies to Everyday Situations</button>
            </div>
        `
    }
};

// Voice Curriculum
const voiceCurriculum = {
    beginner: {
        title: "Beginner Level: Voice Quality Awareness",
        ageRange: "(Ages: 4 - 8 yrs and beyond)",
        skills: ["Distinguishing between normal and abnormal voice quality", "Identifying own voice quality", "Beginning voice quality modifications"],
        content: `
            <p>At this level, therapy focuses on helping individuals recognize different voice qualities and begin to modify their own voice production.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate awareness of voice quality by accurately identifying when a voice sounds "clear" versus "rough/hoarse" in recorded samples and their own voice production with 80% accuracy across three data collection sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('voiceQualityDistinction')">Distinguishing between normal and abnormal voice quality</button>
                <button class="activity-btn" onclick="showSkill('identifyingOwnVoice')">Identifying own voice quality</button>
                <button class="activity-btn" onclick="showSkill('beginningVoiceModifications')">Beginning voice quality modifications</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Voice Production Techniques",
        ageRange: "(Ages: 6 - 12 yrs and beyond)",
        skills: ["Easy onset techniques", "Breath support for voice", "Pitch and volume control", "Coordinating breathing and voicing"],
        content: `
            <p>At this stage, individuals learn specific techniques to improve voice quality and develop better control over voice production.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate improved voice quality by using appropriate breath support and easy onset techniques during structured speech tasks, resulting in a clearer, less strained voice quality in at least 7 out of 10 trials across three consecutive therapy sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('easyOnsetTechniques')">Easy onset techniques</button>
                <button class="activity-btn" onclick="showSkill('breathSupportVoice')">Breath support for voice</button>
                <button class="activity-btn" onclick="showSkill('pitchVolumeControl')">Pitch and volume control</button>
                <button class="activity-btn" onclick="showSkill('breathingVoicingCoordination')">Coordinating breathing and voicing</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Functional Voice Use",
        ageRange: "(Ages: 8 - 16 yrs and beyond)",
        skills: ["Maintaining improved voice quality in conversation", "Using voice techniques in challenging environments", "Voice use for specific purposes (presentations, singing, etc.)"],
        content: `
            <p>At the Advanced Level, individuals learn to maintain healthy, clear voice quality in all speaking situations and adapt their voice use for different purposes and environments.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will maintain improved voice quality during spontaneous conversation and in challenging speaking situations (such as noisy environments or when excited) by independently implementing voice techniques, demonstrating consistent clear voice quality in 8 out of 10 conversational exchanges across home and school environments as reported by parents and teachers.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('conversationalVoiceQuality')">Maintaining improved voice quality in conversation</button>
                <button class="activity-btn" onclick="showSkill('challengingEnvironments')">Using voice techniques in challenging environments</button>
                <button class="activity-btn" onclick="showSkill('purposefulVoiceUse')">Voice use for specific purposes (presentations, singing, etc.)</button>
            </div>
        `
    }
};

// Resonance (Nasality) Curriculum
const resonanceCurriculum = {
    beginner: {
        title: "Beginner Level: Oral-Nasal Awareness",
        ageRange: "(Ages: 4 - 8 yrs and beyond)",
        skills: ["Distinguishing between oral and nasal sounds", "Identifying hypernasality in speech", "Beginning oral focus techniques"],
        content: `
            <p>At this level, therapy focuses on helping individuals understand the difference between sounds that should be nasal versus oral and begin to modify their resonance patterns.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate awareness of oral versus nasal resonance by accurately identifying when speech sounds "too nasal" versus "just right" in recorded samples and their own speech production with 75% accuracy across three data collection sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('oralNasalDistinction')">Distinguishing between oral and nasal sounds</button>
                <button class="activity-btn" onclick="showSkill('identifyingHypernasality')">Identifying hypernasality in speech</button>
                <button class="activity-btn" onclick="showSkill('oralFocusTechniques')">Beginning oral focus techniques</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Resonance Control Techniques",
        ageRange: "(Ages: 6 - 12 yrs and beyond)",
        skills: ["Oral focus techniques for vowels and consonants", "Breath direction and airflow management", "Coordinating articulation and resonance"],
        content: `
            <p>At this stage, individuals learn specific techniques to redirect airflow and improve oral resonance for clearer speech production.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate improved oral resonance by using appropriate oral focus techniques during structured speech tasks, resulting in reduced hypernasality in at least 7 out of 10 trials of words and phrases containing oral sounds across three consecutive therapy sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('oralFocusVowelsConsonants')">Oral focus techniques for vowels and consonants</button>
                <button class="activity-btn" onclick="showSkill('breathDirectionAirflow')">Breath direction and airflow management</button>
                <button class="activity-btn" onclick="showSkill('articulationResonanceCoordination')">Coordinating articulation and resonance</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Functional Resonance in Communication",
        ageRange: "(Ages: 8 - 16 yrs and beyond)",
        skills: ["Maintaining appropriate resonance in conversation", "Adapting resonance techniques for different speaking contexts", "Self-monitoring and self-correction of resonance"],
        content: `
            <p>At the Advanced Level, individuals learn to maintain appropriate oral-nasal balance in all speaking situations and independently monitor their resonance patterns.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will maintain appropriate oral-nasal resonance balance during spontaneous conversation and various speaking tasks by independently implementing resonance techniques, demonstrating consistent appropriate resonance in 8 out of 10 conversational exchanges across home and school environments as reported by parents and teachers.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('conversationalResonance')">Maintaining appropriate resonance in conversation</button>
                <button class="activity-btn" onclick="showSkill('adaptingResonanceTechniques')">Adapting resonance techniques for different speaking contexts</button>
                <button class="activity-btn" onclick="showSkill('resonanceSelfMonitoring')">Self-monitoring and self-correction of resonance</button>
            </div>
        `
    }
};

// Prosody Curriculum
const prosodyCurriculum = {
    beginner: {
        title: "Beginner Level: Prosodic Awareness",
        ageRange: "(Ages: 4 - 8 yrs and beyond)",
        skills: ["Identifying different prosodic patterns", "Understanding the impact of rate, volume, and pitch on communication", "Beginning prosodic modifications"],
        content: `
            <p>At this level, therapy focuses on helping individuals recognize different prosodic patterns and understand how rate, volume, and pitch affect communication effectiveness.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate awareness of prosodic features by accurately identifying when speech sounds "too fast," "too slow," "too loud," "too quiet," or "robotic" in recorded samples and their own speech with 80% accuracy across three data collection sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('identifyingProsodicPatterns')">Identifying different prosodic patterns</button>
                <button class="activity-btn" onclick="showSkill('prosodicImpactAwareness')">Understanding the impact of rate, volume, and pitch on communication</button>
                <button class="activity-btn" onclick="showSkill('beginningProsodicModifications')">Beginning prosodic modifications</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Prosodic Control Techniques",
        ageRange: "(Ages: 6 - 12 yrs and beyond)",
        skills: ["Rate control techniques", "Volume regulation", "Pitch variation for meaning", "Stress and emphasis patterns"],
        content: `
            <p>At this stage, individuals learn specific techniques to control and modify their prosodic patterns for more effective communication.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate improved prosodic control by using appropriate rate, volume, and pitch variation during structured reading and speaking tasks, achieving natural-sounding prosody in at least 7 out of 10 trials across three consecutive therapy sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('rateControlTechniques')">Rate control techniques</button>
                <button class="activity-btn" onclick="showSkill('volumeRegulation')">Volume regulation</button>
                <button class="activity-btn" onclick="showSkill('pitchVariationMeaning')">Pitch variation for meaning</button>
                <button class="activity-btn" onclick="showSkill('stressEmphasisPatterns')">Stress and emphasis patterns</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Natural Prosody in Communication",
        ageRange: "(Ages: 8 - 16 yrs and beyond)",
        skills: ["Using natural prosody in conversation", "Adapting prosody for different audiences and contexts", "Expressing emotions and attitudes through prosody"],
        content: `
            <p>At the Advanced Level, individuals learn to use natural, varied prosody in all communication contexts and adapt their prosodic patterns to express different meanings and emotions.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate natural prosodic patterns during spontaneous conversation and various speaking contexts by independently using appropriate rate, volume, pitch variation, and stress patterns that enhance communication effectiveness, achieving natural-sounding prosody in 8 out of 10 conversational exchanges across home and school environments as reported by parents and teachers.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('naturalConversationalProsody')">Using natural prosody in conversation</button>
                <button class="activity-btn" onclick="showSkill('adaptingProsodyContexts')">Adapting prosody for different audiences and contexts</button>
                <button class="activity-btn" onclick="showSkill('emotionalProsody')">Expressing emotions and attitudes through prosody</button>
            </div>
        `
    }
};

// Social Awareness and Interaction Curriculum
const socialAwarenessCurriculum = {
    beginner: {
        title: "Beginner Level: Basic Social Awareness",
        ageRange: "(Ages: 2 - 6 yrs and beyond)",
        skills: ["Joint attention and shared focus", "Turn-taking in simple activities", "Responding to name and basic social cues", "Understanding personal space"],
        content: `
            <p>At this level, therapy focuses on foundational social skills that form the basis for all social communication. Children learn to share attention with others, take turns, and respond appropriately to basic social interactions.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate basic social awareness skills by engaging in joint attention activities, taking turns in structured play, and responding to their name when called, with 75% consistency across three different settings as observed by caregivers and teachers.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('jointAttention')">Joint attention and shared focus</button>
                <button class="activity-btn" onclick="showSkill('basicTurnTaking')">Turn-taking in simple activities</button>
                <button class="activity-btn" onclick="showSkill('respondingToName')">Responding to name and basic social cues</button>
                <button class="activity-btn" onclick="showSkill('personalSpace')">Understanding personal space</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Social Interaction Skills",
        ageRange: "(Ages: 4 - 10 yrs and beyond)",
        skills: ["Initiating and maintaining social interactions", "Understanding nonverbal communication", "Perspective-taking and understanding others' feelings", "Topic maintenance and relevance in conversation"],
        content: `
            <p>At this stage, children develop more complex social interaction skills, learning to understand others' perspectives and maintain appropriate social exchanges.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate improved social interaction skills by initiating appropriate social exchanges, maintaining conversations on topic for at least 3 turns, and showing awareness of others' emotions and perspectives in 7 out of 10 structured social situations across three consecutive weeks.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('initiatingSocialInteractions')">Initiating and maintaining social interactions</button>
                <button class="activity-btn" onclick="showSkill('nonverbalCommunication')">Understanding nonverbal communication</button>
                <button class="activity-btn" onclick="showSkill('perspectiveTaking')">Perspective-taking and understanding others' feelings</button>
                <button class="activity-btn" onclick="showSkill('topicMaintenance')">Topic maintenance and relevance in conversation</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Complex Social Communication",
        ageRange: "(Ages: 6 - 14 yrs and beyond)",
        skills: ["Understanding social rules and expectations in different contexts", "Managing complex social situations and conflicts", "Building and maintaining friendships", "Social problem-solving and flexibility"],
        content: `
            <p>At the Advanced Level, individuals learn to navigate complex social situations, understand context-dependent social rules, and develop skills for building meaningful relationships.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate advanced social communication skills by appropriately adapting their communication style to different social contexts (formal vs. informal, peer vs. adult), successfully navigating conflicts or misunderstandings, and maintaining positive peer relationships as evidenced by teacher and peer reports over a 4-week period.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('socialRulesContexts')">Understanding social rules and expectations in different contexts</button>
                <button class="activity-btn" onclick="showSkill('managingComplexSocialSituations')">Managing complex social situations and conflicts</button>
                <button class="activity-btn" onclick="showSkill('buildingFriendships')">Building and maintaining friendships</button>
                <button class="activity-btn" onclick="showSkill('socialProblemSolving')">Social problem-solving and flexibility</button>
            </div>
        `
    }
};

// Emotional Regulation and Self-Advocacy Curriculum
const emotionalRegulationCurriculum = {
    beginner: {
        title: "Beginner Level: Emotional Awareness",
        ageRange: "(Ages: 3 - 7 yrs and beyond)",
        skills: ["Identifying basic emotions in self and others", "Understanding the connection between emotions and behavior", "Beginning self-calming strategies", "Expressing needs and wants appropriately"],
        content: `
            <p>At this level, therapy focuses on helping children recognize and understand emotions as the foundation for emotional regulation and self-advocacy skills.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate emotional awareness by accurately identifying basic emotions (happy, sad, angry, scared) in themselves and others, and will use at least 2 appropriate strategies to express their needs or calm themselves when upset, with 70% consistency as observed by caregivers and teachers.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('identifyingEmotions')">Identifying basic emotions in self and others</button>
                <button class="activity-btn" onclick="showSkill('emotionsBehaviorConnection')">Understanding the connection between emotions and behavior</button>
                <button class="activity-btn" onclick="showSkill('beginningSelfCalming')">Beginning self-calming strategies</button>
                <button class="activity-btn" onclick="showSkill('expressingNeeds')">Expressing needs and wants appropriately</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Emotional Regulation Strategies",
        ageRange: "(Ages: 5 - 11 yrs and beyond)",
        skills: ["Using coping strategies for different emotions", "Understanding triggers and warning signs", "Self-advocacy in various settings", "Problem-solving when faced with challenges"],
        content: `
            <p>At this stage, children learn specific strategies for managing their emotions and begin to advocate for themselves in different situations.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate improved emotional regulation by independently using appropriate coping strategies when experiencing strong emotions, identifying their emotional triggers, and advocating for their needs (such as asking for a break or requesting help) in at least 8 out of 10 observed situations across home and school settings.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('copingStrategies')">Using coping strategies for different emotions</button>
                <button class="activity-btn" onclick="showSkill('understandingTriggers')">Understanding triggers and warning signs</button>
                <button class="activity-btn" onclick="showSkill('selfAdvocacySettings')">Self-advocacy in various settings</button>
                <button class="activity-btn" onclick="showSkill('problemSolvingChallenges')">Problem-solving when faced with challenges</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Independent Emotional Management",
        ageRange: "(Ages: 7 - 16 yrs and beyond)",
        skills: ["Managing complex emotions and situations", "Advocating for accommodations and support", "Supporting others' emotional needs", "Developing resilience and flexibility"],
        content: `
            <p>At the Advanced Level, individuals become independent emotional managers who can handle complex situations, advocate effectively for themselves, and support others.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate advanced emotional regulation and self-advocacy skills by independently managing complex emotional situations, effectively communicating their needs and requesting appropriate accommodations, and showing resilience when facing challenges, with consistency across multiple environments as reported by teachers, parents, and peers over a 4-week period.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('managingComplexEmotions')">Managing complex emotions and situations</button>
                <button class="activity-btn" onclick="showSkill('advocatingAccommodations')">Advocating for accommodations and support</button>
                <button class="activity-btn" onclick="showSkill('supportingOthers')">Supporting others' emotional needs</button>
                <button class="activity-btn" onclick="showSkill('developingResilience')">Developing resilience and flexibility</button>
            </div>
        `
    }
};

// Conversational Skills Curriculum
const conversationalSkillsCurriculum = {
    beginner: {
        title: "Beginner Level: Basic Conversation Skills",
        ageRange: "(Ages: 3 - 7 yrs and beyond)",
        skills: ["Greeting and saying goodbye", "Basic turn-taking in conversation", "Staying on topic for short exchanges", "Asking for help or clarification"],
        content: `
            <p>At this level, therapy focuses on fundamental conversational skills that enable children to participate in basic social exchanges.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate basic conversational skills by appropriately greeting others, taking turns in simple conversations for at least 3 exchanges, staying on topic during structured activities, and asking for help when needed, with 75% consistency across familiar settings as observed by caregivers and teachers.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('greetingSayingGoodbye')">Greeting and saying goodbye</button>
                <button class="activity-btn" onclick="showSkill('basicConversationTurnTaking')">Basic turn-taking in conversation</button>
                <button class="activity-btn" onclick="showSkill('stayingOnTopicShort')">Staying on topic for short exchanges</button>
                <button class="activity-btn" onclick="showSkill('askingForHelp')">Asking for help or clarification</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Developing Conversation Skills",
        ageRange: "(Ages: 5 - 11 yrs and beyond)",
        skills: ["Initiating conversations with peers and adults", "Maintaining conversations on various topics", "Using appropriate questions and comments", "Recognizing and repairing communication breakdowns"],
        content: `
            <p>At this stage, children develop more sophisticated conversational abilities, learning to initiate and maintain longer conversations while managing communication difficulties.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate improved conversational skills by independently initiating conversations with familiar people, maintaining topic-relevant exchanges for at least 5 turns, asking appropriate follow-up questions, and effectively repairing misunderstandings by clarifying or rephrasing, in 8 out of 10 observed conversations across multiple settings.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('initiatingConversations')">Initiating conversations with peers and adults</button>
                <button class="activity-btn" onclick="showSkill('maintainingConversations')">Maintaining conversations on various topics</button>
                <button class="activity-btn" onclick="showSkill('appropriateQuestionsComments')">Using appropriate questions and comments</button>
                <button class="activity-btn" onclick="showSkill('repairingBreakdowns')">Recognizing and repairing communication breakdowns</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Sophisticated Conversation Skills",
        ageRange: "(Ages: 7 - 16 yrs and beyond)",
        skills: ["Managing group conversations and discussions", "Understanding and using conversational humor", "Navigating disagreements and conflicts", "Adapting communication style for different audiences"],
        content: `
            <p>At the Advanced Level, individuals master complex conversational skills needed for group interactions, conflict resolution, and contextually appropriate communication.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate advanced conversational skills by successfully participating in group discussions, appropriately using and responding to humor, managing disagreements respectfully, and adapting their communication style based on the audience and context, with consistent success across academic, social, and family settings as reported by multiple observers over a 4-week period.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('groupConversations')">Managing group conversations and discussions</button>
                <button class="activity-btn" onclick="showSkill('conversationalHumor')">Understanding and using conversational humor</button>
                <button class="activity-btn" onclick="showSkill('navigatingDisagreements')">Navigating disagreements and conflicts</button>
                <button class="activity-btn" onclick="showSkill('adaptingCommunicationStyle')">Adapting communication style for different audiences</button>
            </div>
        `
    }
};

// Selective Mutism Curriculum
const selectiveMutismCurriculum = {
    beginner: {
        title: "Beginner Level: Building Comfort and Trust",
        ageRange: "(Ages: 3 - 8 yrs and beyond)",
        skills: ["Establishing comfort in therapy setting", "Nonverbal communication and interaction", "Beginning vocalization and sounds", "Building relationship with therapist"],
        content: `
            <p>At this level, therapy focuses on creating a safe, comfortable environment where the child can begin to feel secure enough to eventually communicate verbally. The emphasis is on building trust and reducing anxiety.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate increased comfort in the therapy setting by engaging in nonverbal activities, using gestures and facial expressions to communicate, and producing vocal sounds or whispers during structured activities, showing progression toward verbal communication in at least 7 out of 10 therapy sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('establishingComfort')">Establishing comfort in therapy setting</button>
                <button class="activity-btn" onclick="showSkill('nonverbalCommunicationSM')">Nonverbal communication and interaction</button>
                <button class="activity-btn" onclick="showSkill('beginningVocalization')">Beginning vocalization and sounds</button>
                <button class="activity-btn" onclick="showSkill('buildingRelationship')">Building relationship with therapist</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Gradual Verbal Communication",
        ageRange: "(Ages: 4 - 10 yrs and beyond)",
        skills: ["Speaking in whispers or quiet voice", "Communicating with familiar people in comfortable settings", "Using structured communication activities", "Managing anxiety about speaking"],
        content: `
            <p>At this stage, children begin to use their voice in very controlled, comfortable situations. The focus is on gradual exposure and building confidence in verbal communication.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate progress in verbal communication by speaking in whispers or quiet voice during structured activities, communicating verbally with at least 2 familiar people in comfortable settings, and using their voice to participate in preferred activities, showing decreased anxiety about speaking as evidenced by relaxed body language and increased verbal attempts in 8 out of 10 observed opportunities.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('speakingWhispers')">Speaking in whispers or quiet voice</button>
                <button class="activity-btn" onclick="showSkill('communicatingFamiliarPeople')">Communicating with familiar people in comfortable settings</button>
                <button class="activity-btn" onclick="showSkill('structuredCommunicationActivities')">Using structured communication activities</button>
                <button class="activity-btn" onclick="showSkill('managingAnxietySpeaking')">Managing anxiety about speaking</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Expanding Communication Contexts",
        ageRange: "(Ages: 5 - 14 yrs and beyond)",
        skills: ["Speaking in new settings and with new people", "Participating in classroom and group activities", "Developing coping strategies for challenging situations", "Maintaining progress and preventing regression"],
        content: `
            <p>At the Advanced Level, individuals work on generalizing their verbal communication skills to new environments and people, building resilience and independence in communication.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate expanded communication by speaking audibly in at least 3 different settings, participating verbally in small group activities, using coping strategies when feeling anxious about speaking, and maintaining consistent verbal communication across familiar environments, with support and encouragement as needed, as reported by teachers and caregivers over a 6-week period.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('speakingNewSettings')">Speaking in new settings and with new people</button>
                <button class="activity-btn" onclick="showSkill('participatingGroupActivities')">Participating in classroom and group activities</button>
                <button class="activity-btn" onclick="showSkill('copingStrategiesChallengingSituations')">Developing coping strategies for challenging situations</button>
                <button class="activity-btn" onclick="showSkill('maintainingProgress')">Maintaining progress and preventing regression</button>
            </div>
        `
    }
};

// Foundations for Fluency Curriculum
const foundationsFluencyCurriculum = {
    beginner: {
        title: "Beginner Level: Fluency Awareness and Acceptance",
        ageRange: "(Ages: 3 - 7 yrs and beyond)",
        skills: ["Understanding disfluencies and what they mean", "Identifying feelings about talking", "Learning about smooth and bumpy speech", "Beginning breathing awareness"],
        content: `
            <p>At this level, therapy focuses on creating awareness and acceptance of disfluencies while building a foundation for healthy attitudes about communication. Children learn that everyone has disfluencies sometimes and begin to understand their own speech patterns.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate increased awareness and acceptance of their speech by identifying smooth and bumpy speech in themselves and others, expressing their feelings about talking without distress, and using basic breathing techniques during structured activities, with 75% consistency across three therapy sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('understandingDisfluencies')">Understanding disfluencies and what they mean</button>
                <button class="activity-btn" onclick="showSkill('identifyingFeelingsTalking')">Identifying feelings about talking</button>
                <button class="activity-btn" onclick="showSkill('smoothBumpySpeech')">Learning about smooth and bumpy speech</button>
                <button class="activity-btn" onclick="showSkill('beginningBreathingAwareness')">Beginning breathing awareness</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Building Fluency Confidence",
        ageRange: "(Ages: 5 - 11 yrs and beyond)",
        skills: ["Using relaxed breathing patterns", "Developing positive self-talk about speech", "Building confidence in speaking situations", "Understanding and managing speaking anxiety"],
        content: `
            <p>At this stage, children develop confidence in their communication abilities while learning specific strategies to support fluent speech. The focus is on building resilience and positive attitudes toward speaking.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate improved fluency confidence by using relaxed breathing patterns before and during speech, expressing positive thoughts about their communication abilities, and participating actively in various speaking activities with reduced anxiety, as evidenced by self-report and observation in 8 out of 10 speaking opportunities.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('relaxedBreathingPatterns')">Using relaxed breathing patterns</button>
                <button class="activity-btn" onclick="showSkill('positiveSelfTalk')">Developing positive self-talk about speech</button>
                <button class="activity-btn" onclick="showSkill('buildingConfidenceSpeaking')">Building confidence in speaking situations</button>
                <button class="activity-btn" onclick="showSkill('managingSpeakingAnxiety')">Understanding and managing speaking anxiety</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Fluency Advocacy and Independence",
        ageRange: "(Ages: 7 - 16 yrs and beyond)",
        skills: ["Self-advocacy about fluency needs", "Managing reactions from others", "Maintaining fluency strategies independently", "Building resilience in challenging speaking situations"],
        content: `
            <p>At the Advanced Level, individuals become confident communicators who can advocate for themselves, manage others' reactions to their speech, and maintain their fluency strategies independently across all settings.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate fluency independence by advocating for their communication needs, effectively managing others' reactions to disfluencies, maintaining fluency strategies without reminders, and showing resilience in challenging speaking situations, with consistent success across home, school, and community settings as reported by multiple observers over a 6-week period.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('fluencySelfAdvocacy')">Self-advocacy about fluency needs</button>
                <button class="activity-btn" onclick="showSkill('managingReactionsOthers')">Managing reactions from others</button>
                <button class="activity-btn" onclick="showSkill('maintainingFluencyStrategies')">Maintaining fluency strategies independently</button>
                <button class="activity-btn" onclick="showSkill('resilienceChallengingSituations')">Building resilience in challenging speaking situations</button>
            </div>
        `
    }
};

// Word Finding/Word Retrieval Curriculum
const wordFindingCurriculum = {
    beginner: {
        title: "Beginner Level: Word Finding Awareness",
        ageRange: "(Ages: 4 - 8 yrs and beyond)",
        skills: ["Understanding word finding difficulties", "Using simple retrieval strategies", "Building semantic networks", "Using descriptions when stuck"],
        content: `
            <p>At this level, therapy focuses on helping children understand word finding difficulties and begin using basic strategies to retrieve words more effectively.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate improved word finding skills by recognizing when they have difficulty retrieving a word, using at least 2 basic strategies (such as describing the word or using gestures) to communicate their intended message, and building stronger word associations through categorization activities, with 70% success across structured therapy activities.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('understandingWordFinding')">Understanding word finding difficulties</button>
                <button class="activity-btn" onclick="showSkill('simpleRetrievalStrategies')">Using simple retrieval strategies</button>
                <button class="activity-btn" onclick="showSkill('buildingSemanticNetworks')">Building semantic networks</button>
                <button class="activity-btn" onclick="showSkill('usingDescriptions')">Using descriptions when stuck</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Developing Retrieval Strategies",
        ageRange: "(Ages: 6 - 12 yrs and beyond)",
        skills: ["Using phonemic cueing strategies", "Categorization and association techniques", "Circumlocution skills", "Self-cueing strategies"],
        content: `
            <p>At this stage, children learn multiple word retrieval strategies and begin to independently select and use the most effective strategy for different situations.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate effective word retrieval by independently using at least 3 different strategies (phonemic cues, semantic associations, or circumlocution) to retrieve target words during structured and conversational activities, achieving successful word retrieval in 8 out of 10 attempts across multiple settings.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('phonemicCueing')">Using phonemic cueing strategies</button>
                <button class="activity-btn" onclick="showSkill('categorizationAssociation')">Categorization and association techniques</button>
                <button class="activity-btn" onclick="showSkill('circumlocutionSkills')">Circumlocution skills</button>
                <button class="activity-btn" onclick="showSkill('selfCueingStrategies')">Self-cueing strategies</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Fluent Word Retrieval",
        ageRange: "(Ages: 8 - 16 yrs and beyond)",
        skills: ["Rapid naming and retrieval", "Managing word finding in academic tasks", "Compensatory strategies for complex vocabulary", "Building automatic retrieval patterns"],
        content: `
            <p>At the Advanced Level, individuals develop fluent word retrieval skills for academic and social success, using sophisticated strategies to manage word finding challenges in complex communication situations.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate fluent word retrieval by quickly accessing vocabulary during rapid naming tasks, effectively managing word finding during classroom discussions and academic presentations, using compensatory strategies for complex or technical vocabulary, and showing improved automatic retrieval patterns in conversation, with consistent success as reported by teachers and self-evaluation over a 4-week period.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('rapidNaming')">Rapid naming and retrieval</button>
                <button class="activity-btn" onclick="showSkill('academicWordFinding')">Managing word finding in academic tasks</button>
                <button class="activity-btn" onclick="showSkill('compensatoryStrategiesComplex')">Compensatory strategies for complex vocabulary</button>
                <button class="activity-btn" onclick="showSkill('automaticRetrievalPatterns')">Building automatic retrieval patterns</button>
            </div>
        `
    }
};

// Stuttering Curriculum
const stutteringCurriculum = {
    beginner: {
        title: "Beginner Level: Understanding Stuttering",
        ageRange: "(Ages: 3 - 8 yrs and beyond)",
        skills: ["Learning about stuttering and disfluencies", "Identifying types of disfluencies", "Building awareness without increasing anxiety", "Beginning easy speech techniques"],
        content: `
            <p>At this level, therapy focuses on helping children understand stuttering in a positive, accepting way while introducing basic techniques to support easier speech production.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate understanding of their stuttering by identifying different types of disfluencies in a matter-of-fact way, showing reduced negative reactions to stuttering moments, and beginning to use easy speech techniques (such as easy starts or stretched speech) in structured activities, with guidance and support in 7 out of 10 opportunities.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('learningAboutStuttering')">Learning about stuttering and disfluencies</button>
                <button class="activity-btn" onclick="showSkill('identifyingDisfluencies')">Identifying types of disfluencies</button>
                <button class="activity-btn" onclick="showSkill('awarenessWithoutAnxiety')">Building awareness without increasing anxiety</button>
                <button class="activity-btn" onclick="showSkill('beginningEasySpeech')">Beginning easy speech techniques</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Stuttering Modification Techniques",
        ageRange: "(Ages: 6 - 14 yrs and beyond)",
        skills: ["Easy onsets and light contacts", "Pullouts and cancellations", "Voluntary stuttering for desensitization", "Managing secondary behaviors"],
        content: `
            <p>At this stage, individuals learn specific stuttering modification techniques to manage their disfluencies more effectively and reduce the physical tension associated with stuttering.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate effective use of stuttering modification techniques by using easy onsets and light contacts to reduce tension, successfully using pullouts or cancellations to modify stuttering moments, participating in voluntary stuttering exercises to reduce fear, and decreasing secondary behaviors (such as eye blinking or head movements), in at least 8 out of 10 speaking opportunities during therapy and carryover activities.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('easyOnsetsLightContacts')">Easy onsets and light contacts</button>
                <button class="activity-btn" onclick="showSkill('pulloutsCancellations')">Pullouts and cancellations</button>
                <button class="activity-btn" onclick="showSkill('voluntaryStuttering')">Voluntary stuttering for desensitization</button>
                <button class="activity-btn" onclick="showSkill('managingSecondaryBehaviors')">Managing secondary behaviors</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Confident Communication with Stuttering",
        ageRange: "(Ages: 8 - 18 yrs and beyond)",
        skills: ["Self-advocacy and disclosure", "Managing stuttering in challenging situations", "Maintaining techniques independently", "Building identity as a confident communicator"],
        content: `
            <p>At the Advanced Level, individuals develop confidence as communicators who stutter, learning to advocate for themselves, manage their stuttering across all environments, and build a positive identity that includes stuttering.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate confident communication by appropriately disclosing their stuttering when beneficial, effectively managing stuttering in challenging situations (presentations, phone calls, job interviews), independently using their preferred fluency techniques without reminders, and expressing positive attitudes about their identity as a person who stutters, with consistent success across all communication environments as reported through self-evaluation and observer feedback over a 6-week period.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('stutteringSelfAdvocacy')">Self-advocacy and disclosure</button>
                <button class="activity-btn" onclick="showSkill('managingChallengingSituations')">Managing stuttering in challenging situations</button>
                <button class="activity-btn" onclick="showSkill('maintainingTechniquesIndependently')">Maintaining techniques independently</button>
                <button class="activity-btn" onclick="showSkill('confidentCommunicatorIdentity')">Building identity as a confident communicator</button>
            </div>
        `
    }
};

// Cluttering Curriculum
const clutteringCurriculum = {
    beginner: {
        title: "Beginner Level: Cluttering Awareness",
        ageRange: "(Ages: 6 - 10 yrs and beyond)",
        skills: ["Understanding cluttering vs. normal speech", "Recognizing fast rate and its effects", "Beginning self-monitoring", "Learning about clear speech"],
        content: `
            <p>At this level, therapy focuses on helping individuals understand cluttering and how it affects their communication, building awareness of speech rate and clarity.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate awareness of cluttering by identifying when their speech is too fast or unclear, recognizing the difference between clear and cluttered speech in recordings, beginning to self-monitor their rate during structured activities, and understanding how cluttering affects listener comprehension, with 70% accuracy across therapy sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('understandingCluttering')">Understanding cluttering vs. normal speech</button>
                <button class="activity-btn" onclick="showSkill('recognizingFastRate')">Recognizing fast rate and its effects</button>
                <button class="activity-btn" onclick="showSkill('beginningClutteringSelfMonitoring')">Beginning self-monitoring</button>
                <button class="activity-btn" onclick="showSkill('learningClearSpeech')">Learning about clear speech</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Rate and Clarity Control",
        ageRange: "(Ages: 8 - 14 yrs and beyond)",
        skills: ["Pacing and pausing strategies", "Over-articulation practice", "Organizing thoughts before speaking", "Using visual and tactile cues"],
        content: `
            <p>At this stage, individuals learn specific techniques to control their speech rate and improve clarity, developing strategies for more organized and understandable communication.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate improved speech clarity by using pacing strategies to maintain an appropriate rate, implementing strategic pauses between phrases, practicing deliberate articulation of all syllables, and organizing thoughts before speaking, achieving clear, understandable speech in 8 out of 10 conversational exchanges during structured and semi-structured activities.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('pacingPausingStrategies')">Pacing and pausing strategies</button>
                <button class="activity-btn" onclick="showSkill('overArticulationPractice')">Over-articulation practice</button>
                <button class="activity-btn" onclick="showSkill('organizingThoughts')">Organizing thoughts before speaking</button>
                <button class="activity-btn" onclick="showSkill('visualTactileCues')">Using visual and tactile cues</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Fluent and Clear Communication",
        ageRange: "(Ages: 10 - 18 yrs and beyond)",
        skills: ["Maintaining clear speech in all contexts", "Managing cluttering during high cognitive load", "Self-regulation strategies", "Advocating for communication needs"],
        content: `
            <p>At the Advanced Level, individuals achieve consistent speech clarity across all communication contexts, managing cluttering even during complex or stressful speaking situations.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will demonstrate fluent and clear communication by maintaining appropriate rate and articulation across various speaking contexts (conversation, presentations, phone calls), effectively managing cluttering during high cognitive load tasks, independently using self-regulation strategies without external cues, and advocating for their communication needs when necessary, with consistent success as measured by self-evaluation and listener feedback over a 6-week period.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('maintainingClearSpeech')">Maintaining clear speech in all contexts</button>
                <button class="activity-btn" onclick="showSkill('managingHighCognitiveLoad')">Managing cluttering during high cognitive load</button>
                <button class="activity-btn" onclick="showSkill('selfRegulationStrategies')">Self-regulation strategies</button>
                <button class="activity-btn" onclick="showSkill('advocatingCommunicationNeeds')">Advocating for communication needs</button>
            </div>
        `
    }
};

// Populate functions for curriculum-content-2.js curricula

// Populate Abstract Language (Social) Curriculum - this is the same as regular abstract language
function populateAbstractLanguageSocial() {
    const page = document.getElementById('abstractLanguageSocial');
    if (!page) return;
    
    page.innerHTML = `
        <h2>Abstract Language (Social) Curriculum</h2>
        <p>This curriculum focuses on abstract language skills within social contexts, including understanding figurative language, sarcasm, and social inferences.</p>
        
        <div class="level-selection">
            ${createLevelCard('social-abstract-beginner', 'Beginner Level: Social Literal vs. Nonliteral', '(Ages: 5 - 7 yrs and beyond)', abstractLanguageCurriculum.beginner.skills)}
            ${createLevelCard('social-abstract-intermediate', 'Intermediate Level: Social Figurative Language', '(Ages: 6 - 10 yrs and beyond)', abstractLanguageCurriculum.intermediate.skills)}
            ${createLevelCard('social-abstract-advanced', 'Advanced Level: Social Inferencing and Nuance', '(Ages: 7 - 12 yrs and beyond)', abstractLanguageCurriculum.advanced.skills)}
        </div>
        
        <div id="social-abstract-beginner-content" class="level-content">
            <div class="level-details">
                ${abstractLanguageCurriculum.beginner.content}
            </div>
        </div>
        
        <div id="social-abstract-intermediate-content" class="level-content">
            <div class="level-details">
                ${abstractLanguageCurriculum.intermediate.content}
            </div>
        </div>
        
        <div id="social-abstract-advanced-content" class="level-content">
            <div class="level-details">
                ${abstractLanguageCurriculum.advanced.content}
            </div>
        </div>
    `;
}

// Populate Literacy Foundations Curriculum
function populateLiteracyFoundationsCurriculum() {
    const page = document.getElementById('literacyFoundations');
    if (!page) return;
    
    page.innerHTML = `
        <h2>Language Foundations for Literacy Curriculum</h2>
        <p>This curriculum develops the language skills that support reading and writing success, including phonological awareness, narrative skills, and academic vocabulary.</p>
        
        <div class="level-selection">
            ${createLevelCard('literacy-beginner', literacyFoundationsCurriculum.beginner.title, literacyFoundationsCurriculum.beginner.ageRange, literacyFoundationsCurriculum.beginner.skills)}
            ${createLevelCard('literacy-intermediate', literacyFoundationsCurriculum.intermediate.title, literacyFoundationsCurriculum.intermediate.ageRange, literacyFoundationsCurriculum.intermediate.skills)}
            ${createLevelCard('literacy-advanced', literacyFoundationsCurriculum.advanced.title, literacyFoundationsCurriculum.advanced.ageRange, literacyFoundationsCurriculum.advanced.skills)}
        </div>
        
        <div id="literacy-beginner-content" class="level-content">
            <div class="level-details">
                ${literacyFoundationsCurriculum.beginner.content}
            </div>
        </div>
        
        <div id="literacy-intermediate-content" class="level-content">
            <div class="level-details">
                ${literacyFoundationsCurriculum.intermediate.content}
            </div>
        </div>
        
        <div id="literacy-advanced-content" class="level-content">
            <div class="level-details">
                ${literacyFoundationsCurriculum.advanced.content}
            </div>
        </div>
    `;
}

// Populate Cycles Language Curriculum
function populateCyclesLanguageCurriculum() {
    const page = document.getElementById('cyclesLanguage');
    if (!page) return;
    
    page.innerHTML = `
        <h2>Cycles Approach for Language Curriculum</h2>
        <p>This curriculum uses a cyclical approach to address multiple language areas systematically, rotating through different skill areas to provide comprehensive language support.</p>
        
        <div class="level-selection">
            ${createLevelCard('cycles-lang-beginner', cyclesLanguageCurriculum.beginner.title, cyclesLanguageCurriculum.beginner.ageRange, cyclesLanguageCurriculum.beginner.skills)}
            ${createLevelCard('cycles-lang-intermediate', cyclesLanguageCurriculum.intermediate.title, cyclesLanguageCurriculum.intermediate.ageRange, cyclesLanguageCurriculum.intermediate.skills)}
            ${createLevelCard('cycles-lang-advanced', cyclesLanguageCurriculum.advanced.title, cyclesLanguageCurriculum.advanced.ageRange, cyclesLanguageCurriculum.advanced.skills)}
        </div>
        
        <div id="cycles-lang-beginner-content" class="level-content">
            <div class="level-details">
                ${cyclesLanguageCurriculum.beginner.content}
            </div>
        </div>
        
        <div id="cycles-lang-intermediate-content" class="level-content">
            <div class="level-details">
                ${cyclesLanguageCurriculum.intermediate.content}
            </div>
        </div>
        
        <div id="cycles-lang-advanced-content" class="level-content">
            <div class="level-details">
                ${cyclesLanguageCurriculum.advanced.content}
            </div>
        </div>
    `;
}

// BT-8008 - Populate Cycles Phonology Curriculum
function populateCyclesPhonologyCurriculum() {
    const page = document.getElementById('cyclesPhonology');
    if (!page) return;
    
    page.innerHTML = `
        <h2>The Cycles Approach for Phonology</h2>
        <p style="font-style: italic;">(From Barbara Hodson's Work)</p>
        
        <div class="curriculum-overview">
            <p>The cycles approach to speech therapy is intended for children who meet the following criteria:</p>
            <ul>
                <li>Highly unintelligible (very difficult to understand)</li>
                <li>Frequently leave out or omit speech sounds</li>
                <li>Replace some sounds with other sounds</li>
                <li>Don't use very many different consonant sounds</li>
            </ul>
            <p>The cycles approach treats children who use a lot of different phonological processes (error patterns) by targeting each process for a short amount of time and then cycling through other phonological processes.</p>
        </div>
            
            <div class="materials-section">
                <h3>Materials:</h3>
                <p>Here are the materials to use for the Cycles Approach to Phonology (Primary Set of Targets):</p>
                
                <div class="download-card">
                    <h4>Cycles Approach Materials</h4>
                    <p>Download the complete Cycles Approach materials including target word lists, progress tracking sheets, and therapy activity guides.</p>
                    <button class="download-btn" onclick="generateFunctionalPDF('cycles-materials')">Download Cycles Materials</button>
                </div>
            </div>
            
            <div class="training-section">
                <h3>Training:</h3>
                <p>This approach is more effective if you have been trained on how to do the therapy. Click the button below to take our Cycles Approach for Phonology course.</p>
                
                <button class="course-btn" onclick="window.open('https://speechandlanguagekids.com/cycles-approach-course', '_blank')">Take the Cycles Approach for Phonology Course</button>
            </div>
            
            <div class="level-selection" style="display:none;">
                <div class="level-card">
                    <h4>Primary Patterns</h4>
                    <p class="age-range">Initial cycle targets</p>
                    <ul>
                        <li>Final consonants</li>
                        <li>Initial consonants</li>
                        <li>Syllableness</li>
                        <li>/s/ clusters</li>
                    </ul>
                    <button class="level-btn" onclick="showCurriculumLevel('cyclesPhonology', 'advanced')" data-bt="8008">
                        Access Advanced Level
                    </button>
                </div>
            </div>
            
            <div class="resources-section">
                <h3>Resources</h3>
                <div class="resource-buttons">
                    <button class="resource-btn" onclick="downloadResource('cyclesPhonology', 'planning')" data-bt="8008">
                        📋 Cycle Planning Worksheets
                    </button>
                    <button class="resource-btn" onclick="downloadResource('cyclesPhonology', 'wordlists')" data-bt="8008">
                        📝 Target Word Lists
                    </button>
                    <button class="resource-btn" onclick="downloadResource('cyclesPhonology', 'assessment')" data-bt="8008">
                        📊 Progress Monitoring Tools
                    </button>
                    <button class="resource-btn" onclick="downloadResource('cyclesPhonology', 'stimulability')" data-bt="8008">
                        🔍 Stimulability Assessment
                    </button>
                    <button class="resource-btn" onclick="downloadResource('cyclesPhonology', 'home')" data-bt="8008">
                        🏠 Home Practice Materials
                    </button>
                    <button class="resource-btn" onclick="downloadResource('cyclesPhonology', 'protocols')" data-bt="8008">
                        ⏰ Cycle Duration Protocols
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Export for use in main file
window.additionalCurriculumData = {
    abstractLanguage: abstractLanguageCurriculum,
    grammarSyntax: grammarSyntaxCurriculum,
    vocabulary: vocabularyCurriculum,
    literacyFoundations: literacyFoundationsCurriculum,
    cyclesLanguage: cyclesLanguageCurriculum,
    healthyVoice: healthyVoiceCurriculum,
    voice: voiceCurriculum,
    resonance: resonanceCurriculum,
    prosody: prosodyCurriculum,
    socialAwareness: socialAwarenessCurriculum,
    emotionalRegulation: emotionalRegulationCurriculum,
    conversationalSkills: conversationalSkillsCurriculum,
    selectiveMutism: selectiveMutismCurriculum,
    foundationsFluency: foundationsFluencyCurriculum,
    wordFinding: wordFindingCurriculum,
    stuttering: stutteringCurriculum,
    cluttering: clutteringCurriculum
};