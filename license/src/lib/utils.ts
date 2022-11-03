import { IQueryData, IUserAnswer } from '../typings'

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
