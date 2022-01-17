setTimeout(() => {
    // 代码
    throw Error(123123);
})

process.on('uncaughtException', err => {
    // 异常处理
})