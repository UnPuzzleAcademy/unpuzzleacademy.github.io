import {modules} from './modules';
export function calculateLevel(m){
    let total = 0;
    m.forEach(item=>{
        total += modules[item][level];
    });
    return Math.round(total/m.length);

}
export let courses = [
    {
        courseId:1,
        courseTitle:"Getting Started with Javascript",
        courseDescription:"",
        modules:[1,2],
        prerequisites:"",
        logo:"",
    }
]