import LocalService from "../test/local-service";

const localService = new LocalService("./build/index.js");

export default () => {
  beforeAll(() => {
    return localService.start();
  });

  afterAll(() => {
    return localService.stop();
  });
};
