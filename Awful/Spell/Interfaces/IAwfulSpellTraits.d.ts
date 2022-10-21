interface IAwfulSpellTraits {
  /**
   * For AoE Spells - The diameter or of the AoE reticle.<br>
   * Otherwise you can use the radius.<br>
   * Used by SmartAoE to know its boundaries when edging or beyond-max-ranging the AoE cast.
   */
  diameter?: number | (() => number);
  /**
   * For AoE Spells - The radius or of the AoE reticle.<br>
   * Otherwise you can use the diameter.<br>
   * Used by SmartAoE to know its boundaries when edging or beyond-max-ranging the AoE cast.
   */
  radius?: number | (() => number);
  /**
   * Whether or not the spell has a beneficial effect.<br>
   * Causes :Cast to avoid facing requirement. Most beneficial spells do not require facing.<br>
   * :Cast will avoid buffs/debuffs that absorb beneficial effects (e.g, Cyclone / Banish)<br>
   * This is an alternative from heal trait - which also checks for healing immunities specifically.
   */
  beneficial?: boolean;
  /**
   * The type of damage the spell does (if any).<br>
   * Causes :Cast to avoid attacking into immunities against the given damage type.
   */
  damage?: AwfulSpellType;
  /**
   * Whether or not the spell is a healing effect.<br>
   * Causes :Cast to avoid facing requirement. Most healing spells do not require facing.<br>
   * :Cast will avoid buffs/debuffs that absorb all healing effects (e.g, Cyclone / Banish).
   */
  heal?: boolean;
  /**
   * The effect type of the spell (if any).\
   * Causes :Cast to avoid immunities to the given effect type.
   */
  effect?: AwfulSpellType;
  /**
   * true: Causes :Cast to avoid immunities to general CC effects (e.g, Bladestorm)\
   * providing specific effect type also avoids immunities to that cc type.
   */
  cc?: boolean | CCType;
  /**
   * The spell applies a bleed effect.<br>
   * Causes :Cast to avoid immunities to bleeds (e.g, empowered kyrian potion)
   */
  bleed?: boolean;
  /**
   * Whether or not the spell specifically hits one unit.
   */
  targeted?: boolean;
  /**
   * Whether or not the spell is cast from range.\
   * This is currently only used for ranged physical spells.\
   * Parry does not apply to ranged physical attacks, so declaring this lets :Cast know it's okay to cast the spell into effects like Die by the Sword, Riposte, or Turbo Fists while they are facing you.
   */
  ranged?: boolean;
  /**
   * If :Cast should always force face the unit to cast, if not already facing.<br>
   * Not really recommended, since you can add face = true to :Cast options situationally when needed.
   */
  alwaysFace?: boolean;
  /**
   * Ignore facing requirement, this spell does not require facing when casting on a unit.
   */
  ignoreFacing?: boolean;
  /**
   * Ignore LoS requirement, this spell does not require LoS when casting on a unit.
   */
  ignoreLoS?: boolean;
  /**
   * Ignore control requirement, this spell can be cast while I am in CC.
   */
  ignoreControl?: boolean;
  /**
   * This spell can be cast while moving.
   */
  ignoreMoving?: boolean;
  /**
   * This spell can be cast while casting other spells.
   */
  ignoreCasting?: boolean;
  /**
   * This spell can be cast while channeling other spells.
   */
  ignoreChanneling?: boolean;
  /**
   * This channel is worthless and my other spells can go ahead and interrupt it.
   */
  stupidChannel?: boolean;
  /**
   * This spell apply slow effect.
   */
  slow?: boolean;
  ignoreGCD?: boolean;
  movePredTime?: number;
  offsetMin?: number;
  offsetMax?: number;
  distanceSteps?: number;
  circleSteps?: number;
}
