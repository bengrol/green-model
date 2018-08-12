module.exports = {
    root: true,
    globals: {
        webpack: false
    },
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        "indent": ["error", 2],
        semi: ["error", 'never'],
        quotes: ["error", "single"],
        "brace-style": "error",
        "yoda": "error",
        "keyword-spacing": ["error", { "before": true, "after": true }],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "block-spacing": "error",
        "no-irregular-whitespace": "error",
        "spaced-comment": ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "space-before-blocks": ["error", "always"],
        'no-console': 'off',
        'vue/html-self-closing': 'off',
        'vue/max-attributes-per-line': 'off',
    }
}