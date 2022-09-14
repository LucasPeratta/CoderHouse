const dbConfig = {
  filename: "./db.sqlite3",
};

export const knexConfig = {
  client: "sqlite3",
  connection: dbConfig,
  useNullAsDefault: true,
};
