import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import path from 'path';

//data.jsonの読み込み
import navData from "./src/data/navData.json";
import courseTabs from "./src/data/tabs.json";
import priceTables from "./src/data/priceTables.json";
import pricePlans from "./src/data/pricePlans.json";
import voices from "./src/data/voices.json";

export default defineConfig({
    // 開発時のルートディレクトリ
    root: 'src',

    // 相対パス出力の設定
    base: './',

    plugins: [
        handlebars({
            partialDirectory: path.resolve(process.cwd(), 'src/partials'),
            context: {
                navData,
                ctaData: {
                    url: "/contact/",
                    label: "無料相談"
                },
                footerLinks: [
                    { url: "/", label: "トップ" },
                    { url: "/about/", label: "会社概要" },
                    { url: "/privacy/", label: "プライバシーポリシー" }
                ],
                courseTabs,
                priceTables,
                pricePlans,
                voices
            }
        })
    ],

    build: {
        outDir: '../dist',      // 出力先
        emptyOutDir: true,
        assetsDir: 'assets',    // アセットの格納ディレクトリ
        minify: process.env.NODE_ENV === "production",  // minifyをコマンドで分岐
        sourcemap: false        // ソースマップなし
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },

    server: {
        open: true,
        port: 5173,
        watch: {
            usePolling: true,
        },
    }
});
