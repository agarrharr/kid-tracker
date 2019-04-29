import childProcess from "child_process";

const LocalService = class {
  private static startChildProcess(serviceFilePath) {
    return new Promise((resolve, reject) => {
      const child = childProcess.fork(serviceFilePath);

      child.on("message", m => {
        if (m === "service_started") {
          resolve(child);
        }
      });

      child.on("error", err => {
        console.log("LOCAL-SERVICE: failed to start child process!", err);
        reject(err);
      });

      child.on("close", code => {
        if (code) {
          console.log("LOCAL-SERVICE: exited with code", code);
        }
      });
    });
  }

  private static killChildProcess(process: any): Promise<any> {
    if (!process) {
      return Promise.resolve();
    }

    return new Promise(resolve => {
      process.once("close", code => resolve(code));
      process.kill("SIGINT");
    });
  }

  private serviceProcess: any;
  private serviceFilePath: string;

  constructor(serviceFilePath: string) {
    this.serviceProcess = null;
    this.serviceFilePath = serviceFilePath;
  }

  public start() {
    if (this.serviceProcess) {
      return Promise.reject(new Error("The service is already running!"));
    }

    return LocalService.startChildProcess(this.serviceFilePath).then(
      process => (this.serviceProcess = process)
    );
  }

  public stop() {
    return LocalService.killChildProcess(this.serviceProcess).then(() => {
      this.serviceProcess = null;
    });
  }
};

export default LocalService;
