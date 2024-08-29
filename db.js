import { createConnection } from "mysql2";

const connection = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "doc-management",
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err.stack);
        return;
    }
    console.log("Connected to MySQL as id " + connection.threadId);
});

// Wrapper for query method
export const query = (sql, params, callback) => {
    connection.query(sql, params, callback);
};

export default connection;
