// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'rockfeller',
      user:     'postgres',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgres://vucevkaueqacty:6566cc21b4e23b31c6f5e268ce8d3cf47f5042234673fbbf135f7b59bcb6d6e4@ec2-107-22-244-62.compute-1.amazonaws.com:5432/d5tbutstqjfcq3',
    connection: {
      database: 'd5tbutstqjfcq3',
      user:     'vucevkaueqacty',
      password: '6566cc21b4e23b31c6f5e268ce8d3cf47f5042234673fbbf135f7b59bcb6d6e4'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
