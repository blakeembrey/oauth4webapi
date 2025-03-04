import { test, red, modules } from '../runner.js'

for (const module of modules('invalid-expired-exp')) {
  test.serial(
    red,
    module,
    'JWT "exp" (expiration time) timestamp is <= now()',
    'OperationProcessingError',
  )
}
