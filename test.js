import test from 'ava';
import { smartMap, smartMapify } from './';


test('smartMap', t => {

  function fn(a) {
    return a.name;
  }

  t.is(smartMap(fn, null), null);
  t.is(smartMap(fn, undefined), undefined);
  t.is(smartMap(fn, { name: 'a' }), 'a');
  t.same(smartMap(fn, [{ name: 'a' }, { name: 'b' }]), ['a', 'b']);
  t.same(smartMap(n => n + 2, 0), 2);
  t.same(smartMap(n => n + 2, 6), 8);
  t.same(smartMap(n => n + 2, [1, 2]), [3, 4]);

});


test('smartMapify', t => {

  const smartFn = smartMapify(a => {
    return a.name;
  });

  t.is(smartFn(null), null);
  t.is(smartFn(undefined), undefined);
  t.is(smartFn({ name: 'a' }), 'a');
  t.same(smartFn([{ name: 'a' }, { name: 'b' }]), ['a', 'b']);

});
