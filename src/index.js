module.exports = {
    Client: require('./client/Client.js'),
    WebSocketManager: require('./client/ws/WebSocketManager.js'),
    util: require('./util/index.js'),
    Changelog: require('./structures/Changelog.js'),
    Clan: require('./structures/Clan.js'),
    Game: require('./structures/Game.js'),
    KrunkerMap: require('./structures/Map.js'),
    Mod: require('./structures/Mod.js'),
    Player: require('./structures/Player.js'),
    Skin: require('./structures/Skin.js'),
    ...require('./structures/ClassWeapon.js'),
    ...require('./util/index.js'),
};