## Пример как задать таймера в реакте 

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    // do smth function  ---> setEndTime(getEndTime(lastMintTime));
  }, 1000);
    
  return () => clearInterval(interval);
}, [lastMintTime]);
```