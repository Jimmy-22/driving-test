import { MODELS, SUBJECTS, IState } from "../typings";

export default {
  // 后端返回的数据
  queryList: [],
  userAnswers: [],
  currentSubject: SUBJECTS.s1,
  currentModel: MODELS.c1,
  // model组件是否显示
  modelShow: true,
  total: 5
} as IState
