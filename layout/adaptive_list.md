#Пример адаптивного списка элементов

```typescript
  <div class="container"> 
    <div>element</div>
    <div>element</div>
    {....}
  </div>
```

```css 
  .container {
     display: flex;
     align-items:center;
     justify-content: center;
     flex-wrap: wrap;
     flex-direction: row;
     margin: 0 -10px;
  
     & > * {
      margin: 10px;
     }
  }
```
