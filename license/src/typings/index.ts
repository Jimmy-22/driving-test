enum SUBJECTS {
  s1 = 1, 
  s4 = 4
}

enum MODELS {
  c1 = 'c1',
  c2 = 'c2',
  a1 = 'a1',
  a2 = 'a2',
  b1 = 'b1',
  b2 = 'b2'
}

interface IHttpPostData {
  subject: SUBJECTS,
  model?: MODELS
}

export {
  SUBJECTS,
  MODELS
}

export type {
  IHttpPostData
}