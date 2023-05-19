
# Create Router Browser

In this section we're going to create router

## Add `react-router-dom` package

For routing in this app we are going to use [*react-router-dom*](https://www.npmjs.com/package/react-router-dom)

```console
$ npm install --save react-router-dom
```

## Create Router

Create router using `createRouterBrowser()`

```jsx
import {  createBrowserRouter } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import CounteryDetail from './pages/CounteryDetail';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'detail/:id',
        element: <CounteryDetail />
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  }
]);

```
Then use **`router`** in **`RouterProvider`** that used in **`ReactDom`**


```jsx
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```
