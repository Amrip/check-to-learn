import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import stylisticJs from '@stylistic/eslint-plugin-js'
import {defineFlatConfig} from "eslint-define-config"
import * as parserVue from 'vue-eslint-parser';
/**
 * "off":0
 * "warn":1
 * "error":2
 */

export default defineFlatConfig([
    {
        ...pluginJs.configs.recommended,
        ignores:['public','build','dist','node_modules'],
        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                document: 'readonly',
                navigator: 'readonly',
                window: 'readonly',
                ...globals.node,
                ...globals.es2021,
                ...globals.browser
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                ecmaVersion: 2022,
                sourceType: 'module'
            },
            sourceType: 'module'
        },
        plugins: {
            '@stylistic/js': stylisticJs,
            '@vue': pluginVue
        },
        rules: {
            /* todo eslint */
            // 不允许使用var
            "no-var": "error",
            // 生产模式下禁止使用console
            "no-console": process.env.NODE_ENV !== "production" ? "error" : 'off',
            // 生产模式下禁止使用console
            'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
            // 禁止重新分配const
            "no-const-assign": "error",
            // 禁止if-else-if链中的重复条件
            "no-dupe-else-if": "error",
            // 禁止重复模块导入
            "no-duplicate-imports": "error",
            // 禁止不规则空格
            "no-irregular-whitespace": "warn",
            // 禁止从Promise执行器函数返回值
            "no-promise-executor-return": "error",
            // 禁止在代码中出现不可达代码
            "no-unreachable": "error",
            // 禁止循环体只进行一次迭代,
            "no-unreachable-loop": "error",
            // 禁止空块语句
            "no-empty": "error",
            // getter函数必须要有返回值
            "getter-return": "error",
            // 禁止在条件语句中使用赋值操作符
            "no-cond-assign": "error",
            // 在 Promise 构造函数的参数中禁止使用异步函数
            "no-async-promise-executor": "error",
            // 禁止在数组中出现空的元素（比如，[1,,2]）
            "no-sparse-arrays": "error",
            // 禁止重复声明变量
            "no-redeclare": "error",
            /* todo stylistic-js */
            // 不允许在文件末尾使用超过2个换行符
            "@stylistic/js/eol-last": "warn",
            // 在箭头函数中强制执行箭头前后的间距一致
            "@stylistic/js/arrow-spacing": "warn",
            // 在逗号前后保持一致的间距
            "@stylistic/js/comma-spacing": "warn",
            // 要求注释之前空行
            "@stylistic/js/lines-around-comment": "warn",
            // 要求缩进一致为4 spaces
            "@stylistic/js/indent": "warn",
        },
    },
    {
        files: ['**/*.vue','**/**/*.vue'],
        languageOptions: {
            parser: parserVue,
            parserOptions: {
                parser: "@babel/eslint-parser",
                sourceType: 'module',
            },
        },
        plugins: {
            vue: pluginVue
        },
        processor: pluginVue.processors['.vue'],
        rules: {
            ...pluginVue.configs["vue3-essential"].rules,
            ...pluginVue.configs["vue3-recommended"].rules,
            /* todo eslint-plugin-vue */
            // 允许prop改变
            "@vue/no-mutating-props": 'off',
            // 要求自定义组件中的属性值和属性名不能有相同部分
            "@vue/attribute-hyphenation": "error",
        }
    },
]);