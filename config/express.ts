import * as bodyParser from "body-parser";
// import cookieParser from "cookie-parser";
import * as routes from "../routes";

const expressConfig = (app: any, config: any) => {
  app.set("port", config.port);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // app.use(cookieParser());
  app.use("/api", routes);

  app.listen(app.get("port"), () => {
    console.log("Listening on port %s...", app.get("port"));
    if (process.send) {
      // this event is used in acceptance tests when running locally.
      process.send("service_started");
    }
  });
};

export default expressConfig;