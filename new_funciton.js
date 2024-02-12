let f = new Function('a', 'b', 'console.log(a+b)');
let foo = new Function('a,b,c', 'console.log(a-b+c)');

f(2,3);
foo(2,3,1)