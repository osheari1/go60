// tests/page.js PAGE EXPR: load the Reach module from a generated Trainer page, with no browser,
// and print EXPR's value as JSON. In scope: Reach, Drill, layout (the page's Layout, given to Reach.board), keys (its key positions).
'use strict';
const fs = require('fs');
const vm = require('vm');

const [page, expr] = process.argv.slice(2);
const html = fs.readFileSync(page, 'utf8');
const script = id => {
  const m = html.match(new RegExp(`<script id="${id}"[^>]*>([\\s\\S]*?)</script>`));
  if (!m) throw new Error(`page has no script #${id}`);
  return m[1];
};

const ctx = vm.createContext({});
vm.runInContext(script('reach'), ctx);
vm.runInContext(script('drill'), ctx);
ctx.layout = JSON.parse(script('data-layout'));
ctx.keys = JSON.parse(script('data-keys'));
ctx.Reach.board(ctx.layout, ctx.keys);
console.log(JSON.stringify(vm.runInContext(expr, ctx)));
