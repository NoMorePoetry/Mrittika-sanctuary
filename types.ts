
export enum ArchetypeId {
  LUNAR_EMPATH = 'lunar_empath',
  QUIET_FLAME = 'quiet_flame',
  GENTLE_STORM = 'gentle_storm',
  HIDDEN_WILDFLOWER = 'hidden_wildflower',
  VELVET_ANCHOR = 'velvet_anchor',
  STARLIT_WEAVER = 'starlit_weaver',
  CRYSTAL_MIRROR = 'crystal_mirror',
  OCEANIC_SAGE = 'oceanic_sage'
}

export interface Archetype {
  id: ArchetypeId;
  name: string;
  tagline: string;
  description: string;
  strengths: string[];
  shadow: string;
  element: string;
  colors: string[];
}

export interface MoodAnalysisResult {
  emotionalTone: string;
  keyDesire: string;
  hiddenFear: string;
  validatingStatement: string;
}

export interface RelationshipInsight {
  dynamic: string;
  needs: string;
  misunderstanding: string;
}

export interface CompatibilityResult {
  synergyScore: number; // 0-100
  emotionalConnection: string;
  challengeArea: string;
  advice: string;
}

export interface AuraResult {
  colorName: string;
  colorCode: string; // tailwind class or hex
  meaning: string;
  prediction: string;
}

export interface MessageAnalysisResult {
  hiddenEmotion: string;
  realMeaning: string;
  redFlagRating: 'Safe' | 'Caution' | 'Danger';
  advice: string;
}

export interface FaceScanResult {
  vibe: string;
  hiddenEmotion: string;
  romanticGlow: string;
  soulMessage: string;
  stressLevel: number; // 0-100
  emotionalFatigue: number; // 0-100
  confidence: number; // 0-100
}

export interface Crystal {
  id: string;
  name: string;
  meaning: string;
  color: string;
  unlocked: boolean;
  unlockCondition: string;
}

export interface ConflictResult {
  boundaryStatus: 'Respected' | 'Crossed' | 'Undefined';
  analysis: string;
  hiddenMeaning: string;
  advice: string;
}

export interface InnerChildInsight {
  insight: string;
}

export interface UserState {
  name: string;
  archetype: ArchetypeId | null;
  isPremium: boolean;
  theme: 'dark' | 'light';
  zodiacSign?: string;
  history: {
    moods: { date: string; result: MoodAnalysisResult }[];
  };
  inventory: Crystal[];
}
