import app from "./app";
import { envVars } from "./config/env.config";

app.listen(envVars.PORT, () => {
  console.log("server is running on port", envVars.PORT);
});
