import { IQueryData, IUserAnswer } from '../typings'

// 生产一个userAnswer
function formatUserAnswer(queryList: IQueryData[], id: string, anwser: string): IUserAnswer {
  let userAnswer: IUserAnswer = {
    qid: '0',
    question: '',
    url: '',
    explains: '',
    userAnswer: '',
    rightAnswer: '',
    isRight: false,
  }

  // 用any是因为ts本身不支持字符串拼接的属性类型推导
  queryList.map((item: any) => {
    if (item.id === id) {
      userAnswer.qid = item.id
      userAnswer.question = item.question
      userAnswer.url = item.url
      userAnswer.explains = item.explains
      userAnswer.userAnswer = item[`item${anwser}`]
      userAnswer.rightAnswer = item[`item${item.answer}`]
      userAnswer.isRight = item.answer === anwser
    }

    return item
  })

  return userAnswer
}

export { formatUserAnswer }
