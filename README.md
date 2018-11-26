# @beanutils/webstorage
Extension localstorage and sessionstorage.

## Install
```
npm install --save @beanutils/webstorage
```

## Usage
LocalStorage 和 SessionStorage 方法封装
```
import { setLocal, getLocal } from '@beanutils/webstorage';
setLocal('key', value);
getLocal('key);
```
```
// 将value设置到localStorage
export function setLocal(name, value) 
// 从localStorage获取value
export function getLocal(name) 
// 将value设置到sessionStorage
export function setSession(name, value) 
// 从sessionStorage获取value
export function getSession(name) 
// 删除sessionStorage中name对应的value值, name为空则删除全部.
export function removeSession(name) 
// 删除localStorage中name对应的value值, name为空则删除全部.
export function removeLocal(name) 
```
