import { calcularPlr } from '../source/calcularPlr.js'
import assert from 'node:assert' //comando que puxa o assert direto do node

// describe define o que é uma suíte de teste
describe('Teste de Calcular PLR', function() {
  it('Cenário 1: Calcular se senior', function() {
    let resultado = calcularPlr('senior', 10000)
    assert.equal(resultado, 20000)
  })
  it('Cenário 2: Calcular se pleno', function() {
    let resultado = calcularPlr('pleno', 6000)
    assert.equal(resultado, 6000)
  })
  it('Cenário 3: Calcular se junior', function() {
    let resultado = calcularPlr('junior', 3000)
    assert.equal(resultado, 3000)
  })
})

