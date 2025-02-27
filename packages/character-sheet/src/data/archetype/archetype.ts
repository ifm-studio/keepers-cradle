import { Drive, Life, Spirit } from '../gauges';
import { Stats } from '../stats';
import { Effect, Operator, Trait } from '../trait';
import { Discipline } from '../discipline';
import { EffectTag } from '../tag.effect';
import { Summon } from '../skill/summon.skill';
import { Outfit } from '../gear/outfit.gear';
import { Slot } from '../gear/slot';
import { Weapon } from '../gear/weapon.gear';
import { Affiliation } from '../affiliations';

/**
 * Base character information that does not change as the game progress
 * and therefore is not stored in database.
 * contains potentialGeatSlots, potentialDisciplines, etc.
 *
 * only contains archetypes that can become character sheets; would not include a tree, etc.
 */
export namespace Archetype {
  export type Type = {
    name: string;
    surname?: string;
    age?: number;
    height?: string;
    weight?: number;
    gender?: string;
    element?: string;
    occupation?: string;
    characteristics?: string;
    description?: string;
    history?: string;
    backstory?: string;
    experience?: number;
    alias?: string[];
    symbolizes?: string[];

    biological?: {
      race?: string;
      gender?: string;
      age?: string;
      height?: string;
      weight?: string;
      hairColor: string;
      eyeColor: string;
    };

    relationships?: string[];
    affiliation?: Affiliation.Type[];

    // these seem more like they loaded or determined for player characters
    life?: Life;
    drive?: Drive;
    spirit?: Spirit;
    stats?: Stats;

    traits?: Trait[];

    potentialDisciplines?: Discipline.Type[];
    potentialOutfits?: Outfit.Type[];
    potentialGeatSlots?: Slot[];
    summonCompatibility?: Summon.Type[];
    weaponCompatibility?: Weapon.Category[];

    // compatibility [
    // disciplines?: Discipline[];
    // outfits?: Outfit[];
    // geatSlots?: GearSlot[];
    // summon?: Summon[];
    // ]

    // loot?: Gear.Item[];
  };

  export const MOTHER: Type = {
    name: 'Mother',
    alias: ['Lady of the Vase', 'Ashes', 'Dust'],
    backstory:
      'She is known only as Mother. ' +
      'She often can be found carring things back and forth from the garden. ' +
      'She is mother to both Vallon and Meeku. ' +
      'Mother knits Meeku a red scarf. ' +
      'Mother dies and is turned to ashes during act one. ' +
      "Meeku carries Mother's ashes around his waist with him in a goard. ",
  };

  /**
   * Three Keepers
   */
  export const MISCHIEVOUS_PIEBALD: Type = {
    name: 'Mischievous',
    surname: 'Piebald',
    alias: ['Keeper of Law', 'Mischief'],
    backstory: 'Governs the logical of this realm.',
    symbolizes: ['Law', 'Causality', 'Absolute'],
    affiliation: [Affiliation.THE_KEEPERS],
    description:
      'A black and white cat. ' +
      'His face is primarly white with a black noise. ' +
      'He has emerald yellowish greenish eyes. ' +
      'His ears are black. ' +
      'His fur is short. ' +
      'His tail is black. ',
    // a red colored thread can be used to control him
    potentialDisciplines: [Discipline.SAGE, Discipline.GUARDIAN],
  };

  export const JANUS_PERSIAN: Type = {
    name: 'Janus',
    surname: 'Persian',
    description: 'An orange old persian cat',
    backstory: 'Governs the flow of time the one has been in this state',
    alias: ['Keeper of Time', 'Wise-Kitty', 'Old Coat'],
    symbolizes: ['Time'],
    affiliation: [Affiliation.THE_KEEPERS],
    potentialDisciplines: [Discipline.SAGE, Discipline.GUARDIAN],
  };

  export const LOOMEE_ANGORA: Type = {
    name: 'Loomee',
    surname: 'Angora',
    description:
      'A white angora cat. ' +
      'In human form a light blonde girl wearing white linen',
    backstory:
      'She governs and protects the ones heart to make sure it is not lost. ' +
      'A girl created when the Song Maiden left her post to become human.',
    alias: ['Keeper of Heart', 'Song Maiden', 'Mom'],
    symbolizes: ['Chastity'],
    affiliation: [Affiliation.THE_KEEPERS],
    potentialDisciplines: [
      Discipline.CHEERLEADER,
      Discipline.MAIDEN,
      Discipline.KEEPER,
      Discipline.COOK,
      Discipline.HEALER,
      Discipline.SAGE,
      Discipline.GUARDIAN,
    ],

    summonCompatibility: [Summon.FELIX],
    weaponCompatibility: [Weapon.Category.PENDANT],
  };

  /**
   * Three Destroyer
   */

  export const OUERN_ONI: Type = {
    name: 'Ouern',
    surname: 'Oni',
    symbolizes: ['Destroyer of Time'],
    alias: ['The Black Plague', 'Skyfall', 'Timestopper', 'Standstill'],
    backstory:
      'Often sang a song similar to Tumbalalaika to his sons when they were young. ' +
      'Rumored to be end cause the end of all existenance. ' +
      'Whereabouts unknown. ',
    history:
      'He went is sealed inside the Floating Island waiting for his sons' +
      'When his eyes are open only greater beings can move the rest of the world stands still.' +
      'He possess sight beyond sight; is able to perseve the world from afar' +
      'He is responsible for battle his son win where time seems to stand still. ',
    affiliation: [Affiliation.THE_DESTROYERS, Affiliation.SOLIDER_FORCES],
    description: 'White hair. Has a prominent tattoo FTW',
    potentialDisciplines: [Discipline.SOLIDER, Discipline.XSOLIDER],
  };

  export const VALLON_ONI: Type = {
    name: 'Vallon',
    surname: 'Oni',
    symbolizes: [
      'Destroyer of Heart',
      'Loveless Lover',
      'Heartache',
      'Heart Wrench',
    ],
    description: 'White hair',
    affiliation: [
      Affiliation.THE_DESTROYERS,
      Affiliation.VALLONS_SEVEN,
      Affiliation.SOLIDER_FORCES,
    ],
    backstory:
      'Grow up with Meeku. ' +
      'Left to become a Solider. ' +
      'Disappeared from Solider. ',
    // 'Sets out in search of his father to freeze all time. ' +
    // 'Raises the floating island. ' +
    // 'Taints the Keeper of Heart. ' +
    // 'Unleases Ouren. '
    history:
      'Women easily fall in love with Vallon. ' +
      'Vallon is not interested in love and those who love him have their heart painfully broken.' +
      "It's not his fault; it's an effect he has on others. " +
      'The Devils love him because of the heartache he causes them. ',
    potentialDisciplines: [Discipline.SOLIDER, Discipline.XSOLIDER],
    weaponCompatibility: [Weapon.Category.SWORD],
  };

  export const MEEKU_ONI: Type = {
    name: 'Meeku',
    surname: 'Oni',
    symbolizes: ['Destroyer of Law'],
    alias: ['Kid', 'Brother'],
    backstory: 'A boy who has lost his past',
    history:
      'Has the ability to break the fundamental laws of the world. ' +
      'Trapped by the observed logic. ' +
      `He believes in the veil the ${Affiliation.THE_KEEPERS} made is real. ` +
      'As a Berserker he uses a mask to break the veil and tap into his limitless ability',
    affiliation: [Affiliation.THE_DESTROYERS, Affiliation.SOLIDER_FORCES],
    potentialDisciplines: [
      Discipline.SOLIDER,
      Discipline.XSOLIDER,
      Discipline.BERSERKER,
      Discipline.ONI,
      Discipline.HERO,
    ],
    traits: [
      {
        // learns quickly
        tag: EffectTag.EXPERIENCE,
        modifier: Effect.WEAK,
        quantity: 1.2,
        operator: Operator.MULTIPLY,
      },
    ],
    potentialOutfits: [Outfit.TSHIRT_AND_JEANS],
    summonCompatibility: [Summon.VACHEL],
    weaponCompatibility: [
      Weapon.Category.SHIELD_SWORD,
      Weapon.Category.SWORD,
      Weapon.Category.BROAD_SWORD,
    ],
  };

  /**
   * Seven Virtues
   */
  export const ARINOTH_DIYATH: Type = {
    name: 'Arinoth',
    surname: 'Diyath',
    symbolizes: ['Patience'],
    affiliation: [],
    backstory: '',
    potentialDisciplines: [],
    weaponCompatibility: [Weapon.Category.STAFF],
  };

  export const FAYE_IMAGO: Type = {
    name: 'Faye',
    surname: 'Imago',
    backstory:
      'A young girl with light violet hair who weilds magic and studies history',
    symbolizes: ['Charity'],
    affiliation: [Affiliation.MAGI_ORDER],
    alias: ['Bookworm'],
    potentialDisciplines: [
      Discipline.WIZARD,
      Discipline.HISTORIAN,
      Discipline.MAGI,
      Discipline.MAGI_BLACK,
      Discipline.MAGI_BLUE,
      Discipline.MAGI_BROWN,
      Discipline.MAGI_GREEN,
      Discipline.MAGI_PINK,
      Discipline.MAGI_PURPLE,
      Discipline.MAGI_WHITE,
      Discipline.MAGI_YELLOW,
    ],
    summonCompatibility: [Summon.LYRE],
    weaponCompatibility: [Weapon.Category.STAFF],
  };

  export const GAALI_RUNEWIN: Type = {
    name: 'Gaali',
    surname: 'Runewin',
    symbolizes: ['Temperance'],
    description: 'A white haired thin teenager',
    backstory:
      'A prince with little interest in becoming king. Instead, he lives for testing his sword in raw danger.',
    affiliation: [],
    potentialDisciplines: [
      Discipline.BARD,
      Discipline.DUELIST,
      Discipline.KNIGHT,
      Discipline.RUNE_KING,
      Discipline.ROYALTY,
      // - Nobel
      // - Duke
      // - King
      Discipline.HERO,
      Discipline.WARRIOR,
    ],
    traits: [
      {
        // innate prociency with sword
        tag: EffectTag.SWORD,
        modifier: Effect.RESIST,
        quantity: 0.5,
        operator: Operator.DIVIDE,
      },
    ],
    weaponCompatibility: [Weapon.Category.RAPIER],
  };

  export const GUNTER_STONEWELL: Type = {
    name: 'Gunter',
    surname: 'Stonewell',
    symbolizes: ['Humility'],
    description:
      'A large old man with grey hair. ' +
      'Looks like they spend their entire life in battle. ',
    backstory: 'A solider for life',
    affiliation: [Affiliation.SOLIDER_FORCES],
    potentialDisciplines: [
      Discipline.GAURD,
      Discipline.BODY_BUILDER,
      Discipline.COMMANDER,
    ],
    summonCompatibility: [Summon.SCRIBBLES],
    weaponCompatibility: [Weapon.Category.TWO_HANDED_AXE],
  };

  export const MALACE_TSIA: Type = {
    name: 'Malace',
    surname: 'Tsia',
    alias: [
      'Black',
      'Sacrifice',
      'Ouroboros',
      'The Bringer of Death',
      'Dragon',
    ],
    symbolizes: ['Despair'],
    backstory:
      'As a child, his people scarificed him to save themselves. ' +
      'They sewed the demons plaguing the village into his skin. ' +
      'The demons were drawn to his purity. ',
    affiliation: [Affiliation.CATCHERS],
    potentialDisciplines: [
      Discipline.GYMNAST,
      Discipline.POSSESSED,
      Discipline.SCOUT,
      Discipline.OUROBOROS,
      Discipline.SUMMONER,
      Discipline.ROUGE,
    ],
    traits: [
      {
        // Can single handedly carry party through foes of darkness due to
        // his darkness healing trait.
        tag: EffectTag.DARKNESS,
        modifier: Effect.HEAL,
        percent: 80,
      },
    ],
    potentialOutfits: [Outfit.OFFICERS_UNIFORM],
    summonCompatibility: [Summon.OURUBORUS, Summon.MISCHIEVOUS],
    weaponCompatibility: [Weapon.Category.KNIFE, Weapon.Category.DAGGER],
  };

  export const PENNY_KIBBUTZ: Type = {
    name: 'Penny',
    surname: 'Kibbutz',
    alias: ['Crazy Chick'],
    description: 'A red head girl',
    age: 22,
    height: '5ft 8',
    weight: 120,
    gender: 'Female',
    element: 'Fire',
    occupation: 'Mercenary',
    characteristics:
      'Strong, defiant, kills without question. ' +
      'Motivated primarly by money. ',
    backstory: '',
    symbolizes: ['Kindness', 'Independance'],
    affiliation: [Affiliation.NINJA],
    potentialDisciplines: [
      Discipline.NINJA,
      Discipline.ASSASSIN,
      Discipline.AMBER_ASSASSIN,
      Discipline.ELITE_ASSASSIN,
      Discipline.THIEF,
    ],
    traits: [
      // **Battle +**: Attack, and Techniques.\\
      // **Battle -**: Magic.\\
      {
        // has built up tolerance to poisons
        tag: EffectTag.POISON,
        modifier: Effect.IMMUNE,
      },
    ],
    summonCompatibility: [Summon.HERALDIC_LION],
    weaponCompatibility: [Weapon.Category.DUAL_KYOKETSU_SHOGE],
  };

  export const TRAEZ_UTHSHA: Type = {
    name: 'Traez',
    surname: 'Uthsha',
    backstory: '',
    symbolizes: ['Diligence'],
    affiliation: [Affiliation.REBEL],
    potentialDisciplines: [
      Discipline.ENGINEER,
      Discipline.MECHANIC,
      Discipline.LIGHTENING_WARRIOR,
      Discipline.REBEL,
    ],
    summonCompatibility: [Summon.SANDY],
    weaponCompatibility: [Weapon.Category.BOOMERANG],
  };

  /**
   * Seven Sins
   */
  export const VOID: Type = {
    name: 'Void',
    affiliation: [Affiliation.DEVILS],
    backstory:
      'Is one of the original seven demons.' +
      'He was killed before the story begins. ' +
      'His place is taken by Mahdi.',
    potentialDisciplines: [Discipline.MAGI_BLACK],
  };

  export const GENKI: Type = {
    name: 'Genki',
    affiliation: [Affiliation.VALLONS_SEVEN],
    symbolizes: ['Wrath', 'Fish'],
    potentialDisciplines: [Discipline.MAGI_BLUE],
    weaponCompatibility: [Weapon.Category.HAND_SWORD],
  };

  export const LAWZON_GREY: Type = {
    name: 'Lawzon',
    surname: 'Grey',
    description:
      'wears sleep mask.' +
      'wears a wolfs head. ' +
      'Has horns. ' +
      'barely stays standing. ' +
      'A narcoleptic often found sleeping even when standing.',
    symbolizes: ['Sloth', 'Wolf'],
    history:
      'Rumored to once of been the most powerful fighter from the north. ' +
      'He fought only to protect his village until it was wiped out from a great frost. ' +
      'He now wanders seemingly lifelessly in search of an end. ' +
      'He is by far the most strongest of the seven but has no will to fight.',
    affiliation: [Affiliation.VALLONS_SEVEN],
    potentialDisciplines: [Discipline.MAGI_WHITE],
    weaponCompatibility: [Weapon.Category.BROAD_SWORD],
  };

  export const MADHI_TSIA: Type = {
    name: 'Mahdi',
    surname: 'Tsia',
    description: "Malace's brother",
    backstory: 'When the world is about to end he is its savor',
    symbolizes: ['Mahdi', 'German Shepherd'],
    affiliation: [Affiliation.VALLONS_SEVEN, Affiliation.CATCHERS],
    potentialDisciplines: [Discipline.POSSESSED, Discipline.MAGI_BLACK],
    weaponCompatibility: [Weapon.Category.KNIFE],
  };

  export const SUYRI: Type = {
    name: 'Suyri',
    description:
      'Has and uses strong magical powers. ' +
      'A female with pink colored hair. ',
    affiliation: [Affiliation.VALLONS_SEVEN],
    symbolizes: ['Luxury (later lust)', 'Fox'],
    potentialDisciplines: [Discipline.WIZARD, Discipline.MAGI_PINK],
  };

  export const WISP: Type = {
    name: 'Wisp',
    affiliation: [Affiliation.VALLONS_SEVEN],
    symbolizes: ['Gluttony', 'Henya'],
    potentialDisciplines: [Discipline.MAGI_YELLOW],
  };

  export const ASMIN: Type = {
    name: 'Asmin',
    affiliation: [Affiliation.VALLONS_SEVEN],
    symbolizes: ['Pride', 'Ox'],
    potentialDisciplines: [Discipline.MAGI_BROWN],
    weaponCompatibility: [Weapon.Category.TWO_HANDED_AXE],
  };

  export const DIAG: Type = {
    name: 'Diag',
    affiliation: [Affiliation.VALLONS_SEVEN],
    symbolizes: ['Envy', 'Snake'],
    potentialDisciplines: [Discipline.MAGI_PURPLE],
  };

  /**
   * Notable Bad Guys
   */
  export const MONARCH: Type = {
    name: 'Monarch',
    alias: ['The Deadly One'],
    weaponCompatibility: [Weapon.Category.DAGGER],
  };

  export const VICEROY: Type = {
    name: 'Viceroy',
    backstory: 'mimic monarch',
    weaponCompatibility: [Weapon.Category.DAGGER],
  };

  /**
   * Battlers
   */
  export const SPIDER: Type = {
    name: 'Spider',
    description: 'A spider',
  };

  export const WARLING: Type = {
    name: 'Warling',
    description: 'The embodyment of a traveling cyclone',
    potentialDisciplines: [Discipline.WIZARD, Discipline.HISTORIAN],
  };

  export const SEA_HORSE: Type = {
    name: 'Sea Horse',
    description: 'A spider',
  };

  export const SENSITIVE_PLANT: Type = {
    name: 'Sensitive Plant',
    description: 'A plant that drops when touched',
  };

  export const DEEP_THINKER: Type = {
    name: 'Deep Thinker',
    description: 'A humaniod, fish, monster',
  };

  // Bird of Fire - phoenix
  // Snake of Water – dragon
  // Chimera – a combination of two or more animals
  // A type of sloth like creature that lives around the maiden of the mist
  // A snow leopard creature that lives up north (can be seen near Lawzon)
}
