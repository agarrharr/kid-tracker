/**
 * @jest-environment node
 */

import axios from "axios";
import uuid from "uuid";

import serverConfig from "../config/config";
import helper from "../test/acceptance-specs-helper";
helper();

const env: string = (process.env.NODE_ENV =
  process.env.NODE_ENV || "development");
const config: any = serverConfig[env];

describe("/api/tasks", () => {
  let actualResponse;

  beforeEach(async () => {
    const url = `http://localhost:${config.port}/api/tasks`;
    const headers = {};

    actualResponse = (await axios.get(url, { headers })).data;
  });

  describe("when there are no tasks", () => {
    test("returns an empty object", () => expect(actualResponse).toBeNull());
  });
});
