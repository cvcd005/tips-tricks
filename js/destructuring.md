### Вложенная деструктуризация

```javascript 
const obj = {
  'title':'BAZINGAAAAAAAAAAAAAAAAAA!!!!!!',
  'parametrs' : {
    'width':'100px',
    'height':'100px'
  },
  'children': ['a', 'v', [1]]
}

const { title:mainTitle } = obj;
const { parametrs: { width, height }} = obj;
const { children: [,,[last]] } = obj;


console.log(mainTitle); // 'BAZINGAAAAAAAAAAAAAAAAAA!!!!!!'
console.log(width,height); // '100px' '100px'
console.log(last); // 1
```