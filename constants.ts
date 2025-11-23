
import { Archetype, ArchetypeId, Crystal } from './types';
import { UserState } from './types';

export const INITIAL_CRYSTALS: Crystal[] = [
  { id: 'rose_quartz', name: 'Rose Quartz', meaning: 'Unconditional Love', color: 'text-rose-300', unlocked: false, unlockCondition: 'Complete your first mood analysis.' },
  { id: 'amethyst', name: 'Amethyst', meaning: 'Intuition & Peace', color: 'text-purple-300', unlocked: false, unlockCondition: 'Complete 3 daily reflections.' },
  { id: 'moonstone', name: 'Moonstone', meaning: 'New Beginnings', color: 'text-blue-200', unlocked: true, unlockCondition: 'Welcome Gift' }, // Default unlocked
  { id: 'citrine', name: 'Citrine', meaning: 'Joy & Abundance', color: 'text-amber-300', unlocked: false, unlockCondition: 'Check your Aura 3 times.' },
  { id: 'obsidian', name: 'Obsidian', meaning: 'Protection', color: 'text-stone-400', unlocked: false, unlockCondition: 'Do a Shadow Work session.' },
];

export const defaultUserState: UserState = {
  name: '',
  archetype: null,
  isPremium: true, // UNLOCKED FOR EVERYONE
  theme: 'dark',
  history: { moods: [] },
  inventory: INITIAL_CRYSTALS
};

export const ARCHETYPES: Record<ArchetypeId, Archetype> = {
  [ArchetypeId.LUNAR_EMPATH]: {
    id: ArchetypeId.LUNAR_EMPATH,
    name: "Lunar Empath",
    tagline: "The intuitive soul who feels the tides of others.",
    description: "You often find yourself carrying the emotional weight of those around you, sensing their needs before they even speak them. You have a deep need for solitude to recharge, yet you fear disconnection. People often mistake your quiet observation for aloofness, but in reality, you are simply feeling everything at once.",
    strengths: ["Intuitive", "Nurturing", "Deep Listener"],
    shadow: "Absorbing others' pain as your own.",
    element: "Water",
    colors: ["bg-slate-800", "text-blue-200"]
  },
  [ArchetypeId.QUIET_FLAME]: {
    id: ArchetypeId.QUIET_FLAME,
    name: "Quiet Flame",
    tagline: "The steady warmth that burns resiliently.",
    description: "You possess an inner strength that doesn't need to shout to be heard. You are the rock for your friends, the one who stays calm in chaos. However, you often suppress your own needs to maintain harmony, leaving a part of your own passion unexpressed.",
    strengths: ["Resilient", "Consistent", "Warm"],
    shadow: "Burning out while lighting the way for others.",
    element: "Fire",
    colors: ["bg-rose-950", "text-rose-200"]
  },
  [ArchetypeId.GENTLE_STORM]: {
    id: ArchetypeId.GENTLE_STORM,
    name: "Gentle Storm",
    tagline: "A force of nature wrapped in softness.",
    description: "There is a beautiful complexity to you. You crave peace and tranquility, yet your mind is often racing with ideas and emotions. You are capable of immense transformation and aren't afraid of change, even if it feels chaotic to others.",
    strengths: ["Transformative", "Passionate", "Dynamic"],
    shadow: "Feeling overwhelmed by your own intensity.",
    element: "Air",
    colors: ["bg-indigo-900", "text-indigo-200"]
  },
  [ArchetypeId.HIDDEN_WILDFLOWER]: {
    id: ArchetypeId.HIDDEN_WILDFLOWER,
    name: "Hidden Wildflower",
    tagline: "Beauty that blooms in the most unexpected places.",
    description: "You are unique and march to the beat of your own drum, though you often hide your true eccentricity to fit in. You have a rich inner world that few get to see. You flourish when you stop trying to be a garden rose and embrace your wild nature.",
    strengths: ["Unique", "Creative", "Adaptive"],
    shadow: "Fearing that your true self is 'too much'.",
    element: "Earth",
    colors: ["bg-emerald-900", "text-emerald-200"]
  },
  [ArchetypeId.VELVET_ANCHOR]: {
    id: ArchetypeId.VELVET_ANCHOR,
    name: "Velvet Anchor",
    tagline: "Soft to the touch, unshakeable at the core.",
    description: "You provide a sense of safety and luxury to everyone you meet. You value stability and comfort, creating beautiful environments. However, you can be stubborn when your security is threatened, digging your heels in deeper.",
    strengths: ["Stable", "Loyal", "Sensual"],
    shadow: "Resistance to necessary change.",
    element: "Earth",
    colors: ["bg-stone-900", "text-amber-200"]
  },
  [ArchetypeId.STARLIT_WEAVER]: {
    id: ArchetypeId.STARLIT_WEAVER,
    name: "Starlit Weaver",
    tagline: "Connecting dots that others cannot see.",
    description: "You are a visionary, always looking at the bigger picture. You see connections between people and events that seem unrelated to others. You dream big, but sometimes struggle to ground those dreams in reality.",
    strengths: ["Visionary", "Optimistic", "Connected"],
    shadow: "Getting lost in the clouds.",
    element: "Ether",
    colors: ["bg-violet-950", "text-violet-200"]
  },
  [ArchetypeId.CRYSTAL_MIRROR]: {
    id: ArchetypeId.CRYSTAL_MIRROR,
    name: "Crystal Mirror",
    tagline: "Reflecting the truth with clarity and grace.",
    description: "You value honesty and clarity above all else. People come to you for the truth, even when it's hard to hear. You have a sharp mind, but your heart is tender. You sometimes isolate yourself to protect your fragile clarity from the murky confusion of the world.",
    strengths: ["Honest", "Clear-minded", "Just"],
    shadow: "Being overly critical of yourself and others.",
    element: "Ice",
    colors: ["bg-cyan-950", "text-cyan-200"]
  },
  [ArchetypeId.OCEANIC_SAGE]: {
    id: ArchetypeId.OCEANIC_SAGE,
    name: "Oceanic Sage",
    tagline: "Deep wisdom gathered from emotional depths.",
    description: "You have an old soul. You've experienced much, and you use that experience to guide others. You are calm, mysterious, and deep. Sometimes, you feel burdened by the wisdom you carry, wishing for a lighter, more carefree existence.",
    strengths: ["Wise", "Calm", "Mysterious"],
    shadow: "Detachment from the present moment.",
    element: "Water",
    colors: ["bg-teal-950", "text-teal-200"]
  }
};

export const UNIVERSAL_TRUTHS = [
  "You have a great deal of unused capacity which you have not turned to your advantage.",
  "At times you are extroverted, affable, sociable, while at other times you are introverted, wary, reserved.",
  "You pride yourself as an independent thinker and do not accept others' statements without satisfactory proof.",
  "You have a tendency to be critical of yourself.",
  "Security is one of your major goals in life."
];

export const ZODIAC_SIGNS = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];
