const { verifiedClans } = require('../util/index.js');

module.exports = class Clan {
    constructor(client, data) {
        Object.defineProperty(this, 'client', { value: client });
        const obj = {
            id: data.clan_id,
            name: data.clan_name,
            score: data.clan_score,
            level: Math.max(1, Math.floor(0.03 * Math.sqrt(data.clan_score))),
            memberCount: data.members.length,
            members: data.members
                .sort((a, b) =>
                    b.player_score - a.player_score,
                )
                .map(m => {
                    const level = Math.max(1, Math.floor(0.03 * Math.sqrt(m.player_score)));
                    return {
                        username: m.player_name,
                        displayName: m.player_name + ' [' + data.clan_name + ']',
                        score: m.player_score,
                        level,
                        levelProgress: Math.round(100 * ((0.03 * Math.sqrt(m.player_score)) - Math.floor(0.03 * Math.sqrt(m.player_score)))),
                        levelImage: `https://krunker.io/img/levels/${Math.min(level % 2 ? level : level - 1, 101)}.png`,
                        toString: () => m.player_name,
                    };
                }),
            leaderUsername: data.creatorname,
            verified: verifiedClans.includes(data.clan_name),
        };
        for (const [ k, v ] of Object.entries(obj)) Object.defineProperty(this, k, { value: v, enumerable: true });
        return obj;
    }
    fetchLeader() {
        this.leader = this.client.fetchPlayer(this.leaderUsername);
        return this.leader;
    }
    toString() {
        return this.name;
    }
};