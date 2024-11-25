import { app } from "./app.js";
import { connectDB } from "./db/db.config.js";

const PORT = 8000

app.listen(PORT, () => {
    console.log(`🔥 Server running at port ${PORT}`);
})

connectDB()