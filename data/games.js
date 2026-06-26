// 游戏资源数据 - 在这里添加/修改游戏条目
// 格式：{ id, title, description, category, link, status, cover }

const games = [
  {
    id: 1,
    title: '示例游戏 A',
    description: '一款精彩的开放世界冒险游戏，支持多人联机。',
    category: '动作冒险',
    link: 'https://example.com/game-a',
    status: '可直接游玩',
    addedAt: '2026-06-26',
  },
  {
    id: 2,
    title: '示例游戏 B',
    description: '策略类模拟经营游戏，自由度高，画面精美。',
    category: '模拟经营',
    link: 'https://example.com/game-b',
    status: '待测试',
    addedAt: '2026-06-25',
  },
  {
    id: 3,
    title: '示例游戏 C',
    description: '经典 RPG 重制版，包含全部 DLC 内容。',
    category: '角色扮演',
    link: 'https://example.com/game-c',
    status: '链接失效',
    addedAt: '2026-06-24',
  },
];

export default games;
