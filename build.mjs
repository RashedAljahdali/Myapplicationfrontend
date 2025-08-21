import { build } from "esbuild";

(async () => {
  await build({
    entryPoints: ["src/index.tsx"], 
    bundle: true,                   
    outfile: "dist/app.js",         
    minify: true,                   
    format: "iife",                 
    jsx: "automatic",               
    define: {                       
      "process.env.NODE_ENV": '"production"',
    },
    target: ["es2020"],             
    treeShaking: true,              
  });

  console.log("✅ Build complete: dist/app.js");
})();
