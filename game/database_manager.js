
class Databasemanager {
    constructor() {
        this.setupDatabase();
        this.newSession("test")
        this.leaderboard();
    }

    async setupDatabase() {
        HICCloud.API.configure({
            url: "https://api.hbo-ict.cloud",
            apiKey: "pb2gdd2425_niipiimaayaa24.3B3N75HE2BI77K6Y",
            database: "pb2gdd2425_niipiimaayaa24_live"
        })
    }

    async newSession(playerName) {
        try {
            const createPlayerQuery = "INSERT INTO player (name) VALUES (?)";
            const playerResponse = await HICCloud.API.queryDatabase(createPlayerQuery, [playerName]);
            const playerId = playerResponse.insertId;
            console.log(playerId)


            console.log("Session created succesfully", playerId);

            const score = 0;
            const date = "2025-09-08";

            const createLeaderboardQuery = "INSERT INTO leaderboard (player_id, score, lastUpdated) VALUES(?, ?, ?)";
            const leaderboardResponse = await HICCloud.API.queryDatabase(createLeaderboardQuery, playerId, score, date);

            console.log("Session created succesfully", leaderboardResponse);

        } catch (error) {
            console.error("Failed to create session", error);
        }
    }

    async leaderboard() {
        try {
           const query = "SELECT player.name, leaderboard.score, leaderboard.lastUpdated FROM leaderboard JOIN player ON leaderboard.player_id = player.id  ORDER BY leaderboard.score DESC LIMIT 10"
           const response = await HICCloud.API.queryDatabase(query);

           console.log(response);
        }
        catch (error) {
            console.error("Failed to create session", error);
        }
    }
}