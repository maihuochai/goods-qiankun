import { Enchanting, Good, User } from '@/typings/enchanting'

export const enchantings: Array<Enchanting> = [
  {
    name: '保护',
    id: 'protection',
    level: 0,
    desc: '用于盔甲类附魔，吸收外部伤害，能与其他保护类共存。建议建议最高等级：4'
  },
  {
    name: '火焰保护',
    id: 'fire_protection',
    level: 0,
    desc: '用于盔甲类附魔，吸收外部伤害，能与其他保护类共存。建议建议最高等级：4'
  },
  {
    name: '摔落保护',
    id: 'feather_falling',
    level: 0,
    desc: '减少跌落伤害，能与其他保护类共存。建议建议最高等级：4'
  },
  {
    name: '爆炸保护',
    id: 'blast_protection',
    level: 0,
    desc: '用于盔甲类附魔，减少爆炸伤害，能与其他保护类共存。建议建议最高等级：4'
  },
  {
    name: '投射物保护',
    id: 'projectile_protection',
    level: 0,
    desc: '用于盔甲类附魔，减少来源于弹射物（箭、恶魂/烈焰人的火球）的伤害，能与其他保护类共存。建议建议最高等级：4'
  },
  {
    name: '水下呼吸',
    id: 'respiration',
    level: 0,
    desc: '用于头盔附魔，每等级增加15秒的水下呼吸时间，做高等级：3'
  },
  {
    name: '水下速掘',
    id: 'aqua_affinity',
    level: 0,
    desc: '用于头盔附魔，恢复水下挖掘的速度为正常速度，建议建议最高等级：1'
  },
  {
    name: '荆棘',
    id: 'thorns',
    level: 0,
    desc: '用于盔甲的魔咒，能对攻击者造成反弹伤害。建议建议最高等级：3'
  },
  {
    name: '深海探索者',
    id: 'depth_strider',
    level: 0,
    desc: '用于靴子的魔咒，会增加玩家在水下的移动速度。与冰霜行者不兼容。建议建议最高等级：3'
  },
  {
    name: '冰霜行者',
    id: 'frost_walker',
    level: 0,
    desc: '用于靴子的附魔，在水上行走时产生霜冰。与深海探索者不兼容。建议建议最高等级：2'
  },
  {
    name: '绑定诅咒',
    id: 'binding_curse',
    level: 0,
    desc: '使被诅咒物品穿在身上后无法卸下。建议建议最高等级：1'
  },
  {
    name: '锋利',
    id: 'sharpness',
    level: 0,
    desc: '用于剑或斧的魔咒，能增加近战攻击伤害。不兼容节肢杀手、亡灵杀手。建议建议最高等级：5'
  },
  {
    name: '亡灵杀手',
    id: 'smite',
    level: 0,
    desc: '用于剑或斧的魔咒，能对亡灵生物造成额外伤害。不兼容节肢杀手、锋利。建议建议最高等级：5'
  },
  {
    name: '节肢杀手',
    id: 'bane_of_arthropods',
    level: 0,
    desc: '是一种用于武器的魔咒，对节肢生物（蜘蛛、洞穴蜘蛛、蠹虫、末影螨和蜜蜂）能造成额外伤害。不兼容亡灵杀手、锋利、Chopping。建议建议最高等级：5'
  },
  {
    name: '击退',
    id: 'knockback',
    level: 0,
    desc: '是一个针对剑的附魔，它增加了剑的击退。建议建议最高等级：2'
  },
  {
    name: '火焰附加',
    id: 'fire_aspect',
    level: 0,
    desc: '用于武器的魔咒，可以使攻击的目标着火。建议建议最高等级：2 '
  },
  {
    name: '掠夺',
    id: 'looting',
    level: 0,
    desc: '用于剑的魔咒，可以增加被该武器杀死生物的掉落物。建议建议最高等级：3'
  },
  {
    name: '横扫之刃',
    id: 'sweeping',
    level: 0,
    desc: '用于剑的魔咒，能增加横扫攻击的伤害。建议建议最高等级：3'
  },
  {
    name: '效率',
    id: 'efficiency',
    level: 0,
    desc: '可以增加玩家挖掘效率的魔咒。用于镐、铲、斧、锄、剪刀。建议建议最高等级：5'
  },
  {
    name: '精准采集',
    id: 'silk_touch',
    level: 0,
    desc: '允许被开采的方块掉落本身，而非其通常的掉落物的魔咒。与幸运不兼容。建议建议最高等级：1'
  },
  {
    name: '耐久',
    id: 'unbreaking',
    level: 0,
    desc: '能够降低物品耐久度消耗概率的魔咒，可以有效延长物品的使用寿命。适用于所有工具。建议建议最高等级：3'
  },
  {
    name: '幸运',
    id: 'fortune',
    level: 0,
    desc: '提升运气的状态效果。建议建议最高等级：无限'
  },
  {
    name: '力量',
    id: 'power',
    level: 0,
    desc: '能提升玩家攻击力的状态效果。建议建议最高等级：无'
  },
  {
    name: '冲击',
    id: 'punch',
    level: 0,
    desc: '用于弓的魔咒，能增加箭的击退距离。建议建议最高等级：2'
  },
  {
    name: '火矢',
    id: 'flame',
    level: 0,
    desc: '用于弓的魔咒，使射出的箭着火。建议建议最高等级：1'
  },
  {
    name: '无限',
    id: 'infinity',
    level: 0,
    desc: '对弓的附魔，使得射箭不会消耗普通箭矢。与经验修补不兼容。建议最高等级：1'
  },
  {
    name: '海之眷顾',
    id: 'luck_of_the_sea',
    level: 0,
    desc: '于钓鱼竿的魔咒，能够使玩家在钓鱼时更加幸运。建议最高等级：3'
  },
  {
    name: '鱼饵',
    id: 'lure',
    level: 0,
    desc: '钓鱼竿的魔咒，能加速钓鱼的时间。建议最高等级：3'
  },
  {
    name: '忠诚',
    id: 'loyalty',
    level: 0,
    desc: '附在三叉戟的魔咒，使丢出去的三叉戟返回到玩家手中。不兼容附魔：激流。建议最高等级：3'
  },
  {
    name: '鱼叉',
    id: 'impaling',
    level: 0,
    desc: '用于三叉戟的魔咒，使其伤害增加。建议最高等级：5'
  },
  {
    name: '波涛',
    id: 'riptide',
    level: 0,
    desc: '用于三叉戟的魔咒，使三叉戟可以用作快速移动方式。不兼容附魔：引雷、忠诚。建议最高等级：3'
  },
  {
    name: '引雷',
    id: 'channeling',
    level: 0,
    desc: '用于三叉戟的魔咒，能产生闪电。建议最高等级：1'
  },
  {
    name: '经验修补',
    id: 'mending',
    level: 0,
    desc: '将经验球转化为物品耐久度的魔咒。可用于所有带耐久物品。建议最高等级：1'
  },
  {
    name: '消失诅咒',
    id: 'vanishing_curse',
    level: 0,
    desc: '使得被诅咒的物品会在死亡时消失的魔咒。建议最高等级：1'
  },
  {
    name: '多重射击',
    id: 'multishot',
    level: 0,
    desc: '使弩可以一次向三个方向射出三支箭（成10°夹角），而只消耗一支箭（但会消耗3点耐久）。与穿透不兼容。建议最高等级：1'
  },
  {
    name: '穿透',
    id: 'piercing',
    level: 0,
    desc: '附在弩上的魔咒，使射出去的箭穿透多个实体。与多重射击不兼容。建议最高等级：4'
  },
  {
    name: '快速上弦',
    id: 'quick_charge',
    level: 0,
    desc: '用于快速装填弩的魔咒。建议最高等级：6'
  }
]

export const users: Array<User> = [
  {
    name: '玩家自己',
    value: '@s'
  },
  {
    name: '最近玩家',
    value: '@p'
  },
  {
    name: '随机玩家',
    value: '@r'
  },
  {
    name: '所有玩家',
    value: '@a'
  }
]

export const goods: Array<Good> = [
  {
    name: '钻石剑',
    id: 'minecraft:diamond_sword'
  },
  {
    name: '钻石锹',
    id: 'minecraft:diamond_shovel'
  },
  {
    name: '钻石镐',
    id: 'minecraft:diamond_pickaxe'
  },
  {
    name: '钻石斧',
    id: 'minecraft:diamond_axe'
  },
  {
    name: '钻石头盔',
    id: 'minecraft:diamond_helmet'
  },
  {
    name: '钻石胸甲',
    id: 'minecraft:diamond_chestplate'
  },
  {
    name: '钻石护腿',
    id: 'minecraft:diamond_leggings'
  },
  {
    name: '钻石靴子',
    id: 'minecraft:diamond_boots'
  },
  {
    name: '钓鱼竿',
    id: 'minecraft:fishing_rod'
  },
  {
    name: '弓',
    id: 'minecraft:bow'
  },
  {
    name: '弩',
    id: 'minecraft:crossbow'
  }
]
