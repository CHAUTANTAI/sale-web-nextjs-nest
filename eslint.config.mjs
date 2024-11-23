import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], // Cấu hình các file cần kiểm tra
  },
  {
    languageOptions: {
      globals: globals.browser, // Đảm bảo các global như window, document được hỗ trợ
    },
  },
  pluginJs.configs.recommended, // Sử dụng cấu hình mặc định của ESLint
  ...tseslint.configs.recommended, // Sử dụng cấu hình TypeScript
  pluginReact.configs.flat.recommended, // Sử dụng cấu hình React
  {
    rules: {
      "no-unused-vars": "error", // Lỗi nếu có biến không sử dụng
      "no-undef": "error", // Lỗi nếu có biến chưa được định nghĩa
      "prettier/prettier": [
        "error",
        {
          singleQuote: true, // Dùng dấu nháy đơn thay vì nháy kép
          trailingComma: "es5", // Thêm dấu phẩy ở cuối các đối tượng hoặc mảng
          printWidth: 80, // Giới hạn độ dài dòng code
          tabWidth: 2, // Kích thước tab
        },
      ], // Áp dụng Prettier vào ESLint như một rule
    },
  },
  {
    plugins: ["prettier"], // Plugin Prettier cho ESLint
  },
  {
    extends: [
      "eslint:recommended",
      "plugin:react/recommended", // Nếu bạn sử dụng React
      "plugin:prettier/recommended", // Kích hoạt Prettier như một plugin ESLint
    ],
  },
];
