const assert = require('assert');
const AulaTDD = require('../aulaTDD.Js')

describe('Acessar os metodos da classe aulaTDD.', function() {
    it('Soma de 2 numeros.', function(done){
        const Aula = new AulaTDD();

        Aula.Somar(3, 5, value => {
            assert.equal(value, 8);
            done()
        })

        // assert.equal(math.Somar(3,5), 8);
        // done();
    });
});