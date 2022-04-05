import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { decrementCounterAction, incrementCounterAction } from './redux/actions'

// mapStateToProps is a function
// mapStateToProps RETURNS AN OBJECT
// mapStateToProps receives an argument from the redux store, the store object
// every property of the object you return out of it, will become a PROP for your component
const mapStateToProps = (state) => ({
  countFromRedux: state.count,
})
// this implementation of mapStateToProps returns EVERY part of the redux store
// as a prop for your component, pretty implicit, not ideal imho
// const mapStateToProps = (state) => state

// more verbose syntax
// const mapStateToProps = () => {
//   return {

//   }
// }

// mapDispatchToProps is a function
// mapDispatchToProps RETURNS AN OBJECT
// mapDispatchToProps receives an argument from the redux store, the dispatch function
// every key of the object you're returning out of mapDispatchToProps is going to
// become a prop for the App component
// typically you're going to write METHODS as keys of thie object, and when invoked
// these methods will trigger the dispatch function
const mapDispatchToProps = (dispatch) => ({
  incrementCounter: () => {
    dispatch(incrementCounterAction())
    // incrementCounterAction() returns the action itself
  },
  decrementCounter: () => {
    dispatch(decrementCounterAction())
  },
})

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="success" onClick={props.incrementCounter}>
          +
        </Button>
        <div>{props.countFromRedux}</div>
        <Button variant="danger" onClick={props.decrementCounter}>
          -
        </Button>
      </header>
    </div>
  )
}

// if you want App to be aware of the redux store, use the connect
// function on its export statement
export default connect(mapStateToProps, mapDispatchToProps)(App)
// connect creates a HOC (Higher Order Component) out of App

// if we want to interact with the Redux Store from the App component,
// we need to connect it!

// mapStateToProps <-- takes care of providing READ access to the redux store
// mapDispatchToProps <-- takes care of providing WRITE access to the redux store
