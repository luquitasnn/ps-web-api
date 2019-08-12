// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/ps-cases-store'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/ps-cases-store'
  },
  production: {
    client: 'pg',
    port: 5433,
    connection: process.env.DATABASE_URL
  },
};
