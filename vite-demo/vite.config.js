import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  const port = 3000;

  // console.log(command, mode);
  const env = loadEnv(mode, process.cwd());

  console.log(env);

  if (mode === "development") {
    return {
      server: {
        port,
      },
    };
    console.log("Modo de desarrollo");
  } else {
    console.log("Modo produccion");
    return {
      build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, "index.html"),
            help: resolve(__dirname, "help", "help.html"),
          },
        },
      },
    };
  }
});
