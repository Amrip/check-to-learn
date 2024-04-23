if (!/pnpm/.test(process.env.npm_execpath || '')) { // 指定pnpm包管理工具
    console.warn(
        `\u001b[33mThis repository must using pnpm as the package manager ` +
        ` for scripts to work properly.\u001b[39m\n`,
    )
    process.exit(1)
}