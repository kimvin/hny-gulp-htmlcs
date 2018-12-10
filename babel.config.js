module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: ['Chrome >= 49', 'Firefox >= 45', 'Safari >= 10', 'Edge >= 13', 'iOS >= 10', 'Electron >= 0.36']
            }
        ]
    ]
};
