/**
 * @jest-environment node
 */

import axios from "axios";
import uuid from "uuid";

import serverConfig from "../config/config";

const env: string = (process.env.NODE_ENV =
  process.env.NODE_ENV || "development");
const config: any = serverConfig[env];

describe("/api/tasks", () => {
  let response;
  let expectedResponse;

  beforeEach(async () => {
    const url = `http://localhost:${config.port}/api/tasks`;
    const headers = {};

    response = (await axios.get(url, { headers })).data;

    expectedResponse = {};
  });

  describe("when there are no tasks", () => {
    it("returns an empty object", () =>
      expect(response).toEqual(expectedResponse));
  });
});
