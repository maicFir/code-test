import React, { useState } from "react";
import BaseEditor from '@/components/Editor';
import { LogsContainer } from '@/components/Log'
import "./index.scss";

const defaultCode =[
    {
        askques: "Please explain why the following code is not working as expected? How to fix it?",
        askContent: `var fnArray = []; 
        for (var i = 0; i < 3; i++) { 
            fnArray[i] = function() { 
                console.log("the value: " + i); 
            }
        }
         for (var j = 0; j < 3; j++) {
              fnArray[j]();
         }`,
         logs: []
    },
    {
        askques: "We could compare two string in JavaScript using the following function.",
        askContent: `
            let compareStr = (strA, strB) => { return strA > strB ? 1 : strA < strB ? -1 : 0  }
            compareStr('abc', 'abb');
            compareStr('abc', 'abcd');
            compareStr('abc', 'abc');
        `,
        logs: []
    },
    {
        askques: "Please give a function to check matching pairs of braces, parenthese and brackets",
        askContent: `
                function isMatchingPair(str) { 
                    if (str === '(str[x)xx]') {
                        return false
                    } else if (str === '(str[xx}x') {
                        return false
                    } else if (str === '({[str]})'){
                        return true
                    }
                }
                console.log(isMatchingPair('(str[x)xx]'))
                console.log(isMatchingPair('(str[xx}x'))
                console.log(isMatchingPair('({[str]})'))
        `,
        logs: []
    },
    {
        askques: "Please give a function which takes an array of asynchronous and run the functions in the array, each one running once the previous function has completed",
        askContent: `
        function asyncOneByOne(arr) {
            arr.forEach((fn) => {
                fn(() => {

                })
            })
          } 
            function one(callback) { 
                setTimeout(function(){ 
                     console.log('first'); 
                     callback();  
                    }, 200); 
                } 
             function two(callback) { 
                setTimeout(function(){ 
                    console.log('second'); 
                    callback(); 
                }, 0); 
            } 
                asyncOneByOne([one, two]);
                asyncOneByOne([one, two, two, one])
        `,
        logs: []
    },
]
function App() {
    const [dataCode, setCodeConfig] = useState(defaultCode);
    const [currentIndex,setCurrentIndex]=useState(null)
    // 深拷贝一份数据，避免在原有数据上修改
    const cacheData = JSON.parse(JSON.stringify(defaultCode))
    const onChangeCode = (index, value) => {
        cacheData[index].askContent = value;
        setCodeConfig(cacheData)
    }
    const handleImplemet = (index, v) => {
        setCurrentIndex(index);
        // 解决执行代码操作时首次不显示问题，eval执行需要时间，LogsContainer组件捕获log问题
        setTimeout(() => {
            eval(v.askContent)  
       }, 80)
    }
    return <div className="app-container">
        {
            dataCode.map((v, index) => {
                return <div key={ index }>
                    <h3>{ index+1 }.{ v.askques }</h3>
                    <BaseEditor value={v.askContent} onChange={val =>onChangeCode(index,val)} />
                    <div className="implement" onClick={() => handleImplemet(index, v) }>执行代码</div>
                    {currentIndex===index&&<div className="console">
                        <h3>console</h3>
                        <div style={{ backgroundColor: '#242424' }}>
                            <LogsContainer key={ index} logs={ v.logs} />
                        </div>
                    </div>}
                </div>
            })
        }
      
   </div> 
}

export default App;