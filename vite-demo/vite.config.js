import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  const port = 3000;

  // console.log(command, mode);
  const env = loadEnv(mode, process.cwd());

  console.log(env);

  if (mode === "development") {
    console.log("Modo de desarrollo");
  } else {
    console.log("Modo produccion");
  }

  return {
    server: {
      port,
    },
  };
});
