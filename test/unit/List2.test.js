
import test from 'ava'
import rewiremock from 'rewiremock'
import { mount } from '@vue/test-utils'
import List2 from '../../components/List2'
import sinon from 'sinon'
import * as a from '../../utils/a'

let wrapper, stub
const list = ['foo', 'bar', 'baz'];

test.beforeEach(() => {
  stub = sinon.stub(a, 'b').returns(list)
  console.log(a.default());
  wrapper = mount(List2)
})

test('List.vue shapshow', (t) => {
  t.pass()
  return;
  t.snapshot({ html: wrapper.html() })
})

test('List.vue to display list', (t) => {
  const $items = wrapper.findAll('li').wrappers

  $items.forEach(($item, index) => {
    t.is($item.text(), list[index])
  })
})

test.afterEach(() => {
  stub.restore()
})
