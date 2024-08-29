import express, { json } from "express";
import categoryRoutes from "./routes/categoryRoutes.js"; // Updated import with .js extension

const app = express();
const port = 3000;

app.use(json());

app.use("/categories", categoryRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
