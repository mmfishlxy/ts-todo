import { SET_INPUT_CONTENT, EDIT_ITEMS, CHANGED_FINISHED, CHANGED_UNFINISHED, CANCEL_TASK, RESTORE_TASK, DELETE_TODO } from './mutation-types'
export default {
    setInputContent: (context: any,val: any): void => context.commit(SET_INPUT_CONTENT,val),
    editItems: (context: any): void => context.commit(EDIT_ITEMS),
    changedFinished: (context: any, item1: any): void => context.commit(CHANGED_FINISHED, item1),
    changedUnfinished: (context: any, item2: any): void => context.commit(CHANGED_UNFINISHED, item2),
    cancelTask: (context: any, item1: any): void => context.commit(CANCEL_TASK, item1),
    restoreTask: (context: any, item3: any): void => context.commit(RESTORE_TASK, item3),
    deleteTodo: (context: any, index2: any): void => context.commit(DELETE_TODO, index2)
}
