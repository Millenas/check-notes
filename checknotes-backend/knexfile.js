module.exports = {
	client: 'postgresql',
	//connection: {
	//	database: 'checknotes',
	//	user: 'postgres',
	//	password: 'root'
	//},
	connection: {
        database: "bzcmelyn",
        user: "bzcmelyn",
        password: "8tFkw9AahQMIslebBDhQK17tkDwYphVi",        
        host: "kashin.db.elephantsql.com"
    },
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations',
		directory: `${__dirname}/migrations`
	}
};
