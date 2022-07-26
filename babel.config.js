module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDrectory: 'es',
            style: true
        }, 'vant']
    ]
}