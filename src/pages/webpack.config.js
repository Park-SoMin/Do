const path = require("path");

module.exports = {
  entry: "./src/index.js", // 진입점 설정
  output: {
    path: path.resolve(__dirname, "dist"), // 번들된 파일의 출력 경로
    filename: "bundle.js", // 번들된 파일의 이름
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images", // 이미지 파일의 출력 경로
            },
          },
        ],
      },
    ],
  },
};
