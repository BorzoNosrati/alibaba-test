# Development Documention

This is a documention for help developers following the codes!

## Get Started
Go To [index.md](./index.md)

 <link rel="stylesheet" href="card.css" /> 



<div class="code-title" style=" background-color: #aaa;
    height:50px;
    margin-bottom:-0px;
    z-index:-1;
    position:sticky;
    top:0;">
  index.tsx
</div>

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
