const pkg = require("pg");

const {Client} = pkg;

const client = new Client({
  user: "roketuser",
  password: "roket2024", 
  database: "postgres",
  host: "tarearoket.cv2quftjeoly.us-east-1.rds.amazonaws.com",
  port: 5432,
  schema: 'roket'
});

client.connect();

module.exports = client;