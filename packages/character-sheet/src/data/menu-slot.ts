/**
 * MenuSlot determines which Menu slot a Player can find a character's action
 *
 * Different types of Actions may occupy the same slot as different characters may have different
 * abilities in the same slot.
 *
 * For example, one character's Slot 4 may have Traps whereas a different
 * character may have Command.
 */
export const enum MenuSlot {
  First = 1,
  Second = 2,
  Third = 3,
  Fourth = 4,
  Fifth = 5,
}

// TODO interactions? Are they 0 slot?
export const Slot: Record<string, string[]> = {
  First: ['Basic', 'Combo', 'Weapon'],
  Second: [],
  Third: ['Drive'],
  Fouth: ['Teamwork', 'Tools', 'Trap'],
  Fifth: ['Item'],
};
