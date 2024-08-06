const DataSourceType = {
    DATABASE: 'Database',
    API: 'API',
    FILE: 'File'
};

class DataManager {
    getName(type) {
        return `Data from ${type}`;
    }

    fetchData(type) {
        return this.getName(DataSourceType[type].toLowerCase());
    }
}

const manager = new DataManager();
console.log(manager.fetchData('DATABASE')); // Outputs: "Data from database"
