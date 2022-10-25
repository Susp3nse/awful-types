declare const enum AwfulClasses {
  warrior = 'warrior',
  warlock = 'warlock',
  shaman = 'shaman',
  rogue = 'rogue',
  druid = 'druid',
  hunter = 'hunter',
  mage = 'mage',
  monk = 'monk',
  paladin = 'paladin',
  priest = 'priest',
  deathKnight = 'deathknight',
}

declare const enum AwfulRoles {
  healer = 'healer',
  melee = 'melee',
  ranged = 'ranged',
  tank = 'tank',
  pet = 'pet',
}

declare const enum AwfulSpecs {
  First = 1,
  Second = 2,
  Third = 3,
}

type AwfulPosition = LuaMultiReturn<[number, number, number]>;

type AwfulUnitOrPosition = Unit | AwfulPosition;

type AwfulUnknownEventCallback = (...args: unknown[]) => void;

interface IAwful {
  NewSpell(
    this: void,
    spellId: number | number[],
    spellTraits?: IAwfulSpellTraits
  ): IAwfulSpell;
  NewItem(this: void, itemIds: number | number[] | string | string[]): Item;
  Populate(this: void, ...args: unknown[]): void;
  addEventCallback(
    this: void,
    callbackFunction: AwfulUnknownEventCallback,
    callbackEvent: string
  ): void;
  immerseOL(this: void, list: Unit[]): void;
  addUpdateCallback(
    this: void,
    callback: () => void,
    onRoutineRun?: boolean
  ): void;
  inverse(this: void, rotation: number): number;
  Draw(this: void, callback: (draw: IAwfulDraw) => void): void;
  //Command(this: void, command: string, e: boolean): Command;

  // Config
  DevMode: boolean;
  ttd_enabled: boolean;

  readonly UI: IAwfulUi;
  readonly Actor: IAwfulActor;
  readonly player: Player;
  readonly target: Unit;
  readonly focus: Unit;
  readonly healer: Ally;
  readonly enemyHealer: Players;
  readonly pet: Unit;
  readonly [key: `arena${number}`]: Players;
  readonly [key: `party${number}`]: Ally;
  readonly time: number;
  readonly buffer: number;
  readonly latency: number;
  readonly tickRate: number;
  readonly spellCastBuffer: number;
  readonly gcd: number;
  readonly hasControl: number;
  readonly zone: string;
  readonly mapID: number;

  // Lists
  readonly group: IAwfulList<Ally>;
  readonly enemies: IAwfulList<Unit>;
  readonly friends: IAwfulList<Unit>;
  readonly totems: IAwfulList<Unit>;
  readonly seeds: IAwfulList<Unit>;
  readonly units: IAwfulList<Unit>;
  readonly pets: IAwfulList<Unit>;
  readonly players: IAwfulList<Players>;
  readonly explosives: IAwfulList<Unit>;
  readonly shades: IAwfulList<Unit>;
  readonly objects: IAwfulList<IObject>;
}

declare const awful: IAwful;

declare function getfenv(n: number): unknown;