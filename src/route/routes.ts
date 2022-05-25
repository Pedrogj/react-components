import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Routes {
  lazy: string;
  lazy2: string;
  lazy3: string;
  notFound: string;
  ComponentLazy: LazyExoticComponent<JSXComponent> | JSXComponent;
  ComponentLazy2: LazyExoticComponent<JSXComponent> | JSXComponent;
  ComponentLazy3: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const Lazy = lazy(
  () =>
    import(
      /*webpackChunkName: "LazyPage"*/ "../component-patterns/pages/ShoppingPage"
    )
);
const Lazy2 = lazy(
  () => import(/*webpackChunkName: "LazyPage2"*/ "../lazyload/pages/LazyPage2")
);
const Lazy3 = lazy(
  () => import(/*webpackChunkName: "LazyPage3"*/ "../lazyload/pages/LazyPage3")
);

export const routes: Routes = {
  lazy: "/shopping",
  lazy2: "/about",
  lazy3: "/users",
  notFound: "/*",
  ComponentLazy: Lazy,
  ComponentLazy2: Lazy2,
  ComponentLazy3: Lazy3,
};
