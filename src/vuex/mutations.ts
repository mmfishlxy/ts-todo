import { SET_INPUT_CONTENT, EDIT_ITEMS, CHANGED_FINISHED, CHANGED_UNFINISHED, CANCEL_TASK, RESTORE_TASK, DELETE_TODO } from './mutation-types'
export default{
    // 与输入值绑定
    [SET_INPUT_CONTENT](state: any, val: any): void {
        state.input_content = val
    },
    // 添加todo
    [EDIT_ITEMS](state: any): void{
        state.items.push({ id: state.count++, content: state.input_content, checked: false, ishasFinished: false, type: 1  })
        state.input_content = ''
    },
    // 未完成 -> 完成
    [CHANGED_FINISHED](state: any, item1: any): void{
        item1.type = 2;
        for(var i=0; i<state.items.length; i++){
            if(item1.id == state.items[i].id){
                state.items.splice( i, 1 )
            }
        }
        state.finishedItems.push(item1)
    },
    // 完成 -> 未完成
    [CHANGED_UNFINISHED](state: any, item2: any): void{
        item2.type = 1;
        for(var j=0; j<state.finishedItems.length; j++){
            if(item2.id == state.finishedItems[j].id){
                state.finishedItems.splice( j, 1 )
            }
        }
        state.items.push(item2)
    },
    // 未完成 -> 取消
    [CANCEL_TASK](state: object, item1: object): void{
        item1.ishasFinished = true;
        item1.type = 3;
        for(var m=0; m<state.items.length; m++){
            if(item1.id == state.items[m].id){
                state.items.splice( m, 1 )
            }
        }
        state.cancelItems.push(item1)
    },
    // 取消 -> 未完成
    [RESTORE_TASK](state: any, item3: any): void{
        item3.ishasFinished = false;
        item3.type = 1;
        for(var n=0; n<state.cancelItems.length; n++){
            if(item3.id == state.cancelItems[n].id){
                state.cancelItems.splice( n, 1 )
            }
        }
        state.items.push(item3)
    },
    // 删除所点击的todo
    [DELETE_TODO](state: any, index2: any): void{
        state.finishedItems.splice( index2, 1 )
    }
}