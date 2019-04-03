module.exports = {
    root: true,
    extends: 'airbnb',
    plugins: ['react', 'jsx-a11y', 'import'],
    env: {
        browser: true,
        es6: true,
    },
    parser: 'babel-eslint',
    rules: {
        'no-plusplus': 'off',
        'default-case': 'off',
        'consistent-return': 'off',
        'class-methods-use-this': 'off',
        'import/prefer-default-export': 'off',
        'no-use-before-define': 'off',
        'one-var': [
            'error',
            {
                initialized: 'never',
            },
        ],
        'one-var-declaration-per-line': ['error', 'initializations'],
        'react/require-default-props': 'off',
        'react/forbid-prop-types': 'off',
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.js'],
            },
        ],
        'react/jsx-tag-spacing': [
            'error',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'allow',
                afterOpening: 'never',
            },
        ],
        'jsx-a11y/href-no-hash': 'off',
        'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
        'no-trailing-spaces': 'off',
        'comma-dangle': ['error', 'never'],
        'no-multiple-empty-lines': ["error", {
            max: 1,
            maxEOF: 1,
            maxBOF: 1
        }]
    },
};
