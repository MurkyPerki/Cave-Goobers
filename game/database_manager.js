
class Databasemanager {
    constructor() {
        this.setupDatabase();
        this.newSession("test")
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


            console.log("Session created succesfully", playerId);

            const score = 0;
            const date = 'testdate'

            const createLeaderboardQuery = "INSERT INTO leaderboard (player_id, score, lastUpdated) VALUES(?, ?, ?)";
            const leaderboardResponse = await HICCloud.API.queryDatabase(createLeaderboardQuery, [playerId, score, date]);

            console.log("Session created succesfully", leaderboardResponse);

        } catch (error) {
            console.error("Failed to create session", error);
        }
    }
// }
//     async leaderboard(playerName, score) {
//     try {
//         const query = "INSERT INTO leaderboard (player_id, score, lastUpdated) VALUES(?, ?, DATE())";
//         const response = await HICCloud.API.queryDatabase(query, [playerName, score]);

//         console.log("Session created succesfully", response);
//     } catch (error) {
//         console.error("Failed to create session", error);
//     }
}

//     async createNewSession(playerName) {
//         try {

//             const createPlayerQuery = `
//               INSERT INTO player (name)
//               VALUES (?)
//             `;
//             const playerResponse = await HICCloud.API.queryDatabase(createPlayerQuery, [playerName]);



//             const playerId = playerResponse.insertId;


//             const score = 0;
//             const now = new Date();


//             const query1 = "INSERT INTO leaderboard (player_id, score, lastUpdated) VALUES(?, ?, ?)";
//             const response = await HICCloud.API.queryDatabase(query1, [playerId, score, now]);

//             console.log("Leaderboard created succesfully", response);
//         } catch (error) {
//             console.log("Failed to create session", error);
//         }
//     }
// }