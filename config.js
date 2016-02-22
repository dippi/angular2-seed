System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "tsconfig": true
  },
  paths: {
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "src/app": {
      "defaultExtension": "ts"
    }
  },

  map: {
    "app": "src/app",
    "typescript": "npm:typescript@1.8.0"
  }
});
