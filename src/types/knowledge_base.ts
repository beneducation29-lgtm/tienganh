/**
 * Types & Schema for Tiếng Anh 10 - Global Success AI Knowledge Base
 * Derived directly from textbook source material (NXB Giáo Dục Việt Nam & Pearson)
 */

export type ReviewStatus = 'verified' | 'needs_review';

export interface VocabularyItem {
  id: string;
  word: string;
  partOfSpeech: string; // e.g. 'n', 'v', 'adj', 'adv', 'phr v', 'n phr'
  pronunciation: string; // IPA phonetics from textbook glossary / language section
  vietnameseMeaning: string; // Tiếng Việt chuẩn theo sách giáo khoa
  simpleEnglishDefinition: string; // Định nghĩa ngắn gọn dễ hiểu từ ngữ cảnh bài học
  exampleSentence: string; // Câu ví dụ chuẩn trích từ SGK hoặc cấu trúc bài học
  unit: number; // 1 - 10
  lesson: 'Getting Started' | 'Language' | 'Reading' | 'Speaking' | 'Listening' | 'Writing' | 'Communication and Culture / CLIL' | 'Looking Back';
  sourceContext: string; // Đoạn trích văn cảnh xuất hiện cụ thể trong bài học
  status: ReviewStatus;
}

export interface PronunciationFocus {
  topic: string; // e.g., 'Consonant blends /br/, /kr/, and /tr/', 'Stress in two-syllable words'
  rulesAndTips: string[];
  targetSoundsOrPatterns: string[];
  practiceWords: { word: string; patternOrBlend: string; phonetic?: string }[];
  practiceSentences: string[];
}

export interface GrammarStructure {
  id: string;
  title: string;
  rules: string[];
  formulas: { label: string; structure: string; notes?: string }[];
  examplesFromBook: string[];
  commonMistakesOrNotes?: string[];
  exercisesInBook: {
    task: string;
    sampleItem: string;
  }[];
}

export interface SkillSectionReading {
  title: string;
  subtopic: string;
  passageText: string;
  vocabularyInFocus: string[];
  comprehensionFocus: string[]; // Các dạng câu hỏi: main idea, specific details, vocabulary matching
  discussionQuestion?: string;
}

export interface SkillSectionSpeaking {
  title: string;
  topic: string;
  usefulExpressions: { category: string; expressions: string[] }[];
  discussionPrompts: string[];
  sampleModelOrDialogue?: string;
}

export interface SkillSectionListening {
  title: string;
  context: string;
  audioContentSummary: string;
  listeningTasks: string[];
  discussionQuestion?: string;
}

export interface SkillSectionWriting {
  title: string;
  genre: string; // e.g. 'Email about family routines', 'Paragraph about benefits of an invention'
  wordCountTarget: string; // e.g. '120 - 150 words'
  writingOutline: { step: string; prompt: string }[];
  usefulExpressions: string[];
}

export interface SectionCommunication {
  everydayEnglish: {
    function: string; // e.g. 'Expressing opinions', 'Making and responding to suggestions'
    usefulExpressions: { category: string; phrases: string[] }[];
    sampleDialogue: string;
  };
}

export interface SectionCultureOrCLIL {
  type: 'Culture' | 'CLIL';
  title: string;
  summary: string;
  keyFacts: string[];
  comparisonOrDiscussionTask: string;
}

export interface SectionLookingBack {
  pronunciationReview: string[];
  vocabularyReviewTask: string;
  grammarReviewTask: string;
}

export interface SectionProject {
  title: string;
  aim: string;
  guidingQuestionsOrSteps: string[];
  outputType: string; // presentation, survey report, poster
}

export interface UnitRelationships {
  coreThemeInterconnection: string;
  languageToSkillsLink: string; // Từ vựng và ngữ pháp được áp dụng vào 4 kỹ năng như thế nào
  progressionFlow: string; // Mạch phát triển từ Getting Started -> Language -> 4 Skills -> CLIL -> Looking Back -> Project
}

export interface UnitKnowledgeBase {
  unitNumber: number;
  title: string;
  topic: string;
  theme: 'Our Lives' | 'Our Society' | 'Our Environment' | 'Our Future';
  objectives: {
    language: string[];
    skills: string[];
    lifeSkillsAndCulture: string[];
  };
  relationships: UnitRelationships;
  vocabulary: VocabularyItem[];
  pronunciation: PronunciationFocus;
  grammar: GrammarStructure[];
  reading: SkillSectionReading;
  speaking: SkillSectionSpeaking;
  listening: SkillSectionListening;
  writing: SkillSectionWriting;
  communication: SectionCommunication;
  culture: SectionCultureOrCLIL;
  lookingBack: SectionLookingBack;
  project: SectionProject;
}

export interface BookKnowledgeBase {
  bookTitle: string;
  grade: number;
  curriculum: string;
  publisher: string;
  authors: string[];
  themes: {
    name: string;
    units: number[];
  }[];
  units: UnitKnowledgeBase[];
}
