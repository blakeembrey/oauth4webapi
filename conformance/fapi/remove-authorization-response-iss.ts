import { test, red, modules } from '../runner.js'

for (const module of modules('remove-authorization-response-iss')) {
  test.serial(red, module, '"iss" issuer parameter expected')
}
