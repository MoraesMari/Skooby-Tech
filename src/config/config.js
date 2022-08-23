module.exports = {
    "development": {
      "username": "nanatz",
      "password": "batatadoce",
      "database": "skooby_tech",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "define": {
        "timestamps": false,
        "underscored": true
      }
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }