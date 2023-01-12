import adapter from "@sveltejs/adapter-static"; 
// was "@sveltejs/adapter-auto"

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs",
			fallback: null,
			precompress: false,
			strict: true
        }),
        paths: {
            // change below to your repo name
            base: dev ? "" : "/sportscentre-frontend",
        },
    }
};

export default config;