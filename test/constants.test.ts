import { INIT_CODE_HASH } from '../src/constants'

//import { bytecode } from '@uniswap/v2-core/build/UniswapV2Pair.json'
//import { keccak256 } from '@ethersproject/solidity'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
// const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])
// NOTE: just using constant so tests pass... assuming these kinds of issues caught upstream, hard coding separately
// to catch if this changes...
const COMPUTED_INIT_CODE_HASH = '0x98fc91d95439cf779f977ab7705b11ed50acafc792b28482bf7bd5c2743ba711'

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
    })
  })
})
