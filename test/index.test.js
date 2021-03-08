const hb = require("../index");

const job = {
  uid: "abcd",
  workpath: "./",
};

const settings = {
  logger: console,
};

const options = {
  input:
    "/Users/harsh/code/render-service/buzzle-action-handbrake/test/test.mp4",
  output: "./output.mp4",
  debug: true,
  eraseInput: false,
};

hb(job, settings, options, "postrender").then(console.log).catch(console.error);
