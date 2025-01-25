import { config } from "@repo/eslint-config/react-internal";

/** @type {import("eslint").Linter.Config} */
const eslintConfig = [
    ...config,
    { ignores: [".next", "node_modules"]},
    {
        rules: {
            maxWarnings: 0 
        }
    }
];

export default eslintConfig;
