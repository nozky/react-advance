import React from 'react'
import UseStateBasics from './tutorial/1-useState/setup/2-useState-basics'
import UseStateArray from './tutorial/1-useState/setup/3-useState-array'
import UseStateObject from './tutorial/1-useState/setup/4-useState-object'
import UseStateCounter from './tutorial/1-useState/setup/5-useState-counter'
import UseEffectBasics from './tutorial/2-useEffect/setup/1-useEffect-basics'
import UseEffectCleanup from './tutorial/2-useEffect/setup/2-useEffect-cleanup'
import UseEffectFetchData from './tutorial/2-useEffect/setup/3-useEffect-fetch-data'
import MultipleReturns from './tutorial/3-conditional-rendering/setup/1-multiple-returns'
import ShortCircuit from './tutorial/3-conditional-rendering/setup/2-short-circuit'
import ShowHide from './tutorial/3-conditional-rendering/setup/3-show-hide'
import ControlledInputs from './tutorial/4-forms/setup/1-controlled-inputs'
import ControlledInputs2 from './tutorial/4-forms/setup/2-multiple-inputs'
import UseRefBasics from './tutorial/5-useRef/setup/1-useRef-basics'
import Index from './tutorial/6-useReducer/setup/index'
import PropDrilling from './tutorial/7-prop-drilling/setup/1-prop-drilling'
import FetchExample from './tutorial/9-custom-hooks/setup/1-fetch-example'
import ContextAPI from './tutorial/8-useContext/setup/1-context-api'
import PropType from './tutorial/10-prop-types/setup/index'
import ReactRouterDom from './tutorial/11-react-router/setup/'
import IndexMemo from './tutorial/12-memo-useMemo-useCallback/setup'

function App() {
  return (
    <React.Fragment>
      <div className='container'>
       <h2>Advanced Tutorial</h2>
     </div>

      {/* <div className="container">
        <UseStateBasics />
      </div>

      <div className="container">
        <UseStateArray />
      </div>

      <div className="container">
        <UseStateObject />
      </div>

      <div className="container">
        <UseStateCounter />
      </div>

      <div className="container">
        <UseEffectBasics />
      </div>

      <div className="container">
        <UseEffectCleanup />
      </div>

      <div className="container">
        <UseEffectFetchData />
      </div>

      <div className="container">
        <MultipleReturns />
      </div>

      <div className="container">
        <ShortCircuit />
      </div>

      <div className="container">
        <ShowHide />
      </div>

      <div className="container">
        <ControlledInputs />
      </div>

      <div className="container">
        <ControlledInputs2 />
      </div>

      <div className="container">
        <UseRefBasics />
      </div>

      <div className="container">
        <Index />
      </div>
      <div className="container">
        <PropDrilling />
      </div>
      <div className="container">
        <FetchExample />
      </div>
      <div className="container">
        <ContextAPI />
      </div>
      <div className="container">
        <PropType />
      </div>
      <div className="container">
        <ReactRouterDom />
      </div> */}
      <div className="container">
        <IndexMemo />
      </div>
      
    </React.Fragment>
  )
}

export default App
