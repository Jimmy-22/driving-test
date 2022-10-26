import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // 请求驾照考题API对应的路由
  router.post('/api/query', controller.api.getQueries);
};
