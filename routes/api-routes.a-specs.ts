import axios from "axios";
import uuid from "uuid";

import * as serverConfig from "../config/config";

const env: string = (process.env.NODE_ENV =
  process.env.NODE_ENV || "development");
const config: any = serverConfig[env];

describe("/api", () => {
  describe("/api/tasks", () => {
    let taskId;
    let response;

    beforeEach(async () => {
      const url = `http://localhost:${config.port}/api/tasks`;
      const headers = {};
      taskId = uuid.v4();

      response = (await axios.get(url, { headers })).data;
    });

    it("it to be false", () => expect(true).toEqual(false));
  });
});
