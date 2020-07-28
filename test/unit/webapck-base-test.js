const assert = require('assert')
describe('webpack.base.js test case', () => {

    const baseConfig = require('../../lib/webpack.base.js');
    console.log(baseConfig)
    it('entry', ()=> {
        assert.equal(baseConfig.entry.index.indexOf('builder-webpack-0728/test/smoke/template/src/index/index.js') > -1, true);
        assert.equal(baseConfig.entry.search.indexOf('builder-webpack-0728/test/smoke/template/src/search/index.js') > -1, true);
    })
    it('output', ()=> {
        assert.equal(baseConfig.output.path.indexOf('builder-webpack-0728/test/smoke/template/dist') > -1, true);
    })
})