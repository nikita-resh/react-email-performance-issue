import { render } from '@react-email/render';

import MyTemplate from './email';

export const handler = async (event?: any, context?: any) => {
  console.time('EXECUTION');
  const html = render(MyTemplate(), { pretty: false });
  console.timeEnd('EXECUTION');

  console.log(html.substring(0, 20));

  return 'success';
};

handler();
