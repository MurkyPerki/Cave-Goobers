
class Databasemanager {
    constructor() {
        this.setupDatabase();
        this.createNewSession()
    }

    async setupDatabase(){
        HICCloud.API.configure({
            url: "https://api.hbo-ict.cloud",
            apiKey: "pb2gdd2425_niipiimaayaa24.3B3N75HE2BI77K6Y",
            database: "pb2gdd2425_niipiimaayaa24_live"
        })
    }

    // async createNewSession(playerName) {
    //     try {
    //         const query = "INSERT INTO Sessions (pl"
    //     }
    // }
}