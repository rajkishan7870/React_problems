import {atom} from 'recoil';

const taskListAtom = atom({
    key : 'taskatom',
    default : []
})

const color = atom({
    key : "color",
    default : false
});

export {taskListAtom, color};