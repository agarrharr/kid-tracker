import bodyParser from "body-parser";

import routes from "../routes";
import { PROCESS } from "../test/local-service";

const expressConfig = (app: any, config: any) => {
  app.set("port", config.port);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", routes);

  app.listen(app.get("port"), () => {
    console.log(`Listening on port ${app.get("port")}...`);
    if (process.send) {
      // this event is used in acceptance tests when running locally.
      process.send(PROCESS.SERVICE_STARTED);
    }
  });
};

export default expressConfig;
