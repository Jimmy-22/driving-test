import 'egg';

declare module 'egg' {
  // 请求函数封装的参数
  interface IHttpGetParams {
    url: string
    data: any
    success: (data: any) => void
    fail: (err: any) => void
  }

  // 请求体中的参数
  interface IHttpPostData {
    subject: SUBJECTS
    model: MODELS
    testType?: TEST_TYPES
  }

  const enum SUBJECTS {
    s1 = 1, 
    s4 = 4
  }

  const enum MODELS {
    c1 = 'c1',
    c2 = 'c2',
    a1 = 'a1',
    a2 = 'a2',
    b1 = 'b1',
    b2 = 'b2'
  }

  const enum TEST_TYPES {
    rand = 'rand', 
    order = 'order'
  }
}