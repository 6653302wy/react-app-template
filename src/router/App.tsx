import { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from '../screen/about';
import { Contact } from '../screen/contact';
import { Index } from '../screen/index';

export enum RouterType {
  /** 首页 */
  INDEX = '/index',
  /** 关于页 */
  ABOUT = '/about',
  /** 联系页 */
  CONTACT = '/contact',
}

export const Routers: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path={RouterType.ABOUT} element={<About />}></Route>
        <Route path={RouterType.CONTACT} element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
