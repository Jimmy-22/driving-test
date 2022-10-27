// 科目类型
enum SUBJECTS {
  s1 = 1, 
  s4 = 4
}

// 驾照类型
enum MODELS {
  c1 = 'c1',
  c2 = 'c2',
  a1 = 'a1',
  a2 = 'a2',
  b1 = 'b1',
  b2 = 'b2'
}

// 请求参数
interface IHttpPostData {
  subject: SUBJECTS,
  model?: MODELS
}

// store state
interface IState {
  queryList: IQueryData[]
  userAnswers: IUserAnswers[]
  currentSubject: SUBJECTS
  currentModel: MODELS
  modelShow: boolean
  total: number
}

interface IUserAnswers {
  qid: string
  question: string
  url: string
  explain: string
  userAnswer: string
  rightAnswer: string
  isRight: boolean
}

interface IQueryData {
  id: string
  question: string
  answer: string
  item1: string
  item2: string
  item3: string
  item4: string
  explains: string
  url: string
}  

export {
  SUBJECTS,
  MODELS
}

export type {
  IQueryData,
  IUserAnswers,
  IHttpPostData,
  IState
}