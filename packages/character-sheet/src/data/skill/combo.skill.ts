import { Weapon } from './weapon.skill';

/**
 * Combo Skills use is revoked unless character action history matches exactly
 * prerequisite of prior skills
 * Once prerequisite is matched the combination activation button (Square by default)
 * can be pressed to activate the action
 *
 * If prerequestes is undefined, a player may customize a characters to set a custom
 * combo in order for quicker action selection.
 */
export namespace Combo {
  export type Type = {
    name: string;
    description: string;
    prerequisite?: Weapon.Type[]; // todo figure our programmatic solution
  };

  export const BLITZ: Type = {
    name: 'Blitz',
    description: '',
    prerequisite: [Weapon.SLASH, Weapon.SLASH, Weapon.SLASH],
  };
}
