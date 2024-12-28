
class Databasemanager {
    constructor() {
        this.setupDatabase();
        this.createNewSession("test")
    }

    async setupDatabase(){
        HICCloud.API.configure({
            url: "https://api.hbo-ict.cloud",
            apiKey: "pb2gdd2425_niipiimaayaa24.3B3N75HE2BI77K6Y",
            database: "pb2gdd2425_niipiimaayaa24_live"
        })
    }

    async createNewSession(playerName) {
        try {
            const query1 = "INSERT INTO leaderboard (score, lastUpdated) VALUES(?, ?)";
            const response = await HICCloud.API.queryDatabase(query1, [playerName]);

            console.log("Leaderboard created succesfully", response);
        } catch (error) {
            console.log("Failed to create session", error);
        }
    }
}