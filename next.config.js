const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  // development
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "test-1",
        mongodb_password: "TsZ5FghMszIvyRpP",
        mongodb_clustername: "cluster1",
        mongodb_database: "my-site-dev",
      },
    };
  }

  // production
  return {
    env: {
      mongodb_username: "test-1",
      mongodb_password: "TsZ5FghMszIvyRpP",
      mongodb_clustername: "cluster1",
      mongodb_database: "my-site",
    },
  };
};
