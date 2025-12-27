import Test from './mdx/test.mdx';
import Test1 from './mdx/test1.mdx';
export let modules = {
    '1':{
        title:'Module 1',
        units:{
            '1':{
                'title':'A long title for Unit 1',
                'Unit':Test,
            },
            '2':{
                'title':'A long title for Unit 2',
                'Unit':Test1
            }
        }
    },
    '2':{
        title:'Module 2',
        units:{
            '1':{
                'title':'A long title for Unit 1',
                'Unit':Test,
            },
            '2':{
                'title':'A long title for Unit 2',
                'Unit':Test1
            }
        }
    }
}