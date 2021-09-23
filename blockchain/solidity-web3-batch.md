## Выполнение нескольких одновременных запросов к методам контракта

```typescript
/*
  Функция принимает массив запросов к методам контракта
  Возвращает массив промисов
 
  Пример:
  const requests = [
   contract.method.balanceOf().call,
   contract.method.getStaked().call
  ]

  const result = await makeBatchRequest(request);

  *web3 получаем либо из import { getWeb3NoAccount } from "./web3"; 
  or 
  import Web3 from "web3";
  // URL от ноды или infura
  const PROVIDER_URL = "https://...";
  export const web3 = new Web3(Web3.givenProvider || PROVIDER_URL);
*/

const makeBatchRequest = (calls: any[]) => {
  try {
    const web3 = getWeb3NoAccount();
    const batch = new web3.BatchRequest();

    const promises = calls.map((call) => {
      return new Promise((resolve, reject) => {
        batch.add(
          call.request({}, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          })
        );
      });
    });

    batch.execute();

    return Promise.all(promises);
  } catch {
    return null;
  }
};

export default makeBatchRequest;
```
